"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/footer";

export default function Project2Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const stillImages = [
    "/Zeroco.png",
    "/Zeroco (1).png",
    "/Zeroco (2).png",
    "/Zeroco (3).png",
    "/Zeroco (4).png",
    "/Zeroco (5).png",
    "/Zeroco (7).png",
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
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 font-space-grotesk">ZeroCO</h1>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 font-inter">
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Product</h3>
              <p className="text-gray-700">ZeroCO Speaker (upcycled tennis ball)</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Year</h3>
              <p className="text-gray-700">2025</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Focus</h3>
              <p className="text-gray-700">Sustainability, portability, everyday use</p>
            </div>
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
                title="Zeroco_Scen1.mp4"
              ></iframe>
            </div>
            <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1102749087?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
                title="Scene2 Zero"
              ></iframe>
            </div>
            <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1102749120?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
                title="Scene3 Zero"
              ></iframe>
            </div>
            <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1102749148?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
                title="Scene4 Zero"
              ></iframe>
            </div>
          </div>

          {/* Project Description */}
          <div className="prose prose-lg max-w-none font-inter mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              ZeroCO is a compact speaker made from a used tennis ball — an upcycled shell that gives the product its character, grip, and a soft tactile feel. The idea was simple: take something familiar and overlooked, and turn it into sound you can carry.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              To show its portability, I placed it across everyday scenes: clipped to a backpack on the go, on a desk beside a laptop, resting on a park bench, by a bedside lamp, and on a kitchen counter. Each setup focuses on scale, texture, and lighting to keep it grounded and real.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The visuals highlight how the tennis-ball form factor isn’t just a look — it’s functional. It’s durable, easy to grab, and sits naturally on uneven surfaces. The animations are minimal and intentional, keeping the attention on context and usefulness rather than flashy motion.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Overall, the piece is about reuse with purpose. A familiar object, a fresh role, and scenes that show how it fits into daily life without trying too hard.
            </p>
          </div>

          {/* Still Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6 font-space-grotesk">Still</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {stillImages.map((src, index) => (
                <div key={index} className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <img
                    src={src}
                    alt={`ZeroCO Still ${index}`}
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
                alt="Enlarged"
                className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
              />
            </div>
          )}

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between">
            <Link
              href="/projects/project-1"
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors font-inter"
            >
              ← Previous: TangentGC
            </Link>
            <Link
              href="/projects/project-3"
              className="inline-flex items-center text-black hover:text-gray-600 transition-colors font-inter"
            >
              Next Project: Portronics →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
