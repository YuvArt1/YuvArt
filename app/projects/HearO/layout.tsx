import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.designyuv.com/projects/HearO",
  },
}

export default function HearOLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
