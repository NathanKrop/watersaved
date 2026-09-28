import type { EventItem, ImpactGoal, NewsPost, TeamMember } from "@/lib/types";


export const newsPosts: NewsPost[] = [
  {
    slug: "sixth-county-nakuru-highlands",
    title: "We're extending our mandate into Nakuru County",
    summary:
      "Site assessments have begun in the Mau-adjacent highlands, marking our sixth county of operation and first work bordering the Mau Forest Complex.",
    category: "announcement",
    publishedAt: "2026-07-14",
  },
  {
    slug: "kccwg-annual-convening-2026",
    title: "We presented catchment data at the KCCWG annual convening",
    summary:
      "As a member of the Kenya Climate Change Working Group, our team shared five years of spring-flow monitoring data from the Elgeyo escarpment.",
    category: "partnership",
    publishedAt: "2026-05-22",
  },
  {
    slug: "new-grant-cherangani-north",
    title: "New grant funds the Cherangani North Corridor project",
    summary:
      "A multi-year grant will fund community entry, two new women-run nurseries, and a youth forest-scout cohort in West Pokot.",
    category: "grant",
    publishedAt: "2026-03-30",
  },
  {
    slug: "annual-report-2025-published",
    title: "Our 2025 Annual Report is now available",
    summary: "Full financials, hectare-by-hectare progress and independently reviewed impact figures for 2025.",
    category: "press",
    publishedAt: "2026-01-20",
  },
];

export const events: EventItem[] = [
  {
    slug: "kesup-planting-day-october-2026",
    title: "Kesup Escarpment Community Planting Day",
    description:
      "Join the Kesup women's nursery group and local scouts for a morning of replanting on the escarpment block, followed by lunch with the community.",
    locationText: "Kesup Forest, Elgeyo Marakwet County",
    startsAt: "2026-10-11T08:00:00+03:00",
    isVirtual: false,
  },
  {
    slug: "donor-briefing-q3-2026",
    title: "Quarterly Donor & Partner Briefing",
    description:
      "An online walkthrough of Q3 progress across all six counties, with time for donor and partner questions.",
    locationText: "Online",
    startsAt: "2026-10-24T15:00:00+03:00",
    isVirtual: true,
  },
  {
    slug: "world-water-day-2027-eldoret",
    title: "World Water Day — Eldoret Community Forum",
    description: "A public forum on catchment health, held with Uasin Gishu County and Kenya Water Towers Agency.",
    locationText: "Eldoret, Uasin Gishu County",
    startsAt: "2027-03-22T09:00:00+03:00",
    isVirtual: false,
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Naomi Jepkosgei",
    role: "Executive Director",
    bio: "Leads the organisation's strategy and represents Save Kenya Water Towers within the Kenya Climate Change Working Group.",
    isBoardMember: false,
    image: "/img/PHOTO-2026-07-14-14-03-45.jpg",
  },
  {
    name: "Kiprotich Langat",
    role: "Programmes Director",
    bio: "Oversees field programmes across all six counties, with a background in forest ecology and community extension.",
    isBoardMember: false,
    image: "/img/PHOTO-2026-07-14-14-03-49.jpg",
  },
  {
    name: "Faith Chebet",
    role: "Community Partnerships Lead",
    bio: "Coordinates the nursery groups, forest scouts and school programmes that keep restoration community-led.",
    isBoardMember: false,
  },
  {
    name: "Amb. Josephine Nyongesa",
    role: "Board Chair",
    bio: "Former diplomat and long-standing advocate for catchment protection policy in the Rift Valley.",
    isBoardMember: true,
  },
  {
    name: "Prof. David Kiptoo",
    role: "Board Member",
    bio: "Forest hydrologist advising on the organisation's monitoring and evaluation methodology.",
    isBoardMember: true,
  },
];

export const impactGoals: ImpactGoal[] = [
  {
    label: "Hectares under active restoration",
    currentValue: 269,
    targetValue: 840,
    unit: "hectares",
    targetYear: 2030,
    methodologyNote: "GPS-mapped project boundaries, verified each dry season by field staff.",
  },
  {
    label: "Indigenous trees planted",
    currentValue: 92200,
    targetValue: 350000,
    unit: "trees",
    targetYear: 2030,
    methodologyNote: "Nursery dispatch records cross-checked against planting-day headcounts.",
  },
  {
    label: "Water sources protected",
    currentValue: 34,
    targetValue: 90,
    unit: "springs & intakes",
    targetYear: 2030,
    methodologyNote: "Logged with GPS coordinates; flow and fence condition revisited annually.",
  },
  {
    label: "Households engaged",
    currentValue: 1055,
    targetValue: 3000,
    unit: "households",
    targetYear: 2030,
    methodologyNote: "Households with an active nursery membership, farm-edge training, or forest-scout role.",
  },
];
