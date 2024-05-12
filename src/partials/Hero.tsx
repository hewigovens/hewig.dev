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
          Hi, This is <GradientText>Tao</GradientText> ✋
        </>
      }
      description={
        <>
          Tokyo-based, cryptocurrency-focused, and former <a className="text-cyan-400 hover:underline" href="https://trustwallet.com/">
            Trust Wallet
          </a> engineer. Proficient with major blockchains (not limited to BTC, ETH, and SOL) and full stack development of a wallet or dApp.
          <br />
          web3, cross-platform libs, mobile apps, and smart contracts are areas of expertise.
          <br />
          Contact me via <a className="text-cyan-400 hover:underline" href="/">
            ↓↓
          </a> or send an email.
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
