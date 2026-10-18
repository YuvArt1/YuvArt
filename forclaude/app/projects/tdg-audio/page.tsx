"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import StudioHeader from "@/components/studio-header";
import ProjectInquiryCTA from "@/components/project-inquiry-cta";

export default function TDGAudioProjectPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageSources = [
    "/TGD/Final.webp",
    "/TGD/Front.webp",
    "/TGD/TopDown.webp",
    "/TGD/BottomTop.webp",
  ];
  const imageAlts = [
    "TDG Audio product shown in a finished 3D render",
    "Front view of a TDG Audio product",
    "Top-down view of a TDG Audio product",
    "Bottom-up view of a TDG Audio product",
  ];

  const videos = [
    { id: "1222345243", title: "TDG Audio product animation" },
    { id: "1236793232", title: "Scene 4" },
    { id: "1236793231", title: "Scene 2" },
    { id: "1236793230", title: "Scene 3" },
  ];

  return (
    <div className="studio-page studio-project-detail">
      <StudioHeader currentPage="work" />

      <main className="px-6 py-16 pt-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8 font-inter"
          >
            ← Back to Home
          </Link>

          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-black font-space-grotesk">TDG Audio</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 font-inter">
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Type</h3>
              <p className="text-gray-700">Product Visuals</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Year</h3>
              <p className="text-gray-700">2026</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none font-inter mb-12">
            <p className="text-gray-700 leading-relaxed">
              I created a product animation and a set of stills to present TDG Audio from multiple angles. I kept the views and visual treatment cohesive so the assets work together as a product-focused set.
            </p>
          </div>

          <section className="studio-tdg-videos mb-12" aria-label="TDG Audio product animations">
            {videos.map((video) => (
              <div className="studio-tdg-video" key={video.id}>
                <iframe
                  src={`https://player.vimeo.com/video/${video.id}?badge=0&autopause=0&player_id=0&app_id=58479`}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title={video.title}
                  allowFullScreen
                />
                <p>{video.title}</p>
              </div>
            ))}
          </section>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6 font-space-grotesk">Still</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {imageSources.map((src, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(src)}
                >
                  <Image
                    src={src}
                    alt={imageAlts[index]}
                    width={900}
                    height={675}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <Image
                src={selectedImage}
                alt="Full-screen TDG Audio product render"
                width={1600}
                height={1200}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}

          <div className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-2 gap-8 mb-12">
            <Link href="/projects/HearO" className="text-left hover:text-gray-600 transition-colors">
              <p className="text-xs text-gray-600 font-inter mb-2">← PREVIOUS</p>
              <p className="text-lg font-bold text-black font-space-grotesk">HearO</p>
            </Link>
            <Link href="/projects/GullyLab" className="text-right hover:text-gray-600 transition-colors">
              <p className="text-xs text-gray-600 font-inter mb-2">NEXT →</p>
              <p className="text-lg font-bold text-black font-space-grotesk">GullyLab</p>
            </Link>
          </div>

          <ProjectInquiryCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
