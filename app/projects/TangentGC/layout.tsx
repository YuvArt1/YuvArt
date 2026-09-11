import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TangentGC Product Visuals",
  description:
    "3D product visuals for TangentGC - a case study in product visualization by DesignYuv.",
  alternates: {
    canonical: "https://www.designyuv.com/projects/TangentGC",
  },
  openGraph: {
    title: "TangentGC | 3D Product Visualization Case Study",
    description: "3D product visuals for TangentGC by DesignYuv.",
    url: "https://www.designyuv.com/projects/TangentGC",
    images: [{ url: "/Tangent.png", width: 1200, height: 630, alt: "TangentGC product visualization" }],
  },
}

export default function TangentGCLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
