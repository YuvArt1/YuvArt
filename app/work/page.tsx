import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"
import StudioHeader from "@/components/studio-header"
import { projectAssets } from "@/lib/project-assets"

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Explore selected 3D product animation, motion design, and visual content projects by DesignYuv.",
  alternates: {
    canonical: "https://www.designyuv.com/work",
  },
  openGraph: {
    title: "Selected Work | DesignYuv",
    description: "Selected product visualization, animation, and design projects by DesignYuv.",
    url: "https://www.designyuv.com/work",
    images: [{ url: "/TGD/Final.webp", width: 1200, height: 630, alt: "Selected DesignYuv work" }],
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
            <h1>Product visuals, motion, and ideas made tangible.</h1>
            <p>A collection of product and brand projects. Open a project to see its visuals and the thinking behind them.</p>
          </div>
          <div className="studio-archive-grid">
            {projectAssets.map((project, index) => (
              <article className="studio-project" key={project.name}>
                <Link href={project.href} className="studio-project-image">
                  <Image src={project.image} alt={project.alt} fill sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw" />
                  <span className="studio-project-open" aria-hidden="true"><span>↗</span></span>
                </Link>
                <div className="studio-project-meta"><span>{project.description.split(".")[0]}</span><span>{String(index + 1).padStart(2, "0")}</span></div>
                <h2><Link href={project.href}>{project.name}</Link></h2>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
          <div className="studio-work-endnote">
            <p>Have a product or launch in mind?</p>
            <Link className="studio-inline-link" href="/#contact">Discuss your next project <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
