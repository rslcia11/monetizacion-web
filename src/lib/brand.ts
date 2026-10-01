// Brand color of each tool, for the glow behind its logo on covers and share images.
// From Simple Icons (CC0) where available; the rest are taken from the official logo files.
// Keys are tool slugs (lib/tools.ts). Tools not listed fall back to the site accent.
const colors: Record<string, string> = {
  affine: '#1E96EB',
  anytype: '#FF6A7B',
  apidog: '#9373EE',
  appflowy: '#8427E0',
  appwrite: '#FD366E',
  bruno: '#F4AA41',
  confluence: '#172B4D',
  django: '#092E20',
  expo: '#1C2024',
  express: '#0A0A0A',
  fastapi: '#009688',
  firebase: '#DD2C00',
  flask: '#3BABC3',
  hoppscotch: '#09090B',
  insomnia: '#4000BF',
  joplin: '#1071D3',
  logseq: '#85C8C8',
  neon: '#34D59A',
  nestjs: '#E0234E',
  notion: '#000000',
  npm: '#CB3837',
  nx: '#143055',
  obsidian: '#7C3AED',
  pnpm: '#F69220',
  pocketbase: '#B8DBE4',
  postman: '#FF6C37',
  provider: '#02569B',
  'react-native-cli': '#61DAFB',
  'redux-toolkit': '#764ABC',
  riverpod: '#2855A3',
  supabase: '#3FCF8E',
  'thunder-client': '#7A5AF8',
  trilium: '#000000',
  turborepo: '#FF1E56',
  vite: '#9135FF',
  webpack: '#8DD6F9',
  yaak: '#814EDF',
  zettlr: '#1CB27E',
  zustand: '#8B5E34',
};

function brandColor(slug: string): string {
  return colors[slug] ?? '#0B6E5E';
}

// Glow color on the dark cover. Near-black brands (Notion, Express) would vanish, so they glow white.
export function glowColor(slug: string): string {
  const hex = brandColor(slug);
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.2 ? '#FFFFFF' : hex;
}
