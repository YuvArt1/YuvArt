import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ZeroCO | 3D Product Visualization Case Study",
  description:
    "3D product visuals for ZeroCO - a case study in product visualization by DesignYuv.",
  alternates: {
    canonical: "https://www.designyuv.com/projects/ZeroCO",
  },
  openGraph: {
    title: "ZeroCO | 3D Product Visualization Case Study",
    description: "3D product visuals for ZeroCO by DesignYuv.",
    url: "https://www.designyuv.com/projects/ZeroCO",
    images: [{ url: "/Zeroco.png", width: 1200, height: 630 }],
  },
}

export default function ZeroCOLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
