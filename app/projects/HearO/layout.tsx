import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "HearO Product Visuals | DesignYuv" },
  description:
    "I created product visuals for HearO with controlled angles and polished lighting for launch and social placements.",
  alternates: {
    canonical: "https://www.designyuv.com/projects/HearO",
  },
  openGraph: {
    title: "HearO Product Visuals | DesignYuv",
    description: "I created product visuals for HearO with controlled angles and polished lighting for launch and social placements.",
    url: "https://www.designyuv.com/projects/HearO",
    images: [{ url: "/hearo-product-visual-01.webp", width: 1200, height: 630, alt: "HearO 3D product visualization" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HearO Product Visuals | DesignYuv",
    description: "I created product visuals for HearO with controlled angles and polished lighting for launch and social placements.",
    images: ["/hearo-product-visual-01.webp"],
  },
}

export default function HearOLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
