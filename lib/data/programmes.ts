import type { Programme } from "@/lib/types";

export const programmes: Programme[] = [
  {
    slug: "agroforestry-reforestation",
    name: "Agroforestry & Reforestation",
    shortName: "Agroforestry",
    summary:
      "Indigenous tree nurseries, on-farm woodlots and escarpment replanting that rebuild the forest cover water towers depend on.",
    body: [
      "We raise indigenous seedlings — podo, elgon teak, African olive — in community-run nurseries rather than trucking in fast-growing exotics that strip the water table. Farmers who plant boundary woodlots get seedlings, spacing guidance and two seasons of follow-up.",
      "On the escarpment itself, we work with Kenya Forest Service and local scouts to replant degraded blocks and fence them against grazing until the canopy closes.",
    ],
  },
  {
    slug: "water-source-protection",
    name: "Water Source Protection",
    shortName: "Water Sources",
    summary:
      "Fencing, buffer-zone planting and spring protection at the exact points where rivers begin.",
    body: [
      "A spring loses its flow long before anyone downstream notices. We map active water points with communities, fence the immediate catchment, plant a riparian buffer of deep-rooted species, and build simple protected intakes so households stop drawing straight from an open, silting spring.",
      "Every protected source is logged with GPS coordinates and revisited each dry season to check flow and fence integrity.",
    ],
  },
  {
    slug: "education-awareness",
    name: "Education & Awareness",
    shortName: "Education",
    summary: "School tree clubs, barazas and radio spots that make catchment health a shared, local concern.",
    body: [
      "Conservation that only NGO staff understand doesn't survive a change of funding cycle. We run school environment clubs, community barazas ahead of any planting season, and local radio segments in Kalenjin and Swahili explaining why a forest three ridges away affects a farm downstream.",
    ],
  },
  {
    slug: "regenerative-agriculture",
    name: "Regenerative Agriculture",
    shortName: "Agriculture",
    summary: "Terracing, cover cropping and reduced-tillage training for farms on the forest edge.",
    body: [
      "Most pressure on water towers comes from farms pushing uphill for more land. We train farm households bordering gazetted forest in terracing, cover cropping, and intercropping with fodder trees — practices that raise yield per acre so the pressure to clear more forest eases.",
    ],
  },
  {
    slug: "gender-intergenerational-equity",
    name: "Gender & Intergenerational Equity",
    shortName: "Equity",
    summary: "Putting women's groups and youth scouts at the centre of nursery management and forest monitoring.",
    body: [
      "Women's groups run the majority of our community nurseries and see the income from seedling sales directly. Youth 'forest scouts' are trained and paid a stipend to monitor fence lines and report encroachment — work that builds a next generation of local conservation leadership rather than relying on outside staff indefinitely.",
    ],
  },
  {
    slug: "wildlife-biodiversity",
    name: "Wildlife & Biodiversity",
    shortName: "Biodiversity",
    summary: "Corridor protection and species monitoring for the forest's non-human residents.",
    body: [
      "Restored blocks are monitored for the return of indigenous bird and small-mammal species, and we work with Kenya Wildlife Service on corridor sections that let wildlife move between forest fragments rather than becoming isolated on shrinking islands of cover.",
    ],
  },
];

export function getProgrammeBySlug(slug: string) {
  return programmes.find((p) => p.slug === slug);
}
