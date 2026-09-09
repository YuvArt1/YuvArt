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
    ...[
      "GullyLab",
      "HearO",
      "Mood",
      "Portronics",
      "TangentGC",
      "TGDAudio",
      "ZeroCO",
    ].map((project) => ({
      url: `${siteUrl}/projects/${project}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}