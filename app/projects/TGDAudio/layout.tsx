import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TGDAudio | 3D Product Visualization Case Study",
  description:
    "3D product visuals for TGDAudio - a case study in product visualization by DesignYuv.",
  alternates: {
    canonical: "https://www.designyuv.com/projects/TGDAudio",
  },
  openGraph: {
    title: "TGDAudio | 3D Product Visualization Case Study",
    description: "3D product visuals for TGDAudio by DesignYuv.",
    url: "https://www.designyuv.com/projects/TGDAudio",
    images: [{ url: "/TGD/Final.png", width: 1200, height: 630 }],
  },
}

export default function TGDAudioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
