import {
  GradientText,
  Newsletter,
  Section,
} from '@/components';

const SubscribeForm = () => (
  <Section>
    <Newsletter
      title={
        <>
          Subscribe to my <GradientText>Curated list</GradientText>
        </>
      }
      description="Share irregularly, it may might be a blog post, a tweet, a podcast, github project or youtube video."
    />
  </Section>
);

export { SubscribeForm };
