"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import type {
  ForwardedRef,
  KeyboardEvent as ReactKeyboardEvent,
  PointerEvent as ReactPointerEvent,
} from "react";
import {
  CHAIR_FRAME_COUNT,
  COLORS,
  type ChairColorSlug,
} from "@/lib/chair";

type SpinViewerProps = {
  color: ChairColorSlug;
  onColorChange: (color: ChairColorSlug) => void;
};

export type SpinViewerHandle = {
  selectColor: (color: ChairColorSlug) => void;
};

type DragState = {
  pointerId: number;
  startX: number;
  startFrame: number;
};

type IdleDeadlineLike = {
  didTimeout: boolean;
  timeRemaining: () => number;
};

type IdleBrowserWindow = Window & {
  requestIdleCallback?: (
    callback: (deadline: IdleDeadlineLike) => void,
    options?: { timeout: number },
  ) => number;
  cancelIdleCallback?: (handle: number) => void;
};

const frameUrl = (color: ChairColorSlug, frame: number) =>
  `/chair/${color}/${String(frame).padStart(2, "0")}.webp`;

const frameKey = (color: ChairColorSlug, frame: number) =>
  `${color}:${frame}`;

const modulo = (value: number, divisor: number) =>
  ((value % divisor) + divisor) % divisor;

function scheduleIdle(callback: () => void): () => void {
  const idleWindow = window as IdleBrowserWindow;

  if (idleWindow.requestIdleCallback && idleWindow.cancelIdleCallback) {
    const handle = idleWindow.requestIdleCallback(() => callback(), {
      timeout: 1000,
    });
    return () => idleWindow.cancelIdleCallback?.(handle);
  }

  const handle = window.setTimeout(callback, 50);
  return () => window.clearTimeout(handle);
}

