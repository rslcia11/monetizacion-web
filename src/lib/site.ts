// Who runs the site. Used by the About, Contact, Privacy and Terms pages.
// Change the email here when the domain mailbox (e.g. contact@kriterio.dev) exists.
export const site = {
  name: 'Kriterio',
  owner: 'Wilson Rene Martínez Jimenez',
  email: 'wm911m@gmail.com',
  city: 'Loja',
  country: 'Ecuador',
} as const;

// "/about/" -> "https://kriterio.dev/about/" (the `site` option in astro.config.mjs).
export function absoluteUrl(path: string): string {
  return new URL(path, import.meta.env.SITE).href;
}

// The publisher, as schema.org data: the home page's Organization and every article's publisher.
export function organizationJsonLd() {
  return {
    '@type': 'Organization',
    name: site.name,
    url: absoluteUrl('/'),
    founder: { '@type': 'Person', name: site.owner },
    email: site.email,
  };
}
