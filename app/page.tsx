import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/footer";
import InquiryForm from "@/components/inquiry-form";
import StudioHeader from "@/components/studio-header";
import ProjectCarousel from "@/components/project-carousel";
import PossibilityGallery from "@/components/possibility-gallery";

const projects = [
  {
    name: "ZeroCO",
    product: "Tennis-ball speaker",
    description: "I created product renders and animations showing ZeroCO wash bottles, packaging, and label details.",
    href: "/projects/ZeroCO",
    image: "/zero-co-speaker-visual-01.webp",
    alt: "ZeroCO upcycled tennis-ball speaker in a product scene",
    type: "Product visualization",
  },
  {
    name: "Portronics",
    product: "Luxcell Wireless Mini",
    description: "I animated a product breakdown, a charging demonstration, and the product’s colour variants.",
    href: "/projects/Portronics",
    image: "/Portronics2.webp",
    alt: "Portronics Luxcell Wireless Mini power bank product render",
    type: "Product animation",
  },
  {
    name: "Mood",
    product: "Bed visuals",
    description: "I paired high-fidelity stills with short-form motion to show the Mood bed and material details.",
    href: "/projects/Mood",
    image: "/mood-product-visual-02.webp",
    alt: "Mood bed and finish options shown on a product page",
    type: "Stills and motion",
  },
  {
    name: "HearO",
    product: "Product visuals",
    description: "I created product visuals with controlled angles and polished lighting for launch and social placements.",
    href: "/projects/HearO",
    image: "/hearo-product-visual-01.webp",
    alt: "HearO consumer audio product visualization",
    type: "Product visualization",
  },
] as const;

const possibilities = [
  { label: "Bottle detail", image: "/zero-co-speaker-visual-01.webp", alt: "ZeroCO hand wash and hair wash bottles arranged diagonally" },
  { label: "Product arrangement", image: "/zero-co-speaker-visual-02.webp", alt: "Hand holding a ZeroCO wash bottle" },
  { label: "Product view", image: "/zero-co-speaker-visual-03.webp", alt: "ZeroCO wash bottles shown in a horizontal product composition" },
] as const;

const benefits = [
  ["I create more product visuals without repeating every photoshoot.", "I can build new angles, product variations, and campaign assets from a reusable digital scene."],
  ["I give product pages clearer visuals.", "I focus on accurate details and useful views that help customers understand a product."],
  ["I prepare visuals for product launches.", "I create product imagery and animation for launch, campaign, and product-variation briefs."],
  ["I explore more creative directions.", "I can develop new concepts, settings, and campaign visuals in a digital scene."],
  ["I keep product visuals consistent across touchpoints.", "I create considered visuals for product pages, campaigns, and advertising."],
] as const;

const processSteps = [
  ["01", "Brief", "I review the product, goals, references, and requested assets."],
  ["02", "Create", "I develop the 3D product visuals and agreed creative direction."],
  ["03", "Refine", "I share the work for review and make the agreed revisions."],
  ["04", "Deliver", "I deliver final assets in the formats agreed for the project."],
] as const;

const questions = [
  ["What products can you create in 3D?", "I create product visualization and animation for electronics and furniture. I can confirm whether a product and brief are a good fit after I review the details."],
  ["What do you need to get started?", "I use product photos, dimensions, reference links, and any existing 3D files to assess the brief. I’ll confirm the right inputs after I learn about the project."],
  ["Can I use the visuals for ecommerce, ads, and social media?", "Yes. I can agree on formats and compositions for the channels and placements you need."],
  ["Can you create multiple variations of one product?", "Yes, when the product model and project scope support the variations. I define those deliverables in the brief."],
  ["How long does a typical project take?", "Timing depends on the product, creative direction, asset list, and review process. I confirm a schedule once the scope is clear."],
  ["How are projects priced?", "I quote projects around product complexity, creative direction, and the agreed deliverables."],
  ["How do revisions work?", "I agree on review stages and included revisions before production begins."],
  ["When is 3D a good fit compared with photography?", "I use 3D for products that need controlled scenes, repeatable views, or digital variations. Photography may be a better fit when real-world context or physical interaction is central."],
] as const;

