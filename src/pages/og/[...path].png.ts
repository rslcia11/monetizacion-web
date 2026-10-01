import type { APIRoute } from 'astro';
import { getArticles, type Article } from '../../lib/articles';
import { kinds } from '../../lib/kinds';
import { articleImage, articleImageShapes, defaultImage, type ArticleImageShape } from '../../lib/og';
import { defaultLocale, t } from '../../i18n/ui';

// Share images: /og/default.png for home, sections and site pages; /og/<locale>/<slug>.png per article,
// plus /og/<locale>/<slug>-16x9.png, -4x3 and -1x1 for Article structured data.
export async function getStaticPaths() {
  const articles = await getArticles();
  return [
    { params: { path: 'default' }, props: {} },
    ...articles.flatMap((article) =>
      (Object.keys(articleImageShapes) as ArticleImageShape[]).map((shape) => ({
        params: { path: shape === 'og' ? article.id : `${article.id}-${shape}` },
        props: { article, shape },
      })),
    ),
  ];
}

export const GET: APIRoute<{ article?: Article; shape?: ArticleImageShape }> = async ({ props: { article, shape } }) => {
  const png = article
    ? await articleImage({ ...article.data, joiner: kinds[article.data.kind].joiner }, shape)
    : await defaultImage(t(defaultLocale, 'home.title'));
  return new Response(png as BodyInit, { headers: { 'Content-Type': 'image/png' } });
};
