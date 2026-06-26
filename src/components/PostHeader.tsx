import { format } from 'date-fns';

import type { IFrontmatter } from './types/IFrontMatter';

type IPostHeaderProps = {
  content: IFrontmatter;
  author: string;
};

const PostHeader = (props: IPostHeaderProps) => (
  <>
    <h1 className="text-center text-3xl font-bold text-ink">{props.content.title}</h1>

    <div className="mt-2 text-center text-sm text-muted">
      By {props.author} on{' '}
      {format(new Date(props.content.pubDate), 'LLL d, yyyy')}
    </div>
  </>
);

export { PostHeader };
