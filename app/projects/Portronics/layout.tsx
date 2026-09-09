import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.designyuv.com/projects/Portronics",
  },
}

export default function PortronicsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
