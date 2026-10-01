// Components available in every article's MDX without importing them.
// Usage and rules: docs/escribir-articulos.md
import Ad from './Ad.astro';
import CodeBlock from './CodeBlock.astro';
import ContactEmail from './ContactEmail.astro';
import Output from './Output.astro';
import PageLink from './PageLink.astro';
import Pick from './Pick.astro';
import Picks from './Picks.astro';
import ProsCons from './ProsCons.astro';
import Results from './Results.astro';
import Screenshot from './Screenshot.astro';
import ToolFacts from './ToolFacts.astro';

export const mdxComponents = {
  Ad,
  ContactEmail,
  Output,
  PageLink,
  Pick,
  Picks,
  ProsCons,
  Results,
  Screenshot,
  ToolFacts,
  // Every ``` code fence renders as a labeled box with a Copy button.
  pre: CodeBlock,
};
