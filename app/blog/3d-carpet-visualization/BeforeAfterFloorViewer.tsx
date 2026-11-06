"use client";

import Image from "next/image";
import { useState } from "react";

const afterFloors = [
  { src: "topshot-pattern.webp", label: "Topshot pattern" },
  { src: "topshot.webp", label: "Topshot" },
  { src: "topshot-brown-2.webp", label: "Topshot brown 2" },
  { src: "topshot-brown.webp", label: "Topshot brown" },
  { src: "topshot-orange.webp", label: "Topshot orange" },
  { src: "topshot-yellow.webp", label: "Topshot yellow" },
  { src: "topshot-yelo.webp", label: "Topshot yelo" },
  { src: "u9th.webp", label: "U9th" },
  { src: "another-pattern.webp", label: "Another pattern" },
] as const;

const imagePath = (filename: string) =>
  `/floor%20blog/before%20after/${filename}`;

export default function BeforeAfterFloorViewer() {
  const [selectedFloor, setSelectedFloor] = useState<(typeof afterFloors)[number]>(
    afterFloors[0],
  );
  const [position, setPosition] = useState(50);

  return (
    <div className="floor-before-after-viewer">
      <div className="floor-before-after-comparison">
        <div className="floor-before-after-image">
          <Image
            src={imagePath("before.webp")}
            alt="Room before the new floor is installed"
            fill
            sizes="(max-width: 760px) 100vw, 55vw"
            priority
          />
          <div
            className="floor-before-after-reveal"
            style={{ clipPath: `inset(0 0 0 ${position}%)` }}
          >
            <Image
              src={imagePath(selectedFloor.src)}
              alt={`Room after installation with ${selectedFloor.label}`}
              fill
              sizes="(max-width: 760px) 100vw, 55vw"
            />
          </div>
          <span className="floor-before-after-label floor-before-after-label-before">
            Before
          </span>
          <span className="floor-before-after-label floor-before-after-label-after">
            After
          </span>
          <span
            className="floor-before-after-divider"
            style={{ left: `${position}%` }}
            aria-hidden="true"
          />
          <span
            className="floor-before-after-handle"
            style={{ left: `${position}%` }}
            aria-hidden="true"
          >
            ↔
          </span>
          <input
            className="floor-before-after-range"
            type="range"
            min="0"
            max="100"
            value={position}
            aria-label="Drag to compare the before and after floor"
            aria-valuetext={`${position}% showing after with ${selectedFloor.label}`}
            onChange={(event) => setPosition(Number(event.target.value))}
          />
        </div>
        <p className="floor-before-after-hint">Drag the handle to compare</p>
      </div>
      <div className="floor-before-after-selector">
        <p className="floor-before-after-selector-title">Choose a floor</p>
        <div className="floor-before-after-options">
          {afterFloors.map((floor) => (
            <button
              className="floor-before-after-option"
              type="button"
              key={floor.src}
              aria-pressed={selectedFloor.src === floor.src}
              onClick={() => setSelectedFloor(floor)}
            >
              <span className="floor-before-after-option-image">
                <Image
                  src={imagePath(floor.src)}
                  alt=""
                  fill
                  sizes="56px"
                />
              </span>
              <span>{floor.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
