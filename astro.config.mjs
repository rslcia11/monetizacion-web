// @ts-check
import { defineConfig, envField, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kriterio.dev',
  // URLs like /postman-alternatives/ (plan 9.5): one canonical form, always with trailing slash.
  trailingSlash: 'always',

  // The whole stylesheet is ~5 KB compressed: inlined, the first paint doesn't wait for a CSS
  // request, which matters most on slow mobile connections.
  build: { inlineStylesheets: 'always' },

  // English at /, Spanish at /es/ (plan 9.4).
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },

  // AdSense IDs (public: they end up in the HTML). While unset, no ad code or empty ad boxes
  // are rendered. Slot IDs come from AdSense > Ads > By ad unit, one unit per placement.
  env: {
    schema: {
      // Formats are checked in src/lib/ads.ts.
      ADSENSE_CLIENT: envField.string({ context: 'server', access: 'public', optional: true }),
      ADSENSE_SLOT_ARTICLE: envField.string({ context: 'server', access: 'public', optional: true }),
      ADSENSE_SLOT_SIDEBAR: envField.string({ context: 'server', access: 'public', optional: true }),
      ADSENSE_SLOT_HOME: envField.string({ context: 'server', access: 'public', optional: true }),
      // false = every page gets <meta name="robots" content="noindex">. Use it on a deploy that
      // must stay out of Google until launch (plan 10.4). Never block crawling in robots.txt instead.
      PUBLIC_INDEXABLE: envField.boolean({ context: 'server', access: 'public', default: true }),
    },
  },

  // Code samples in articles: the high-contrast light theme keeps every token at 4.5:1 or more on
  // the --surface background (WCAG AA), readable on low-quality screens too.
  markdown: {
    shikiConfig: { theme: 'github-light-high-contrast' },
  },

  integrations: [
    mdx(),
    sitemap({
      // Internal search results are noindex: keep them out of the sitemap too.
      filter: (page) => !new URL(page).pathname.endsWith('/search/'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', es: 'es' },
      },
    }),
  ],

  // Downloaded at build time and served from our own domain (DESIGN.md 2).
  fonts: [
    {
      name: 'Public Sans',
      cssVariable: '--font-sans',
      provider: fontProviders.fontsource(),
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      // Text shows right away in the fallback font and swaps when the file arrives.
      display: 'swap',
      fallbacks: ['Helvetica', 'Arial', 'sans-serif'],
    },
    {
      // Title serif, confirmed (DESIGN.md 2).
      name: 'Newsreader',
      cssVariable: '--font-serif',
      provider: fontProviders.fontsource(),
      weights: [700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      display: 'swap',
      fallbacks: ['Georgia', 'serif'],
    },
  ],
});
