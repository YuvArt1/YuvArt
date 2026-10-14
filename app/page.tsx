import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Footer from "@/components/footer";
import InquiryForm from "@/components/inquiry-form";
import StudioHeader from "@/components/studio-header";
import ProjectCarousel from "@/components/project-carousel";

const projects = [
  {
    name: "HearO",
    product: "Product visuals",
    description: "A set of product-focused visuals for a consumer audio product.",
    href: "/projects/HearO",
    image: "/HeroO (1).png",
    alt: "HearO product visualization",
    type: "Product visualization",
  },
  {
    name: "TangentGC",
    product: "Product animation",
    description: "Packaging animations with considered motion and a clean visual approach.",
    href: "/projects/TangentGC",
    image: "/Tangent.png",
    alt: "TangentGC packaging animation still",
    type: "Motion graphics",
  },
  {
    name: "Mood",
    product: "Product visuals suite",
    description: "High-fidelity stills, motion, and art direction built around color and texture.",
    href: "/projects/Mood",
    image: "/MoodNz (2).png",
    alt: "Mood product visual with considered material and lighting",
    type: "Stills and motion",
  },
  {
    name: "Portronics",
    product: "Luxcell Wireless Mini",
    description: "A product animation with a feature breakdown and color-variant reveal.",
    href: "/projects/Portronics",
    image: "/Portronics2.png",
    alt: "Portronics Luxcell Wireless Mini product detail visualization",
    type: "Product animation",
  },
] as const;

const possibilities = [
  { label: "Product detail", image: "/Zeroco.png", alt: "ZeroCO speaker product detail" },
  { label: "Campaign scene", image: "/Zeroco (1).png", alt: "ZeroCO speaker presented in a campaign scene" },
  { label: "Product in context", image: "/Zeroco (2).png", alt: "ZeroCO speaker shown in a different composition" },
] as const;

const benefits = [
  ["More creative flexibility", "Explore different compositions, environments, colors, and concepts around the same product."],
  ["More content variations", "Build a set of stills or motion assets from a consistent product model when the project scope supports it."],
  ["Fewer physical constraints", "Create visual changes digitally where they do not require a new physical shoot."],
  ["A consistent product story", "Keep lighting, materials, and presentation coherent across a family of assets."],
  ["Content for more channels", "Plan deliverables for product pages, paid ads, social media, and product launches."],
] as const;

const process = [
  ["01", "Brief", "Share the product, goals, references, and the assets your team needs."],
  ["02", "Create", "Develop the 3D product visuals and the agreed creative direction."],
  ["03", "Refine", "Review the work together and make the agreed revisions."],
  ["04", "Deliver", "Receive final assets in the formats agreed for your project."],
] as const;

const questions = [
  ["What products can you create in 3D?", "I work on product visualization and animation. Share what you make and we can confirm whether the product and brief are a good fit."],
  ["What do you need to get started?", "Product photos, dimensions, reference links, and any existing 3D files are useful. We can confirm the right inputs after hearing about the project."],
  ["Can I use the visuals for ecommerce, ads, and social media?", "Yes. We can agree on formats and compositions for the channels and placements you need."],
  ["Can you create multiple variations of one product?", "Yes, when the product model and project scope support the variations. We can define those deliverables in the brief."],
  ["How long does a typical project take?", "Timing depends on the product, creative direction, asset list, and review process. I will confirm a schedule once the scope is clear."],
  ["How are projects priced?", "Projects are quoted around product complexity, creative direction, and the agreed deliverables."],
  ["How do revisions work?", "The review stages and included revisions are agreed before production begins."],
  ["When is 3D a good fit compared with photography?", "3D can suit products that need controlled scenes, repeatable views, or digital variations. Photography may be a better fit when real-world context or physical interaction is central."],
] as const;

