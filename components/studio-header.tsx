import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type StudioHeaderProps = {
  currentPage?: "home" | "work" | "about" | "insights";
};

export default function StudioHeader({ currentPage = "home" }: StudioHeaderProps) {
  const homeHref = currentPage === "home" ? "" : "/";

  return (
    <header className="studio-header">
      <nav className="studio-nav" aria-label="Main navigation">
        <Link href="/" className="studio-wordmark" aria-label="Yuv home">Yuv<span>.</span></Link>
        <div className="studio-nav-links">
          <Link href="/work" aria-current={currentPage === "work" ? "page" : undefined}>Work</Link>
          <Link href={`${homeHref}#services`}>Services</Link>
          <Link href={`${homeHref}#process`}>Process</Link>
          <Link href="/about" aria-current={currentPage === "about" ? "page" : undefined}>About</Link>
          <Link href="/blog/3d-product-visualization-ecommerce" aria-current={currentPage === "insights" ? "page" : undefined}>Insights</Link>
        </div>
        <Link className="studio-mobile-work" href="/work">Work</Link>
        <Link className="studio-mobile-insights" href="/blog/3d-product-visualization-ecommerce" aria-current={currentPage === "insights" ? "page" : undefined}>Insights</Link>
        <Link className="studio-nav-cta" href={`${homeHref}#contact`}>Discuss Your Next Project <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </nav>
    </header>
  );
}