import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Footer from "@/components/footer"
import StudioHeader from "@/components/studio-header"

export const metadata: Metadata = {
  title: { absolute: "About Yuvraj Chauhan | 3D Product Visualization" },
  description:
    "I’m Yuvraj Chauhan, and I create 3D product imagery and animation for electronics and furniture brands.",
  alternates: {
    canonical: "https://www.designyuv.com/about",
  },
  openGraph: {
    title: "About Yuvraj Chauhan | 3D Product Visualization",
    description: "I create 3D product imagery and animation for electronics and furniture brands.",
    url: "https://www.designyuv.com/about",
    images: [{ url: "/aboutme.webp", width: 480, height: 600, alt: "Yuvraj Chauhan, 3D product visualization artist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Yuvraj Chauhan | 3D Product Visualization",
    description: "I create 3D product imagery and animation for electronics and furniture brands.",
    images: ["/aboutme.webp"],
  },
}

export default function AboutPage() {
  return (
    <div className="studio-page">
      <StudioHeader currentPage="about" />
      <main>
        <section className="studio-about-page studio-section">
          <div className="studio-about-image">
            <Image src="/aboutme.webp" alt="Yuvraj Chauhan, 3D product visualization artist" fill priority sizes="(max-width: 760px) 100vw, 44vw" />
            <span>YUVRAJ CHAUHAN / DESIGNYUV</span>
          </div>
          <div className="studio-about-copy">
            <p className="studio-eyebrow">ABOUT ME</p>
            <h1>I create detailed 3D product visuals with movement.</h1>
            <p className="studio-about-intro">I’m Yuvraj Chauhan, a 3D product visualization artist creating ecommerce imagery and animation for electronics and furniture brands.</p>
            <p>I focus on product visualization, with motion design and animation supporting each product story and creative brief.</p>
            <div className="studio-about-focus">
              <span>FOCUS</span>
              <p>Product visualization</p>
              <p>Motion graphics and animation</p>
            </div>
            <div className="studio-about-actions">
              <Link className="studio-button studio-button-dark" href="/work">See my work <ArrowUpRight size={17} aria-hidden="true" /></Link>
              <Link className="studio-text-link" href="/#contact">Tell me about a project <ArrowUpRight size={16} aria-hidden="true" /></Link>
            </div>
            <div className="studio-about-socials">
              <a href="https://www.instagram.com/yuuuvvvvv/" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/yuv-raj-0abb66386/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
