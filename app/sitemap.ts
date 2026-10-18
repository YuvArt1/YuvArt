import type { MetadataRoute } from "next";

const siteUrl = "https://www.designyuv.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/work`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/insights`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/ecommerce-product-imagery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/3d-product-animations`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog/3d-product-visualization-ecommerce`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/blog/benefits-3d-product-visualization-ecommerce`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...[
      "ZeroCO",
      "HearO",
      "Mood",
      "Portronics",
      "Outer",
      "TGDAudio",
      "GullyLab",
      "TangentGC",
    ].map((project) => ({
      url: `${siteUrl}/projects/${project}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}