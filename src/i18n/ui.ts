export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

// Locales with live pages. Spanish is wired in but off until its content exists (plan 9.4):
// to launch it, add 'es' here. Every route under src/pages/[...lang]/ picks it up.
export const publishedLocales: Locale[] = ['en'];

// Everything that varies by locale besides UI strings, in one place.
export const localeMeta = {
  en: { label: 'English', og: 'en_US', dates: new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }) },
  es: { label: 'Español', og: 'es_LA', dates: new Intl.DateTimeFormat('es', { dateStyle: 'long', timeZone: 'UTC' }) },
} as const satisfies Record<Locale, { label: string; og: string; dates: Intl.DateTimeFormat }>;

// The [...lang] route param: en -> undefined (served at /), es -> "es" (served at /es/).
export function langParam(locale: Locale): string | undefined {
  return locale === defaultLocale ? undefined : locale;
}

// getStaticPaths for pages that exist once per published locale.
export function localeStaticPaths(only: Locale[] = publishedLocales) {
  return only.map((locale) => ({ params: { lang: langParam(locale) }, props: { locale } }));
}

const en = {
  'site.tagline': 'Independent comparisons of developer tools. We install them, test them the same way, and publish the numbers.',
  'home.title': 'Developer tools, tested side by side',
  'home.description': 'Independent comparisons and alternatives for developer tools, tested on the same setup with published numbers.',
  'home.latest': 'Latest',
  'home.empty': 'No articles published yet.',
  'nav.main': 'Main',
  'nav.skip': 'Skip to content',
  'nav.latest': 'Latest',
  'nav.footer': 'Footer',
  'nav.breadcrumb': 'Breadcrumb',
  'footer.about': 'About',
  'footer.howWeTest': 'How we test',
  'footer.contact': 'Contact',
  'footer.privacy': 'Privacy',
  'footer.terms': 'Terms',
  'footer.cookies': 'Cookies',
  'article.tested': 'Tested',
  'article.researched': 'Researched',
  'article.updated': 'Updated',
  'article.independence': 'No tool on this page paid to be here.',
  'article.toc': 'On this page',
  'kind.comparison': 'Comparisons',
  'kind.alternatives': 'Alternatives',
  'kind.guide': 'Guides',
  'notFound.title': 'Page not found',
  'notFound.body': "This page doesn't exist or was moved.",
  'notFound.home': 'Go to the home page',
  'picks.top': 'Our top pick',
  'picks.read': 'Read review',
  'results.yes': 'Yes',
  'results.no': 'No',
  'results.pending': 'Pending',
  'facts.price': 'Price',
  'facts.runsOn': 'Runs on',
  'facts.license': 'License',
  'pros.title': 'Worth it if',
  'cons.title': 'Think twice if',
  'testing.title': 'How we tested',
  'testing.environment': 'Environment',
  'testing.tool': 'Tool',
  'testing.version': 'Version tested',
  'testing.date': 'Test date',
  'testing.method': 'Our full method is on the How we test page.',
  'research.title': 'How we researched',
  'research.date': 'Research date',
  'research.version': 'Version checked',
  'research.note': "We didn't run hands-on benchmarks for this article. Every fact comes from the official pages listed in Sources.",
  'sources.title': 'Sources',
  'author.title': 'About the author',
  'author.photo': 'Photo of',
  'author.on': 'on',
  'ad.label': 'Advertisement',
  'page.updated': 'Last updated',
  'page.authors': 'Who writes Kriterio',
  'nav.search': 'Search',
  'search.title': 'Search',
  'search.description': 'Search every Kriterio comparison, alternatives list and guide by tool name or topic.',
  'search.label': 'Search articles',
  'search.placeholder': 'Search a tool, like Postman or Supabase',
  'search.loading': 'Searching…',
  'search.countOne': '1 result for “{query}”',
  'search.count': '{count} results for “{query}”',
  'search.none': 'Nothing matches “{query}”. Try a tool name, like Postman.',
  'search.unavailable': "Search isn't available right now. The latest articles are on the home page.",
  'filter.label': 'Filter by topic',
  'filter.all': 'All',
} as const;

export type UIKey = keyof typeof en;

