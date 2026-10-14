import Link from "next/link"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white/20 backdrop-blur-md border-t border-white/30 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] text-black py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold font-space-grotesk text-gray-900">About Yuv</h3>
            <p className="text-gray-800 leading-relaxed font-inter text-xs">
              I create 3D product visuals for ecommerce brands, with animation and motion design to bring product details to life.
            </p>
            <div>
              <Link
                href="/about"
                className="text-gray-900 hover:text-gray-600 transition-colors font-inter underline text-xs"
              >
                Learn more about me
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold font-space-grotesk text-gray-900">Contact</h3>
            <div className="space-y-1 font-inter text-xs">
              <div>
                <a
                  href="mailto:hello@designyuv.com"
                  className="text-gray-800 hover:text-gray-900 transition-colors block"
                >
                  hello@designyuv.com
                </a>
              </div>
              <a
                href="https://www.instagram.com/yuuuvvvvv/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-900 transition-colors block"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/yuv-raj-0abb66386/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-900 transition-colors block"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation & Social */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold font-space-grotesk text-gray-900">Connect</h3>
            <div className="space-y-1 font-inter text-xs">
              <div className="flex flex-col space-y-1">
                <Link href="/work" className="text-gray-800 hover:text-gray-900 transition-colors">
                  Work
                </Link>
                <Link href="/about" className="text-gray-800 hover:text-gray-900 transition-colors">
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 pt-3 border-t border-white/40">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
            <div className="font-inter text-gray-700 text-xs">© 2026 DesignYuv. All rights reserved.</div>
            <Link href="/#top" className="inline-flex items-center gap-1 text-gray-800 hover:text-gray-900 transition-colors font-inter text-xs">
              <ArrowUp size={14} aria-hidden="true" /> Back to top
            </Link>
            <div className="font-space-grotesk text-lg font-bold">
              <Link href="/" className="hover:text-gray-600 transition-colors text-gray-900">
                DesignYuv
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
