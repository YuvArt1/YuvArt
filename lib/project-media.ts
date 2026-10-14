export type ProjectStill = {
  src: string;
  alt: string;
};

export type ProjectVideo = {
  id: string;
  title: string;
};

export type MediaProject = {
  name: string;
  href: string;
  stills: ProjectStill[];
  videos: ProjectVideo[];
};

export const mediaProjects: MediaProject[] = [
  {
    name: "ZeroCO",
    href: "/projects/ZeroCO",
    stills: [
      { src: "/Zeroco.webp", alt: "ZeroCO project still 1" },
      { src: "/Zeroco (1).webp", alt: "ZeroCO project still 2" },
      { src: "/Zeroco (2).webp", alt: "ZeroCO project still 3" },
      { src: "/Zeroco (3).webp", alt: "ZeroCO project still 4" },
      { src: "/Zeroco (4).webp", alt: "ZeroCO project still 5" },
      { src: "/Zeroco (5).webp", alt: "ZeroCO project still 6" },
      { src: "/Zeroco (7).webp", alt: "ZeroCO project still 7" },
    ],
    videos: [
      { id: "1102749162", title: "Zeroco_Scen1.mp4" },
      { id: "1102749087", title: "Scene2 Zero" },
      { id: "1102749120", title: "Scene3 Zero" },
      { id: "1102749148", title: "Scene4 Zero" },
    ],
  },
  {
    name: "GullyLab",
    href: "/projects/GullyLab",
    stills: [1, 2, 3, 4, 5].map((number) => ({
      src: `/GullyLab (${number}).webp`,
      alt: `GullyLab project still ${number}`,
    })),
    videos: [{ id: "1150857148", title: "Gully Lab Animation" }],
  },
  {
    name: "HearO",
    href: "/projects/HearO",
    stills: [1, 2, 3, 4, 5, 6].map((number) => ({
      src: `/HeroO (${number}).webp`,
      alt: `HearO project still ${number}`,
    })),
    videos: [],
  },
  {
    name: "Mood",
    href: "/projects/Mood",
    stills: [1, 2, 3, 4, 5, 6].map((number) => ({
      src: `/MoodNz (${number}).webp`,
      alt: `Mood project still ${number}`,
    })),
    videos: [{ id: "1154253992", title: "Mood Nz Bed Animation" }],
  },
  {
    name: "Portronics",
    href: "/projects/Portronics",
    stills: [
      { src: "/Portronics.webp", alt: "Portronics project still 1" },
      { src: "/Portronics1.webp", alt: "Portronics project still 2" },
      { src: "/Portronics2.webp", alt: "Portronics project still 3" },
      { src: "/Portronics3.webp", alt: "Portronics project still 4" },
    ],
    videos: [{ id: "1102750316", title: "Portronics Animation" }],
  },
  {
    name: "TGD Audio",
    href: "/projects/TGDAudio",
    stills: [
      { src: "/TGD/Final.webp", alt: "TGD Audio final product still" },
      { src: "/TGD/Front.webp", alt: "TGD Audio front view" },
      { src: "/TGD/TopDown.webp", alt: "TGD Audio top-down view" },
      { src: "/TGD/BottomTop.webp", alt: "TGD Audio bottom-up view" },
    ],
    videos: [{ id: "1222345243", title: "TGD Audio product animation" }],
  },
  {
    name: "Folden Lane",
    href: "/projects/FoldenLane",
    stills: [{ src: "/foldenlane.webp", alt: "Folden Lane web content project visual" }],
    videos: [
      { id: "1233846508", title: "Folden Lane LinkedIn video" },
      { id: "1233846509", title: "Folden Lane web content" },
    ],
  },
  {
    name: "TangentGC",
    href: "/projects/TangentGC",
    stills: [{ src: "/Tangent.webp", alt: "TangentGC project visual" }],
    videos: [
      { id: "1102747582", title: "TangentGC Main animation" },
      { id: "1102748531", title: "TangentGC animation 2" },
    ],
  },
];