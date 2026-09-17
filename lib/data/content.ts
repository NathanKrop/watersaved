import type { EventItem, ImpactGoal, NewsPost, Story, TeamMember } from "@/lib/types";

export const stories: Story[] = [
  {
    slug: "kesup-forest-escarpment-breathes-life",
    title: "Kesup Forest: Where the Escarpment Breathes Life",
    dek: "Just past the highland town of Iten, where runners chase the sky and clouds hug the cliffs, a quiet revolution is taking root.",
    author: "Field Team, Elgeyo Marakwet",
    publishedAt: "2026-06-02",
    relatedProjectSlug: "kesup-forest",
    relatedProgrammeSlug: "agroforestry-reforestation",
    image: "/img/MVIMG_20260603_113312.jpg",
    body: [
      "The road to Kesup climbs out of Iten past the training camps and drops away suddenly at the escarpment edge, the Kerio Valley opening out two thousand feet below. It is easy to see, standing there, why this ridge line matters more than its size suggests: every spring on this slope either reaches the valley or doesn't, and for years, fewer of them did.",
      "Beatrice Chepkirui has run the Kesup women's nursery group since it started with forty seedling bags under a borrowed shade net. 'We used to buy trees from outside,' she says, 'wattle, mostly, because it grows fast. Now we grow what belongs here — podo, olive — because the roots hold the slope the way wattle never did.'",
      "The nursery now supplies both boundary planting for member farms and direct stock for escarpment blocks fenced off from grazing two seasons ago. Youth scouts, paid a small monthly stipend, walk the fence line weekly and report breaks before goats find them.",
      "It is slow work, measured in centimetres of canopy and litres of spring flow rather than headlines. But walk the fenced block today and the undergrowth is knee-high where it was bare rock two years ago. The forest is speaking — and Kesup is calling you home.",
    ],
  },
  {
    slug: "kaptagat-cedar-patrols",
    title: "Walking the Cedar Line: Night Patrols in Kaptagat",
    dek: "Old-growth cedar doesn't regrow in a funding cycle. In Kaptagat, protection means showing up.",
    author: "Field Team, Uasin Gishu",
    publishedAt: "2026-04-18",
    relatedProjectSlug: "kaptagat-forest",
    relatedProgrammeSlug: "wildlife-biodiversity",
    image: "/img/MVIMG_20260603_130618.jpg",
    body: [
      "Kaptagat's cedar stands are among the oldest in Uasin Gishu, some trees well over a century old. Losing one is not a five-year setback; it is closer to permanent within a working lifetime.",
      "Joint patrols with Kenya Forest Service now cover the block twice weekly, timed around the hours illegal pit-sawing is most common. It is unglamorous work — mostly walking, mostly nothing happens — but the difference shows in the stumps that stop appearing.",
    ],
  },
  {
    slug: "chemususu-terraces-take-hold",
    title: "The Terraces Above Chemususu",
    dek: "Eldoret's water supply starts on hillside farms most of the town's residents will never see.",
    author: "Field Team, Baringo",
    publishedAt: "2026-02-09",
    relatedProjectSlug: "chemususu-catchment",
    relatedProgrammeSlug: "regenerative-agriculture",
    image: "/img/MVIMG_20260603_133646.jpg",
    body: [
      "Chemususu Dam supplies much of Eldoret's piped water, and for years its reservoir has been filling faster with silt than anyone planned for. The silt doesn't come from the dam — it comes from bare hillside plots two and three farms upstream.",
      "Terracing training here is deliberately unglamorous: contour lines, grass strips, fodder trees on the steepest margins. Farmers who adopt it see less topsoil washed away by December — and, just as importantly, keep it on their own land instead of losing it to the dam.",
    ],
  },
];

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
