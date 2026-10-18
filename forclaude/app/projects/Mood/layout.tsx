import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Mood Bed Product Visuals and Animation | DesignYuv" },
  description:
    "I created 3D furniture visuals and animation for the Mood bed, highlighting its materials and bedroom context.",
  alternates: {
    canonical: "https://www.designyuv.com/projects/Mood",
  },
  openGraph: {
    title: "Mood Bed Product Visuals and Animation | DesignYuv",
    description: "I created 3D furniture visuals and animation for the Mood bed, highlighting its materials and bedroom context.",
    url: "https://www.designyuv.com/projects/Mood",
    images: [{ url: "/mood-product-visual-01.webp", width: 1200, height: 630, alt: "Mood 3D product animation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mood Bed Product Visuals and Animation | DesignYuv",
    description: "I created 3D furniture visuals and animation for the Mood bed, highlighting its materials and bedroom context.",
    images: ["/mood-product-visual-02.webp"],
  },
}

export default function MoodLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
