import type { UIKey } from '../i18n/ui';
import type { Article } from './articles';

export type Kind = Article['data']['kind'];

// Menu sections, in menu order (DESIGN.md 4). The slug is the URL: /comparisons/, /es/comparisons/.
// The joiner goes between the tool tiles on the generated cover.
export const kinds: Record<Kind, { slug: string; label: UIKey; joiner: string }> = {
  comparison: { slug: 'comparisons', label: 'kind.comparison', joiner: 'vs' },
  alternatives: { slug: 'alternatives', label: 'kind.alternatives', joiner: 'alternatives' },
  guide: { slug: 'guides', label: 'kind.guide', joiner: '' },
};

export const kindEntries = Object.entries(kinds) as [Kind, (typeof kinds)[Kind]][];
