import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";

type StudioHeaderProps = {
  currentPage?: "home" | "work" | "about" | "insights" | "imagery" | "animations" | "campaign";
};

export default function StudioHeader({ currentPage = "home" }: StudioHeaderProps) {
  const homeHref = currentPage === "home" ? "" : "/";

  return (
    <header className="studio-header">
      <nav className="studio-nav" aria-label="Main navigation">
        <Link href="/" className="studio-wordmark" aria-label="Yuv home">Yuv<span>.</span></Link>
        <div className="studio-nav-links">
          <Link href="/work" aria-current={currentPage === "work" ? "page" : undefined}>Work</Link>
          <details className="studio-nav-dropdown">
            <summary aria-current={currentPage === "imagery" || currentPage === "animations" || currentPage === "campaign" ? "page" : undefined}>Portfolio <ChevronDown size={14} aria-hidden="true" /></summary>
            <div className="studio-nav-dropdown-menu">
              <Link href="/ecommerce-product-imagery" aria-current={currentPage === "imagery" ? "page" : undefined}>Ecommerce product imagery</Link>
              <Link href="/3d-product-animations" aria-current={currentPage === "animations" ? "page" : undefined}>3D product animations</Link>
              <Link href="/campaigns" aria-current={currentPage === "campaign" ? "page" : undefined}>Full Ad Campaign</Link>
            </div>
          </details>
          <Link href={`${homeHref}#services`}>Services</Link>
          <Link href={`${homeHref}#process`}>Process</Link>
          <Link href="/about" aria-current={currentPage === "about" ? "page" : undefined}>About</Link>
          <Link href="/insights" aria-current={currentPage === "insights" ? "page" : undefined}>Insights</Link>
        </div>
        <Link className="studio-mobile-work" href="/work">Work</Link>
        <details className="studio-nav-dropdown studio-mobile-portfolio">
          <summary aria-current={currentPage === "imagery" || currentPage === "animations" || currentPage === "campaign" ? "page" : undefined}>Portfolio <ChevronDown size={13} aria-hidden="true" /></summary>
          <div className="studio-nav-dropdown-menu">
            <Link href="/ecommerce-product-imagery" aria-current={currentPage === "imagery" ? "page" : undefined}>Ecommerce product imagery</Link>
            <Link href="/3d-product-animations" aria-current={currentPage === "animations" ? "page" : undefined}>3D product animations</Link>
            <Link href="/campaigns" aria-current={currentPage === "campaign" ? "page" : undefined}>Full Ad Campaign</Link>
          </div>
        </details>
        <Link className="studio-mobile-insights" href="/insights" aria-current={currentPage === "insights" ? "page" : undefined}>Insights</Link>
        <Link className="studio-nav-cta" href={`${homeHref}#contact`}>Contact me about a product launch <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </nav>
    </header>
  );
}