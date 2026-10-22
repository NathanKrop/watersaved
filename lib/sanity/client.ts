import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? process.env.SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? process.env.SANITY_DATASET;

export const sanityConfigured = Boolean(projectId && dataset);
export const sanityContentAuthoritative =
  process.env.NEXT_PUBLIC_SANITY_CONTENT_AUTHORITATIVE === "true" ||
  process.env.SANITY_CONTENT_AUTHORITATIVE === "true";

export const client = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01",
      useCdn: process.env.NODE_ENV === "production",
      perspective: "published",
    })
  : null;

export function getSanityClient() {
  return client;
}

export async function fetchSanity<T>(
  query: string,
  params: Record<string, string | number | boolean | null | undefined> = {},
): Promise<T | null> {
  if (!client) {
    return null;
  }

  return client.fetch<T>(query, params);
}
