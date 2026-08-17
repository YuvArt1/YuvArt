"use client";

import Link from "next/link";
import Script from "next/script";
import Footer from "@/components/footer";

export default function FableProjectPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
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

      <main className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8 font-inter"
          >
            ← Back to Work
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-black font-space-grotesk">Fable</h1>
            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded font-space-grotesk">
              Work in Progress
            </span>
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

          {/* Embedded Vimeo (provided) */}
          <div className="mb-12" style={{ padding: "100% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/1218797567?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="FableScene1"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            ></iframe>
          </div>
          <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />

          {/* Thumbnail Image */}
          <div className="mb-12 rounded-sm overflow-hidden">
            <img
              src="/Fable.png"
              alt="Fable Thumbnail"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/projects/Mood"
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors font-inter"
            >
              ← Previous: Mood
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
