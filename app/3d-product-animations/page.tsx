import type { Metadata } from "next";
import ProjectMediaArchive from "@/components/project-media-archive";

export const metadata: Metadata = {
  title: "3D Product Animations",
  description: "Watch 3D product animations and motion projects by DesignYuv, grouped by project.",
  alternates: {
    canonical: "https://www.designyuv.com/3d-product-animations",
  },
};

export default function ProductAnimationsPage() {
  return <ProjectMediaArchive mode="animations" />;
}