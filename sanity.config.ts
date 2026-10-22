"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemas } from "./lib/sanity/schemas";

export default defineConfig({
  name: "save-kenya-water-towers",
  title: "Save Kenya Water Towers",
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "missing-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool()],
  schema: { types: schemas },
});