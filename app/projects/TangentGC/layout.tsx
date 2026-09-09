import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "/projects/TangentGC",
  },
}

export default function TangentGCLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
