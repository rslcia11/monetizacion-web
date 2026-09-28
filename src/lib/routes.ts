import type { UIKey } from '../i18n/ui';
import { kinds } from './kinds';

// Site pages linked from the footer (AdSense checklist, plan 11). Slugs stay in English in
// both languages so /about/ and /es/about/ pair up for hreflang.
export const sitePages: { slug: string; label: UIKey }[] = [
  { slug: 'about', label: 'footer.about' },
  { slug: 'how-we-test', label: 'footer.howWeTest' },
  { slug: 'contact', label: 'footer.contact' },
  { slug: 'privacy', label: 'footer.privacy' },
  { slug: 'terms', label: 'footer.terms' },
];

// Footer "Cookies" link: a section of the Privacy page. The id comes from the heading text, so
// every language's privacy.mdx needs a heading that produces it; SitePageView fails the build if not.
export const cookiesSection = { page: 'privacy', anchor: 'advertising-and-cookies' } as const;

// Articles live at /<file-name>/, next to these pages. A clash would silently drop the article.
// "og" is the share-image folder (src/pages/og/), "search" the search page.
export const reservedSlugs = new Set([
  ...Object.values(kinds).map((k) => k.slug),
  ...sitePages.map((p) => p.slug),
  'og',
  'search',
]);
