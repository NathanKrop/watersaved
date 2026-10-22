import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import nextEnv from '@next/env';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const seedPath = path.resolve(__dirname, '../doc/sanity-content-seed.json');
const { loadEnvConfig } = nextEnv;
loadEnvConfig(path.resolve(__dirname, '..'));

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN || process.env.SANITY_WRITE_TOKEN;

if (!projectId) {
  console.error('Missing SANITY project id. Set NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_PROJECT_ID.');
  process.exit(1);
}

if (!dataset) {
  console.error('Missing Sanity dataset. Set NEXT_PUBLIC_SANITY_DATASET or SANITY_DATASET.');
  process.exit(1);
}

if (!token) {
  console.error('Missing Sanity API token. Set SANITY_API_TOKEN or SANITY_WRITE_TOKEN.');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-10-17',
  useCdn: false,
});

async function findExistingDocument(doc) {
  if (doc._type === 'siteSettings') {
    return client.fetch('*[_type == "siteSettings"][0]{_id, _type}');
  }

  if (doc.slug && doc.slug.current) {
    return client.fetch('*[_type == $type && slug.current == $slug][0]{_id, _type}', {
      type: doc._type,
      slug: doc.slug.current,
    });
  }

  if (doc.title) {
    return client.fetch('*[_type == $type && title == $title][0]{_id, _type}', {
      type: doc._type,
      title: doc.title,
    });
  }

  return null;
}

async function upsertDocument(doc) {
  const existing = await findExistingDocument(doc);

  if (existing) {
    const { _id, _type, ...fields } = doc;
    const patched = await client
      .patch(existing._id)
      .set(fields)
      .commit();

    console.log(`Updated ${doc._type} (${doc.slug?.current ?? doc.title}) -> ${patched._id}`);
    return patched;
  }

  const created = await client.create(doc);
  console.log(`Created ${doc._type} (${doc.slug?.current ?? doc.title}) -> ${created._id}`);
  return created;
}

async function main() {
  const raw = await fs.readFile(seedPath, 'utf8');
  const docs = JSON.parse(raw);

  if (!Array.isArray(docs) || docs.length === 0) {
    throw new Error('The seed file is empty or malformed.');
  }

  for (const doc of docs) {
    await upsertDocument(doc);
  }

  console.log(`\nImported ${docs.length} Sanity documents from ${path.relative(process.cwd(), seedPath)}.`);
}

main().catch((error) => {
  console.error('Import failed:');
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
