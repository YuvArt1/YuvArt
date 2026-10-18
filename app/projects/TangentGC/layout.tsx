import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "TangentGC Packaging Animation | DesignYuv" },
  description:
    "I created controlled packaging animations that reveal the TangentGC box construction one movement at a time.",
  alternates: {
    canonical: "https://www.designyuv.com/projects/TangentGC",
  },
  openGraph: {
    title: "TangentGC Packaging Animation | DesignYuv",
    description: "I created controlled packaging animations that reveal the TangentGC box construction one movement at a time.",
    url: "https://www.designyuv.com/projects/TangentGC",
    images: [{ url: "/Tangent.webp", width: 1200, height: 630, alt: "TangentGC product visualization" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TangentGC Packaging Animation | DesignYuv",
    description: "I created controlled packaging animations that reveal the TangentGC box construction one movement at a time.",
    images: ["/Tangent.webp"],
  },
}

export default function TangentGCLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
