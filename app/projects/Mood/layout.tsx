import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mood | 3D Product Animation Case Study",
  description:
    "3D product animation and visuals for Mood - a case study by DesignYuv, 2025.",
  alternates: {
    canonical: "https://www.designyuv.com/projects/Mood",
  },
  openGraph: {
    title: "Mood | 3D Product Animation Case Study",
    description: "3D product animation for Mood by DesignYuv.",
    url: "https://www.designyuv.com/projects/Mood",
    images: [{ url: "/MoodNz (1).png", width: 1200, height: 630 }],
  },
}

export default function MoodLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