export default function HomePage() {
  return (
    <div className="studio-page">
      <StudioHeader />

      <main>
        <section className="studio-hero" id="top">
          <div className="studio-hero-copy">
            <h1>I create flexible 3D product visuals for electronics and furniture brands.</h1>
            <p className="studio-hero-description">I create photorealistic 3D product imagery and animation for electronics and furniture brands, with flexible assets for ecommerce, campaigns, and launches.</p>
            <div className="studio-hero-actions">
              <a className="studio-button studio-button-dark" href="#contact">Contact me about a product launch <ArrowUpRight size={17} aria-hidden="true" /></a>
              <Link className="studio-text-link" href="/work">View my work <ArrowUpRight size={16} aria-hidden="true" /></Link>
            </div>
            <p className="studio-hero-note">I create product visuals for electronics and furniture launches.</p>
          </div>
          <ProjectCarousel />
        </section>

        <section className="studio-benefits studio-section">
          <div className="studio-benefits-heading">
            <h2>I may be a good fit if...</h2>
          </div>
          <div className="studio-benefit-list">
            {benefits.map(([title, description], index) => (
              <article className="studio-benefit" key={title}>
                <span className="studio-benefit-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
            <div className="studio-fit-cta">
              <p>If you’re ready to get more from your product visuals, I’d be glad to hear about the brief.</p>
              <a className="studio-button studio-button-dark" href="#contact">Contact me about a product launch <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="studio-work studio-section" id="work">
          <div className="studio-work-heading">
            <div>
              <h2>See what I can create.</h2>
            </div>
            <p>I create product imagery and animation for electronics and furniture brands.</p>
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
          <Link className="studio-inline-link" href="/work">View all my work <ArrowUpRight size={16} aria-hidden="true" /></Link>
          <Link className="studio-inline-link studio-home-insight-link" href="/blog/benefits-3d-product-visualization-ecommerce">
            Read the guide: Benefits of 3D product visualization for ecommerce <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <Link className="studio-inline-link studio-home-insight-link" href="/blog/3d-product-visualization-ecommerce">
            3D product visualization for ecommerce: a practical guide <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </section>

        <section className="studio-contact studio-section" id="contact">
          <div className="studio-contact-copy">
            <h2>Tell me about your product.</h2>
            <p>Share the product, the deliverables you need, and your ideal timeline. I’ll review the brief and reply by email.</p>
            <a className="studio-contact-email" href="mailto:hello@designyuv.com">hello@designyuv.com <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a
              className="studio-button studio-button-dark mt-5"
              href="https://cal.com/yuv-raj-pao2g5/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a free discovery call <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <InquiryForm />
        </section>

        <section className="studio-possibilities studio-section" id="services">
          <div className="studio-section-heading">
            <p className="studio-eyebrow">A PRODUCT, MANY POSSIBILITIES</p>
            <h2>I build a visual system around the product.</h2>
            <p>I can show a product from a new angle, bring out a detail, or place it in a campaign-ready scene. I shape each asset mix around the brief.</p>
          </div>
          <PossibilityGallery items={[...possibilities]} />
          <div className="studio-capability-line"><span>STILLS</span><span>MOTION</span><span>CAMPAIGN VISUALS</span><span>PRODUCT VARIATIONS</span></div>
        </section>

        <section className="studio-process studio-section" id="process">
          <div className="studio-process-heading">
            <p className="studio-eyebrow">A CLEAR, COLLABORATIVE PROCESS</p>
            <h2>I take each product from brief to final files.</h2>
            <p>I agree on scope and review expectations up front, then keep each stage clear.</p>
          </div>
          <div className="studio-process-grid">
            {processSteps.map(([number, title, description]) => (
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
            <p>I share the product, my creative choices, and the assets I made on each project page.</p>
            <Link className="studio-button studio-button-light" href="/work">View all my projects <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="studio-proof-projects" aria-label="Featured project names">
            <Link href="/projects/ZeroCO"><span>01</span>ZeroCO<ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link href="/projects/Portronics"><span>02</span>Portronics<ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link href="/projects/Mood"><span>03</span>Mood<ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link href="/projects/HearO"><span>04</span>HearO<ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link href="/projects/tdg-audio"><span>05</span>TDG Audio<ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link href="/projects/GullyLab"><span>06</span>GullyLab<ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link href="/projects/TangentGC"><span>07</span>TangentGC<ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </section>

        <section className="studio-faq studio-section" id="faq">
          <div className="studio-faq-heading">
            <p className="studio-eyebrow">GOOD TO KNOW</p>
            <h2>Questions before I begin?</h2>
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

      </main>

      <Footer />
    </div>
  );
}
