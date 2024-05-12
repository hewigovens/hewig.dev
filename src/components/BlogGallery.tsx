import type { MarkdownInstance } from 'astro';

import type { IFrontmatter } from './types/IFrontMatter';
import { BlogCard } from './BlogCard';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
  perColumn: number;
};

const BlogGallery = (props: IRecentPostsProps) => (
  <div className={`grid grid-cols-1 gap-6 md:grid-cols-${props.perColumn}`}>
    {props.postList.map((elt) => (
      <BlogCard key={elt.url} instance={elt} />
    ))}
  </div>
);

export { BlogGallery };
