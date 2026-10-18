import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mood | 3D Furniture Product Visuals — Stills & Motion",
  description: "A product visual suite for Mood — pairing high-fidelity stills with short-form motion to explore color, texture, and material detail for a furniture bed.",
  alternates: { canonical: "https://www.designyuv.com/projects/Mood" },
  openGraph: {
    title: "Mood | 3D Furniture Product Visuals | DesignYuv",
    description: "High-fidelity stills and short-form motion for a furniture product — color, texture, and material explored through tactile lighting.",
    url: "https://www.designyuv.com/projects/Mood",
    images: [{ url: "/mood-product-visual-04.webp", width: 1200, height: 630, alt: "Mood furniture 3D product visualization" }],
  },
}

export default function MoodLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
