import type { APIRoute } from 'astro';
import { adsenseClient, publisherId } from '../lib/ads';

// Authorizes Google to sell ads on this domain (AdSense checklist, plan 11).
// Empty until ADSENSE_CLIENT is set. f08c47fec0942fa0 is Google's fixed certification ID.
export const GET: APIRoute = () => {
  const body = adsenseClient ? `google.com, ${publisherId(adsenseClient)}, DIRECT, f08c47fec0942fa0\n` : '';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
