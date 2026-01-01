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
          {/* Navigation */}
          <div className="mb-4">
            <span className="text-gray-600 text-sm font-inter">OVERVIEW / INDEX</span>
          </div>

          {/* Bento Box Grid - 6 column system */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-2 md:gap-3">
            {/* Row 1 */}
            {/* GullyLab - Tall vertical (2 cols, 2 rows) */}
            <div className="md:col-span-2 md:row-span-2 flex flex-col">
              <Link
                href="/projects/GullyLab"
                className="relative group overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer aspect-[3/4] md:aspect-auto min-h-[300px] flex-1 w-full"
              >
                <div className="absolute top-2 left-2 md:top-3 md:left-3 z-10">
                  <div className="text-xs text-gray-500 font-mono mb-0.5">01.1.1</div>
                  <div className="text-xs text-gray-700 font-inter">Product Visuals and Animation</div>
                </div>
                <img
                  src="/GullyLab (1).png"
                  alt="GullyLab"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-2">
                <div className="text-sm font-semibold text-black font-space-grotesk">GullyLab</div>
              </div>
            </div>

            {/* HearO - Wide horizontal (4 cols, 1 row) */}
            <div className="md:col-span-4 flex flex-col">
              <Link
                href="/projects/project-4"
                className="relative group overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer aspect-[16/9]"
              >
                <div className="absolute top-2 left-2 md:top-3 md:left-3 z-10">
                  <div className="text-xs text-gray-500 font-mono mb-0.5">01.2.2</div>
                  <div className="text-xs text-gray-700 font-inter">Product Visuals</div>
                </div>
                <img
                  src="/HeroO (1).png"
                  alt="HearO"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-2">
                <div className="text-sm font-semibold text-black font-space-grotesk">HearO</div>
              </div>
            </div>

            {/* Row 2 */}
            {/* Portronics - Medium vertical (2 cols, 1 row) - moved up to fill space */}
            <div className="md:col-span-2 flex flex-col">
              <Link
                href="/projects/project-3"
                className="relative group overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer aspect-[3/4]"
              >
                <div className="absolute top-2 left-2 md:top-3 md:left-3 z-10">
                  <div className="text-xs text-gray-500 font-mono mb-0.5">01.1.5</div>
                  <div className="text-xs text-gray-700 font-inter">Product Visuals and Animation</div>
                </div>
                <img
                  src="/Portronics.jpg"
                  alt="Portronics"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-2">
                <div className="text-sm font-semibold text-black font-space-grotesk">Portronics</div>
              </div>
            </div>

            {/* TangentGC - Medium square (2 cols, 1 row) */}
            <div className="md:col-span-2 flex flex-col">
              <Link
                href="/projects/project-1"
                className="relative group overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer aspect-[4/3]"
              >
                <div className="absolute top-2 left-2 md:top-3 md:left-3 z-10">
                  <div className="text-xs text-gray-500 font-mono mb-0.5">01.2.3</div>
                  <div className="text-xs text-gray-700 font-inter">Product Visuals and Animation</div>
                </div>
                <img
                  src="/Tangent.png"
                  alt="TangentGC"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-2">
                <div className="text-sm font-semibold text-black font-space-grotesk">TangentGC</div>
              </div>
            </div>

            {/* Row 3 */}
            {/* ZeroCO - Wide horizontal (3 cols, 1 row) */}
            <div className="md:col-span-3 flex flex-col">
              <Link
                href="/projects/project-2"
                className="relative group overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer aspect-[16/9]"
              >
                <div className="absolute top-2 left-2 md:top-3 md:left-3 z-10">
                  <div className="text-xs text-gray-500 font-mono mb-0.5">01.3.4</div>
                  <div className="text-xs text-gray-700 font-inter">Product Visuals and Animation</div>
                </div>
                <img
                  src="/Zeroco.png"
                  alt="ZeroCO"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-2">
                <div className="text-sm font-semibold text-black font-space-grotesk">ZeroCO</div>
              </div>
            </div>

            {/* Outer - Wide horizontal (3 cols, 1 row) */}
            <div className="md:col-span-3 flex flex-col">
              <Link
                href="/projects/outer"
                className="relative group overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer aspect-[16/9]"
              >
                <div className="absolute top-2 left-2 md:top-3 md:left-3 z-10">
                  <div className="text-xs text-gray-500 font-mono mb-0.5">01.3.6</div>
                  <div className="text-xs text-gray-700 font-inter">Product Visuals and Animation</div>
                </div>
                <img
                  src="/Outer (4).png"
                  alt="Outer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="mt-2">
                <div className="text-sm font-semibold text-black font-space-grotesk">Outer</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
