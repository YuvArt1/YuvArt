import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HearO 3D Product Visuals",
  description:
    "3D product visuals for HearO - a case study in product animation and visualization by DesignYuv, 2025.",
  alternates: {
    canonical: "https://www.designyuv.com/projects/HearO",
  },
  openGraph: {
    title: "HearO | 3D Product Visualization Case Study",
    description: "3D product visuals for HearO by DesignYuv.",
    url: "https://www.designyuv.com/projects/HearO",
    images: [{ url: "/HeroO (1).png", width: 1200, height: 630, alt: "HearO 3D product visualization" }],
  },
}

export default function HearOLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
