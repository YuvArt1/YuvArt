import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TDG Audio Product Visuals",
  description:
    "3D product visuals for TDG Audio - a case study in product visualization by DesignYuv.",
  alternates: {
    canonical: "https://www.designyuv.com/projects/TGDAudio",
  },
  openGraph: {
    title: "TDG Audio | 3D Product Visualization Case Study",
    description: "3D product visuals for TDG Audio by DesignYuv.",
    url: "https://www.designyuv.com/projects/TGDAudio",
    images: [{ url: "/TGD/Final.webp", width: 1200, height: 630, alt: "TDG Audio product visualization" }],
  },
}

export default function TDGAudioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
