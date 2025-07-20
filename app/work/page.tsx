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
      <main className="px-6 py-32 bg-white flex-1 mb-16">
        <div className="max-w-7xl mx-auto">
          {/* Left-aligned title */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-12 font-space-grotesk">Work</h1>

          {/* Work Section */}
          <div className="space-y-6">
            {/* Top row - 3 equal cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/projects/project-1"
                className="relative aspect-[4/3] flex items-center justify-center rounded-sm overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <img
                  src="/Tangent.png"
                  alt="TangentGC"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black/20 z-0" />
                <span className="relative text-white font-medium font-inter z-10">TangentGC</span>
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
                <div className="absolute inset-0 bg-black/20 z-0" />
                <span className="relative text-white font-medium font-inter z-10">ZeroCO</span>
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
                <div className="absolute inset-0 bg-black/20 z-0" />
                <span className="relative text-white font-medium font-inter z-10">Portronics</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
