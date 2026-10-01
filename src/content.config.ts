import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Links rendered as href: only web URLs (z.url() alone also accepts javascript: and others).
const webUrl = z.url({ protocol: /^https?$/ });

// One JSON file per author: src/content/authors/<id>.json. A real person with a verifiable
// bio (editorial standard, plan 9.3). The photo path is relative to the JSON file.
const authors = defineCollection({
  loader: glob({ base: './src/content/authors', pattern: '*.json' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      // Per language. Spanish becomes required once a Spanish page shows this author.
      // Short line under the name: "Backend developer".
      role: z.object({ en: z.string(), es: z.string().optional() }),
      bio: z.object({ en: z.string().min(80), es: z.string().min(80).optional() }),
      // Optional: without it, the author's initials are shown.
      photo: image().optional(),
      links: z.array(z.object({ label: z.string(), url: webUrl })).default([]),
    }),
});

// One file per article, grouped by locale: src/content/articles/en/postman-alternatives.mdx
// The locale comes from the folder; the slug from the file name. Same slug in both
// folders = the two language versions of one page (used for hreflang).
// Writing guide: docs/escribir-articulos.md
const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  schema: z
    .object({
      title: z.string().max(70),
      // Shown in search results: keep it short and specific (plan 9.5).
      description: z.string().min(50).max(160),
      lede: z.string(),
      kind: z.enum(['comparison', 'alternatives', 'guide']),
      // Topic cluster (plan 9): "API clients", "Backend", "Monorepos"...
      topic: z.string(),
      // Tool names for the generated cover, e.g. ["Bruno", "Postman"].
      tools: z.array(z.string()).min(1),
      author: reference('authors'),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      testedAt: z.coerce.date(),
      // "tested": hands-on tests with our own numbers. "research": built only from official
      // pages (pricing, docs, repos), with no measurements. Changes the labels readers see.
      method: z.enum(['tested', 'research']).default('tested'),
      // Rendered as the "How we tested" section (plan 9.3, point 3).
      testing: z.object({
        environment: z.string(),
        versions: z.array(z.object({ tool: z.string(), version: z.string() })).min(1),
        notes: z.string().optional(),
      }),
      // Rendered as the "Sources" section: official docs, changelogs, pricing pages.
      sources: z.array(z.object({ title: z.string(), url: webUrl })).min(1),
      draft: z.boolean().default(false),
    })
    .refine((a) => a.kind !== 'comparison' || a.tools.length >= 2, {
      message: 'A comparison needs at least two tools.',
      path: ['tools'],
    })
    .refine((a) => a.updatedAt >= a.publishedAt, {
      message: 'updatedAt cannot be earlier than publishedAt.',
      path: ['updatedAt'],
    }),
});

// Site pages linked from the footer (About, How we test, Contact, Privacy, Terms), one file
// per locale: src/content/pages/en/privacy.mdx -> /privacy/. The list lives in src/lib/routes.ts.
const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(50).max(160),
    updatedAt: z.coerce.date(),
    // Lists every author (photo, bio) after the text. Used by About.
    showAuthors: z.boolean().default(false),
  }),
});

export const collections = { authors, articles, pages };
