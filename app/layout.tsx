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
    "make my product stand out",
    "how to showcase a product",
    "how to explain a product visually",
    "make product marketing more engaging",
    "product launch visuals",
    "product marketing content",
    "creative product advertising",
    "visual communication for brands",
    "product visualization",
    "3D product visualization",
    "3D product animation",
    "product animation",
    "product rendering",
    "creative advertising",
    "visual storytelling",
    "explainer animation",
    "product launch creative agency",
    "product animation services",
    "3D animation for brands",
    "product visualization services",
    "creative design for brands",
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
    canonical: "/",
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
