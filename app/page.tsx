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

const callUrl = "https://cal.com/yuv-raj-pao2g5/30min";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="fixed left-0 top-0 z-20 w-full bg-white/90 px-6 py-4 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="font-space-grotesk text-2xl font-bold text-black transition-colors hover:text-gray-600">Yuv</Link>
          <div className="flex items-center space-x-4 font-inter md:space-x-8">
            <Link href="/about" className="text-black transition-colors hover:text-gray-600">About</Link>
            <a href={callUrl} target="_blank" rel="noopener noreferrer" className="rounded-md bg-black px-4 py-2 font-semibold text-white transition-colors hover:bg-gray-800">Book a Call</a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <section className="bg-gray-50 px-6 py-20 pt-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <h2 className="font-space-grotesk text-3xl font-bold tracking-wider text-black md:text-4xl">CASE STUDY</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {projects.map(([name, description, href, image, alt]) => (
                <div key={name} className="flex flex-col">
                  <Link href={href} className="group relative aspect-[4/3] overflow-hidden rounded-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                  </Link>
                  <h3 className="mt-3 font-space-grotesk font-medium text-black">{name}</h3>
                  <p className="font-inter text-sm text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
