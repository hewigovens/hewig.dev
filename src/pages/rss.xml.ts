import rss, { pagesGlobToRssItems } from '@astrojs/rss';

import { AppConfig } from '@/utils/AppConfig';

export async function GET() {
  return rss({
    title: AppConfig.title,
    description: AppConfig.description,
    site: import.meta.env.SITE,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}
