import Link from "next/link"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 relative">
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

      {/* Main Content: Work Section */}
      <div className="flex-1 flex flex-col">
        {/* Work Section - Top */}
        <section className="px-6 py-16 pt-20 bg-white\">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-2xl font-bold text-black mb-12 tracking-wider font-space-grotesk">
              WORK
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <Link
                  href="/projects/Fable"
                  className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/Fable.png"
                    alt="Fable"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
                <span className="mt-3 text-black font-medium font-space-grotesk">
                  Fable
                </span>
              </div>

              <div className="flex flex-col">
                <Link
                  href="/projects/Mood"
                  className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/MoodNz (4).png"
                    alt="Mood"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
                <span className="mt-3 text-black font-medium font-space-grotesk">
                  Mood
                </span>
              </div>

              <div className="flex flex-col">
                <Link
                  href="/projects/GullyLab"
                  className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/GullyLab (1).png"
                    alt="GullyLab"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
                <span className="mt-3 text-black font-medium font-space-grotesk">
                  GullyLab
                </span>
              </div>

              <div className="flex flex-col">
                <Link
                  href="/projects/HearO"
                  className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/HeroO (1).png"
                    alt="HearO"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
                <span className="mt-3 text-black font-medium font-space-grotesk">
                  HearO
                </span>
              </div>

              <div className="flex flex-col">
                <Link
                  href="/projects/TangentGC"
                  className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/Tangent.png"
                    alt="TangentGC"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
                <span className="mt-3 text-black font-medium font-space-grotesk">
                  TangentGC
                </span>
              </div>

              <div className="flex flex-col">
                <Link
                  href="/projects/ZeroCO"
                  className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/Zeroco.png"
                    alt="ZeroCO"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
                <span className="mt-3 text-black font-medium font-space-grotesk">
                  ZeroCO
                </span>
              </div>

              <div className="flex flex-col">
                <Link
                  href="/projects/Portronics"
                  className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/Portronics.jpg"
                    alt="Portronics"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
                <span className="mt-3 text-black font-medium font-space-grotesk">
                  Portronics
                </span>
              </div>

              <div className="flex flex-col">
                <Link
                  href="/projects/Outer"
                  className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/Outer (4).png"
                    alt="Outer"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
                <span className="mt-3 text-black font-medium font-space-grotesk">
                  Outer
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
