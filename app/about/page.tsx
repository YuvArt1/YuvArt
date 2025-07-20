import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

export default function AboutPage() {
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
            <Link href="/about" className="text-black hover:text-gray-600 transition-colors font-semibold">
              About
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* About Content */}
      <main className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Large Image */}
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/5] bg-gray-300 rounded-lg overflow-hidden">
                <Image
                  src="/imah1.jpg"
                  alt="About Yuvraj Chavhan"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side - Details */}
            <div className="order-1 lg:order-2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 font-space-grotesk">About</h1>
              <div className="space-y-4 text-gray-900 leading-relaxed font-inter text-base">
                <p>
                  Hey — I’m a motion designer and visual storyteller. I run a small creative studio where I bring brands, stories, and ideas to life through animation, design, and a bit of controlled chaos.
                </p>
                <p>
                  I’ve been doing this for a while now — worked with all kinds of people, from early-stage startups to huge companies. But no matter who it's for, the goal’s the same: make things that feel good, look good, and actually connect.
                </p>
                <p>
                  I’m really into the details — how something moves, how it lands, how it makes you feel. Motion graphics, brand identity, UI moments, weird little animations that make you pause for a second — that’s my playground.
                </p>
                <p>
                  I’m flexible and willing to shift my working hours to best fit the needs of the project or team.
                </p>
                <p>
                  Also: I really love cats. Like... really.
                </p>
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-black mb-3 font-space-grotesk">What we do:</h3>
                <ul className="space-y-2">
                  <li>• Motion Graphics & Animation</li>
                  <li>• Brand Identity & Visual Design</li>
                  <li>• Digital Experiences & Interfaces</li>
                  <li>• Creative Direction & Strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
