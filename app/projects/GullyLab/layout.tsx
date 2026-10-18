import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GullyLab | 3D Product Visualization for Consumer Electronics",
  description: "Product animation and composed stills for GullyLab — motion adds energy while stills let the product's form read clearly.",
  alternates: { canonical: "https://www.designyuv.com/projects/GullyLab" },
  openGraph: {
    title: "GullyLab | Consumer Electronics 3D Product Visualization | DesignYuv",
    description: "Animation and composed stills working as one presentation — motion and form in a cohesive product asset set.",
    url: "https://www.designyuv.com/projects/GullyLab",
    images: [{ url: "/GullyLab%20(1).webp", width: 1200, height: 630, alt: "GullyLab consumer electronics 3D product visualization" }],
  },
}

export default function GullyLabLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
