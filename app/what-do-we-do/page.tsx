import Link from "next/link"
import Footer from "@/components/footer"

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <header className="fixed top-0 left-0 w-full bg-white z-20 px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-2xl font-bold text-black hover:text-gray-600 transition-colors font-space-grotesk"
          >
            Yuv
          </Link>
          <div className="flex items-center space-x-4 md:space-x-8 font-inter">
            <Link href="/what-do-we-do" className="text-black hover:text-gray-600 transition-colors font-semibold">
              What We Do
            </Link>
            <Link href="/about" className="text-black hover:text-gray-600 transition-colors">
              About
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

      <main className="px-6 py-12 pt-28 bg-white">
        <div className="max-w-4xl mx-auto">
          <section className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-black font-space-grotesk leading-tight">
              Design that helps your business stand out and get noticed.
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-inter">
              I help businesses turn weak visual communication into clear, engaging and memorable design through web visual content, social media content, motion design and creative visuals.
            </p>

            <a
              href="https://cal.com/yuv-raj-pao2g5/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Let&apos;s Talk
            </a>
          </section>

          <section className="mt-16 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black font-space-grotesk">
              Is your business struggling to communicate visually?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black font-space-grotesk">
                  Your brand looks inconsistent
                </h3>
                <p className="mt-2 text-gray-700 font-inter leading-relaxed">
                  Different visuals, styles and messaging can make your business look unclear and forgettable.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black font-space-grotesk">
                  Your content isn&apos;t grabbing attention
                </h3>
                <p className="mt-2 text-gray-700 font-inter leading-relaxed">
                  Good ideas can get ignored when the visuals don&apos;t communicate quickly or stand out from competitors.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black font-space-grotesk">
                  Your visual presence feels outdated
                </h3>
                <p className="mt-2 text-gray-700 font-inter leading-relaxed">
                  Your web visuals and social media should represent the quality of your business and build trust.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black font-space-grotesk">
              Turning business problems into clear visual experiences.
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 font-inter">
              I work with businesses and brands to create visual content that communicates clearly, captures attention and gives people a stronger reason to engage with your brand.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black font-space-grotesk">
                  Web Visual Content
                </h3>
                <p className="mt-2 text-gray-700 font-inter leading-relaxed">
                  Clear, engaging visuals that help your business communicate across digital platforms.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black font-space-grotesk">
                  Social Media Content
                </h3>
                <p className="mt-2 text-gray-700 font-inter leading-relaxed">
                  Visual content designed to stop the scroll and communicate your brand effectively.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black font-space-grotesk">
                  Motion & Visual Design
                </h3>
                <p className="mt-2 text-gray-700 font-inter leading-relaxed">
                  Motion and creative visuals that make ideas easier to understand and harder to ignore.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
