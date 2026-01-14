import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white/20 backdrop-blur-md border-t border-white/30 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] text-black py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold font-space-grotesk text-gray-900">About Yuv</h3>
            <p className="text-gray-800 leading-relaxed font-inter text-xs">
              A creative studio specializing in motion design, animation, and visual storytelling. We help brands tell
              better stories through motion and detail.
            </p>
            <div>
              <Link
                href="/about"
                className="text-gray-900 hover:text-gray-600 transition-colors font-inter underline text-xs"
              >
                Learn more about us
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold font-space-grotesk text-gray-900">Contact</h3>
            <div className="space-y-1 font-inter text-xs">
              <div>
                <a href="mailto:designyuv16@gmail.com" className="text-gray-800 hover:text-gray-900 transition-colors block">
                  designyuv16@gmail.com
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/yuv_3d/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900 transition-colors block">
                  @yuv_3d
                </a>
              </div>
              <div>
                <a href="https://linkedin.com/in/yuv-raj-0abb66386" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900 transition-colors block">
                  linkedin.com/in/yuv-raj-0abb66386
                </a>
              </div>
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
                <Link href="/contact" className="text-gray-800 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 pt-3 border-t border-white/40">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
            <div className="font-inter text-gray-700 text-xs">© 2024 Yuv Studio. All rights reserved.</div>
            <div className="font-space-grotesk text-lg font-bold">
              <Link href="/" className="hover:text-gray-600 transition-colors text-gray-900">
                Yuv
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
