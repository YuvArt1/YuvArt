import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "GullyLab Product Visuals and Animation | DesignYuv" },
  description:
    "I created composed product visuals and animation for GullyLab, combining still images with a consistent visual treatment.",
  alternates: {
    canonical: "https://www.designyuv.com/projects/GullyLab",
  },
  openGraph: {
    title: "GullyLab Product Visuals and Animation | DesignYuv",
    description: "I created composed product visuals and animation for GullyLab, combining still images with a consistent visual treatment.",
    url: "https://www.designyuv.com/projects/GullyLab",
    images: [{ url: "/gullylab-01.webp", width: 1200, height: 630, alt: "GullyLab sneakers shown in a 3D product render" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GullyLab Product Visuals and Animation | DesignYuv",
    description: "I created composed product visuals and animation for GullyLab, combining still images with a consistent visual treatment.",
    images: ["/gullylab-01.webp"],
  },
}

export default function GullyLabLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
