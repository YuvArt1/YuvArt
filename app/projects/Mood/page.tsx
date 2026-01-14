"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Footer from "@/components/footer";

export default function MoodProjectPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageSources = [
    "/MoodNz (1).png",
    "/MoodNz (2).png",
    "/MoodNz (3).png",
    "/MoodNz (4).png",
    "/MoodNz (5).png",
    "/MoodNz (6).png",
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Header */}
      <header className="bg-transparent px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-2xl font-bold text-black hover:text-gray-600 transition-colors font-space-grotesk"
          >
            Yuv
          </Link>
          <div className="flex items-center space-x-8 font-inter">
            <Link href="/work" className="text-black hover:text-gray-600 transition-colors">
              Work
            </Link>
            <Link href="/about" className="text-black hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Project Content - Behance-style */}
      <main className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Back to Work */}
          <Link
            href="/work"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8 font-inter"
          >
            ← Back to Work
          </Link>

          {/* Hero (video if available, falls back to image) */}
          <div className="mb-10">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/1154253992?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="Mood Nz Bed Animation"
              ></iframe>
            </div>
            <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />

            <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 font-space-grotesk">Mood</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-3 prose max-w-none text-gray-700">
                <p>
                  Mood is a product visuals suite exploring color, texture and motion. The project combines short-form motion with high-fidelity stills to present the product in context and highlight material details.
                </p>

                <p>
                  The direction focuses on subtle camera moves, tactile lighting and restrained editing to keep attention on the product's design language. Imagery was created to translate across digital and campaign formats.
                </p>
              </div>

              <aside className="md:col-span-1 text-sm text-gray-700">
                  <div className="mb-4">
                    <div className="font-semibold">Year</div>
                    <div>2025</div>
                  </div>

                  <div>
                    <div className="font-semibold">Services</div>
                    <div>Motion, Stills, Art Direction</div>
                  </div>
              </aside>
            </div>

            {/* Gallery - mixed layout */}
            <div className="space-y-8">
              {/* Large full-width still */}
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/MoodNz (2).png"
                  alt="Mood large"
                  width={1400}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Grid of remaining images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {imageSources.slice(2).map((src, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(src)}
                  >
                    <Image
                      src={src}
                      alt={`Mood ${idx + 3}`}
                      width={900}
                      height={675}
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal for full-screen image view */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <Image
                src={selectedImage}
                alt="Full screen view"
                width={1600}
                height={1200}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
