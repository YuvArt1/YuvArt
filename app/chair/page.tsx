import type { Metadata } from "next";
import { preload } from "react-dom";
import ChairProductPage from "@/components/chair/ChairProductPage";
import "./chair.css";

export const metadata: Metadata = {
  title: "Mira Chair | A seat for slowing down",
  description:
    "Meet the Mira Chair: sculpted comfort, considered materials, and five colors to make your own.",
};

export default function ChairPage() {
  preload("/chair/blue/00.webp", {
    as: "image",
    fetchPriority: "high",
  });

  return (
    <main>
      <ChairProductPage />
    </main>
  );
}
