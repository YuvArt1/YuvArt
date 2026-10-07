import Link from "next/link";
import Script from "next/script";
import Footer from "@/components/footer";

export default function FoldenLaneProjectPage() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <header className="fixed left-0 top-0 z-20 w-full bg-transparent px-6 py-4">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="font-space-grotesk text-2xl font-bold text-black transition-colors hover:text-gray-600">
            Yuv
          </Link>
          <div className="flex items-center space-x-4 font-inter md:space-x-8">
            <Link href="/about" className="text-black transition-colors hover:text-gray-600">About</Link>
            <a
              href="https://cal.com/yuv-raj-pao2g5/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-black px-4 py-2 font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Book a Call
            </a>
          </div>
        </nav>
      </header>

      <main className="bg-white px-6 py-16 pt-20">
        <div className="mx-auto max-w-4xl">
          <Link href="/work" className="mb-8 inline-flex font-inter text-gray-600 transition-colors hover:text-black">
            ← Back to Work
          </Link>

          <div className="mb-6 flex flex-wrap items-center gap-4">
            <h1 className="font-space-grotesk text-4xl font-bold text-black md:text-6xl">Folden Lane</h1>
            <span className="rounded-sm border border-gray-300 px-3 py-1 font-inter text-xs font-medium uppercase tracking-wide text-gray-600">
              Work in progress
            </span>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-8 font-inter sm:grid-cols-2">
            <div>
              <h2 className="mb-2 font-space-grotesk font-semibold text-black">Type</h2>
              <p className="text-gray-700">Web content</p>
            </div>
            <div>
              <h2 className="mb-2 font-space-grotesk font-semibold text-black">Status</h2>
              <p className="text-gray-700">In progress</p>
            </div>
          </div>

          <div className="relative mb-8 aspect-video w-full overflow-hidden bg-black">
            <iframe
              src="https://player.vimeo.com/video/1233846508?badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Folden Lane LinkedIn video"
            />
          </div>

          <div className="relative aspect-square w-full overflow-hidden bg-black">
            <iframe
              src="https://player.vimeo.com/video/1233846509?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Folden Lane web content"
            />
          </div>
          <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />
        </div>
      </main>
      <Footer />
    </div>
  );
}