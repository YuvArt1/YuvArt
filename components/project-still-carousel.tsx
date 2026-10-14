"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Pause, Play, X } from "lucide-react";
import type { ProjectStill } from "@/lib/project-media";

type ProjectStillCarouselProps = {
  projectName: string;
  stills: ProjectStill[];
};

export default function ProjectStillCarousel({ projectName, stills }: ProjectStillCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [selectedStill, setSelectedStill] = useState<ProjectStill | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const target = carouselRef.current;
    if (!target || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "100px", threshold: 0.05 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(motionPreference.matches);

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () => motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (!isVisible || isInteracting || isPaused || prefersReducedMotion || selectedStill || stills.length < 2) return;

    const intervalId = window.setInterval(() => {
      const track = trackRef.current;
      const firstCard = track?.querySelector<HTMLElement>(".studio-media-still");
      if (!track || !firstCard) return;

      const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
      const step = firstCard.offsetWidth + gap;
      const maxScroll = track.scrollWidth - track.clientWidth;

      if (maxScroll <= 0) return;
      if (track.scrollLeft >= maxScroll - step / 2) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3600);

    return () => window.clearInterval(intervalId);
  }, [isVisible, isInteracting, isPaused, prefersReducedMotion, selectedStill, stills.length]);

  useEffect(() => {
    if (!selectedStill) return;

    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedStill(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [selectedStill]);

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    const firstCard = track?.querySelector<HTMLElement>(".studio-media-still");
    if (!track || !firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = firstCard.offsetWidth + gap;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) return;

    if (direction > 0 && track.scrollLeft >= maxScroll - step / 2) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction < 0 && track.scrollLeft <= step / 2) {
      track.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      track.scrollBy({ left: direction * step, behavior: "smooth" });
    }
  }

  function openStill(still: ProjectStill, event: MouseEvent<HTMLButtonElement>) {
    triggerRef.current = event.currentTarget;
    setSelectedStill(still);
  }

  return (
    <>
      <div
        className="studio-still-carousel"
        ref={carouselRef}
        role="region"
        aria-label={`${projectName} product stills`}
        aria-roledescription="carousel"
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
        onFocusCapture={() => setIsInteracting(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsInteracting(false);
        }}
      >
        <div
          className="studio-media-still-track"
          ref={trackRef}
          onScroll={(event) => {
            const track = event.currentTarget;
            const firstCard = track.querySelector<HTMLElement>(".studio-media-still");
            if (!firstCard) return;
            const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
            setActiveIndex(Math.min(stills.length - 1, Math.round(track.scrollLeft / (firstCard.offsetWidth + gap))));
          }}
        >
          {stills.map((still, index) => (
            <button
              className="studio-media-still"
              type="button"
              key={still.src}
              aria-label={`View full-size ${projectName} still ${index + 1}`}
              onClick={(event) => openStill(still, event)}
            >
              <span className="studio-media-still-frame">
                <Image src={still.src} alt={still.alt} fill sizes="(max-width: 680px) 82vw, (max-width: 1000px) 35vw, 32vw" />
              </span>
              <span className="studio-media-still-caption">
                <span>STILL {String(index + 1).padStart(2, "0")}</span>
                <span aria-hidden="true">View full image</span>
              </span>
            </button>
          ))}
        </div>
        <div className="studio-still-carousel-controls">
          <span>{String(activeIndex + 1).padStart(2, "0")} / {String(stills.length).padStart(2, "0")}</span>
          <div className="studio-still-carousel-buttons">
            <button type="button" aria-label={`Previous ${projectName} still`} onClick={() => move(-1)}><ArrowLeft size={16} aria-hidden="true" /></button>
            <button type="button" aria-label={`Next ${projectName} still`} onClick={() => move(1)}><ArrowRight size={16} aria-hidden="true" /></button>
            <button
              type="button"
              aria-label={isPaused ? "Resume automatic scrolling" : "Pause automatic scrolling"}
              aria-pressed={isPaused}
              title={isPaused ? "Resume automatic scrolling" : "Pause automatic scrolling"}
              onClick={() => setIsPaused((paused) => !paused)}
            >
              {isPaused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      {selectedStill && (
        <div
          className="studio-image-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectName} full-size image`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedStill(null);
          }}
        >
          <button
            className="studio-image-viewer-close"
            type="button"
            ref={closeButtonRef}
            aria-label="Close full-size image"
            onClick={() => setSelectedStill(null)}
          >
            <X size={20} aria-hidden="true" />
          </button>
          <div className="studio-image-viewer-frame">
            <Image src={selectedStill.src} alt={selectedStill.alt} fill sizes="100vw" className="studio-image-viewer-image" />
          </div>
          <p>{projectName}</p>
        </div>
      )}
    </>
  );
}