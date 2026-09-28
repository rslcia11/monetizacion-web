import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { coverBackground } from './cover';
import { ogImageSize, site } from './site';
import { toolInitials, toolSlug } from './tools';

// Share images (og:image): PNG generated at build time from the same data as the covers.
// Drawn with code, same as the rest of the brand: no stock or AI images (DESIGN.md 4).

const ink = '#16211E';
const muted = '#3E4B47';
const accent = '#0B6E5E';
const line = '#D5DEDA';

const require = createRequire(import.meta.url);
const font = (file: string) => readFileSync(require.resolve(file));
const fonts = [
  { name: 'Public Sans', data: font('@fontsource/public-sans/files/public-sans-latin-400-normal.woff'), weight: 400 },
  { name: 'Public Sans', data: font('@fontsource/public-sans/files/public-sans-latin-700-normal.woff'), weight: 700 },
  { name: 'Newsreader', data: font('@fontsource/newsreader/files/newsreader-latin-700-normal.woff'), weight: 700 },
] as const;

// Minimal element builder: satori takes React-like { type, props } objects.
type Node = { type: string; props: Record<string, unknown> } | string;
function h(type: string, style: Record<string, unknown>, ...children: Node[]): Node {
  return { type, props: { style, children } };
}

// Official logo from src/assets/logos/ as a data URI. Satori reads SVG and PNG, not WebP:
// a WebP-only logo falls back to initials here.
function logoDataUri(name: string): string | undefined {
  for (const [ext, mime] of [['svg', 'image/svg+xml'], ['png', 'image/png']]) {
    const file = join(process.cwd(), 'src/assets/logos', `${toolSlug(name)}.${ext}`);
    if (existsSync(file)) return `data:${mime};base64,${readFileSync(file).toString('base64')}`;
  }
}

function toolTile(name: string, size: number, main: boolean): Node {
  const logo = logoDataUri(name);
  const inner = Math.round(size * 0.62);
  const solid = main && !logo;
  return h(
    'div',
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: Math.round(size * 0.24),
      background: solid ? ink : '#FFFFFF',
      border: solid ? 'none' : `2px solid ${line}`,
      color: solid ? '#FFFFFF' : ink,
      fontSize: Math.round(size * 0.42),
      fontWeight: 700,
    },
    logo ? { type: 'img', props: { src: logo, width: inner, height: inner, style: { objectFit: 'contain' } } } : toolInitials(name),
  );
}

function wordmark(size: number): Node {
  const [first, ...rest] = site.name;
  return h(
    'div',
    { display: 'flex', alignItems: 'center', fontFamily: 'Newsreader', fontWeight: 700, fontSize: size, color: ink },
    h(
      'div',
      {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size * 1.2,
        height: size * 1.2,
        marginRight: 3,
        borderRadius: Math.round(size * 0.2),
        background: accent,
        color: '#FFFFFF',
      },
      first,
    ),
    rest.join(''),
  );
}

async function render(root: Node): Promise<Uint8Array> {
  const svg = await satori(root as Parameters<typeof satori>[0], { ...ogImageSize, fonts: [...fonts] });
  return new Resvg(svg).render().asPng();
}

function frame(background: string, ...children: Node[]): Node {
  return h(
    'div',
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      height: '100%',
      padding: '64px 72px',
      background,
      fontFamily: 'Public Sans',
      color: ink,
    },
    ...children,
  );
}

export function articleImage(data: { title: string; topic: string; tools: string[]; joiner: string }) {
  const [first, ...rest] = data.tools;
  return render(
    frame(
      coverBackground(data.tools).hex,
      wordmark(40),
      h(
        'div',
        { display: 'flex', fontFamily: 'Newsreader', fontWeight: 700, fontSize: 64, lineHeight: 1.12, lineClamp: 3, textWrap: 'balance' },
        data.title,
      ),
      h(
        'div',
        { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
        h('div', { display: 'flex', fontSize: 28, fontWeight: 700, color: accent }, data.topic),
        h(
          'div',
          { display: 'flex', alignItems: 'center', gap: 16 },
          toolTile(first, 88, true),
          ...(data.joiner && rest.length > 0 ? [h('div', { display: 'flex', fontSize: 24, fontWeight: 700, color: muted }, data.joiner)] : []),
          ...rest.slice(0, 3).map((tool) => toolTile(tool, 64, false)),
        ),
      ),
    ),
  );
}

// Home, section and site pages share one image: brand + what the site is.
export function defaultImage(tagline: string) {
  return render(
    frame(
      '#E4F2ED',
      wordmark(56),
      h('div', { display: 'flex', fontFamily: 'Newsreader', fontWeight: 700, fontSize: 72, lineHeight: 1.1, textWrap: 'balance' }, tagline),
      h('div', { display: 'flex', fontSize: 28, color: muted }, new URL(import.meta.env.SITE).host),
    ),
  );
}
