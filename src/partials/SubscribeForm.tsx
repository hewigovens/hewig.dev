import {
  Newsletter,
  Section,
} from '@/components';

const SubscribeForm = () => (
  <Section id="newsletter">
    <Newsletter
      title="Subscribe to my curated list"
      description="Sent irregularly: a blog post, a tweet, a podcast, a GitHub project or a YouTube video."
    />
  </Section>
);

export { SubscribeForm };
