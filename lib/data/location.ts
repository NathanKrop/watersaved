import { sitePhotos } from "@/lib/data/site-photos";

export const primaryLocation = {
  name: "Elgeyo-Marakwet County",
  shortName: "Elgeyo-Marakwet",
  places: ["Iten", "Kesup Forest", "Spencer Line", "Kerio Valley"],
  description:
    "Community-led restoration along the Elgeyo-Marakwet escarpment, where forests, springs and farms meet above the Kerio Valley.",
  image: sitePhotos.location,
  imageAlt: "Highland forest catchment landscape",
  projectHref: "/projects/spencer-line-restoration",
  countyHref: "/projects",
} as const;