// Same keys as English, enforced by the type: a missing translation is a type error.
const es: Record<UIKey, string> = {
  'site.tagline': 'Comparativas independientes de herramientas para desarrolladores. Las instalamos, las probamos igual y publicamos los números.',
  'home.title': 'Herramientas para developers, probadas lado a lado',
  'home.description': 'Comparativas y alternativas independientes de herramientas para desarrolladores, probadas en el mismo entorno y con números publicados.',
  'home.latest': 'Lo último',
  'home.empty': 'Todavía no hay artículos publicados.',
  'nav.main': 'Principal',
  'nav.skip': 'Saltar al contenido',
  'nav.latest': 'Lo último',
  'nav.footer': 'Pie de página',
  'nav.breadcrumb': 'Ruta de navegación',
  'footer.about': 'Quiénes somos',
  'footer.howWeTest': 'Cómo probamos',
  'footer.contact': 'Contacto',
  'footer.privacy': 'Privacidad',
  'footer.terms': 'Términos',
  'footer.cookies': 'Cookies',
  'article.tested': 'Probado el',
  'article.researched': 'Investigado el',
  'article.updated': 'Actualizado el',
  'article.independence': 'Ninguna herramienta de esta página pagó por aparecer.',
  'article.toc': 'En esta página',
  'kind.comparison': 'Comparativas',
  'kind.alternatives': 'Alternativas',
  'kind.guide': 'Guías',
  'notFound.title': 'Página no encontrada',
  'notFound.body': 'Esta página no existe o se movió.',
  'notFound.home': 'Ir a la portada',
  'picks.top': 'Nuestra elección',
  'picks.read': 'Ver análisis',
  'results.yes': 'Sí',
  'results.no': 'No',
  'results.pending': 'Pendiente',
  'facts.price': 'Precio',
  'facts.runsOn': 'Funciona en',
  'facts.license': 'Licencia',
  'pros.title': 'Vale la pena si',
  'cons.title': 'Piénsalo dos veces si',
  'testing.title': 'Cómo lo probamos',
  'testing.environment': 'Entorno',
  'testing.tool': 'Herramienta',
  'testing.version': 'Versión probada',
  'testing.date': 'Fecha de prueba',
  'testing.method': 'Nuestro método completo está en la página Cómo probamos.',
  'research.title': 'Cómo lo investigamos',
  'research.date': 'Fecha de investigación',
  'research.version': 'Versión revisada',
  'research.note': 'Para este artículo no hicimos pruebas prácticas. Cada dato sale de las páginas oficiales listadas en Fuentes.',
  'sources.title': 'Fuentes',
  'author.title': 'Sobre el autor',
  'author.photo': 'Foto de',
  'author.on': 'en',
  'ad.label': 'Publicidad',
  'page.updated': 'Última actualización',
  'page.authors': 'Quién escribe Kriterio',
  'nav.search': 'Buscar',
  'search.title': 'Buscar',
  'search.description': 'Busca en todas las comparativas, alternativas y guías de Kriterio por herramienta o tema.',
  'search.label': 'Buscar artículos',
  'search.placeholder': 'Busca una herramienta, como Postman o Supabase',
  'search.loading': 'Buscando…',
  'search.countOne': '1 resultado para “{query}”',
  'search.count': '{count} resultados para “{query}”',
  'search.none': 'Nada coincide con “{query}”. Prueba con el nombre de una herramienta, como Postman.',
  'search.unavailable': 'La búsqueda no está disponible ahora. Los artículos más recientes están en la portada.',
  'filter.label': 'Filtrar por tema',
  'filter.all': 'Todos',
};

const ui: Record<Locale, Record<UIKey, string>> = { en, es };

// Content text written per language, e.g. an author's bio. Missing translation fails the build.
export function inLocale(text: { en: string; es?: string }, locale: Locale, what: string): string {
  const value = text[locale];
  if (!value) throw new Error(`Missing "${locale}" text for ${what}.`);
  return value;
}

// For components: pass Astro.currentLocale (derived from the URL by Astro's i18n routing).
export function toLocale(value: string | undefined): Locale {
  return locales.find((l) => l === value) ?? defaultLocale;
}

export function t(locale: Locale, key: UIKey): string {
  return ui[locale][key];
}

// en lives at /, es at /es/ (plan 9.4).
export function localePath(locale: Locale, path = ''): string {
  const clean = path.split('/').filter(Boolean).join('/');
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  return clean ? `${prefix}/${clean}/` : `${prefix}/`;
}

// One language version of a page, used for hreflang and the header language link.
export type Alternate = { locale: Locale; href: string };

// Same path in several locales (home, sections, legal pages). Pass `only` when the page
// isn't built in every published locale, so no alternate points to a missing page.
export function sharedAlternates(path = '', only: Locale[] = publishedLocales): Alternate[] {
  return only.map((locale) => ({ locale, href: localePath(locale, path) }));
}

export function formatDate(locale: Locale, date: Date): string {
  return localeMeta[locale].dates.format(date);
}
