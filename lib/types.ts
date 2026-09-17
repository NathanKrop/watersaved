export type County = {
  slug: string;
  name: string;
  summary: string;
  stat: string;
};

export type ProgrammeSlug =
  | "agroforestry-reforestation"
  | "water-source-protection"
  | "education-awareness"
  | "regenerative-agriculture"
  | "gender-intergenerational-equity"
  | "wildlife-biodiversity";

export type Programme = {
  slug: ProgrammeSlug;
  name: string;
  shortName: string;
  summary: string;
  body: string[];
};

export type ProjectStatus = "active" | "completed" | "planned";

export type Project = {
  slug: string;
  name: string;
  countySlug: string;
  programmeSlugs: ProgrammeSlug[];
  status: ProjectStatus;
  summary: string;
  body: string[];
  startDate: string;
  hectaresTarget: number;
  hectaresAchieved: number;
  treesPlanted: number;
  householdsEngaged: number;
  donationGoalKes: number;
  donationRaisedKes: number;
  image?: string;
};

export type Story = {
  slug: string;
  title: string;
  dek: string;
  body: string[];
  author: string;
  publishedAt: string;
  relatedProjectSlug?: string;
  relatedProgrammeSlug?: ProgrammeSlug;
  image?: string;
};

export type NewsCategory = "press" | "announcement" | "partnership" | "grant";

export type NewsPost = {
  slug: string;
  title: string;
  summary: string;
  category: NewsCategory;
  publishedAt: string;
};

export type EventItem = {
  slug: string;
  title: string;
  description: string;
  locationText: string;
  startsAt: string;
  isVirtual: boolean;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  isBoardMember: boolean;
  image?: string;
};

export type ImpactGoal = {
  label: string;
  currentValue: number;
  targetValue: number;
  unit: string;
  targetYear: number;
  methodologyNote: string;
};
