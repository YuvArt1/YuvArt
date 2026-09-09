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
  metadataBase: new URL("https://designyuv.com"),

  title: {
    default:
      "DesignYuv | Product Visuals, Animation & Design That Help Brands Stand Out",
    template: "%s | DesignYuv",
  },

  description:
    "DesignYuv helps brands and businesses turn products, ideas and stories into compelling visuals, 3D animation and creative experiences that capture attention, communicate value and make products stand out.",

  keywords: [
    // Core long-tail service terms (niched to D2C + 3D animation)
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

    // US audience-targeted long-tail (hiring intent)
    "hire visual designer USA",
    "hire freelance visual designer",
    "freelance designer vs agency",
    "visual content designer for hire",
    "hire freelance 3D animator USA",

    // Brand & web visuals topic cluster
    "brand visual identity",
    "why visual branding matters",
    "website visual content",
    "web design visuals that convert",
    "social media vs website design",
    "social media visual content",
    "social media design tips",

    // Startup & e-commerce visuals cluster
    "visual content for startups",
    "visual identity for startups",
    "startup brand design",
    "best visuals for e-commerce",
    "product visual content",
    "e-commerce product visuals",

    // Brand consistency & motion design cluster
    "brand consistency tips",
    "inconsistent brand visuals",
    "motion design for brands",
    "motion graphics for business",
    "motion design branding",

    // Intent-based long-tail (what buyers actually search)
    "how to make product marketing more engaging",
    "how to showcase a product with 3D animation",
    "how to explain a product visually",
    "creative visuals for product launch",
    "make my product stand out online",

    // Broader terms (lower priority, kept for context)
    "product visualization",
    "3D product visualization",
    "creative advertising",
    "visual storytelling",
  ],

  authors: [{ name: "Yuv" }],
  creator: "Yuv",
  publisher: "DesignYuv",

  icons: {
    icon: "/Fable.png",
    apple: "/Fable.png",
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
    url: "https://designyuv.com",
    siteName: "DesignYuv",
    title: "DesignYuv | Visuals & Animation That Help Products Stand Out",
    description:
      "Helping brands turn products and ideas into compelling visuals, 3D animation and creative experiences that capture attention and communicate value.",
  },

  twitter: {
    card: "summary_large_image",
    title: "DesignYuv | Visuals & Animation That Help Products Stand Out",
    description:
      "Helping brands turn products and ideas into compelling visuals, 3D animation and creative experiences that capture attention and communicate value.",
  },

  alternates: {
    canonical: "https://designyuv.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-inter antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
