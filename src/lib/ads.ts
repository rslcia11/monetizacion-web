import {
  ADSENSE_CLIENT,
  ADSENSE_SLOT_ARTICLE,
  ADSENSE_SLOT_HOME,
  ADSENSE_SLOT_SIDEBAR,
} from 'astro:env/server';

export type AdPlacement = 'article' | 'sidebar' | 'home';

// These values go into a script URL, HTML attributes and ads.txt: accept only the exact formats
// AdSense issues, and fail the build on anything else instead of publishing it.
function checked(name: string, value: string | undefined, format: RegExp): string | undefined {
  if (value && !format.test(value)) throw new Error(`${name} has an invalid format: "${value}".`);
  return value;
}

const slots: Record<AdPlacement, string | undefined> = {
  article: checked('ADSENSE_SLOT_ARTICLE', ADSENSE_SLOT_ARTICLE, /^\d+$/),
  sidebar: checked('ADSENSE_SLOT_SIDEBAR', ADSENSE_SLOT_SIDEBAR, /^\d+$/),
  home: checked('ADSENSE_SLOT_HOME', ADSENSE_SLOT_HOME, /^\d+$/),
};

export const adsenseClient = checked('ADSENSE_CLIENT', ADSENSE_CLIENT, /^ca-pub-\d{16}$/);

// An ad renders only when both the account and that placement's unit are configured.
export function adUnit(placement: AdPlacement): { client: string; slot: string } | undefined {
  const slot = slots[placement];
  return adsenseClient && slot ? { client: adsenseClient, slot } : undefined;
}

// "ca-pub-123" -> "pub-123", the publisher ID format ads.txt expects.
export function publisherId(client: string): string {
  return client.replace(/^ca-/, '');
}
