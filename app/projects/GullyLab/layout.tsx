import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.designyuv.com/projects/GullyLab",
  },
}

export default function GullyLabLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
