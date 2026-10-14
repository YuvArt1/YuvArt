"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { projectAssets } from "@/lib/project-assets";

type CarouselSlide = {
  name: string;
  href: string;
  image: string;
  alt: string;
  description: string;
};

const carouselSlides = projectAssets.flatMap<CarouselSlide>((project): CarouselSlide[] => {
  if (project.name === "TDG Audio") {
    return [{ ...project, image: "/TGD/BottomTop.webp", alt: "TDG Audio product view from below" }];
  }

  if (project.name === "HearO") {
    return [
      { ...project, image: "/hearo-product-visual-03.webp", alt: "HearO product visual, frame three" },
      { ...project, image: "/hearo-product-visual-04.webp", alt: "HearO product visual, frame four" },
      { ...project, image: "/hearo-product-visual-01.webp", alt: "HearO product visual" },
    ];
  }

  if (project.name === "GullyLab") {
    return [{ ...project, image: "/GullyLab (5).webp", alt: "GullyLab product visual, frame five" }];
  }

  if (project.name === "Mood") {
    return [{ ...project, image: "/mood-product-visual-04.webp", alt: "Mood product visual, frame four" }];
  }

  if (project.name === "Portronics") {
    return [{ ...project, image: "/Portronics1.webp", alt: "Portronics product animation still" }];
  }

  return [project];
});

export default function ProjectCarousel() {
  const zeroCoIndex = carouselSlides.findIndex((project) => project.name === "ZeroCO");
  const [activeIndex, setActiveIndex] = useState(zeroCoIndex);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [manuallyPaused, setManuallyPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const activeProject = carouselSlides[activeIndex];

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(motionPreference.matches);

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () => motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (interactionPaused || manuallyPaused || prefersReducedMotion) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % carouselSlides.length);
    }, 2500);

    return () => window.clearInterval(intervalId);
  }, [interactionPaused, manuallyPaused, prefersReducedMotion]);

  function showSlide(index: number) {
    setActiveIndex((index + carouselSlides.length) % carouselSlides.length);
  }

  return (
    <div
      className="studio-hero-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Project stills"
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
      onFocusCapture={() => setInteractionPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setInteractionPaused(false);
        }
      }}
    >
      <div className="studio-hero-visual">
        <Link href={activeProject.href} className="studio-carousel-image-link" aria-label={`View ${activeProject.name} project`}>
          <Image
            key={activeProject.image}
            src={activeProject.image}
            alt={activeProject.alt}
            fill
            priority={activeIndex === zeroCoIndex}
            sizes="(max-width: 760px) 100vw, 52vw"
            className="studio-cover-image"
          />
        </Link>
        <div className="studio-image-caption" aria-live="polite">
          <span>{activeProject.name.toUpperCase()}</span>
          <span>{String(activeIndex + 1).padStart(2, "0")} / {String(carouselSlides.length).padStart(2, "0")}</span>
        </div>
        <Link href={activeProject.href} className="studio-image-link" aria-label={`Explore ${activeProject.name}`}><ArrowUpRight size={20} aria-hidden="true" /></Link>
      </div>
      <div className="studio-carousel-controls">
        <p className="studio-carousel-description">{activeProject.description}</p>
        <div className="studio-carousel-actions">
          <div className="studio-carousel-indicators" aria-label="Choose a project">
            {carouselSlides.map((project, index) => (
              <button
                aria-label={`Show ${project.name} still ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={activeIndex === index ? "is-active" : ""}
                key={`${project.name}-${project.image}`}
                onClick={() => showSlide(index)}
                type="button"
              />
            ))}
          </div>
          <div className="studio-carousel-arrows">
            <button aria-label="Previous project" onClick={() => showSlide(activeIndex - 1)} type="button"><ArrowLeft size={17} aria-hidden="true" /></button>
            <button aria-label="Next project" onClick={() => showSlide(activeIndex + 1)} type="button"><ArrowRight size={17} aria-hidden="true" /></button>
            <button
              aria-label={manuallyPaused ? "Resume automatic slideshow" : "Pause automatic slideshow"}
              aria-pressed={manuallyPaused}
              onClick={() => setManuallyPaused((paused) => !paused)}
              title={manuallyPaused ? "Resume slideshow" : "Pause slideshow"}
              type="button"
            >
              {manuallyPaused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}