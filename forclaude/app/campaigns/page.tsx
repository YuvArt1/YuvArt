import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import ProjectInquiryCTA from "@/components/project-inquiry-cta"
import StudioHeader from "@/components/studio-header"

export const metadata: Metadata = {
  title: { absolute: "3D Advertising Campaign Concepts | Product Films and Animation" },
  description:
    "I create self-initiated 3D advertising concepts, including pre-launch product films and social animation for electronics and furniture brands.",
  alternates: {
    canonical: "https://www.designyuv.com/campaigns",
  },
  openGraph: {
    title: "3D Advertising Campaign Concepts | Product Films and Animation",
    description: "I create self-initiated 3D advertising concepts, including pre-launch product films and social animation for electronics and furniture brands.",
    url: "https://www.designyuv.com/campaigns",
    images: [
      {
        url: "/this%20is%20it.png",
        width: 4032,
        height: 2268,
        alt: "Outer furniture campaign visual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Advertising Campaign Concepts | Product Films and Animation",
    description: "I create self-initiated 3D advertising concepts, including pre-launch product films and social animation for electronics and furniture brands.",
    images: ["/this%20is%20it.png"],
  },
}

export default function CampaignsPage() {
  return (
    <div className="studio-page studio-project-detail">
      <StudioHeader currentPage="campaign" />
      <main>
        <section className="studio-work-page studio-section">
          <div className="studio-work-page-heading">
            <p className="studio-eyebrow">PORTFOLIO / CAMPAIGNS</p>
            <h1>3D Campaign Concepts</h1>
            <p>
              I create personal campaign concepts exploring 3D product visualization,
              pre-launch product films, and social-first animation. These concepts are
              independent portfolio work, not commissioned campaigns.
            </p>
          </div>

          <div className="studio-archive-grid">
            <article className="studio-project">
              <Link href="/projects/Outer" className="studio-project-image">
                <Image
                  src="/this%20is%20it.png"
                  alt="Outer dining table in a warm campaign setting"
                  fill
                  sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw"
                />
                <span className="studio-project-open" aria-hidden="true"><span>↗</span></span>
              </Link>
              <div className="studio-project-meta">
                <span>My personal concept / Furniture film and animation</span>
                <span>01</span>
              </div>
              <h2><Link href="/projects/Outer">Outer</Link></h2>
              <p>I created a personal 3D furniture campaign concept exploring pre-launch product visuals and customization animation.</p>
            </article>
          </div>

          <section className="max-w-3xl mt-16 mb-12">
            <h2 className="text-2xl font-bold text-black mb-4 font-space-grotesk">
              How I approach product advertising
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I use 3D advertising concepts to explore launch content before a physical
              product is ready. A product film can introduce a design and establish a
              visual direction for launch.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I also explore customization through playful animation for social media.
              My Outer concept is an independent creative exploration inspired by an
              outdoor furniture brand, not official advertising or commissioned work.
            </p>
          </section>

          <ProjectInquiryCTA />
        </section>
      </main>
      <Footer />
    </div>
  )
}
