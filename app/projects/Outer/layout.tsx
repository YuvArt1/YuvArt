import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Outer Furniture 3D Campaign Concept | Pre-Launch Product Advertising",
  description:
    "A self-initiated 3D furniture campaign concept inspired by Outer. Explore pre-launch product advertising and playful customization animation for social media.",
  alternates: {
    canonical: "https://www.designyuv.com/projects/Outer",
  },
  openGraph: {
    title: "Outer Furniture Campaign Concept | DesignYuv",
    description:
      "Independent 3D product visualization concept exploring pre-launch advertising and social media animation for customizable furniture.",
    url: "https://www.designyuv.com/projects/Outer",
    images: [{ url: "/this%20is%20it.png", width: 4032, height: 2268, alt: "Outer furniture campaign" }],
  },
}

export default function OuterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
