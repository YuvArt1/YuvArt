import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

export default function Project1Page() {
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
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 font-space-grotesk">TangentGC</h1>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 font-inter">
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Year</h3>
              <p className="text-gray-700">2026</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Services</h3>
              <p className="text-gray-700">Motion Graphics, Animation</p>
            </div>
          </div>

          {/* Project Image (replace with embedded video) */}
          <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden mb-12">
            <iframe
              src="https://player.vimeo.com/video/1102747582?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full"
              title="TangentGC Main animation"
            ></iframe>
          </div>

          {/* Project Description */}
          <div className="prose prose-lg max-w-none font-inter">
            <p className="text-gray-700 leading-relaxed mb-6">
              This one started as a simple idea. The product looked great in a still, but I wanted to see it move. No big story or concept behind it — just the urge to let the box open on its own and see how that would feel.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The animation starts with a downward flap, then opens sideways, clean and controlled. Everything reveals itself one step at a time, matching the minimal, intentional vibe of the packaging.
            </p>

            <p className="text-gray-700 leading-relaxed">
              There wasn't a fixed narrative here. The motion was the point — letting the product speak through how it unfolds. Just about keeping it simple, smooth, and true to the way it was designed.
            </p>
          </div>

          {/* Second embedded video below text */}
          <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden mb-12 mt-8">
            <iframe
              src="https://player.vimeo.com/video/1102748531?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full"
              title="TangentGC 2"
            ></iframe>
          </div>

          {/* Additional Project Description */}
          <div className="prose prose-lg max-w-none font-inter mt-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              I wanted to do something simple but warm, not just show the packaging, but give it a little soul.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The idea was to make it feel like a family photo. Each box drops in from above, lands gently, and finds its spot like it knows exactly where it belongs. One by one, they come together, and suddenly, it feels like they're all posing for a portrait. Still, quiet, together.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              It's a small story about objects but also about rhythm, balance, and capturing a sense of connection.
            </p>

            <p className="text-gray-700 leading-relaxed">
              I kept the animation minimal and soft to let the packaging speak for itself. The lighting is clean, the mood calm, and the movement just enough to give it life.
            </p>
          </div>

          {/* Project Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-2 gap-8 mb-12">
            <Link href="/projects/HearO" className="text-left hover:text-gray-600 transition-colors">
              <p className="text-xs text-gray-600 font-inter mb-2">← PREVIOUS</p>
              <p className="text-lg font-bold text-black font-space-grotesk">HearO</p>
            </Link>
            <Link href="/projects/ZeroCO" className="text-right hover:text-gray-600 transition-colors">
              <p className="text-xs text-gray-600 font-inter mb-2">NEXT →</p>
              <p className="text-lg font-bold text-black font-space-grotesk">ZeroCO</p>
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
  )
}
