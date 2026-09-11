import type { Metadata } from "next"
import Link from "next/link"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Selected Work | DesignYuv",
  description:
    "Explore selected 3D product animation, motion design, and visual content projects by DesignYuv.",
  alternates: {
    canonical: "https://www.designyuv.com/work",
  },
  openGraph: {
    title: "Selected Work | DesignYuv",
    description: "Selected 3D product animation and motion design projects by DesignYuv.",
    url: "https://www.designyuv.com/work",
    images: [{ url: "/TGD/Final.png", width: 1200, height: 630, alt: "Selected DesignYuv work" }],
  },
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative flex flex-col">
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
            <Link href="/work" className="text-black hover:text-gray-600 transition-colors font-semibold">
              Work
            </Link>
            <Link href="/about" className="text-black hover:text-gray-600 transition-colors">
              About
            </Link>
            <a
              href="https://cal.com/yuv-raj-pao2g5/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-black px-4 py-2 font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Book a Call
            </a>
          </div>
        </nav>
      </header>

      <main className="px-6 py-8 bg-white flex-1 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-3xl">
            <h1 className="text-4xl font-bold text-black font-space-grotesk md:text-5xl">
              Web visual content, social media and motion design.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-600 font-inter">
              A selection of visual work created to help products, brands and ideas communicate clearly and stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* TGD Audio */}
            <div className="flex flex-col">
              <Link
                href="/projects/TGDAudio"
                className="relative group overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer aspect-[4/3]"
              >
                <img
                  src="/TGD/Final.png"
                  alt="TGD Audio social media visual"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-3">
                <div className="text-sm font-semibold text-black font-space-grotesk">TGD Audio</div>
                <div className="text-xs text-gray-600 font-inter mt-1">Social media content</div>
              </div>
            </div>

            {/* Mood */}
            <div className="flex flex-col">
              <Link
                href="/projects/Mood"
                className="relative group overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer aspect-[4/3]"
              >
                <img
                  src="/MoodNz (1).png"
                  alt="Mood web visual content"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-3">
                <div className="text-sm font-semibold text-black font-space-grotesk">Mood</div>
                <div className="text-xs text-gray-600 font-inter mt-1">Web visual content</div>
              </div>
            </div>

            {/* HearO */}
            <div className="flex flex-col">
              <Link
                  href="/projects/HearO"
                className="relative group overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer aspect-[4/3]"
              >
                <img
                  src="/HeroO (1).png"
                  alt="HearO web visual content"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-3">
                <div className="text-sm font-semibold text-black font-space-grotesk">HearO</div>
                <div className="text-xs text-gray-600 font-inter mt-1">Web visual content / social media</div>
              </div>
            </div>

            {/* Portronics */}
            <div className="flex flex-col">
              <Link
                  href="/projects/Portronics"
                className="relative group overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer aspect-[4/3]"
              >
                <img
                  src="/Portronics.jpg"
                  alt="Portronics social media visual"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-3">
                <div className="text-sm font-semibold text-black font-space-grotesk">Portronics</div>
                <div className="text-xs text-gray-600 font-inter mt-1">Social media</div>
              </div>
            </div>

            {/* TangentGC */}
            <div className="flex flex-col">
              <Link
                  href="/projects/TangentGC"
                className="relative group overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer aspect-[4/3]"
              >
                <img
                  src="/Tangent.png"
                  alt="TangentGC brand visual"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-3">
                <div className="text-sm font-semibold text-black font-space-grotesk">TangentGC</div>
                <div className="text-xs text-gray-600 font-inter mt-1">Social media</div>
              </div>
            </div>

            {/* ZeroCO */}
            <div className="flex flex-col">
              <Link
                  href="/projects/ZeroCO"
                className="relative group overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer aspect-[4/3]"
              >
                <img
                  src="/Zeroco.png"
                  alt="ZeroCO web visual content"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-3">
                <div className="text-sm font-semibold text-black font-space-grotesk">ZeroCO</div>
                <div className="text-xs text-gray-600 font-inter mt-1">Web visual content / social media</div>
              </div>
            </div>

            {/* GullyLab */}
            <div className="flex flex-col">
              <Link
                href="/projects/GullyLab"
                className="relative group overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer aspect-[4/3]"
              >
                <img
                  src="/GullyLab (1).png"
                  alt="GullyLab social media visual"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-3">
                <div className="text-sm font-semibold text-black font-space-grotesk">GullyLab</div>
                <div className="text-xs text-gray-600 font-inter mt-1">Social media content / motion design</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
