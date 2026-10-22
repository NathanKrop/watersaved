import { defineArrayMember, defineField, defineType } from "sanity";
import { counties } from "@/lib/data/counties";

const slugField = (source: string) => defineField({
  name: "slug",
  title: "Slug",
  type: "slug",
  options: { source },
  validation: (rule) => rule.required(),
});

const bodyField = defineField({
  name: "body",
  title: "Body paragraphs",
  type: "array",
  of: [defineArrayMember({ type: "string" })],
  validation: (rule) => rule.required().min(1),
});

const imageField = (name: string, title: string) => defineField({
  name,
  title,
  type: "image",
  options: { hotspot: true },
});

export const schemas = [
  defineType({
    name: "siteSettings",
    title: "Site settings",
    type: "document",
    fields: [
      defineField({ name: "title", title: "Site title", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "description", title: "Site description", type: "text", validation: (rule) => rule.required() }),
      defineField({ name: "locationName", title: "Location name", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "locationDescription", title: "Location description", type: "text", validation: (rule) => rule.required() }),
      imageField("logo", "Logo"),
      imageField("heroImage", "Default hero image"),
    ],
  }),
  defineType({
    name: "page",
    title: "Page",
    type: "document",
    fields: [
      defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
      slugField("title"),
      defineField({ name: "summary", title: "Summary", type: "text" }),
      defineField({ name: "heroTitle", title: "Hero title", type: "string" }),
      defineField({ name: "heroText", title: "Hero text", type: "text" }),
      imageField("heroImage", "Hero image"),
      defineField({
        name: "body",
        title: "Body paragraphs",
        type: "array",
        of: [defineArrayMember({ type: "string" })],
      }),
      defineField({
        name: "gallery",
        title: "Gallery images",
        type: "array",
        of: [defineArrayMember({ type: "image", options: { hotspot: true } })],
      }),
    ],
  }),
  defineType({
    name: "programme",
    title: "Programme",
    type: "document",
    fields: [
      defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "shortName", title: "Short name", type: "string", validation: (rule) => rule.required() }),
      slugField("name"),
      defineField({ name: "summary", title: "Summary", type: "text", validation: (rule) => rule.required() }),
      bodyField,
    ],
  }),
  defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
      defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
      slugField("name"),
      defineField({
        name: "countySlug",
        title: "County",
        type: "string",
        options: { list: counties.map((county) => ({ title: county.name, value: county.slug })) },
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: "programmes",
        title: "Programmes",
        type: "array",
        of: [defineArrayMember({ type: "reference", to: [{ type: "programme" }] })],
      }),
      defineField({
        name: "status",
        title: "Status",
        type: "string",
        options: { list: ["active", "planned", "completed"] },
        validation: (rule) => rule.required(),
      }),
      defineField({ name: "summary", title: "Summary", type: "text", validation: (rule) => rule.required() }),
      bodyField,
      defineField({ name: "startDate", title: "Start date", type: "date", validation: (rule) => rule.required() }),
      defineField({ name: "hectaresTarget", title: "Hectares target", type: "number", validation: (rule) => rule.required().min(0) }),
      defineField({ name: "hectaresAchieved", title: "Hectares achieved", type: "number", validation: (rule) => rule.required().min(0) }),
      defineField({ name: "treesPlanted", title: "Trees planted", type: "number", validation: (rule) => rule.required().min(0) }),
      defineField({ name: "householdsEngaged", title: "Households engaged", type: "number", validation: (rule) => rule.required().min(0) }),
      defineField({ name: "donationGoalKes", title: "Donation goal (KES)", type: "number", validation: (rule) => rule.required().min(1) }),
      defineField({ name: "donationRaisedKes", title: "Donation raised (KES)", type: "number", validation: (rule) => rule.required().min(0) }),
      defineField({ name: "image", title: "Card image", type: "image", options: { hotspot: true } }),
      defineField({ name: "detailImage", title: "Detail image", type: "image", options: { hotspot: true } }),
      defineField({ name: "donationImage", title: "Donation image", type: "image", options: { hotspot: true } }),
    ],
  }),
  defineType({
    name: "story",
    title: "Story",
    type: "document",
    fields: [
      defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
      slugField("title"),
      defineField({ name: "dek", title: "Introduction", type: "text", validation: (rule) => rule.required() }),
      bodyField,
      defineField({ name: "author", title: "Author", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "publishedAt", title: "Published at", type: "date" }),
      defineField({ name: "image", title: "Feature image", type: "image", options: { hotspot: true } }),
      defineField({
        name: "images",
        title: "Additional images",
        type: "array",
        of: [defineArrayMember({ type: "image", options: { hotspot: true } })],
      }),
      defineField({ name: "relatedProject", title: "Related project", type: "reference", to: [{ type: "project" }] }),
      defineField({ name: "relatedProgramme", title: "Related programme", type: "reference", to: [{ type: "programme" }] }),
    ],
  }),
  defineType({
    name: "newsPost",
    title: "News post",
    type: "document",
    fields: [
      defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
      slugField("title"),
      defineField({
        name: "body",
        title: "Article paragraphs",
        type: "array",
        of: [defineArrayMember({ type: "text" })],
      }),
      defineField({ name: "summary", title: "Summary", type: "text", validation: (rule) => rule.required() }),
      defineField({
        name: "category",
        title: "Category",
        type: "string",
        options: { list: ["press", "announcement", "partnership", "grant"] },
        validation: (rule) => rule.required(),
      }),
      defineField({ name: "publishedAt", title: "Published at", type: "date", validation: (rule) => rule.required() }),
    ],
  }),
  defineType({
    name: "eventItem",
    title: "Event",
    type: "document",
    fields: [
      defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
      slugField("title"),
      defineField({ name: "description", title: "Description", type: "text", validation: (rule) => rule.required() }),
      defineField({ name: "locationText", title: "Location", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "startsAt", title: "Starts at", type: "datetime", validation: (rule) => rule.required() }),
      defineField({ name: "isVirtual", title: "Online event", type: "boolean", initialValue: false }),
    ],
  }),
  defineType({
    name: "teamMember",
    title: "Team member",
    type: "document",
    fields: [
      defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "role", title: "Role", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "bio", title: "Biography", type: "text", validation: (rule) => rule.required() }),
      defineField({ name: "isBoardMember", title: "Board member", type: "boolean", initialValue: false }),
      defineField({ name: "image", title: "Portrait", type: "image", options: { hotspot: true } }),
    ],
  }),
  defineType({
    name: "impactGoal",
    title: "Impact goal",
    type: "document",
    fields: [
      defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "currentValue", title: "Current value", type: "number", validation: (rule) => rule.required().min(0) }),
      defineField({ name: "targetValue", title: "Target value", type: "number", validation: (rule) => rule.required().min(1) }),
      defineField({ name: "unit", title: "Unit", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "targetYear", title: "Target year", type: "number", validation: (rule) => rule.required().integer().min(1900) }),
      defineField({ name: "methodologyNote", title: "Methodology note", type: "text", validation: (rule) => rule.required() }),
    ],
  }),
];