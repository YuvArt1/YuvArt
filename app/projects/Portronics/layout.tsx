import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portronics Luxcell | 3D Product Animation for Electronics",
  description: "Social-first 3D product animation for the Portronics Luxcell Wireless Mini — feature reveal, multi-device charging demo, and color-variant sequence for Instagram.",
  alternates: { canonical: "https://www.designyuv.com/projects/Portronics" },
  openGraph: {
    title: "Portronics Luxcell Wireless Mini | 3D Product Animation | DesignYuv",
    description: "Feature reveal, charging demo, and color-variant sequence for the Portronics Luxcell Wireless Mini — designed for Instagram.",
    url: "https://www.designyuv.com/projects/Portronics",
    images: [{ url: "/Portronics2.webp", width: 1200, height: 630, alt: "Portronics Luxcell Wireless Mini 3D product animation" }],
  },
}

export default function PortronicsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
