"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";

export default function Project4Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageSources = [
    "/HeroO (1).png",
    "/HeroO (2).png",
    "/HeroO (3).png",
    "/HeroO (4).png",
    "/HeroO (5).png",
    "/HeroO (6).png",
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-transparent z-20 px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-2xl font-bold text-black hover:text-gray-600 transition-colors font-space-grotesk"
          >
            Yuv
          </Link>
          <div className="flex items-center space-x-8 font-inter">
            <Link href="/about" className="text-black hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-600 transition-colors">
              Contact
            </Link>
            <a
              href="https://cal.com/yuv-raj-pao2g5/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors font-semibold"
            >
              Book a Call
            </a>
          </div>
        </nav>
      </header>

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
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 font-space-grotesk">HearO</h1>

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
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Status</h3>
              <p className="text-gray-700">Finalizing assets</p>
            </div>
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
                  alt={`HearO ${index + 1}`}
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
                alt="Enlarged"
                className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
              />
            </div>
          )}

          {/* Project Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-2 gap-8 mb-12">
            <Link href="/projects/GullyLab" className="text-left hover:text-gray-600 transition-colors">
              <p className="text-xs text-gray-600 font-inter mb-2">← PREVIOUS</p>
              <p className="text-lg font-bold text-black font-space-grotesk">GullyLab</p>
            </Link>
            <Link href="/projects/TangentGC" className="text-right hover:text-gray-600 transition-colors">
              <p className="text-xs text-gray-600 font-inter mb-2">NEXT →</p>
              <p className="text-lg font-bold text-black font-space-grotesk">TangentGC</p>
            </Link>
          </div>

          {/* Book a Call Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <a
              href="https://cal.com/yuv-raj-pao2g5/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-black text-white rounded-md hover:bg-gray-800 transition-colors font-semibold text-lg font-space-grotesk"
            >
              Book a Call
            </a>
            <p className="mt-4 text-gray-600 text-sm font-inter">
              Let's discuss your next project
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
