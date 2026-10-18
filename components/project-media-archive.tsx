import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/footer";
import ProjectStillCarousel from "@/components/project-still-carousel";
import StudioHeader from "@/components/studio-header";
import { mediaProjects } from "@/lib/project-media";

type ProjectMediaArchiveProps = {
  mode: "imagery" | "animations";
};

export default function ProjectMediaArchive({ mode }: ProjectMediaArchiveProps) {
  const isImagery = mode === "imagery";
  const projects = mediaProjects.filter((project) =>
    isImagery ? project.stills.length > 0 : project.videos.length > 0,
  );

  return (
    <div className="studio-page studio-media-archive-page">
      <StudioHeader currentPage={mode} />
      <main>
        <section className="studio-media-archive-intro">
          <p className="studio-eyebrow">PORTFOLIO / {isImagery ? "STILLS" : "MOTION"}</p>
          <h1>{isImagery ? "Ecommerce product imagery" : "3D product animations"}</h1>
          <p>
            {isImagery
              ? "Browse product visuals grouped by project. Open any still at full size or visit the complete project."
              : "Watch the available animations grouped by project, then explore the complete project for more context."}
          </p>
        </section>

        <div className="studio-media-project-list">
          {projects.map((project, projectIndex) => (
            <section className="studio-media-project" key={project.name} id={project.name.toLowerCase().replace(/\s+/g, "-")}>
              <div className="studio-media-project-heading">
                <div className="studio-media-project-title">
                  <span>{String(projectIndex + 1).padStart(2, "0")}</span>
                  <h2>{project.name}</h2>
                </div>
                <div className="studio-media-project-action">
                  <p>{isImagery ? `${project.stills.length} still${project.stills.length === 1 ? "" : "s"}` : `${project.videos.length} video${project.videos.length === 1 ? "" : "s"}`}</p>
                  <Link href={project.href}>Full project <ArrowUpRight size={15} aria-hidden="true" /></Link>
                </div>
              </div>

              {isImagery ? (
                <ProjectStillCarousel projectName={project.name} stills={project.stills} />
              ) : (
                <div className="studio-media-video-grid">
                  {project.videos.map((video, videoIndex) => (
                    <article className="studio-media-video" key={video.id}>
                      <div className="studio-media-video-frame">
                        <iframe
                          src={`https://player.vimeo.com/video/${video.id}?badge=0&autopause=0&player_id=0&app_id=58479`}
                          title={`${project.name}: ${video.title}`}
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          loading="lazy"
                          allowFullScreen
                        />
                      </div>
                      <div className="studio-media-video-caption">
                        <span>VIDEO {String(videoIndex + 1).padStart(2, "0")}</span>
                        <h3>{video.title}</h3>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}