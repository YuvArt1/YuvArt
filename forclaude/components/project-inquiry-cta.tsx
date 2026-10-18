import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectInquiryCTA() {
  return (
    <section className="studio-detail-cta" aria-label="Start a project inquiry">
      <div>
        <p className="studio-eyebrow">I’M AVAILABLE FOR PRODUCT PROJECTS</p>
        <h2>Tell me about your next product.</h2>
        <p>I can review the product, brief, and content you’re looking for.</p>
      </div>
      <div className="studio-detail-cta-actions">
        <Link className="studio-button studio-button-dark" href="/#contact">
          Contact me about a project <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
        <a
          className="studio-button studio-button-light"
          href="https://cal.com/yuv-raj-pao2g5/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a call with me <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}