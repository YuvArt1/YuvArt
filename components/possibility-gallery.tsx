"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type Possibility = {
  label: string;
  image: string;
  alt: string;
};

export default function PossibilityGallery({ items }: { items: Possibility[] }) {
  const [selectedImage, setSelectedImage] = useState<Possibility | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selectedImage) return;

    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <div className="studio-possibility-grid">
        {items.map((item, index) => (
          <figure className={`studio-possibility studio-possibility-${index + 1}`} key={item.label}>
            <button
              className="studio-possibility-image"
              type="button"
              onClick={() => setSelectedImage(item)}
              aria-label={`View full image: ${item.label}`}
            >
              <Image src={item.image} alt={item.alt} fill loading="lazy" sizes="(max-width: 760px) 100vw, 33vw" />
              <span className="studio-possibility-expand" aria-hidden="true">View full image</span>
            </button>
            <figcaption><span>0{index + 1}</span>{item.label}</figcaption>
          </figure>
        ))}
      </div>
      {selectedImage && (
        <div
          className="studio-image-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.label} full image`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedImage(null);
          }}
        >
          <button
            className="studio-image-viewer-close"
            type="button"
            onClick={() => setSelectedImage(null)}
            ref={closeButtonRef}
            aria-label="Close full image"
          >
            <X size={20} aria-hidden="true" />
          </button>
          <div className="studio-image-viewer-frame">
            <Image src={selectedImage.image} alt={selectedImage.alt} fill sizes="100vw" className="studio-image-viewer-image" />
          </div>
          <p>{selectedImage.label}</p>
        </div>
      )}
    </>
  );
}