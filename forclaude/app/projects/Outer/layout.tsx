import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Outer Furniture Campaign Concept | DesignYuv" },
  description:
    "I created a personal 3D furniture campaign concept inspired by Outer, exploring pre-launch product visuals and customization animation.",
  alternates: {
    canonical: "https://www.designyuv.com/projects/Outer",
  },
  openGraph: {
    title: "Outer Furniture Campaign Concept | DesignYuv",
    description: "I created a personal 3D furniture campaign concept inspired by Outer, exploring pre-launch product visuals and customization animation.",
    url: "https://www.designyuv.com/projects/Outer",
    images: [{ url: "/this%20is%20it.png", width: 4032, height: 2268, alt: "Outer furniture campaign" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outer Furniture Campaign Concept | DesignYuv",
    description: "I created a personal 3D furniture campaign concept inspired by Outer, exploring pre-launch product visuals and customization animation.",
    images: ["/this%20is%20it.png"],
  },
}

export default function OuterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
