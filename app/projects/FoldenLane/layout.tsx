import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Folden Lane | Web Content",
  description: "Web content project for Folden Lane by DesignYuv. Work in progress.",
  alternates: {
    canonical: "https://www.designyuv.com/projects/FoldenLane",
  },
  openGraph: {
    title: "Folden Lane | DesignYuv",
    description: "Web content project for Folden Lane by DesignYuv. Work in progress.",
    url: "https://www.designyuv.com/projects/FoldenLane",
  },
};

export default function FoldenLaneLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}