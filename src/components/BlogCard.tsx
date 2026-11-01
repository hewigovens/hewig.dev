import type { MarkdownInstance } from 'astro';
import { format } from 'date-fns';

import type { IFrontmatter } from './types/IFrontMatter';

type IBlogCardProps = {
  instance: MarkdownInstance<IFrontmatter>;
};

const BlogCard = (props: IBlogCardProps) => (
  <a className="group block h-full" href={props.instance.url}>
    <div className="h-full overflow-hidden rounded-xl border border-line bg-panel transition-colors group-hover:border-accent/40">
      <div className="aspect-w-3 aspect-h-2">
        <img
          className="h-full w-full object-cover object-center"
          src={props.instance.frontmatter.imgSrc}
          alt={props.instance.frontmatter.imgAlt}
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-ink">
          {props.instance.frontmatter.title}
        </h2>

        <div className="mt-1 font-mono text-xs text-muted">
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
