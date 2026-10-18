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
      { src: "/zero-co-speaker-visual-01.webp", alt: "ZeroCO hand wash and hair wash bottles arranged diagonally" },
      { src: "/zero-co-speaker-visual-02.webp", alt: "Hand holding a ZeroCO wash bottle" },
      { src: "/zero-co-speaker-visual-03.webp", alt: "ZeroCO wash bottles shown in a horizontal product composition" },
      { src: "/zero-co-speaker-visual-04.webp", alt: "Angled 3D render of a ZeroCO wash bottle" },
      { src: "/zero-co-speaker-visual-05.webp", alt: "Front view of a ZeroCO pump bottle" },
      { src: "/zero-co-speaker-visual-06.webp", alt: "Angled product render of a ZeroCO wash bottle" },
      { src: "/zero-co-speaker-visual-07.webp", alt: "ZeroCO wash bottles in different label and cap colours" },
    ],
    videos: [
      { id: "1102749162", title: "ZeroCO hand wash and hair wash bottles" },
      { id: "1102749087", title: "ZeroCO wash bottle product arrangement" },
      { id: "1102749120", title: "Angled ZeroCO wash bottle close-up" },
      { id: "1102749148", title: "ZeroCO pump bottle product view" },
    ],
  },
  {
    name: "GullyLab",
    href: "/projects/GullyLab",
    stills: [1, 2, 3, 4, 5].map((number) => ({
      src: `/gullylab-${String(number).padStart(2, "0")}.webp`,
      alt: [
        "Navy, burgundy, and cream GullyLab sneakers shown in a 3D render",
        "Top view of burgundy and cream GullyLab sneakers",
        "Side view of a burgundy and cream GullyLab sneaker",
        "Close-up of the burgundy upper and cream sole of a GullyLab sneaker",
        "GullyLab product bottles shown side by side",
      ][number - 1],
    })),
    videos: [{ id: "1150857148", title: "Gully Lab Animation" }],
  },
  {
    name: "HearO",
    href: "/projects/HearO",
    stills: [6, 1, 4, 3, 2, 5].map((number) => ({
      src: `/hearo-product-visual-${String(number).padStart(2, "0")}.webp`,
      alt: `HearO consumer audio product render, view ${number}`,
    })),
    videos: [],
  },
  {
    name: "Mood",
    href: "/projects/Mood",
    stills: [2, 4, 6, 1, 3, 5].map((number) => ({
      src: `/mood-product-visual-${String(number).padStart(2, "0")}.webp`,
      alt: `Mood bed and bedroom furniture product visual, view ${number}`,
    })),
    videos: [{ id: "1154253992", title: "Mood Nz Bed Animation" }],
  },
  {
    name: "Portronics",
    href: "/projects/Portronics",
    stills: [
      { src: "/Portronics.webp", alt: "Portronics Luxcell Wireless Mini power bank render" },
      { src: "/Portronics1.webp", alt: "Portronics Luxcell Wireless Mini product detail render" },
      { src: "/Portronics2.webp", alt: "Portronics Luxcell Wireless Mini product angle" },
      { src: "/Portronics3.webp", alt: "Portronics Luxcell Wireless Mini rendered product scene" },
    ],
    videos: [{ id: "1102750316", title: "Portronics Animation" }],
  },
  {
    name: "TDG Audio",
    href: "/projects/tdg-audio",
    stills: [
      { src: "/TGD/Final.webp", alt: "TDG Audio final product still" },
      { src: "/TGD/Front.webp", alt: "TDG Audio front view" },
      { src: "/TGD/TopDown.webp", alt: "TDG Audio top-down view" },
      { src: "/TGD/BottomTop.webp", alt: "TDG Audio bottom-up view" },
    ],
    videos: [{ id: "1222345243", title: "TDG Audio product animation" }],
  },
  {
    name: "TangentGC",
    href: "/projects/TangentGC",
    stills: [{ src: "/Tangent.webp", alt: "TangentGC product packaging in a 3D animation still" }],
    videos: [
      { id: "1102747582", title: "TangentGC Main animation" },
      { id: "1102748531", title: "TangentGC animation 2" },
    ],
  },
];

const projectOrder = ["ZeroCO", "Portronics", "Mood", "HearO", "TDG Audio", "GullyLab", "TangentGC"];

mediaProjects.sort(
  (first, second) => projectOrder.indexOf(first.name) - projectOrder.indexOf(second.name),
);