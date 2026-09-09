import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "/projects/Portronics",
  },
}

export default function PortronicsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
