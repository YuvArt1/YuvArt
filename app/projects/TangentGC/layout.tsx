import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TangentGC | 3D Packaging Animation & Motion Design",
  description: "Controlled packaging animation for TangentGC — revealing box construction one deliberate movement at a time. Minimal motion letting the product speak through how it unfolds.",
  alternates: { canonical: "https://www.designyuv.com/projects/TangentGC" },
  openGraph: {
    title: "TangentGC | 3D Packaging Animation | DesignYuv",
    description: "Deliberate, controlled packaging animation — each movement reveals the box construction one step at a time.",
    url: "https://www.designyuv.com/projects/TangentGC",
    images: [{ url: "/Tangent.webp", width: 1200, height: 630, alt: "TangentGC packaging animation motion design" }],
  },
}

export default function TangentGCLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
