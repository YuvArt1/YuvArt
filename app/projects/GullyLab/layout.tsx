import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GullyLab | 3D Product Visualization Case Study",
  description:
    "3D product visuals for GullyLab — a case study in product animation and visualization by DesignYuv, 2026.",
  alternates: {
    canonical: "https://www.designyuv.com/projects/GullyLab",
  },
  openGraph: {
    title: "GullyLab | 3D Product Visualization Case Study",
    description: "3D product visuals for GullyLab by DesignYuv.",
    url: "https://www.designyuv.com/projects/GullyLab",
    images: [{ url: "/GullyLab (1).png", width: 1200, height: 630 }],
  },
}

export default function GullyLabLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
