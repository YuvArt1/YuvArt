import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "/projects/TGDAudio",
  },
}

export default function TGDAudioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
