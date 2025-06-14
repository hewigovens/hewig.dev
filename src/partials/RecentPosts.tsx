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
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Posts</GradientText>
        </div>

        <div className="text-sm">
          <a href="/posts/">View all Posts →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} perColumn={props.perColumn} />
  </Section>
);

export { RecentPosts };
