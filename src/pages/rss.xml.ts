import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { articleUrl, getArticles } from '../lib/articles';
import { defaultLocale, t } from '../i18n/ui';
import { site } from '../lib/site';

// Feed of the default-locale articles, newest first: lets readers and aggregators follow the site.
export const GET: APIRoute = async (context) => {
  const articles = await getArticles(defaultLocale);
  return rss({
    title: site.name,
    description: t(defaultLocale, 'home.description'),
    site: context.site!,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.publishedAt,
      link: articleUrl(article),
    })),
  });
};
