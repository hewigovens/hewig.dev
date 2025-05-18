import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from '@/components';
import { AppConfig } from '@/utils/AppConfig';

const Hero = () => {
  // Handle smooth scrolling for anchor links
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <Section>
      <HeroAvatar
        title={
          <>
            Hi, I'm <GradientText>Tao</GradientText>{' '}
            <span role="img" aria-label="waving hand" className="animate-wiggle inline-block">👋</span>
          </>
        }
        description={
          <>
            Tokyo-based developer with deep blockchain expertise; former founding engineer at{' '}
            <a 
              className="text-cyan-400 hover:underline" 
              href="https://trustwallet.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trust Wallet
            </a>. I design scalable blockchain infrastructure, cross-platform SDKs, and decentralized applications on Ethereum, Solana, Bitcoin, and other leading networks.{' '}
            <img 
              src="/assets/images/btc.svg" 
              alt="Bitcoin" 
              className="h-6 w-6 inline-block mx-1" 
              loading="lazy"
            />
            <img 
              src="/assets/images/eth.svg" 
              alt="Ethereum" 
              className="h-6 w-6 inline-block mx-1"
              loading="lazy"
            />
            <img 
              src="/assets/images/bnb.svg" 
              alt="BNB Chain" 
              className="h-6 w-6 inline-block mx-1"
              loading="lazy"
            />
            <img 
              src="/assets/images/sui.svg" 
              alt="Sui" 
              className="h-6 w-6 inline-block mx-1"
              loading="lazy"
            />
            <img 
              src="/assets/images/sol.svg" 
              alt="Solana" 
              className="h-7 w-7 inline-block mx-1"
              loading="lazy"
            />.<br /> Let's connect! Check out my{' '}
            <a 
              href="#newsletter"
              onClick={(e) => handleScrollTo(e, 'newsletter')}
              className="text-cyan-400 hover:underline cursor-pointer transition-all duration-300 hover:text-cyan-300"
            >
              newsletter
            </a>
            {' '}or reach out on any platform below.
          </>
        }
        avatar={
          <img
            className="h-64 w-64 rounded-full border-4 border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105"
            src="/assets/images/avatar.png"
            alt="Tao He"
            loading="lazy"
          />
        }
        socialButtons={
          <div className="flex space-x-4">
            <a 
              href={AppConfig.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="hover:scale-110 transition-transform"
            >
              <HeroSocial
                src="/assets/images/tg-icon.png"
                alt="Telegram"
              />
            </a>
            <a 
              href={AppConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:scale-110 transition-transform"
            >
              <HeroSocial
                src="/assets/images/x-icon.png"
                alt="Twitter"
              />
            </a>
            <a 
              href={AppConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:scale-110 transition-transform"
            >
              <HeroSocial
                src="/assets/images/github-icon.png"
                alt="GitHub"
              />
            </a>
          </div>
        }
      />
    </Section>
  );
};

export { Hero };