function SpinViewer(
  { color, onColorChange }: SpinViewerProps,
  ref: ForwardedRef<SpinViewerHandle>,
) {
  const [frame, setFrame] = useState(0);
  const frameRef = useRef(0);
  const colorRef = useRef(color);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const imageCacheRef = useRef(new Map<string, HTMLImageElement>());
  const imageLoadsRef = useRef(
    new Map<string, Promise<HTMLImageElement>>(),
  );
  const dragRef = useRef<DragState | null>(null);
  const drawRef = useRef<() => void>(() => {});
  const stopRotationRef = useRef<() => void>(() => {});
  const rotationFrameRef = useRef(0);
  const rotationStepsRef = useRef(0);
  const userInteractedRef = useRef(false);
  const colorRequestRef = useRef(0);
  const pendingColorRef = useRef<ChairColorSlug | null>(null);
  const stopBackgroundRef = useRef<() => void>(() => {});

  colorRef.current = color;

  const updateFrame = useCallback((nextFrame: number) => {
    const normalizedFrame = modulo(nextFrame, CHAIR_FRAME_COUNT);
    frameRef.current = normalizedFrame;
    setFrame(normalizedFrame);
  }, []);

  const reportImageError = useCallback((source: string, error: unknown) => {
    console.error(`Unable to load chair frame ${source}`, error);
    if (statusRef.current) {
      statusRef.current.textContent =
        "The chair view could not be loaded. Please refresh to try again.";
    }
  }, []);

  const loadFrame = useCallback(
    (colorSlug: ChairColorSlug, frameNumber: number) => {
      const key = frameKey(colorSlug, frameNumber);
      const cached = imageCacheRef.current.get(key);
      if (cached) return Promise.resolve(cached);

      const existingLoad = imageLoadsRef.current.get(key);
      if (existingLoad) return existingLoad;

      const source = frameUrl(colorSlug, frameNumber);
      const image = new window.Image();
      image.decoding = "async";

      const load = new Promise<HTMLImageElement>((resolve, reject) => {
        image.onload = () => {
          image.decode().then(() => resolve(image), reject);
        };
        image.onerror = () => reject(new Error(`Image request failed: ${source}`));
        image.src = source;
      }).then(
        (loadedImage) => {
          imageCacheRef.current.set(key, loadedImage);
          imageLoadsRef.current.delete(key);
          if (statusRef.current) statusRef.current.textContent = "";
          drawRef.current();
          return loadedImage;
        },
        (error: unknown) => {
          imageLoadsRef.current.delete(key);
          throw error;
        },
      );

      imageLoadsRef.current.set(key, load);
      return load;
    },
    [],
  );

  const startBackgroundLoading = useCallback(
    (colorSlug: ChairColorSlug) => {
      stopBackgroundRef.current();
      let cancelled = false;
      let nextFrame = 0;
      let cancelScheduled = () => {};

      const stop = () => {
        cancelled = true;
        cancelScheduled();
      };
      stopBackgroundRef.current = stop;

      const scheduleNext = () => {
        if (cancelled) return;
        while (
          nextFrame < CHAIR_FRAME_COUNT &&
          imageCacheRef.current.has(frameKey(colorSlug, nextFrame))
        ) {
          nextFrame += 1;
        }
        if (nextFrame >= CHAIR_FRAME_COUNT) return;

        const frameToLoad = nextFrame;
        nextFrame += 1;
        cancelScheduled = scheduleIdle(() => {
          if (cancelled) return;
          void loadFrame(colorSlug, frameToLoad).then(
            scheduleNext,
            (error: unknown) => {
              reportImageError(frameUrl(colorSlug, frameToLoad), error);
              scheduleNext();
            },
          );
        });
      };

      scheduleNext();
    },
    [loadFrame, reportImageError],
  );

  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) {
      reportImageError("canvas", new Error("A 2D canvas context is unavailable."));
      return;
    }

    let image = imageCacheRef.current.get(
      frameKey(colorRef.current, frameRef.current),
    );

    if (!image) {
      for (let distance = 1; distance < CHAIR_FRAME_COUNT; distance += 1) {
        const forward = modulo(frameRef.current + distance, CHAIR_FRAME_COUNT);
        const backward = modulo(frameRef.current - distance, CHAIR_FRAME_COUNT);
        image =
          imageCacheRef.current.get(frameKey(colorRef.current, forward)) ??
          imageCacheRef.current.get(frameKey(colorRef.current, backward));
        if (image) break;
      }
    }

    if (!image) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
    const scale = Math.min(
      canvas.width / image.naturalWidth,
      canvas.height / image.naturalHeight,
    );
    const width = image.naturalWidth * scale;
    const height = image.naturalHeight * scale;
    context.drawImage(
      image,
      (canvas.width - width) / 2,
      (canvas.height - height) / 2,
      width,
      height,
    );
  }, [reportImageError]);

  drawRef.current = drawCanvas;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = Math.round(bounds.width * pixelRatio);
      canvas.height = Math.round(bounds.height * pixelRatio);
      drawRef.current();
    };
    const observer = new ResizeObserver(resizeCanvas);
    observer.observe(canvas);
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    drawRef.current();
  }, [frame, color]);

  useEffect(() => {
    let cancelled = false;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const stopRotation = () => {
      userInteractedRef.current = true;
      window.cancelAnimationFrame(rotationFrameRef.current);
    };
    stopRotationRef.current = stopRotation;

    const onTouchStart = (event: PointerEvent) => {
      if (event.pointerType === "touch") stopRotation();
    };
    document.addEventListener("pointerdown", onTouchStart);

    const startRotation = () => {
      if (reducedMotion || userInteractedRef.current || cancelled) return;
      let previousTime = 0;
      let elapsed = 0;
      rotationStepsRef.current = 0;

      const rotate = (time: number) => {
        if (cancelled || userInteractedRef.current) return;
        if (previousTime) elapsed += time - previousTime;
        previousTime = time;

        if (elapsed >= 500) {
          elapsed %= 500;
          const nextFrame = modulo(
            frameRef.current + 1,
            CHAIR_FRAME_COUNT,
          );
          updateFrame(nextFrame);
          void loadFrame(colorRef.current, nextFrame).catch((error: unknown) =>
            reportImageError(frameUrl(colorRef.current, nextFrame), error),
          );
          rotationStepsRef.current += 1;
          if (rotationStepsRef.current >= CHAIR_FRAME_COUNT) return;
        }

        rotationFrameRef.current = window.requestAnimationFrame(rotate);
      };

      rotationFrameRef.current = window.requestAnimationFrame(rotate);
    };

    const defaultColor = COLORS[0].slug;
    void loadFrame(defaultColor, 0).then(
      () => {
        startBackgroundLoading(defaultColor);
        startRotation();
      },
      (error: unknown) => {
        reportImageError(frameUrl(defaultColor, 0), error);
      },
    );

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(rotationFrameRef.current);
      document.removeEventListener("pointerdown", onTouchStart);
      stopBackgroundRef.current();
    };
  }, [
    loadFrame,
    reportImageError,
    startBackgroundLoading,
    updateFrame,
  ]);

  const changeColor = useCallback(
    async (nextColor: ChairColorSlug) => {
      if (nextColor === colorRef.current) {
        if (pendingColorRef.current) {
          colorRequestRef.current += 1;
          pendingColorRef.current = null;
        }
        return;
      }
      const requestId = ++colorRequestRef.current;
      pendingColorRef.current = nextColor;
      stopRotationRef.current();
      stopBackgroundRef.current();

      try {
        let frameToShow: number;
        do {
          frameToShow = frameRef.current;
          await loadFrame(nextColor, frameToShow);
        } while (
          requestId === colorRequestRef.current &&
          frameToShow !== frameRef.current
        );

        if (requestId !== colorRequestRef.current) return;
        pendingColorRef.current = null;
        onColorChange(nextColor);
        startBackgroundLoading(nextColor);
      } catch (error) {
        if (requestId === colorRequestRef.current) {
          pendingColorRef.current = null;
        }
        reportImageError(frameUrl(nextColor, frameRef.current), error);
      }
    },
    [loadFrame, onColorChange, reportImageError, startBackgroundLoading],
  );

  useImperativeHandle(ref, () => ({ selectColor: changeColor }), [changeColor]);

  const requestFrame = (
    colorSlug: ChairColorSlug,
    frameNumber: number,
  ) => {
    void loadFrame(colorSlug, frameNumber).catch((error: unknown) =>
      reportImageError(frameUrl(colorSlug, frameNumber), error),
    );
  };

  const stepFrame = (amount: number) => {
    stopRotationRef.current();
    const nextFrame = modulo(frameRef.current + amount, CHAIR_FRAME_COUNT);
    updateFrame(nextFrame);
    requestFrame(colorRef.current, nextFrame);
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    stopRotationRef.current();
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startFrame: frameRef.current,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const frameDelta = Math.round((drag.startX - event.clientX) / 8);
    const nextFrame = modulo(
      drag.startFrame + frameDelta,
      CHAIR_FRAME_COUNT,
    );
    updateFrame(nextFrame);
    requestFrame(colorRef.current, nextFrame);
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    if (dragRef.current?.pointerId === event.pointerId) dragRef.current = null;
  };

  const onKeyDown = (event: ReactKeyboardEvent<HTMLCanvasElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepFrame(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      stepFrame(1);
    }
  };

  return (
    <div className="chair-viewer-column">
      <div className="chair-viewer">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="360-degree view of the Mira Chair. Drag horizontally to rotate, or use the left and right arrow keys."
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onKeyDown={onKeyDown}
        />
        <div className="chair-view-controls" aria-label="Rotate chair">
          <button
            className="chair-rotate-button"
            type="button"
            aria-label="Rotate left"
            onClick={() => stepFrame(-1)}
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            className="chair-rotate-button"
            type="button"
            aria-label="Rotate right"
            onClick={() => stepFrame(1)}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
        <span className="chair-view-hint" aria-hidden="true">
          Drag to explore
        </span>
        <p ref={statusRef} className="chair-view-status" role="status" />
      </div>
      <span className="chair-frame-count" aria-hidden="true">
        {String(frame + 1).padStart(2, "0")} / 36
      </span>
    </div>
  );
}

const SpinViewerWithRef = forwardRef<SpinViewerHandle, SpinViewerProps>(
  SpinViewer,
);

export default SpinViewerWithRef;
