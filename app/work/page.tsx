import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"
import StudioHeader from "@/components/studio-header"
import { projectAssets } from "@/lib/project-assets"

export const metadata: Metadata = {
  title: { absolute: "Selected Work | 3D Product Visualization by DesignYuv" },
  description:
    "I create 3D product imagery and animation for electronics and furniture brands. Explore selected project work.",
  alternates: {
    canonical: "https://www.designyuv.com/work",
  },
  openGraph: {
    title: "Selected Work | 3D Product Visualization by DesignYuv",
    description: "I create 3D product imagery and animation for electronics and furniture brands. Explore selected project work.",
    url: "https://www.designyuv.com/work",
    images: [{ url: "/TGD/Final.webp", width: 1200, height: 630, alt: "Selected DesignYuv work" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Work | 3D Product Visualization by DesignYuv",
    description: "I create 3D product imagery and animation for electronics and furniture brands.",
    images: ["/TGD/Final.webp"],
  },
}

export default function WorkPage() {
  return (
    <div className="studio-page">
      <StudioHeader currentPage="work" />
      <main>
        <section className="studio-work-page studio-section">
          <div className="studio-work-page-heading">
            <p className="studio-eyebrow">SELECTED WORK</p>
            <h1>I make product visuals, motion, and ideas tangible.</h1>
            <p>I create product imagery and animation for electronics and furniture brands. Each project page shows my visuals and creative choices.</p>
          </div>
          <nav className="studio-work-browse" aria-label="Browse work by format">
            <Link className="studio-button studio-button-dark" href="/ecommerce-product-imagery">
              Browse product imagery <span aria-hidden="true">↗</span>
            </Link>
            <Link className="studio-button studio-button-light" href="/3d-product-animations">
              Watch product animations <span aria-hidden="true">↗</span>
            </Link>
          </nav>
          <div className="studio-archive-grid">
            {projectAssets.map((project, index) => (
              <article className="studio-project" key={project.name}>
                <Link href={project.href} className="studio-project-image">
                  <Image src={project.image} alt={project.alt} fill sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw" />
                  <span className="studio-project-open" aria-hidden="true"><span>↗</span></span>
                </Link>
                <div className="studio-project-meta"><span>{project.type}</span><span>{String(index + 1).padStart(2, "0")}</span></div>
                <h2><Link href={project.href}>{project.name}</Link></h2>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
          <div className="studio-work-endnote">
            <p>I’m available for product and launch projects.</p>
            <div className="studio-work-endnote-links">
              <Link className="studio-inline-link" href="/blog/3d-product-visualization-ecommerce">
                Read the 3D product visualization guide <span aria-hidden="true">↗</span>
              </Link>
              <Link className="studio-inline-link" href="/blog/benefits-3d-product-visualization-ecommerce">
                Read about the benefits of 3D product visualization <span aria-hidden="true">↗</span>
              </Link>
              <Link className="studio-inline-link" href="/#contact">Tell me about your next project <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
