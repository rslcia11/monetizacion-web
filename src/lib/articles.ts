import { getCollection, type CollectionEntry } from 'astro:content';
import { locales, localePath, localeStaticPaths, publishedLocales, type Alternate, type Locale } from '../i18n/ui';
import type { Kind } from './kinds';
import { reservedSlugs } from './routes';

export type Article = CollectionEntry<'articles'>;

// Content ids are "<locale>/<slug>" (articles and site pages): en/postman-alternatives.
export function localeFromId(id: string): Locale {
  const folder = id.split('/')[0];
  const locale = locales.find((l) => l === folder);
  if (!locale) {
    throw new Error(`"${id}" must live in a locale folder: ${locales.join(', ')}`);
  }
  return locale;
}

export function slugFromId(id: string): string {
  return id.split('/').slice(1).join('/');
}

export function articleLocale(article: Article): Locale {
  return localeFromId(article.id);
}

export function articleSlug(article: Article): string {
  const slug = slugFromId(article.id);
  if (reservedSlugs.has(slug)) {
    throw new Error(`Article "${article.id}" uses a reserved URL (/${slug}/). Rename the file.`);
  }
  return slug;
}

export function articleUrl(article: Article): string {
  return localePath(articleLocale(article), articleSlug(article));
}

// Every page reads the collection (the header needs it too). In a build the content can't change,
// so it is read and sorted once; in dev it is re-read so edits show up.
let published: Promise<Article[]> | undefined;

async function readPublished(): Promise<Article[]> {
  const all = await getCollection('articles', (a) => import.meta.env.DEV || !a.data.draft);
  return all
    .filter((a) => publishedLocales.includes(articleLocale(a)))
    .sort((a, b) => b.data.updatedAt.getTime() - a.data.updatedAt.getTime());
}

function loadPublished(): Promise<Article[]> {
  if (import.meta.env.DEV) return readPublished();
  published ??= readPublished();
  return published;
}

// Only locales that are live, newest first. Drafts are visible in `astro dev` and never published.
export async function getArticles(locale?: Locale): Promise<Article[]> {
  const all = await loadPublished();
  return locale ? all.filter((a) => articleLocale(a) === locale) : all;
}

// Section kinds that have at least one article in this locale. Empty sections stay out of the
// menu and get no page: near-empty categories look bad and are linked to AdSense rejections (plan 8).
export async function kindsWithArticles(locale: Locale): Promise<Set<Kind>> {
  return new Set((await getArticles(locale)).map((a) => a.data.kind));
}

// Locales where a section has articles: the only ones that get that section's page.
export async function kindLocales(kind: Kind): Promise<Locale[]> {
  const all = await getArticles();
  return publishedLocales.filter((l) => all.some((a) => a.data.kind === kind && articleLocale(a) === l));
}

export async function kindStaticPaths(kind: Kind) {
  return localeStaticPaths(await kindLocales(kind));
}

// The same slug in another locale folder is that page's translation.
export function alternatesFor(article: Article, all: Article[]): Alternate[] {
  const slug = articleSlug(article);
  return all
    .filter((a) => articleSlug(a) === slug)
    .map((a) => ({ locale: articleLocale(a), href: articleUrl(a) }));
}
