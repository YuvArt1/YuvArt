import Link from "next/link"
import Footer from "@/components/footer"

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
            <Link href="/contact" className="text-black hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Work Page Content */}
      <main className="px-6 py-8 bg-white flex-1 mb-16">
        <div className="max-w-7xl mx-auto">
          {/* Simple Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Fable */}
            <div className="flex flex-col">
              <Link
                href="/projects/Fable"
                className="relative group overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer aspect-[4/3]"
              >
                <img
                  src="/Fable.png"
                  alt="Fable"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-3">
                <div className="text-sm font-semibold text-black font-space-grotesk">Fable</div>
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
                  alt="Mood"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-3">
                <div className="text-sm font-semibold text-black font-space-grotesk">Mood</div>
              </div>
            </div>

            {/* HearO */}
            <div className="flex flex-col">
              <Link
                href="/projects/project-4"
                className="relative group overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer aspect-[4/3]"
              >
                <img
                  src="/HeroO (1).png"
                  alt="HearO"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-3">
                <div className="text-sm font-semibold text-black font-space-grotesk">HearO</div>
              </div>
            </div>

            {/* Portronics */}
            <div className="flex flex-col">
              <Link
                href="/projects/project-3"
                className="relative group overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer aspect-[4/3]"
              >
                <img
                  src="/Portronics.jpg"
                  alt="Portronics"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-3">
                <div className="text-sm font-semibold text-black font-space-grotesk">Portronics</div>
              </div>
            </div>

            {/* TangentGC */}
            <div className="flex flex-col">
              <Link
                href="/projects/project-1"
                className="relative group overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer aspect-[4/3]"
              >
                <img
                  src="/Tangent.png"
                  alt="TangentGC"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-3">
                <div className="text-sm font-semibold text-black font-space-grotesk">TangentGC</div>
              </div>
            </div>

            {/* ZeroCO */}
            <div className="flex flex-col">
              <Link
                href="/projects/project-2"
                className="relative group overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer aspect-[4/3]"
              >
                <img
                  src="/Zeroco.png"
                  alt="ZeroCO"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-3">
                <div className="text-sm font-semibold text-black font-space-grotesk">ZeroCO</div>
              </div>
            </div>

            {/* Outer */}
            <div className="flex flex-col">
              <Link
                href="/projects/Outer"
                className="relative group overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer aspect-[4/3]"
              >
                <img
                  src="/Outer (4).png"
                  alt="Outer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-3">
                <div className="text-sm font-semibold text-black font-space-grotesk">Outer</div>
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
                  alt="GullyLab"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-3">
                <div className="text-sm font-semibold text-black font-space-grotesk">GullyLab</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
