import type { MarkdownInstance } from 'astro';
import { format } from 'date-fns';

import type { IFrontmatter } from './types/IFrontMatter';

type IBlogCardProps = {
  instance: MarkdownInstance<IFrontmatter>;
};

const BlogCard = (props: IBlogCardProps) => (
  <a className="group block" href={props.instance.url}>
    <div className="overflow-hidden rounded-xl border border-line bg-panel transition-all duration-200 group-hover:-translate-y-1 group-hover:border-accent/40 group-hover:shadow-glow">
      <div className="aspect-w-3 aspect-h-2">
        <img
          className="h-full w-full object-cover object-center"
          src={props.instance.frontmatter.imgSrc}
          alt={props.instance.frontmatter.imgAlt}
          loading="lazy"
        />
      </div>

      <div className="px-4 pt-4 pb-6 text-center">
        <h2 className="text-xl font-semibold text-ink">
          {props.instance.frontmatter.title}
        </h2>

        <div className="mt-1 text-xs text-muted">
          {format(new Date(props.instance.frontmatter.pubDate), 'LLL d, yyyy')}
        </div>

        <div className="mt-2 text-sm text-muted">
          {props.instance.frontmatter.description}
        </div>
      </div>
    </div>
  </a>
);

export { BlogCard };
