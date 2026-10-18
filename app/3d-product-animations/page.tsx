import type { Metadata } from "next";
import ProjectMediaArchive from "@/components/project-media-archive";

export const metadata: Metadata = {
  title: { absolute: "3D Product Animation for Electronics and Furniture Brands" },
  description: "I create 3D product animation for electronics and furniture brands, from feature demonstrations to campaign films.",
  alternates: {
    canonical: "https://www.designyuv.com/3d-product-animations",
  },
  openGraph: {
    type: "website",
    title: "3D Product Animation for Electronics and Furniture Brands",
    description: "I create 3D product animation for electronics and furniture brands, from feature demonstrations to campaign films.",
    url: "https://www.designyuv.com/3d-product-animations",
    images: [{ url: "/Portronics.webp", width: 1280, height: 1280, alt: "3D product animation still of a Portronics power bank" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Product Animation for Electronics and Furniture Brands",
    description: "I create 3D product animation for electronics and furniture brands, from feature demonstrations to campaign films.",
    images: ["/Portronics.webp"],
  },
};

export default function ProductAnimationsPage() {
  return <ProjectMediaArchive mode="animations" />;
}