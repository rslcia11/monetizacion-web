import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { glowColor } from './brand';
import { ogImageSize, site } from './site';
import { toolInitials, toolSlug } from './tools';

// Share images (og:image): PNG generated at build time from the same data as the covers.
// Drawn with code, same as the rest of the brand: no stock or AI images (DESIGN.md 4).

const ink = '#16211E';
const muted = '#3E4B47';
const accent = '#0B6E5E';
const line = '#D5DEDA';
const warm = '#F2B33D';

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

async function render(root: Node, size: { width: number; height: number } = ogImageSize): Promise<Uint8Array> {
  const svg = await satori(root as Parameters<typeof satori>[0], { ...size, fonts: [...fonts] });
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

// Article images in every shape Google asks for: og (1.91:1) for social cards, and 16:9, 4:3 and
// 1:1 for Article structured data. Same look as the HTML cover: dark, logos with brand halos and a
// short hook. Little text on purpose: Discover recommends against text-heavy images.
export const articleImageShapes = {
  og: ogImageSize,
  '16x9': { width: 1200, height: 675 },
  '4x3': { width: 1200, height: 900 },
  '1x1': { width: 1200, height: 1200 },
} as const;
export type ArticleImageShape = keyof typeof articleImageShapes;

// Logo tile with a brand-colored glow. A shadow, not a separate circle, so it always sits behind
// its own tile and never covers the neighbors.
function haloTile(name: string, size: number): Node {
  const glow = glowColor(toolSlug(name));
  const alpha = glow === '#FFFFFF' ? '55' : 'AA';
  return h(
    'div',
    {
      display: 'flex',
      margin: `0 ${Math.round(size * 0.22)}px`,
      borderRadius: Math.round(size * 0.24),
      boxShadow: `0 0 ${Math.round(size * 0.55)}px ${Math.round(size * 0.12)}px ${glow}${alpha}`,
    },
    toolTile(name, size, false),
  );
}

export function articleImage(data: { tools: string[]; joiner: string; hook?: string }, shape: ArticleImageShape = 'og') {
  const size = articleImageShapes[shape];
  const scale = Math.min(size.width / 1200, size.height / 630);
  const [first, ...rest] = data.tools;
  const others = rest.slice(0, 3);
  const main = Math.round(150 * scale);
  const small = Math.round(104 * scale);
  return render(
    h(
      'div',
      {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: ink,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.09) 2px, transparent 2px)',
        backgroundSize: '30px 30px',
        fontFamily: 'Public Sans',
        color: '#FFFFFF',
      },
      h(
        'div',
        { display: 'flex', alignItems: 'center' },
        haloTile(first, main),
        ...(data.joiner && others.length > 0
          ? [
              h(
                'div',
                {
                  display: 'flex',
                  padding: `${Math.round(10 * scale)}px ${Math.round(20 * scale)}px`,
                  borderRadius: 999,
                  background: data.joiner === 'vs' ? warm : 'rgba(255,255,255,0.14)',
                  color: data.joiner === 'vs' ? ink : '#FFFFFF',
                  fontSize: Math.round(30 * scale),
                  fontWeight: 700,
                },
                data.joiner,
              ),
            ]
          : []),
        ...others.map((tool) => haloTile(tool, small)),
      ),
      ...(data.hook
        ? [
            h(
              'div',
              {
                display: 'flex',
                marginTop: Math.round(44 * scale),
                padding: `${Math.round(12 * scale)}px ${Math.round(28 * scale)}px`,
                borderRadius: Math.round(14 * scale),
                background: warm,
                color: ink,
                fontSize: Math.round(54 * scale),
                fontWeight: 700,
              },
              data.hook,
            ),
          ]
        : []),
      h(
        'div',
        { display: 'flex', position: 'absolute', left: Math.round(44 * scale), top: Math.round(40 * scale) },
        whiteWordmark(Math.round(34 * scale)),
      ),
    ),
    size,
  );
}

function whiteWordmark(size: number): Node {
  const [first, ...rest] = site.name;
  return h(
    'div',
    { display: 'flex', alignItems: 'center', fontFamily: 'Newsreader', fontWeight: 700, fontSize: size, color: '#FFFFFF' },
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
