import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/footer";
import StudioHeader from "@/components/studio-header";
import BeforeAfterFloorViewer from "./BeforeAfterFloorViewer";
import FloorDayNightViewer from "./FloorDayNightViewer";
import "./page.css";

const articleUrl = "https://www.designyuv.com/blog/3d-carpet-visualization";
const articleTitle = "3D Carpet Visualization: 3 Ways It Helps You Sell";
const articleDescription =
  "See how 3D carpet visualization lets customers compare carpets in one room, browse realistic examples, and preview their own space before they buy.";
const flooringUrl = "https://wpcgreenfloor.com/flooring/";

const contents = [
  ["What is 3D carpet visualization?", "what-is-3d", "—"],
  ["Compare different carpets in the same room", "compare", "01"],
  ["Show realistic carpet examples", "examples", "02"],
  ["Preview a customer's own space", "preview", "03"],
  ["Frequently asked questions", "faq", "—"],
] as const;

const missingImages = {
  hero: {
    title: "Sample swatches beside a rendered room",
    description:
      "A showroom customer compares small carpet swatches with a tablet showing the finished room.",
  },
  bedroom: {
    title: "Cream carpet in a bright bedroom",
    description:
      "A Scandinavian-style bedroom with cream plush carpet and morning light across the pile.",
  },
  livingRoom: {
    title: "Charcoal loop carpet in a living room",
    description:
      "A textured charcoal loop carpet in a living room with warm lamps.",
  },
  stairs: {
    title: "Patterned carpet on stairs and hallway",
    description:
      "A muted blue and cream carpet runner on a staircase and hallway.",
  },
  detail: {
    title: "Carpet fiber detail",
    description:
      "A close-up showing carpet fibers, yarn twist, and tufts.",
  },
  options: {
    title: "Three carpet choices for one room",
    description:
      "A safe, a bold, and a budget carpet option shown in the same customer room.",
  },
  carpetOrRug: {
    title: "Wall-to-wall carpet or area rug",
    description:
      "One living room comparing wall-to-wall carpet with an area rug over a hard floor.",
  },
} as const;

const linkedFloorImages = [
  {
    src: "/floor%20blog/wool.webp",
    alt: "A bright room with a soft, textured wool carpet across the floor",
    label: "Option 01",
    name: "Wool carpet",
    caption: "Wool carpet shown in a bright interior.",
  },
  {
    src: "/floor%20blog/andersonteak.webp",
    alt: "A sunlit room with a warm wood-look floor",
    label: "Option 02",
    name: "Anderson Teak",
    caption: "A warm wood-look floor in natural light.",
  },
  {
    src: "/floor%20blog/seolink/0001.webp",
    alt: "A bright room with a warm floor, shown in the day-to-night visualization",
    label: "Option 03",
    name: "Daylight finish",
    caption: "The same room from the interactive day-to-night render.",
  },
] as const;

const carpetExampleImages = [
  {
    src: "/floor%20blog/before%20after/topshot-brown.webp",
    alt: "The room with a dark brown plank floor",
    name: "Dark brown",
  },
  {
    src: "/floor%20blog/before%20after/topshot-orange.webp",
    alt: "The room with a warm orange-toned plank floor",
    name: "Warm orange",
  },
  {
    src: "/floor%20blog/before%20after/another-pattern.webp",
    alt: "The room with a light geometric wood-pattern floor",
    name: "Geometric pattern",
  },
] as const;

function ComingSoonFigure({
  title,
  description,
  wide = false,
}: {
  title: string;
  description: string;
  wide?: boolean;
}) {
  return (
    <figure className={`floor-article-figure${wide ? " floor-article-figure-wide" : ""}`}>
      <div
        className="floor-article-coming-soon"
        role="img"
        aria-label={`${title}. Image coming soon.`}
      >
        <span>IMAGE / COMING SOON</span>
        <strong>{title}</strong>
      </div>
      <figcaption>{description}</figcaption>
    </figure>
  );
}

