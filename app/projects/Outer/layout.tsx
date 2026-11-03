import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Outer | 3D Furniture Campaign Concept",
  description: "A self-initiated 3D outdoor furniture campaign concept — pre-launch product film and customization animation showing how to advertise before a physical SKU exists.",
  alternates: { canonical: "https://www.designyuv.com/projects/Outer" },
  openGraph: {
    title: "Outer | 3D Furniture Campaign Concept | DesignYuv",
    description: "Pre-launch product film and customization animation for outdoor furniture — a self-initiated campaign concept in 3D.",
    url: "https://www.designyuv.com/projects/Outer",
    images: [{ url: "/this-is-it.webp", width: 1600, height: 900, alt: "Outer outdoor furniture 3D campaign concept" }],
  },
}

export default function OuterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
