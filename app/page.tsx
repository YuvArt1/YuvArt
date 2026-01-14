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

      {/* Main Content: Hero + Work Section */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Hero Section - Full Width */}
        <main className="w-full relative overflow-hidden pt-32 pb-16">
          {/* Video background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src="/web.webm" type="video/webm" />
              <source src="/web.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Overlay Content */}
          <div className="relative z-10 w-full flex items-center justify-center text-center px-8 py-32">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space-grotesk">
                Design. Animate. Captivate.
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-inter">
                Helping brands, designers, and studios tell better stories through motion and detail.
              </p>
            </div>
          </div>
        </main>

        {/* Work Section */}
        <section className="px-6 py-16 bg-white mb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-2xl font-bold text-black mb-12 tracking-wider font-space-grotesk">
              WORK
            </h2>

            {/* keep grid squarish; Mood appears among the top cards */}

            <div className="space-y-6">
              {/* Grid of projects (Mood first) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  href="/projects/Mood"
                  className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/MoodNz (4).png"
                    alt="Mood"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative text-white font-medium font-inter z-10">
                    Mood
                  </span>
                </Link>

                <Link
                  href="/projects/GullyLab"
                  className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/GullyLab (1).png"
                    alt="GullyLab"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative text-white font-medium font-inter z-10">
                    GullyLab
                  </span>
                </Link>

                <Link
                  href="/projects/project-4"
                  className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/HeroO (1).png"
                    alt="HearO"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative text-white font-medium font-inter z-10">
                    HearO
                  </span>
                </Link>

                <Link
                  href="/projects/project-1"
                  className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/Tangent.png"
                    alt="TangentGC"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative text-white font-medium font-inter z-10">
                    TangentGC
                  </span>
                </Link>

                <Link
                  href="/projects/project-2"
                  className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/Zeroco.png"
                    alt="ZeroCO"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative text-white font-medium font-inter z-10">
                    ZeroCO
                  </span>
                </Link>

                <Link
                  href="/projects/project-3"
                  className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/Portronics.jpg"
                    alt="Portronics"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative text-white font-medium font-inter z-10">
                    Portronics
                  </span>
                </Link>

                <Link
                  href="/projects/outer"
                  className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/Outer (4).png"
                    alt="Outer"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative text-white font-medium font-inter z-10">
                    Outer
                  </span>
                </Link>
              </div>

              {/* removed bottom Mood section to keep layout consistent */}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
