import { marakwetPhotos } from "@/lib/data/marakwet-photos";

export const primaryLocation = {
  name: "Elgeyo-Marakwet County",
  shortName: "Elgeyo-Marakwet",
  places: ["Iten", "Kesup Forest", "Spencer Line", "Kerio Valley"],
  description:
    "Community-led restoration along the Elgeyo-Marakwet escarpment, where forests, springs and farms meet above the Kerio Valley.",
  image: marakwetPhotos.highlands,
  imageAlt: "Highland forest catchment landscape",
  projectHref: "/projects/spencer-line-restoration",
  countyHref: "/where-we-work#elgeyo-marakwet",
} as const;