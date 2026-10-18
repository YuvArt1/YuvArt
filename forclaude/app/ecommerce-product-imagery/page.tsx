import type { Metadata } from "next";
import ProjectMediaArchive from "@/components/project-media-archive";

export const metadata: Metadata = {
  title: { absolute: "Ecommerce Product Imagery for Electronics and Furniture Brands" },
  description: "I create ecommerce product imagery for electronics and furniture brands, from clear product views to campaign scenes.",
  alternates: {
    canonical: "https://www.designyuv.com/ecommerce-product-imagery",
  },
  openGraph: {
    type: "website",
    title: "Ecommerce Product Imagery for Electronics and Furniture Brands",
    description: "I create ecommerce product imagery for electronics and furniture brands, from clear product views to campaign scenes.",
    url: "https://www.designyuv.com/ecommerce-product-imagery",
    images: [{ url: "/Portronics.webp", width: 1280, height: 1280, alt: "Portronics product imagery by Yuvraj Chauhan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Product Imagery for Electronics and Furniture Brands",
    description: "I create ecommerce product imagery for electronics and furniture brands, from clear product views to campaign scenes.",
    images: ["/Portronics.webp"],
  },
};

export default function EcommerceProductImageryPage() {
  return <ProjectMediaArchive mode="imagery" />;
}