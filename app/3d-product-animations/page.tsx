import type { Metadata } from "next";
import ProjectMediaArchive from "@/components/project-media-archive";

export const metadata: Metadata = {
  title: "3D Product Animations | Motion & Animation for Electronics & Furniture",
  description: "Watch 3D product animations and motion projects for electronics and furniture brands — grouped by project. Created by DesignYuv.",
  alternates: {
    canonical: "https://www.designyuv.com/3d-product-animations",
  },
  openGraph: {
    title: "3D Product Animations | DesignYuv",
    description: "Product animations and motion projects for electronics and furniture brands — browse by project.",
    url: "https://www.designyuv.com/3d-product-animations",
    images: [{ url: "/Portronics2.webp", width: 1200, height: 630, alt: "3D product animation for electronics brands" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Product Animations | DesignYuv",
    description: "Product animations and motion projects for electronics and furniture brands.",
    images: ["/Portronics2.webp"],
  },
};

export default function ProductAnimationsPage() {
  return <ProjectMediaArchive mode="animations" />;
}