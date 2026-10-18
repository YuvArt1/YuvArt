import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TDG Audio | 3D Product Visualization for Electronics",
  description: "Product animation and stills for TDG Audio in-wall speakers — multiple angles with cohesive visual treatment for a product-focused asset set.",
  alternates: { canonical: "https://www.designyuv.com/projects/TGDAudio" },
  openGraph: {
    title: "TDG Audio | In-Wall Speaker 3D Product Visualization | DesignYuv",
    description: "Animation paired with stills presenting TDG Audio in-wall speakers from multiple angles with a cohesive visual treatment.",
    url: "https://www.designyuv.com/projects/TGDAudio",
    images: [{ url: "/TGD/TopDown.webp", width: 1200, height: 630, alt: "TDG Audio in-wall speaker 3D product visualization" }],
  },
}

export default function TGDAudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
