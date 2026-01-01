"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Footer from "@/components/footer";

export default function GullyLabProjectPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageSources = [
    "/GullyLab (1).png",
    "/GullyLab (2).png",
    "/GullyLab (3).png",
    "/GullyLab (4).png",
    "/GullyLab (5).png",
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

      {/* Project Content */}
      <main className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Back to Work */}
          <Link
            href="/work"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8 font-inter"
          >
            ← Back to Work
          </Link>

          {/* Project Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 font-space-grotesk">GullyLab</h1>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 font-inter">
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Type</h3>
              <p className="text-gray-700">Product Visuals</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Year</h3>
              <p className="text-gray-700">2025</p>
            </div>
          </div>

          {/* Project Video */}
          <div className="mb-12" style={{ padding: "75% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/1150857148?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              title="Gully Lab Animation"
            ></iframe>
          </div>
          <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />

          {/* Stills Title */}
          <h2 className="text-2xl font-bold text-black mb-6 font-space-grotesk">Stills</h2>

          {/* Images Grid */}
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {imageSources.map((src, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`GullyLab ${index + 1}`}
                  width={600}
                  height={400}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>

          {/* Lightbox Overlay */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <img
                src={selectedImage}
                alt="Enlarged"
                className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
              />
            </div>
          )}

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/projects/project-4"
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors font-inter"
            >
              ← Previous: HearO
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
