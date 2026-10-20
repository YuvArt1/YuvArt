"use client";

import { useRef, useState } from "react";
import type { CSSProperties } from "react";
import SpinViewer from "@/components/chair/SpinViewer";
import type { SpinViewerHandle } from "@/components/chair/SpinViewer";
import { COLORS, type ChairColorSlug } from "@/lib/chair";

function AddToCartButton({
  added,
  onAdd,
}: {
  added: boolean;
  onAdd: () => void;
}) {
  return (
    <button
      className="chair-add-button"
      type="button"
      onClick={onAdd}
    >
      {added ? "Added to bag" : "Add to cart"}
    </button>
  );
}

export default function ChairProductPage({
  embedded = false,
}: {
  embedded?: boolean;
}) {
  const [color, setColor] = useState<ChairColorSlug>(COLORS[0].slug);
  const [added, setAdded] = useState(false);
  const viewerRef = useRef<SpinViewerHandle>(null);
  const selectedColor =
    COLORS.find((option) => option.slug === color) ?? COLORS[0];
  const ProductTitle = embedded ? "h2" : "h1";

  return (
    <div className={`chair-page${embedded ? " chair-page-embedded" : ""}`}>
      <header className="chair-topbar">
        <a className="chair-wordmark" href="/chair" aria-label="Mira home">
          Mira Objects
        </a>
        <a href="/">Independent furniture, thoughtfully made</a>
      </header>

      <section className="chair-product-layout" aria-label="Mira Chair">
        <SpinViewer
          ref={viewerRef}
          color={color}
          onColorChange={setColor}
        />

        <div className="chair-details-column">
          <p className="chair-eyebrow">Mira / Seating / 01</p>
          <ProductTitle className="chair-product-title">
            Mira Chair, {selectedColor.name}
          </ProductTitle>
          <p className="chair-price">$1,249</p>

          <div className="chair-color-picker">
            <p className="chair-color-label">
              Color: <span>{selectedColor.name}</span>
            </p>
            <div className="chair-swatch-list" aria-label="Choose a color">
              {COLORS.map((option) => (
                <button
                  key={option.slug}
                  className="chair-swatch"
                  type="button"
                  style={{ "--swatch-color": option.hex } as CSSProperties}
                  data-label={option.name}
                  aria-label={option.name}
                  aria-pressed={option.slug === color}
                  onClick={() => viewerRef.current?.selectColor(option.slug)}
                />
              ))}
            </div>
          </div>

          <AddToCartButton added={added} onAdd={() => setAdded(true)} />
          <p className="chair-delivery">
            Complimentary delivery in 2–3 weeks. Easy 30-day returns.
          </p>

          <div className="chair-accordions">
            <details className="chair-accordion" open>
              <summary>About the chair</summary>
              <div className="chair-accordion-content">
                <p>
                  A generous, curved seat balances a soft upholstered cushion
                  with the warmth of solid oak. Made for long conversations and
                  unhurried afternoons.
                </p>
              </div>
            </details>
            <details className="chair-accordion">
              <summary>Dimensions</summary>
              <div className="chair-accordion-content">
                <dl className="chair-dimensions">
                  <dt>Width × depth × height</dt>
                  <dd>63 × 58 × 82 cm</dd>
                  <dt>Seat height</dt>
                  <dd>46 cm</dd>
                </dl>
              </div>
            </details>
            <details className="chair-accordion">
              <summary>Materials & care</summary>
              <div className="chair-accordion-content">
                <p>
                  Molded polypropylene shell, wool-blend cushion, solid oak
                  legs, and powder-coated steel supports. Wipe the shell with a
                  soft damp cloth; spot-clean the cushion.
                </p>
              </div>
            </details>
            <details className="chair-accordion">
              <summary>Delivery & returns</summary>
              <div className="chair-accordion-content">
                <p>
                  Your chair is made to order and arrives in 2–3 weeks.
                  Delivery is complimentary, with 30 days to return it.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <div className="chair-mobile-bar">
        <span className="chair-mobile-price">$1,249</span>
        <AddToCartButton added={added} onAdd={() => setAdded(true)} />
      </div>
    </div>
  );
}
