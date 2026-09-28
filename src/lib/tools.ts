import type { ImageMetadata } from 'astro';

// Official tool logos: src/assets/logos/<tool-slug>.svg (or .png/.webp), e.g. "Hoppscotch" -> hoppscotch.svg.
// Taken from each tool's press kit or repo, never generated (DESIGN.md 4).
const logoFiles = import.meta.glob<{ default: ImageMetadata }>('../assets/logos/*.{svg,png,webp}', { eager: true });

export function toolSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9]+/g, '-')
    .split('-')
    .filter(Boolean)
    .join('-');
}

// Built once: "../assets/logos/hoppscotch.svg" -> "hoppscotch".
const logosBySlug = new Map(
  Object.entries(logoFiles).map(([file, mod]) => [file.split('/').pop()!.replace(/\.\w+$/, ''), mod.default]),
);

export function toolLogo(name: string): ImageMetadata | undefined {
  return logosBySlug.get(toolSlug(name));
}

// Fallback while a logo file is missing: "Hoppscotch" -> "Ho", "Next.js" -> "Ne".
export function toolInitials(name: string): string {
  return name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2);
}
