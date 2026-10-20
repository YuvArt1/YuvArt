import type { Metadata } from "next";
import ChairProductPage from "@/components/chair/ChairProductPage";
import "../../chair/chair.css";
import "./page.css";

export const metadata: Metadata = {
  title: "Interactive Design for Furniture Ecommerce",
  description:
    "Explore the Mira Chair in an interactive furniture ecommerce experience.",
};

export default function InteractiveFurniturePage() {
  return (
    <main className="chair-inline-page">
      <div className="chair-inline-frame">
        <ChairProductPage embedded />
      </div>
    </main>
  );
}
