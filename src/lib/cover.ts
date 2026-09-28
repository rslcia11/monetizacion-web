// Cover background, picked from the tool names so each article keeps the same one.
// Shared by the HTML cover (ArticleCover) and the share image (og.ts), which needs plain hex.
const palette = [
  { css: 'var(--accent-soft)', hex: '#E4F2ED' },
  { css: 'var(--warm-soft)', hex: '#FDF4E1' },
  { css: 'var(--surface)', hex: '#F4F7F6' },
  { css: 'var(--con-soft)', hex: '#FBEEEA' },
] as const;

export function coverBackground(tools: string[]) {
  const hash = [...tools.join('')].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return palette[hash % palette.length];
}
