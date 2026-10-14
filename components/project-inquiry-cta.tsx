import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectInquiryCTA() {
  return (
    <section className="studio-detail-cta" aria-label="Start a project inquiry">
      <div>
        <p className="studio-eyebrow">HAVE A PRODUCT OR LAUNCH IN MIND?</p>
        <h2>Let’s talk about what you need.</h2>
        <p>Share the product, the brief, and the content your team is looking for.</p>
      </div>
      <Link className="studio-button studio-button-dark" href="/#contact">
        Discuss Your Next Project <ArrowUpRight size={17} aria-hidden="true" />
      </Link>
    </section>
  );
}