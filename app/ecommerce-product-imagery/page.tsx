import type { Metadata } from "next";
import ProjectMediaArchive from "@/components/project-media-archive";

export const metadata: Metadata = {
  title: "Ecommerce Product Imagery | 3D Product Stills for Electronics & Furniture",
  description: "Browse 3D product stills and campaign imagery for electronics and furniture brands — grouped by project. Created by DesignYuv.",
  alternates: {
    canonical: "https://www.designyuv.com/ecommerce-product-imagery",
  },
  openGraph: {
    title: "Ecommerce Product Imagery | DesignYuv",
    description: "3D product stills and campaign imagery for electronics and furniture brands — browse by project.",
    url: "https://www.designyuv.com/ecommerce-product-imagery",
    images: [{ url: "/hearo-product-visual-01.webp", width: 1200, height: 630, alt: "3D product imagery for electronics and furniture brands" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Product Imagery | DesignYuv",
    description: "3D product stills and campaign imagery for electronics and furniture brands.",
    images: ["/hearo-product-visual-01.webp"],
  },
};

export default function EcommerceProductImageryPage() {
  return <ProjectMediaArchive mode="imagery" />;
}