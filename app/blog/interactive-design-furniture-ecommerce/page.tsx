import type { Metadata } from "next";
import Link from "next/link";
import ChairProductPage from "@/components/chair/ChairProductPage";
import Footer from "@/components/footer";
import StudioHeader from "@/components/studio-header";
import "../../chair/chair.css";
import "./page.css";

export const metadata: Metadata = {
  title: "Interactive Design for Furniture Ecommerce",
  description:
    "Explore the Mira Chair in an interactive furniture ecommerce experience.",
};

export default function InteractiveFurniturePage() {
  return (
    <div className="studio-page studio-article-page chair-inline-article">
      <StudioHeader currentPage="insights" />
      <main className="chair-inline-page">
        <header className="chair-inline-intro">
          <Link href="/insights" className="studio-article-back">
            Back to insights
          </Link>
          <p className="studio-eyebrow">
            <span /> FURNITURE / DIGITAL EXPERIENCE
          </p>
          <h1>Interactive Design for Furniture Ecommerce</h1>
          <p>
            A furniture product page should make it easier to understand shape,
            color, and details before buying. Explore the Mira Chair below:
            rotate it, compare five finishes, and open the product details.
          </p>
        </header>

        <section
          className="chair-inline-frame"
          aria-label="Interactive Mira Chair product page"
        >
          <ChairProductPage embedded />
        </section>

        <section className="chair-inline-description">
          <p className="studio-eyebrow">DESIGNED TO BE EXPLORED</p>
          <h2>Bring the product closer to the shopper.</h2>
          <p>
            Buying furniture online means choosing without sitting in the
            chair or seeing it in person. A 360° view lets shoppers inspect the
            silhouette from every angle, while color options show the same
            design in a finish they can picture in their home.
          </p>
          <p>
            The experience is designed to stay useful as people explore:
            changing color keeps the current viewing angle, the chair can be
            rotated by touch, mouse, or keyboard, and the dimensions, materials,
            and delivery information remain close at hand.
          </p>
          <p>
            Interactive details work best when they answer real product
            questions. A responsive layout, clear controls, and a quick first
            view make the experience easier to use across devices.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
