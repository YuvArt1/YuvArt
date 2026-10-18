"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import StudioHeader from "@/components/studio-header";
import ProjectInquiryCTA from "@/components/project-inquiry-cta";

export default function Project2Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const stillImages = [
    "/zero-co-speaker-visual-01.webp",
    "/zero-co-speaker-visual-02.webp",
    "/zero-co-speaker-visual-03.webp",
    "/zero-co-speaker-visual-04.webp",
    "/zero-co-speaker-visual-05.webp",
    "/zero-co-speaker-visual-06.webp",
    "/zero-co-speaker-visual-07.webp",
  ];
  const stillAlts = [
    "ZeroCO hand wash and hair wash bottles arranged diagonally",
    "Hand holding a ZeroCO wash bottle",
    "ZeroCO wash bottles shown in a horizontal product composition",
    "Angled 3D render of a ZeroCO wash bottle",
    "Front view of a ZeroCO pump bottle",
    "Angled product render of a ZeroCO wash bottle",
    "ZeroCO wash bottles in different label and cap colours",
  ];

  return (
    <div className="studio-page studio-project-detail">
      <StudioHeader currentPage="work" />

      {/* Project Content */}
      <main className="px-6 py-16 pt-20 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Back to Home */}
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8 font-inter"
          >
            ← Back to Home
          </Link>

          {/* Project Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 font-space-grotesk">ZeroCO</h1>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 font-inter">
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Product</h3>
              <p className="text-gray-700">ZeroCO hand wash and hair wash</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Year</h3>
              <p className="text-gray-700">2025</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Focus</h3>
              <p className="text-gray-700">Product packaging and product details</p>
            </div>
          </div>

          {/* Project Description */}
          <div className="prose prose-lg max-w-none font-inter mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              I created product renders and animations for ZeroCO, showing its hand wash and hair wash bottles, packaging, and product labels in clear views.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              I used composed product views to bring attention to the bottle forms, label details, and colour choices.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              I kept the animation focused on the products and their packaging.
            </p>

            <p className="text-gray-700 leading-relaxed">
              I brought the stills and motion together as one product presentation.
            </p>
          </div>

          {/* Video Sections */}
          <div className="space-y-12 mb-12">
            <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1102749162?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
                title="ZeroCO hand wash and hair wash bottles"
              ></iframe>
            </div>
            <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1102749087?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
                title="ZeroCO wash bottle product arrangement"
              ></iframe>
            </div>
            <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1102749120?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
                title="Angled ZeroCO wash bottle close-up"
              ></iframe>
            </div>
            <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1102749148?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
                title="ZeroCO pump bottle product view"
              ></iframe>
            </div>
          </div>

          {/* Still Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6 font-space-grotesk">Still</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {stillImages.map((src, index) => (
                <div key={index} className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <img
                    src={src}
                    alt={stillAlts[index]}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => setSelectedImage(src)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Lightbox Overlay */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <img
                src={selectedImage}
                alt="ZeroCO wash bottle product render"
                className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
              />
            </div>
          )}

          {/* Project Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-2 gap-8 mb-12">
            <div />
            <Link href="/projects/Portronics" className="text-right hover:text-gray-600 transition-colors">
              <p className="text-xs text-gray-600 font-inter mb-2">NEXT →</p>
              <p className="text-lg font-bold text-black font-space-grotesk">Portronics</p>
            </Link>
          </div>

          <ProjectInquiryCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}
