"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type {
  KeyboardEvent as ReactKeyboardEvent,
  PointerEvent as ReactPointerEvent,
} from "react";

const frameCount = 72;

const frameSource = (frame: number) =>
  `/floor%20blog/seolink/${String(frame + 1).padStart(4, "0")}.webp`;

export default function FloorDayNightViewer() {
  const [frame, setFrame] = useState(0);
  const [loadError, setLoadError] = useState(false);
  const dragStart = useRef<{ pointerId: number; x: number; frame: number } | null>(
    null,
  );

  const stepFrame = (amount: number) => {
    setLoadError(false);
    setFrame((current) => (current + amount + frameCount) % frameCount);
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragStart.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      frame,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragStart.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const frameDelta = Math.round((drag.x - event.clientX) / 8);
    setLoadError(false);
    setFrame((drag.frame + frameDelta + frameCount) % frameCount);
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStart.current?.pointerId === event.pointerId) {
      dragStart.current = null;
    }
  };

  const onKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepFrame(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      stepFrame(1);
    }
  };

  return (
    <div className="floor-daynight-viewer">
      <div
        className="floor-daynight-image"
        role="slider"
        aria-label="Day-to-night flooring scene. Drag horizontally or use the arrow keys to explore."
        aria-valuemin={1}
        aria-valuemax={frameCount}
        aria-valuenow={frame + 1}
        aria-valuetext={`Lighting frame ${frame + 1} of ${frameCount}`}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onKeyDown={onKeyDown}
      >
        {!loadError ? (
          <Image
            src={frameSource(frame)}
            alt="A rendered room and floor transitioning from daylight toward warm evening light"
            fill
            sizes="(max-width: 760px) 100vw, 760px"
            priority={frame === 0}
            draggable={false}
            onError={() => setLoadError(true)}
          />
        ) : (
          <p className="floor-daynight-error" role="status">
            The flooring preview could not be loaded. Please refresh to try again.
          </p>
        )}
        <span className="floor-daynight-hint" aria-hidden="true">
          Drag to explore the changing light
        </span>
      </div>
      <div className="floor-daynight-controls">
        <button type="button" onClick={() => stepFrame(-1)} aria-label="Show earlier lighting">
          <span aria-hidden="true">←</span>
        </button>
        <span aria-live="polite">
          {String(frame + 1).padStart(2, "0")} / {frameCount}
        </span>
        <button type="button" onClick={() => stepFrame(1)} aria-label="Show later lighting">
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
