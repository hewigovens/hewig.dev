import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from '@/components';
import {
  BlogGallery,
  GradientText,
  Section,
} from '@/components';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
  perColumn: number;
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section>
    <div className="mb-8 flex items-end justify-between">
      <div>
        <div className="eyebrow">// writing</div>
        <h2 className="mt-2 text-3xl font-bold text-ink">
          From the <GradientText>devlog</GradientText>
        </h2>
      </div>

      <a className="shrink-0 text-sm font-semibold text-accent hover:text-accent-bright" href="/posts/">
        View all posts →
      </a>
    </div>

    <BlogGallery postList={props.postList} perColumn={props.perColumn} />
  </Section>
);

export { RecentPosts };
