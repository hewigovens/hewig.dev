import type {
  IFrontmatter,
  MarkdownInstance,
} from '@/components';

export const sortByDate = (posts: MarkdownInstance<IFrontmatter>[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};

/**
 * Draft posts stay visible while running `astro dev` so they can be previewed,
 * but are excluded from production builds (listings, RSS, and — combined with
 * the sitemap filter and a per-page noindex — search indexing).
 */
export const isPublished = (post: MarkdownInstance<IFrontmatter>) =>
  import.meta.env.PROD ? post.frontmatter.draft !== true : true;

export const publishedPosts = (posts: MarkdownInstance<IFrontmatter>[]) =>
  posts.filter(isPublished);
