import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ZeroCO | 3D Product Visualization",
  description: "3D product stills and motion for ZeroCO — a compact speaker made from a used tennis ball. Visuals placed across everyday scenes to show portability, texture, and context.",
  alternates: { canonical: "https://www.designyuv.com/projects/ZeroCO" },
  openGraph: {
    title: "ZeroCO | 3D Product Visualization | DesignYuv",
    description: "Product stills and motion for a compact speaker — placed in everyday scenes to show portability, texture, and context.",
    url: "https://www.designyuv.com/projects/ZeroCO",
    images: [{ url: "/zero-co-speaker-visual-01.webp", width: 1200, height: 630, alt: "ZeroCO speaker 3D product visualization" }],
  },
}

export default function ZeroCOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
