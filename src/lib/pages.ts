import { getCollection, type CollectionEntry } from 'astro:content';
import { publishedLocales } from '../i18n/ui';
import { localeFromId, slugFromId } from './articles';
import { sitePages } from './routes';

export type SitePage = CollectionEntry<'pages'>;

// Footer pages for every published locale. Fails the build if one is missing, so the footer
// never links to a 404 (About, Contact, Privacy and Terms are required for AdSense, plan 11).
export async function getSitePages(): Promise<SitePage[]> {
  const all = await getCollection('pages');
  const known = new Set(sitePages.map((p) => p.slug));

  for (const page of all) {
    if (!known.has(slugFromId(page.id))) {
      throw new Error(`Page "${page.id}" is not in sitePages (src/lib/routes.ts), so nothing links to it.`);
    }
  }
  for (const locale of publishedLocales) {
    for (const { slug } of sitePages) {
      if (!all.some((p) => p.id === `${locale}/${slug}`)) {
        throw new Error(`Missing site page src/content/pages/${locale}/${slug}.mdx (linked from the footer).`);
      }
    }
  }
  return all.filter((p) => publishedLocales.includes(localeFromId(p.id)));
}
