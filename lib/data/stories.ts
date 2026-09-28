import sourceStories from "./story-source.json";
import type { Story } from "@/lib/types";

const storyPhotos = [
  ["/img/IMG_20260617_173430.jpg", "/img/IMG_20260617_173433.jpg"],
  ["/img/IMG_20260617_173557.jpg", "/img/IMG_20260617_173639.jpg"],
  ["/img/IMG_20260617_173723.jpg", "/img/IMG_20260617_173732.jpg"],
  ["/img/MVIMG_20260603_113312.jpg", "/img/MVIMG_20260603_113331.jpg"],
  ["/img/MVIMG_20260603_113345.jpg", "/img/MVIMG_20260603_130618.jpg"],
  ["/img/MVIMG_20260603_130623.jpg", "/img/MVIMG_20260603_130627.jpg"],
  ["/img/MVIMG_20260603_130933.jpg", "/img/MVIMG_20260603_133646.jpg"],
  ["/img/MVIMG_20260616_163701.jpg", "/img/MVIMG_20260617_104556.jpg"],
  ["/img/marakwet/photo_2026-09-22_15-47-35.jpg", "/img/marakwet/photo_2026-09-22_15-47-36.jpg"],
  ["/img/marakwet/photo_2026-09-22_15-47-37.jpg", "/img/marakwet/photo_2026-09-22_15-47-38.jpg"],
  ["/img/marakwet/photo_2026-09-22_15-47-39.jpg", "/img/marakwet/photo_2026-09-22_15-47-40.jpg"],
  ["/img/marakwet/photo_2026-09-22_15-47-41.jpg", "/img/marakwet/photo_2026-09-22_15-47-43.jpg"],
  ["/img/marakwet/photo_2026-09-22_15-47-44.jpg", "/img/marakwet/photo_2026-09-22_15-47-45.jpg"],
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

if (sourceStories.length > storyPhotos.length) {
  throw new Error("Add a unique photo pair for every story before adding more stories.");
}

export const stories: Story[] = sourceStories.map((source, index) => ({
  slug: slugify(source.title),
  title: source.title,
  dek: source.dek || "Stories and field notes from Save Kenya Water Towers.",
  body: source.body,
  author: "Save Kenya Water Towers",
  publishedAt: source.publishedAt,
  images: storyPhotos[index],
  image: storyPhotos[index][0],
}));
