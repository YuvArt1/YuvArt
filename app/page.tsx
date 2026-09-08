import Link from "next/link";
import Footer from "@/components/footer";

const projects = [
  ["TGD Audio", "Social media content and visual design", "/projects/TGDAudio", "/TGD/Final.png", "TGD Audio visual design and social media content"],
  ["Mood", "Web visual content and visual storytelling", "/projects/Mood", "/MoodNz (4).png", "Mood web visual content and visual design"],
  ["GullyLab", "Social media content and motion design", "/projects/GullyLab", "/GullyLab (1).png", "GullyLab social media and motion design"],
  ["HearO", "Web visual content and social media design", "/projects/HearO", "/HeroO (1).png", "HearO web visual content and social media design"],
  ["TangentGC", "Social media content and brand visuals", "/projects/TangentGC", "/Tangent.png", "TangentGC social media design"],
  ["ZeroCO", "Web visual content and social media design", "/projects/ZeroCO", "/Zeroco.png", "ZeroCO web visual content and visual design"],
  ["Portronics", "Social media content and creative design", "/projects/Portronics", "/Portronics.jpg", "Portronics social media design"],
] as const;

const problems = [
  ["Your brand looks inconsistent", "Different visuals, styles and messaging can make your business look unclear and forgettable."],
  ["Your content isn't grabbing attention", "Good ideas can get ignored when the visuals don't communicate quickly or stand out from competitors."],
  ["Your visual presence feels outdated", "Your web visuals and social media should represent the quality of your business and build trust."],
] as const;

const services = [
  ["Web Visual Content", "Clear, engaging visuals that help your business communicate across digital platforms."],
  ["Social Media Content", "Visual content designed to stop the scroll and communicate your brand effectively."],
  ["Motion & Visual Design", "Motion and creative visuals that make ideas easier to understand and harder to ignore."],
] as const;

const callUrl = "https://cal.com/yuv-raj-pao2g5/30min";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="fixed left-0 top-0 z-20 w-full bg-white/90 px-6 py-4 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="font-space-grotesk text-2xl font-bold text-black transition-colors hover:text-gray-600">Yuv</Link>
          <div className="flex items-center space-x-4 font-inter md:space-x-8">
            <Link href="/work" className="text-black transition-colors hover:text-gray-600">Work</Link>
            <Link href="/about" className="text-black transition-colors hover:text-gray-600">About</Link>
            <Link href="/contact" className="text-black transition-colors hover:text-gray-600">Contact Me</Link>
            <a href={callUrl} target="_blank" rel="noopener noreferrer" className="rounded-md bg-black px-4 py-2 font-semibold text-white transition-colors hover:bg-gray-800">Book a Call</a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <section className="bg-white px-6 pb-20 pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-space-grotesk text-4xl font-bold leading-tight text-black md:text-6xl">Design that helps your business stand out and get noticed.</h1>
            <p className="mx-auto mt-8 max-w-3xl font-inter text-lg leading-relaxed text-gray-600 md:text-xl">I help businesses turn weak visual communication into clear, engaging and memorable design through web visual content, social media content, motion design and creative visuals.</p>
            <a href={callUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-block rounded-md bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800">Let&apos;s Talk</a>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-space-grotesk text-3xl font-bold text-black md:text-4xl">Is your business struggling to communicate visually?</h2>
            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
              {problems.map(([title, description]) => <div key={title} className="rounded-md bg-white p-8"><h3 className="font-space-grotesk text-xl font-bold text-black">{title}</h3><p className="mt-4 font-inter leading-relaxed text-gray-600">{description}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-space-grotesk text-3xl font-bold text-black md:text-4xl">Turning business problems into clear visual experiences.</h2>
            <p className="mt-6 font-inter text-lg leading-relaxed text-gray-600">I work with businesses and brands to create visual content that communicates clearly, captures attention and gives people a stronger reason to engage with your brand.</p>
            <div className="mt-14 grid grid-cols-1 gap-8 text-left md:grid-cols-3">
              {services.map(([title, description]) => <div key={title}><h3 className="font-space-grotesk text-xl font-bold text-black">{title}</h3><p className="mt-3 font-inter text-gray-600">{description}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center"><h2 className="font-space-grotesk text-3xl font-bold tracking-wider text-black">WORK</h2><p className="mt-4 font-inter text-gray-600">A selection of projects across web visual content, social media and motion design.</p></div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {projects.map(([name, description, href, image, alt]) => <div key={name} className="flex flex-col"><Link href={href} className="group relative aspect-[4/3] overflow-hidden rounded-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"><img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100" /></Link><h3 className="mt-3 font-space-grotesk font-medium text-black">{name}</h3><p className="font-inter text-sm text-gray-600">{description}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-black px-6 py-24 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-space-grotesk text-3xl font-bold md:text-5xl">Have a business problem design can solve?</h2>
            <p className="mt-6 font-inter text-lg text-gray-300">Let&apos;s talk about your business, your audience and how better visual communication can help.</p>
            <a href={callUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-block rounded-md bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200">Book a Call</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
