import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Footer from "@/components/footer"
import StudioHeader from "@/components/studio-header"

export const metadata: Metadata = {
  title: "About Yuvraj Chavhan",
  description:
    "Meet Yuvraj Chavhan, the motion designer behind DesignYuv, creating 3D animation, motion graphics, and product visuals.",
  alternates: {
    canonical: "https://www.designyuv.com/about",
  },
  openGraph: {
    title: "About Yuvraj Chavhan | Motion Designer",
    description: "Meet the motion designer behind DesignYuv and its 3D product visuals.",
    url: "https://www.designyuv.com/about",
    images: [{ url: "/aboutme.jpeg", width: 480, height: 600, alt: "Yuvraj Chavhan" }],
  },
}

export default function AboutPage() {
  return (
    <div className="studio-page">
      <StudioHeader currentPage="about" />
      <main>
        <section className="studio-about-page studio-section">
          <div className="studio-about-image">
            <Image src="/aboutme.jpeg" alt="Yuvraj Chavhan, motion designer and visual storyteller" fill priority sizes="(max-width: 760px) 100vw, 44vw" />
            <span>YUVRAJ CHAVHAN / DESIGNYUV</span>
          </div>
          <div className="studio-about-copy">
            <p className="studio-eyebrow">ABOUT THE STUDIO</p>
            <h1>Thoughtful visuals, made with movement and detail.</h1>
            <p className="studio-about-intro">I’m Yuvraj, a motion designer and visual storyteller. I run a small creative studio bringing products, brands, and ideas to life through animation and design.</p>
            <p>I work with teams ranging from early-stage startups to larger companies. The focus stays on the details: how a product looks, how a story moves, and how each visual fits the brief.</p>
            <div className="studio-about-focus">
              <span>FOCUS</span>
              <p>Product visualization</p>
              <p>Motion graphics and animation</p>
            </div>
            <div className="studio-about-actions">
              <Link className="studio-button studio-button-dark" href="/work">Explore the Work <ArrowUpRight size={17} aria-hidden="true" /></Link>
              <Link className="studio-text-link" href="/#contact">Discuss a project <ArrowUpRight size={16} aria-hidden="true" /></Link>
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
