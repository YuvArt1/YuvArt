import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import StudioHeader from "@/components/studio-header"

export const metadata: Metadata = {
  title: "Insights on 3D Product Visualization and Ecommerce",
  description:
    "Practical guides to 3D product visualization, ecommerce imagery, product animation, and creating better product content.",
  alternates: {
    canonical: "https://www.designyuv.com/insights",
  },
  openGraph: {
    title: "Insights | DesignYuv",
    description:
      "Guides to 3D product visualization, ecommerce imagery, and product animation.",
    url: "https://www.designyuv.com/insights",
  },
}

const articles = [
  {
    title: "Benefits of 3D Product Visualization for Ecommerce Brands",
    href: "/blog/benefits-3d-product-visualization-ecommerce",
    description:
      "Explore the benefits of 3D product visualization for ecommerce, from reusable product content and pre-launch visuals to interactive 3D and animation.",
    category: "3D PRODUCT VISUALIZATION",
    date: "OCT 17, 2026",
    image: "/Portronics.webp",
    alt: "Photorealistic 3D product render of a Portronics power bank",
  },
  {
    title: "Does 3D Product Visualization Improve Ecommerce Sales?",
    href: "/blog/3d-product-visualization-ecommerce",
    description:
      "A practical look at ecommerce product imagery, animation, evidence, and how brands can measure the results of their visual content.",
    category: "ECOMMERCE PRODUCT CONTENT",
    date: "PRODUCT GUIDE",
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
