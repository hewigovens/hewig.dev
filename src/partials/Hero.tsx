import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from '@/components';
import { AppConfig } from '@/utils/AppConfig';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hello, I'm <GradientText>Tao</GradientText> 👋
        </>
      }
      description={
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            malesuada
          </a>{' '}
          nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet,{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            consectetur
          </a>{' '}
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </>
      }
      avatar={
        <img
          className="h-64 w-64 rounded-full"
          src="/assets/images/avatar.png"
          alt="Degen Trustee"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href={AppConfig.social.telegram}>
            <HeroSocial
              src="/assets/images/tg-icon.png"
              alt="Telegram icon"
            />
          </a>
          <a href={AppConfig.social.twitter}>
            <HeroSocial
              src="/assets/images/x-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href={AppConfig.social.github}>
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="GitHub icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
