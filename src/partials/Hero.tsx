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
          Tokyo-based, crypto-focused, and former <a className="text-cyan-400 hover:underline" href="https://trustwallet.com/">
            Trust Wallet
          </a> fouding engineer. Blockchains, Cross-platform SDK, mobile apps, and smart contracts are areas of expertise.
          <br />
          Proficient with major networks (not limited to {' '}
          <img src="/assets/images/btc.svg" alt="BTC" className='h-6 w-6 inline-block mr-1' />
          <img src="/assets/images/eth.svg" alt="ETH" className='h-6 w-6 inline-block mr-1' />
          <img src="/assets/images/bnb.svg" alt="BNB" className='h-6 w-6 inline-block mr-1' />
          <img src="/assets/images/sol.svg" alt="SOL" className='h-7 w-7 inline-block' />) and full stack development of a wallet or dApp.
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
