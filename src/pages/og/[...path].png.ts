import type { APIRoute } from 'astro';
import { getArticles, type Article } from '../../lib/articles';
import { kinds } from '../../lib/kinds';
import { articleImage, defaultImage } from '../../lib/og';
import { defaultLocale, t } from '../../i18n/ui';

// Share images: /og/default.png for home, sections and site pages; /og/<locale>/<slug>.png per article.
export async function getStaticPaths() {
  const articles = await getArticles();
  return [
    { params: { path: 'default' }, props: {} },
    ...articles.map((article) => ({ params: { path: article.id }, props: { article } })),
  ];
}

export const GET: APIRoute<{ article?: Article }> = async ({ props: { article } }) => {
  const png = article
    ? await articleImage({ ...article.data, joiner: kinds[article.data.kind].joiner })
    : await defaultImage(t(defaultLocale, 'home.title'));
  return new Response(png as BodyInit, { headers: { 'Content-Type': 'image/png' } });
};