function LinkedFloorImages() {
  return (
    <div className="floor-article-options-grid">
      {linkedFloorImages.map((image) => (
        <figure className="floor-article-option" key={image.src}>
          <a
            className="floor-article-option-image"
            href={flooringUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${image.name}. ${image.caption} Browse flooring options at WPC Green Floor. Opens in a new tab.`}
          >
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
          </a>
          <figcaption>
            <span>{image.label}</span>
            <strong>{image.name}</strong>
            <p>{image.caption}</p>
            <a href={flooringUrl} target="_blank" rel="noopener noreferrer">
              Explore flooring at WPC Green Floor
            </a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

const faqs = [
  [
    "How is a 3D carpet render different from a carpet visualizer app?",
    "Apps let a customer upload a photo and swap carpets quickly, but lighting and texture detail can be basic. A custom 3D render is built for a specific room and carpet, giving more control over shadows, pile texture, and color.",
  ],
  [
    "What do I need to send for a custom carpet render?",
    "Photos of the room from a couple of angles, rough measurements, and product names or sample codes for the carpets you want to see. A floor plan can help with larger spaces.",
  ],
  [
    "Which types of carpet can be visualized?",
    "Cut pile, loop, cut-and-loop, patterned carpet, carpet tiles, and area rugs can all be rendered. Accurate product photos or sample scans help match the real carpet.",
  ],
  [
    "How long does a 3D carpet render take?",
    "Timing depends on the number of rooms, camera angles, carpet options, and the detail required. One room with a few carpets is a smaller project than a full product range, so agree on a timeline before work begins.",
  ],
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: articleTitle,
  description: articleDescription,
  mainEntityOfPage: articleUrl,
  author: {
    "@type": "Person",
    name: "Yuvraj Chauhan",
    url: "https://www.designyuv.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "DesignYuv",
    url: "https://www.designyuv.com",
  },
  image: [
    "https://www.designyuv.com/floor%20blog/linkedin-post.webp",
    ...linkedFloorImages.map((image) => `https://www.designyuv.com${image.src}`),
  ],
};

export const metadata: Metadata = {
  title: { absolute: articleTitle },
  description: articleDescription,
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article",
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    images: [
      {
        url: "/floor%20blog/linkedin-post.webp",
        width: 5000,
        height: 5000,
        alt: "Collage of alternate floor finishes for the same room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: articleDescription,
    images: ["/floor%20blog/linkedin-post.webp"],
  },
};

export default function CarpetVisualizationArticle() {
  return (
    <div className="studio-page studio-article-page floor-article-page">
      <StudioHeader currentPage="insights" />
      <main>
        <div className="studio-article-hero">
          <Link href="/insights" className="studio-article-back">
            <ArrowLeft size={15} aria-hidden="true" /> All insights
          </Link>
          <p className="studio-eyebrow"><span /> FLOORING / 3D VISUALIZATION</p>
          <h1>{articleTitle}</h1>
          <p className="studio-article-deck">{articleDescription}</p>
        </div>

        <div className="studio-article-layout">
          <aside className="studio-article-toc" aria-label="Article contents">
            <p>IN THIS ARTICLE</p>
            <ol>
              {contents.map(([label, id, number]) => (
                <li key={id}>
                  <a href={`#${id}`}><span>{number}</span>{label}</a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="studio-article-body">
            <p className="studio-article-lead">
              A customer spends 40 minutes in your showroom, holds three carpet samples up
              to the window, and leaves saying they&apos;ll think about it. Any{" "}
              <a href="https://heritagecarpet.store/" target="_blank" rel="noopener noreferrer">
                professional carpet installation company
              </a>{" "}
              has watched this happen more than once.
            </p>
            <p>
              The samples aren&apos;t the problem. A 6-inch carpet sample can&apos;t show how
              color and texture look across a whole room, and customers know it, which is
              why they hesitate.
            </p>
            <p>
              3D carpet visualization lets them see the finished room before they commit.
              This guide covers three ways carpet companies can use it: comparing options
              in one room, showing realistic examples, and previewing a customer&apos;s own
              space. See our{" "}
              <Link href="/ecommerce-product-imagery">3D product imagery services</Link>{" "}
              if you&apos;re planning a visualization project.
            </p>
            <ComingSoonFigure
              title={missingImages.hero.title}
              description={missingImages.hero.description}
              wide
            />

            <section id="what-is-3d">
              <p className="studio-article-kicker">THE BASICS</p>
              <h2>What Is 3D Carpet Visualization?</h2>
              <p>
                3D carpet visualization means building a digital model of a room and
                rendering it with different carpet styles, colors, and textures. The
                result is a photo-quality image customers can compare before they buy.
              </p>
              <p>
                It&apos;s different from quick carpet visualizer apps where people upload a
                photo and tap through colors. Those can be convenient, but custom carpet
                renders give you more control over lighting, room details, and how the
                carpet texture appears. The right format depends on how much detail your
                customers need to make a decision.
              </p>
              <p>
                For 3D rendering for carpet companies, a reusable room setup makes it
                possible to show multiple carpet options under consistent conditions.
              </p>
            </section>

            <section id="compare">
              <p className="studio-article-kicker">01 / COMPARE</p>
              <h2>Compare Different Carpets in the Same Room</h2>
              <p>
                Showroom samples are small, and showroom lighting isn&apos;t your
                customer&apos;s lighting. So people end up guessing.
              </p>
              <p>
                With 3D, build one room and swap only the carpet. Keep the sofa, windows,
                lighting, and camera angle consistent so the comparison is fair.
              </p>
              <p>Here are three flooring options shown in the same room:</p>
              <LinkedFloorImages />
              <p>What to include in a comparison:</p>
              <ul>
                <li>Four to six carpets per room. More than that gets hard to compare.</li>
                <li>A spread of light, medium, and dark colors.</li>
                <li>A mix of textures, such as plush, loop, and patterned, next to a plain cut pile.</li>
                <li>A neutral and a bold option, if you stock both.</li>
              </ul>
              <p className="floor-article-tip">
                <strong>Tip:</strong> Try rendering each room in daylight and again in
                warm evening light. You can show how a grey carpet may look cool and flat
                at noon, then warmer under lamps at night.
              </p>
              <figure className="floor-daynight-figure">
                <FloorDayNightViewer />
                <figcaption>
                  Drag, use the arrows, or focus the preview and press the arrow keys to
                  explore a room as its lighting shifts from day to evening.
                </figcaption>
              </figure>
            </section>

            <section id="examples">
              <p className="studio-article-kicker">02 / SHOWCASE</p>
              <h2>Show Realistic Carpet Examples Without a Photoshoot</h2>
              <p>
                Room photography for carpet can be slow and expensive. You need a styled
                space for every range, and you can&apos;t photograph a carpet that hasn&apos;t
                arrived yet.
              </p>
              <p>
                Rendered scenes can show a new range in several room styles before the
                first roll ships. Reusing the same camera style and mood also helps a
                catalog feel consistent.
              </p>
              <figure className="floor-article-figure floor-article-figure-wide floor-article-collage">
                <Image
                  src="/floor%20blog/linkedin-post.webp"
                  alt="A collage of different floor finishes shown in the same room"
                  width={5000}
                  height={5000}
                  sizes="(max-width: 760px) 100vw, 760px"
                />
                <figcaption>
                  A range of floor finishes can be presented together in one visual.
                </figcaption>
              </figure>
              <div className="floor-article-example-grid">
                {carpetExampleImages.map((image) => (
                  <figure className="floor-article-example" key={image.src}>
                    <span className="floor-article-example-image">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 760px) 100vw, 33vw"
                      />
                    </span>
                    <figcaption>{image.name} floor</figcaption>
                  </figure>
                ))}
              </div>
              <p>
                Close-ups matter as much as wide shots. A tight crop of fibers, yarn
                twist, and tufts helps customers inspect the carpet&apos;s texture.
              </p>
              <p>A basic shot list for each range:</p>
              <ul>
                <li>One wide hero shot, usually a living room or bedroom.</li>
                <li>One or two other spaces, such as stairs, a hallway, or a home office.</li>
                <li>One close-up of the fiber and texture.</li>
                <li>One top-down view showing the color and pattern across the room.</li>
              </ul>
              <p className="floor-article-tip">
                <strong>Tip:</strong> Build each room once, then reuse it for new ranges.
                Just swap the carpet material and re-render to keep your catalog
                visually consistent without starting over.
              </p>
            </section>

            <section id="preview">
              <p className="studio-article-kicker">03 / PERSONALIZE</p>
              <h2>Preview Before and After Carpet Renders for Each Customer</h2>
              <p>
                Customers don&apos;t really worry about a carpet in the abstract. They worry
                about <em>this</em> carpet in <em>their</em> room.
              </p>
              <p>
                For a custom preview, the customer sends a few photos and rough
                measurements. Rebuild the space in 3D and render it with the carpets
                they&apos;re considering. They can see a before and after without paying
                for an install first.
              </p>
              <figure className="floor-daynight-figure floor-before-after-figure">
                <BeforeAfterFloorViewer />
                <figcaption>
                  Drag the center handle to compare before and after, then choose a
                  floor material to preview.
                </figcaption>
              </figure>
              <p>Previews can also help answer questions customers don&apos;t always ask out loud:</p>
              <ul>
                <li>Will a dark carpet make my small room look smaller?</li>
                <li>Will this color clash with my sofa and curtains?</li>
                <li>Would wall-to-wall carpet or an area rug suit this room better?</li>
              </ul>
              <ComingSoonFigure
                title={missingImages.options.title}
                description={missingImages.options.description}
              />
              <ComingSoonFigure
                title={missingImages.carpetOrRug.title}
                description={missingImages.carpetOrRug.description}
              />
              <p className="floor-article-tip">
                <strong>Tip:</strong> Give your customers a short list to compare. Start
                with three renders—a safe pick, a bolder one, and a budget one—instead of
                overwhelming them with twenty.
              </p>
            </section>

            <section id="faq">
              <p className="studio-article-kicker">COMMON QUESTIONS</p>
              <h2>FAQ: 3D Carpet Visualization</h2>
              {faqs.map(([question, answer]) => (
                <div className="floor-article-faq" key={question}>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </div>
              ))}
            </section>

            <section className="studio-article-conclusion">
              <p className="studio-article-kicker">NEXT STEPS</p>
              <h2>Start with one room and three carpets.</h2>
              <ol>
                <li>Pick three best-selling carpets and render them in one shared room.</li>
                <li>Add a hero image and a close-up to each product page.</li>
                <li>Offer a custom preview of a customer&apos;s own room to your next five serious leads.</li>
              </ol>
              <p>
                Want help creating the visuals?{" "}
                <Link href="/#contact">Get in touch about a carpet visualization project.</Link>
              </p>
            </section>
          </article>
        </div>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Footer />
    </div>
  );
}
