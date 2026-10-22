import type { EventItem, ImpactGoal, NewsPost, PageDocument, Programme, Project, SiteSettings, Story, TeamMember } from "@/lib/types";
import { events as localEvents, impactGoals as localImpactGoals, newsPosts as localNewsPosts, teamMembers as localTeamMembers } from "@/lib/data/content";
import { programmes as localProgrammes } from "@/lib/data/programmes";
import { projects as localProjects } from "@/lib/data/projects";
import { stories as localStories } from "@/lib/data/stories";
import { fetchSanity, sanityContentAuthoritative } from "./client";

type Slugged = { slug: string };

function mergeBy<T>(fallback: T[], content: T[], keyOf: (item: T) => string): T[] {
  const contentByKey = new Map(content.map((item) => [keyOf(item), item]));
  const fallbackKeys = new Set(fallback.map(keyOf));

  return [
    ...fallback.map((item) => {
      const published = contentByKey.get(keyOf(item));
      if (!published) return item;

      const populatedFields = Object.fromEntries(
        Object.entries(published).filter(([, value]) => value !== null && value !== undefined)
      );
      return { ...item, ...populatedFields } as T;
    }),
    ...content.filter((item) => !fallbackKeys.has(keyOf(item))),
  ];
}

function mergeBySlug<T extends Slugged>(fallback: T[], content: T[]): T[] {
  return mergeBy(fallback, content, (item) => item.slug);
}

async function readSlugged<T extends Slugged>(fallback: T[], query: string): Promise<T[]> {
  const content = await fetchSanity<T[]>(query);
  if (!content) return fallback;
  return sanityContentAuthoritative ? content : mergeBySlug(fallback, content);
}

async function readByKey<T>(fallback: T[], query: string, keyOf: (item: T) => string): Promise<T[]> {
  const content = await fetchSanity<T[]>(query);
  if (!content) return fallback;
  return sanityContentAuthoritative ? content : mergeBy(fallback, content, keyOf);
}

async function readSingle<T>(fallback: T, query: string, params: Record<string, string | number> = {}): Promise<T> {
  const content = await fetchSanity<T>(query, params);
  return content ?? fallback;
}

const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  title,
  description,
  locationName,
  locationDescription,
  "logo": logo.asset->url,
  "heroImage": heroImage.asset->url
}`;

const pageQuery = `*[_type == "page" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  summary,
  heroTitle,
  heroText,
  "heroImage": heroImage.asset->url,
  body,
  "gallery": array::compact(gallery[].asset->url)
}`;

const projectQuery = `*[_type == "project" && !(_id in path("drafts.**"))] | order(name asc) {
  "slug": slug.current, name, countySlug,
  "programmeSlugs": coalesce(array::compact(programmes[]->slug.current), []),
  status, summary, body, startDate, hectaresTarget, hectaresAchieved, treesPlanted,
  householdsEngaged, donationGoalKes, donationRaisedKes,
  "image": image.asset->url, "detailImage": detailImage.asset->url,
  "donationImage": donationImage.asset->url
}`;

const programmeQuery = `*[_type == "programme" && !(_id in path("drafts.**"))] | order(name asc) {
  "slug": slug.current, name, shortName, summary, body
}`;

const storyQuery = `*[_type == "story" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  "slug": slug.current, title, dek, body, author, publishedAt,
  "image": image.asset->url, "images": array::compact([image.asset->url] + images[].asset->url),
  "relatedProjectSlug": relatedProject->slug.current,
  "relatedProgrammeSlug": relatedProgramme->slug.current
}`;

const newsQuery = `*[_type == "newsPost" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  "slug": slug.current, title, summary, body, category, publishedAt
}`;

const eventQuery = `*[_type == "eventItem" && !(_id in path("drafts.**"))] | order(startsAt asc) {
  "slug": slug.current, title, description, locationText, startsAt, isVirtual
}`;

const teamQuery = `*[_type == "teamMember" && !(_id in path("drafts.**"))] | order(name asc) {
  name, role, bio, isBoardMember, "image": image.asset->url
}`;

const impactQuery = `*[_type == "impactGoal" && !(_id in path("drafts.**"))] | order(label asc) {
  label, currentValue, targetValue, unit, targetYear, methodologyNote
}`;

export async function getSiteSettings(): Promise<SiteSettings | undefined> {
  const siteSettings = await fetchSanity<SiteSettings>(siteSettingsQuery);
  return siteSettings ?? undefined;
}

export async function getPageBySlug(slug: string): Promise<PageDocument | undefined> {
  const page = await fetchSanity<PageDocument>(pageQuery, { slug });
  return page ?? undefined;
}

export async function getProjects(): Promise<Project[]> {
  return readSlugged(localProjects, projectQuery);
}

export async function getProjectsByProgramme(programmeSlug: string): Promise<Project[]> {
  return (await getProjects()).filter((project) => project.programmeSlugs.includes(programmeSlug as never));
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return (await getProjects()).find((project) => project.slug === slug);
}

export async function getProgrammes(): Promise<Programme[]> {
  return readSlugged(localProgrammes, programmeQuery);
}

export async function getProgrammeBySlug(slug: string): Promise<Programme | undefined> {
  return (await getProgrammes()).find((programme) => programme.slug === slug);
}

export async function getStories(): Promise<Story[]> {
  return readSlugged(localStories, storyQuery);
}

export async function getStoriesByProgramme(programmeSlug: string): Promise<Story[]> {
  return (await getStories()).filter((story) => story.relatedProgrammeSlug === programmeSlug);
}

export async function getStoryBySlug(slug: string): Promise<Story | undefined> {
  return (await getStories()).find((story) => story.slug === slug);
}

export async function getNewsPosts(): Promise<NewsPost[]> {
  return readSlugged(localNewsPosts, newsQuery);
}

export async function getNewsPostBySlug(slug: string): Promise<NewsPost | undefined> {
  return (await getNewsPosts()).find((post) => post.slug === slug);
}

export async function getEvents(): Promise<EventItem[]> {
  return readSlugged(localEvents, eventQuery);
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return readByKey(localTeamMembers, teamQuery, (member) => member.name);
}

export async function getImpactGoals(): Promise<ImpactGoal[]> {
  return readByKey(localImpactGoals, impactQuery, (goal) => goal.label);
}