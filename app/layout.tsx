import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.designyuv.com"),

  title: {
    default: "DesignYuv | 3D Product Animation Studio",
    template: "%s | DesignYuv",
  },

  description:
    "3D product animation, motion design, and product visualization for brands. DesignYuv turns products and ideas into visuals that capture attention.",

  keywords: [
    // Core service terms
    "3D product animation for D2C brands",
    "3D product animation freelancer",
    "product animation for Shopify brands",
    "3D animation studio for small brands",
    "product visualization for D2C brands",
    "3D render for D2C product launch",
    "explainer animation for D2C brands",
    "motion design for consumer brands",
    "archviz rendering freelancer",
    "architectural visualization for small studios",

    // US audience-targeted
    "hire visual designer USA",
    "hire freelance visual designer",
    "hire freelance 3D animator USA",

    // Brand & web visuals
    "brand visual identity",
    "web design visuals that convert",

    // Startup & e-commerce
    "visual content for startups",
    "e-commerce product visuals",

    // Broader
    "product visualization",
    "3D product visualization",
    "visual storytelling",
  ],

  authors: [{ name: "Yuv" }],
  creator: "Yuv",
  publisher: "DesignYuv",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.designyuv.com",
    siteName: "DesignYuv",
    title: "DesignYuv | 3D Product Animation Studio",
    description:
      "3D product animation, motion design, and product visualization for D2C brands.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DesignYuv — 3D Product Animation & Visuals",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DesignYuv | 3D Product Animation & Visuals for D2C Brands",
    description:
      "3D product animation, motion design, and product visualization for D2C brands.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.designyuv.com/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.designyuv.com/#organization",
      name: "DesignYuv",
      url: "https://www.designyuv.com/",
      logo: "https://www.designyuv.com/og-image.jpg",
      description:
        "3D product animation, motion design, and product visualization for brands.",
      founder: {
        "@type": "Person",
        name: "Yuvraj Chavhan",
      },
      sameAs: [
        "https://www.behance.net/DesignYuv",
        "https://dribbble.com/DesignYuv",
        "https://www.instagram.com/yuuuvvvvv/",
        "https://www.linkedin.com/in/yuv-raj-0abb66386/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.designyuv.com/#website",
      url: "https://www.designyuv.com/",
      name: "DesignYuv",
      publisher: { "@id": "https://www.designyuv.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-inter antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}