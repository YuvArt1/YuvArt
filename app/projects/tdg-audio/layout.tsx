import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "TDG Audio Product Visuals | DesignYuv" },
  description:
    "I created a TDG Audio product animation and stills to present the product from multiple angles.",
  alternates: {
    canonical: "https://www.designyuv.com/projects/tdg-audio",
  },
  openGraph: {
    title: "TDG Audio Product Visuals | DesignYuv",
    description: "I created a TDG Audio product animation and stills to present the product from multiple angles.",
    url: "https://www.designyuv.com/projects/tdg-audio",
    images: [{ url: "/TGD/Final.webp", width: 1200, height: 630, alt: "TDG Audio product visualization" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TDG Audio Product Visuals | DesignYuv",
    description: "I created a TDG Audio product animation and stills to present the product from multiple angles.",
    images: ["/TGD/Final.webp"],
  },
}

export default function TDGAudioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
