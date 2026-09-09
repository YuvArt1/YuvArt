import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.designyuv.com/projects/ZeroCO",
  },
}

export default function ZeroCOLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
