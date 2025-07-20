import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Header */}
      <header className="bg-white px-6 py-4">
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
            <Link href="/contact" className="text-black hover:text-gray-600 transition-colors font-semibold">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Contact Content */}
      <main className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden z-2">
                <Image
                  src="/Image2.jpeg"
                  alt="Contact Yuv"
                  width={640}
                  height={480}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side - Contact Links & Details */}
            <div className="order-1 lg:order-2 space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold text-black font-space-grotesk">Contact</h1>

              <div className="space-y-6 font-inter">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ready to bring your vision to life? Let's start a conversation about your next project.
                </p>

                {/* Email */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-black font-space-grotesk">Email</h3>
                  <a
                    href="mailto:designyuv16@gmail.com"
                    className="text-gray-700 hover:text-black transition-colors text-lg"
                  >
                    designyuv16@gmail.com
                  </a>
                </div>

                {/* Instagram */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-black font-space-grotesk">Instagram</h3>
                  <a
                    href="https://www.instagram.com/yuv_3d/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition-colors text-lg"
                  >
                    @yuv_3d
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
