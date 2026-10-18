import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "ZeroCO Product Visuals | DesignYuv" },
  description: "I created product renders and animations for ZeroCO, showing its wash bottles and packaging in clear product views.",
  alternates: {
    canonical: "https://www.designyuv.com/projects/ZeroCO",
  },
  openGraph: {
    title: "ZeroCO Product Visuals | DesignYuv",
    description: "I created product renders and animations for ZeroCO, showing its wash bottles and packaging in clear product views.",
    url: "https://www.designyuv.com/projects/ZeroCO",
    images: [{ url: "/zero-co-speaker-visual-01.webp", width: 1200, height: 630, alt: "ZeroCO product visualization" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroCO Product Visuals | DesignYuv",
    description: "I created product renders and animations for ZeroCO, showing its wash bottles and packaging in clear product views.",
    images: ["/zero-co-speaker-visual-01.webp"],
  },
}

export default function ZeroCOLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
