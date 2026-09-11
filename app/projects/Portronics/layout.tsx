import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portronics Product Visuals",
  description:
    "3D product visuals for Portronics - a case study in product visualization by DesignYuv.",
  alternates: {
    canonical: "https://www.designyuv.com/projects/Portronics",
  },
  openGraph: {
    title: "Portronics | 3D Product Visualization Case Study",
    description: "3D product visuals for Portronics by DesignYuv.",
    url: "https://www.designyuv.com/projects/Portronics",
    images: [{ url: "/Portronics.jpg", width: 1200, height: 630, alt: "Portronics product visualization" }],
  },
}

export default function PortronicsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
