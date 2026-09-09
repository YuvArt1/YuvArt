import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "/projects/Mood",
  },
}

export default function MoodLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
