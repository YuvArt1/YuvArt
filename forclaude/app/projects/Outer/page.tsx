import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import ProjectInquiryCTA from "@/components/project-inquiry-cta"
import StudioHeader from "@/components/studio-header"

const videos = [
  {
    id: "1128834963",
    title: "Pre-launch campaign film",
    description:
      "A product often needs advertising before a production-ready SKU exists. This personal concept explores how 3D product visualization can present a design before it is physically produced, giving a brand a launch-ready campaign film without waiting for product photography.",
  },
  {
    id: "1128940767",
    title: "Customization animation",
    description:
      "Customizable products can be difficult to communicate in a single still. This short, playful animation explores how 3D can bring product options to life in an engaging format made for social media.",
  },
] as const

const projectImages = [
  { src: "/this%20is%20it2nd.png", alt: "Outer furniture campaign detail still" },
  { src: "/this%20is%20it3nd.png", alt: "Outer furniture campaign close-up still" },
  { src: "/this%20is%20it4nd.png", alt: "Outer furniture campaign alternate still" },
] as const

export default function OuterProjectPage() {
  return (
    <div className="studio-page studio-project-detail">
      <StudioHeader currentPage="campaign" />
      <main>
        <div className="max-w-5xl mx-auto">
          <Link
            href="/campaigns"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8 font-inter"
          >
            ← Back to campaigns
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold text-black mb-5 font-space-grotesk">Outer</h1>
          <p className="text-gray-700 leading-relaxed max-w-3xl mb-10">
            I created this personal 3D furniture campaign concept inspired by Outer, the
            outdoor furniture brand. It is independent portfolio work, not a commissioned,
            affiliated, or endorsed campaign.
          </p>

          <Image
            src="/this%20is%20it.png"
            alt="Personal 3D furniture campaign concept inspired by Outer outdoor furniture"
            width={4032}
            height={2268}
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="w-full h-auto object-cover mb-12"
          />

          <section className="max-w-3xl mb-12" aria-labelledby="outer-problem-heading">
            <h2 id="outer-problem-heading" className="text-3xl md:text-4xl font-bold text-black mb-5 font-space-grotesk">
              How I visualize a product before launch.
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              I explored how 3D product visualization can present a design before it is
              physically produced and help prepare launch advertising.
            </p>
            <h3 className="text-xl font-bold text-black mb-3 font-space-grotesk">
              I make customization fun to explore.
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              I used playful animation to explore customization and show product options
              for social media.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I based this personal concept on Outer&apos;s focus on outdoor furniture and
              bringing people closer to nature and one another. It is independent creative
              work, not official Outer advertising. Read{" "}
              <a
                href="https://liveouter.com/pages/about"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Outer&apos;s own story
              </a>
              .
            </p>
          </section>

          <div className="studio-outer-videos">
            {videos.map((video) => (
              <section key={video.id} aria-labelledby={`outer-video-${video.id}`}>
                <h2 id={`outer-video-${video.id}`} className="text-2xl font-bold text-black mb-3 font-space-grotesk">
                  {video.title}
                </h2>
                <p className="text-gray-700 leading-relaxed max-w-3xl mb-5">{video.description}</p>
                <div className="studio-outer-video">
                  <iframe
                    src={`https://player.vimeo.com/video/${video.id}?badge=0&autopause=0&player_id=0&app_id=58479`}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title={video.title}
                    allowFullScreen
                  />
                </div>
              </section>
            ))}
          </div>

          <section className="mb-12" aria-labelledby="outer-gallery-heading">
            <h2 id="outer-gallery-heading" className="text-2xl font-bold text-black mb-6 font-space-grotesk">
              Campaign stills
            </h2>
            <div className="studio-outer-gallery">
              {projectImages.map((image) => (
                <div className="studio-outer-gallery-item" key={image.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 480px"
                  />
                </div>
              ))}
            </div>
          </section>

          <ProjectInquiryCTA />
        </div>
      </main>
      <Footer />
    </div>
  )
}
