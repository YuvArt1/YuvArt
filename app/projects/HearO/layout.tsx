import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HearO | 3D Product Visualization for Consumer Audio",
  description: "Polished 3D product visuals for HearO — a consumer audio launch. Controlled angles and studio lighting designed for ecommerce listings and social placements.",
  alternates: { canonical: "https://www.designyuv.com/projects/HearO" },
  openGraph: {
    title: "HearO | Consumer Audio 3D Product Visualization | DesignYuv",
    description: "Controlled angles and studio lighting for a consumer audio launch — ecommerce and social-ready visuals.",
    url: "https://www.designyuv.com/projects/HearO",
    images: [{ url: "/hearo-product-visual-01.webp", width: 1200, height: 630, alt: "HearO consumer audio 3D product visualization" }],
  },
}

export default function HearOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
