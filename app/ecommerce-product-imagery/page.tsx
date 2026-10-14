import type { Metadata } from "next";
import ProjectMediaArchive from "@/components/project-media-archive";

export const metadata: Metadata = {
  title: "Ecommerce Product Imagery",
  description: "Browse ecommerce product imagery and campaign stills grouped by DesignYuv project.",
  alternates: {
    canonical: "https://www.designyuv.com/ecommerce-product-imagery",
  },
};

export default function EcommerceProductImageryPage() {
  return <ProjectMediaArchive mode="imagery" />;
}