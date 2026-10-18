import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Portronics Product Animation | DesignYuv" },
  description:
    "I animated the Portronics Luxcell Wireless Mini, showing its product breakdown, charging feature, and colour options.",
  alternates: {
    canonical: "https://www.designyuv.com/projects/Portronics",
  },
  openGraph: {
    title: "Portronics Product Animation | DesignYuv",
    description: "I animated the Portronics Luxcell Wireless Mini, showing its product breakdown, charging feature, and colour options.",
    url: "https://www.designyuv.com/projects/Portronics",
    images: [{ url: "/Portronics.webp", width: 1200, height: 630, alt: "Portronics product visualization" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portronics Product Animation | DesignYuv",
    description: "I animated the Portronics Luxcell Wireless Mini, showing its product breakdown, charging feature, and colour options.",
    images: ["/Portronics.webp"],
  },
}

export default function PortronicsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
