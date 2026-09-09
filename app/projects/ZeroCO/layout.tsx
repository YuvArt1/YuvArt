import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "/projects/ZeroCO",
  },
}

export default function ZeroCOLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
