import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import StudioHeader from "@/components/studio-header"

export const metadata: Metadata = {
  title: { absolute: "3D Product Visualization Guides | DesignYuv" },
  description:
    "I share practical guides to 3D product visualization, ecommerce imagery, and product animation for electronics and furniture brands.",
  alternates: {
    canonical: "https://www.designyuv.com/insights",
  },
  openGraph: {
    title: "3D Product Visualization Guides | DesignYuv",
    description: "I share practical guides to 3D product visualization, ecommerce imagery, and product animation for electronics and furniture brands.",
    url: "https://www.designyuv.com/insights",
    images: [{ url: "/Portronics.webp", width: 1280, height: 1280, alt: "3D product render of the Portronics Luxcell Wireless Mini" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Product Visualization Guides | DesignYuv",
    description: "I share practical guides to 3D product visualization, ecommerce imagery, and product animation for electronics and furniture brands.",
    images: ["/Portronics.webp"],
  },
}

const articles = [
  {
    title: "Benefits of 3D Product Visualization for Ecommerce Brands",
    href: "/blog/benefits-3d-product-visualization-ecommerce",
    description:
      "I explain how reusable product content, pre-launch visuals, interactive 3D, and animation can support ecommerce.",
    category: "3D PRODUCT VISUALIZATION",
    date: "OCT 17, 2026",
    image: "/Portronics.webp",
    alt: "Photorealistic 3D product render of a Portronics power bank",
  },
  {
    title: "3D Product Visualization for Ecommerce: A Practical Guide",
    href: "/blog/3d-product-visualization-ecommerce",
    description:
      "I cover ecommerce product imagery, animation, available evidence, and ways to measure product visuals.",
    category: "ECOMMERCE PRODUCT CONTENT",
    date: "OCT 14, 2026",
    image: "/TGD/Final.webp",
    alt: "3D product visualization of a TDG Audio speaker",
  },
] as const

export default function InsightsPage() {
  return (
    <div className="studio-page">
      <StudioHeader currentPage="insights" />
      <main>
        <section className="studio-work-page studio-section">
          <div className="studio-work-page-heading">
            <p className="studio-eyebrow">DESIGNYUV / INSIGHTS</p>
            <h1>Ideas for better product content.</h1>
            <p>
              Practical perspectives on 3D product visualization, ecommerce imagery,
              product animation, and the content that helps brands present their products.
            </p>
          </div>
          <div className="studio-archive-grid studio-insights-grid">
            {articles.map((article) => (
              <article className="studio-project" key={article.href}>
                <Link href={article.href} className="studio-project-image">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  />
                  <span className="studio-project-open" aria-hidden="true"><span>↗</span></span>
                </Link>
                <div className="studio-project-meta">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h2><Link href={article.href}>{article.title}</Link></h2>
                <p>{article.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
