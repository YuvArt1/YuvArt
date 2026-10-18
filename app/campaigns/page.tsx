import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import ProjectInquiryCTA from "@/components/project-inquiry-cta"
import StudioHeader from "@/components/studio-header"

export const metadata: Metadata = {
  title: "3D Advertising Campaign Concepts | Product Films and Animation",
  description:
    "Explore self-initiated 3D advertising campaign concepts by DesignYuv, including pre-launch product films and social media animation.",
  alternates: {
    canonical: "https://www.designyuv.com/campaigns",
  },
  openGraph: {
    title: "3D Advertising Campaign Concepts | DesignYuv",
    description:
      "Self-initiated product advertising concepts featuring 3D product films and animation.",
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
}

export default function CampaignsPage() {
  return (
    <div className="studio-page studio-project-detail">
      <StudioHeader currentPage="campaign" />
      <main>
        <section className="studio-work-page studio-section">
          <div className="studio-work-page-heading">
            <p className="studio-eyebrow">PORTFOLIO / CAMPAIGNS</p>
            <h1>Full Ad Campaigns</h1>
            <p>
              A collection of self-initiated advertising campaign concepts exploring 3D
              product visualization, pre-launch product films, and social-first animation.
              These are personal portfolio projects, not commissioned client campaigns.
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
                <span>Personal concept / Furniture film and animation</span>
                <span>01</span>
              </div>
              <h2><Link href="/projects/Outer">Outer</Link></h2>
              <p>
                A personal 3D furniture campaign concept exploring how to advertise a
                product before its SKU exists, then bring customization to life in a
                playful social animation.
              </p>
            </article>
          </div>

          <section className="max-w-3xl mt-16 mb-12">
            <h2 className="text-2xl font-bold text-black mb-4 font-space-grotesk">
              Product advertising made for your brand
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              3D advertising can help product teams prepare launch content before a
              physical SKU is ready. Product visualization makes it possible to present
              a design before production, while a product film can introduce the product
              and establish a visual direction for launch.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This independent concept also explores customization through playful
              animation designed for social media. The Outer project is a personal
              creative exploration inspired by the outdoor furniture brand, not official
              advertising or commissioned work.
            </p>
          </section>

          <ProjectInquiryCTA />
        </section>
      </main>
      <Footer />
    </div>
  )
}
