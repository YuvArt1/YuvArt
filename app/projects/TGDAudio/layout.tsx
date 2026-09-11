import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TGDAudio Product Visuals",
  description:
    "3D product visuals for TGDAudio - a case study in product visualization by DesignYuv.",
  alternates: {
    canonical: "https://www.designyuv.com/projects/TGDAudio",
  },
  openGraph: {
    title: "TGDAudio | 3D Product Visualization Case Study",
    description: "3D product visuals for TGDAudio by DesignYuv.",
    url: "https://www.designyuv.com/projects/TGDAudio",
    images: [{ url: "/TGD/Final.png", width: 1200, height: 630, alt: "TGD Audio product visualization" }],
  },
}

export default function TGDAudioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