export default function HomePage() {
  return (
    <div className="studio-page">
      <StudioHeader />

      <main>
        <section className="studio-hero" id="top">
          <div className="studio-hero-copy">
            <p className="studio-eyebrow"><span /> 3D PRODUCT VISUALS FOR GROWING TEAMS</p>
            <h1>Scale your product content, not your production workload.</h1>
            <p className="studio-hero-description">Photorealistic 3D product imagery for ecommerce, creative, and marketing teams that need more assets, more flexibility, and fewer production bottlenecks.</p>
            <div className="studio-hero-actions">
              <a className="studio-button studio-button-dark" href="#contact">Discuss Your Next Project <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a className="studio-text-link" href="#work">Explore the Work <ArrowDown size={16} aria-hidden="true" /></a>
            </div>
            <p className="studio-hero-note">For product brands and the teams building their next launch.</p>
          </div>
          <ProjectCarousel />
        </section>

        <section className="studio-possibilities studio-section" id="services">
          <div className="studio-section-heading">
            <p className="studio-eyebrow">A PRODUCT, MANY POSSIBILITIES</p>
            <h2>Build a visual system around the product.</h2>
            <p>Explore the product from a new angle, bring out a detail, or place it in a campaign-ready scene. The right asset mix depends on your brief.</p>
          </div>
          <div className="studio-possibility-grid">
            {possibilities.map((item, index) => (
              <figure className={`studio-possibility studio-possibility-${index + 1}`} key={item.label}>
                <div className="studio-possibility-image">
                  <Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
                </div>
                <figcaption><span>0{index + 1}</span>{item.label}</figcaption>
              </figure>
            ))}
          </div>
          <div className="studio-capability-line"><span>STILLS</span><span>MOTION</span><span>CAMPAIGN VISUALS</span><span>PRODUCT VARIATIONS</span></div>
        </section>

        <section className="studio-work studio-section" id="work">
          <div className="studio-work-heading">
            <div>
              <p className="studio-eyebrow">SELECTED WORK</p>
              <h2>Product visuals with a point of view.</h2>
            </div>
            <p>Explore the product, the visual approach, and the assets in each project.</p>
          </div>
          <div className="studio-project-grid">
            {projects.map((project, index) => (
              <article className={`studio-project studio-project-${index + 1}`} key={project.name}>
                <Link href={project.href} className="studio-project-image">
                  <Image src={project.image} alt={project.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
                  <span className="studio-project-open" aria-hidden="true"><ArrowUpRight size={20} /></span>
                </Link>
                <div className="studio-project-meta"><span>{project.type}</span><span>0{index + 1}</span></div>
                <h3><Link href={project.href}>{project.name}<span> / {project.product}</span></Link></h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
          <Link className="studio-inline-link" href="/work">View all work <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </section>

        <section className="studio-benefits studio-section">
          <div className="studio-benefits-heading">
            <p className="studio-eyebrow">MADE FOR THE WAY TEAMS WORK</p>
            <h2>More room to make the right asset.</h2>
            <p>3D gives product, creative, and marketing teams another way to plan and produce visual content.</p>
          </div>
          <div className="studio-benefit-list">
            {benefits.map(([title, description], index) => (
              <article className="studio-benefit" key={title}>
                <span className="studio-benefit-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="studio-process studio-section" id="process">
          <div className="studio-process-heading">
            <p className="studio-eyebrow">A CLEAR, COLLABORATIVE PROCESS</p>
            <h2>From product brief to final files.</h2>
            <p>Know what is happening at each stage, with scope and review expectations agreed up front.</p>
          </div>
          <div className="studio-process-grid">
            {process.map(([number, title, description]) => (
              <article className="studio-process-step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="studio-proof studio-section">
          <div className="studio-proof-copy">
            <p className="studio-eyebrow">THE WORK IS THE PROOF</p>
            <h2>See the thinking and finish for yourself.</h2>
            <p>Each project page shares real visuals and context on the work. No inflated performance claims, just the product, the creative choices, and the assets made.</p>
            <Link className="studio-button studio-button-light" href="/work">Explore all projects <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="studio-proof-projects" aria-label="Featured project names">
            <Link href="/projects/HearO"><span>01</span>HearO<ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link href="/projects/TangentGC"><span>02</span>TangentGC<ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link href="/projects/Mood"><span>03</span>Mood<ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link href="/projects/Portronics"><span>04</span>Portronics<ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </section>

        <section className="studio-faq studio-section" id="faq">
          <div className="studio-faq-heading">
            <p className="studio-eyebrow">GOOD TO KNOW</p>
            <h2>Questions before we begin?</h2>
          </div>
          <div className="studio-faq-list">
            {questions.map(([question, answer]) => (
              <details className="studio-faq-item" key={question}>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="studio-contact studio-section" id="contact">
          <div className="studio-contact-copy">
            <p className="studio-eyebrow">START A CONVERSATION</p>
            <h2>Have a product that deserves better visuals?</h2>
            <p>Tell me what you're launching, what content you need, or where your current production process is falling short. Let's explore how 3D product imagery could help.</p>
            <a className="studio-contact-email" href="mailto:hello@designyuv.com">hello@designyuv.com <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <InquiryForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}
