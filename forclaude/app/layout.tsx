import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import BackToTop from "@/components/back-to-top";

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
    default: "3D Product Visualization & Animation for Electronics and Furniture Brands | DesignYuv",
    template: "%s | DesignYuv",
  },

  description:
    "I create 3D product visualization and animation for electronics and furniture brands, from ecommerce imagery to product films and campaign visuals.",

  authors: [{ name: "Yuvraj Chauhan" }],
  creator: "Yuvraj Chauhan",
  publisher: "DesignYuv",
  icons: {
    icon: [{ url: "/icon.webp", type: "image/webp", sizes: "32x32" }],
  },

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
    title: "3D Product Visualization & Animation for Electronics and Furniture Brands | DesignYuv",
    description:
      "I create 3D product visualization and animation for electronics and furniture brands, from ecommerce imagery to product films and campaign visuals.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "3D product visualization and animation for electronics and furniture brands",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "3D Product Visualization & Animation for Electronics and Furniture Brands | DesignYuv",
    description:
      "I create 3D product visualization and animation for electronics and furniture brands, from ecommerce imagery to product films and campaign visuals.",
    images: ["/og-image.webp"],
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
      logo: "https://www.designyuv.com/og-image.webp",
      description:
        "Yuvraj Chauhan creates 3D product visualization and animation for electronics and furniture brands.",
      founder: {
        "@type": "Person",
        name: "Yuvraj Chauhan",
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
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}