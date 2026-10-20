export const COLORS = [
  { slug: "blue", name: "Petrol", hex: "#34577b" },
  { slug: "green", name: "Moss", hex: "#61744b" },
  { slug: "mustard", name: "Ochre", hex: "#d1a52c" },
  { slug: "red", name: "Berry", hex: "#9f3438" },
  { slug: "terracota", name: "Terracotta", hex: "#b8634b" },
] as const;

export type ChairColorSlug = (typeof COLORS)[number]["slug"];

export const CHAIR_FRAME_COUNT = 36;
