import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

import type { IFrontmatter, MarkdownInstance } from '@/components';
import { AppConfig } from '@/utils/AppConfig';
import { publishedPosts, sortByDate } from '@/utils/Posts';

export async function GET(context: APIContext) {
  const posts = sortByDate(
    publishedPosts(
      Object.values(
        import.meta.glob<MarkdownInstance<IFrontmatter>>('./posts/*.md', {
          eager: true,
        })
      )
    )
  );

  const items = await Promise.all(
    posts.map(async (post) => ({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: new Date(post.frontmatter.pubDate),
      link: post.url ?? '/',
      author: `${AppConfig.social.email} (${AppConfig.name})`,
      content: await post.compiledContent(),
    }))
  );

  return rss({
    title: AppConfig.title,
    description: AppConfig.description,
    site: context.site ?? AppConfig.url,
    items,
    customData: `<language>en-us</language>`,
  });
}
