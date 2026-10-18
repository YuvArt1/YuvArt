"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import StudioHeader from "@/components/studio-header";
import ProjectInquiryCTA from "@/components/project-inquiry-cta";

export default function Project4Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageSources = [
    "/hearo-product-visual-01.webp",
    "/hearo-product-visual-02.webp",
    "/hearo-product-visual-03.webp",
    "/hearo-product-visual-04.webp",
    "/hearo-product-visual-05.webp",
    "/hearo-product-visual-06.webp",
  ];

  return (
    <div className="studio-page studio-project-detail">
      <StudioHeader currentPage="work" />

      {/* Project Content */}
      <main className="px-6 py-16 pt-20 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Back to Home */}
          <Link
            href="/work"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8 font-inter"
          >
            ← Back to work
          </Link>

          {/* Project Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 font-space-grotesk">HearO</h1>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 font-inter">
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Product</h3>
              <p className="text-gray-700">HearO (consumer audio)</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Year</h3>
              <p className="text-gray-700">2025</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Focus</h3>
              <p className="text-gray-700">Product imagery, ecommerce, social</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none font-inter mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              HearO is a consumer audio product that needed a cohesive set of visuals ready for its launch. The goal was to create imagery that could work across ecommerce listings, social media posts, and marketing collateral without requiring a separate shoot for each placement.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Every angle was chosen deliberately. Front views for product pages, three-quarter views for social cards, and detail crops for feature callouts. The lighting stays consistent across the set so the images feel like they belong together, whether they appear side by side on a product page or weeks apart in a social feed.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The material rendering focuses on getting the surface finishes right: the matte body, the mesh grille texture, and the subtle sheen on control surfaces. These details are what make the product look real and tactile on screen, which matters when a customer can't pick it up.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The result is a complete image set that gives the brand flexibility. One 3D build, multiple compositions, and a visual language that scales from a Shopify listing to an Instagram carousel without losing consistency.
            </p>
          </div>

          {/* Gallery */}
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {imageSources.map((src, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`HearO consumer audio product still ${index + 1}`}
                  width={600}
                  height={400}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <img
                src={selectedImage}
                alt="Enlarged HearO product still"
                className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
              />
            </div>
          )}

          {/* Project Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-2 gap-8 mb-12">
            <Link href="/projects/ZeroCO" className="text-left hover:text-gray-600 transition-colors">
              <p className="text-xs text-gray-600 font-inter mb-2">← PREVIOUS</p>
              <p className="text-lg font-bold text-black font-space-grotesk">ZeroCO</p>
            </Link>
            <Link href="/projects/Mood" className="text-right hover:text-gray-600 transition-colors">
              <p className="text-xs text-gray-600 font-inter mb-2">NEXT →</p>
              <p className="text-lg font-bold text-black font-space-grotesk">Mood</p>
            </Link>
          </div>

          <ProjectInquiryCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}
