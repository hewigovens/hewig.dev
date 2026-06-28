import {
  GradientText,
  HeroAvatar,
  Section,
} from '@/components';

const Hero = () => (
  <Section>
    <HeroAvatar
      tag={
        <span className="eyebrow inline-flex items-center gap-2">
          <span className="inline-block h-[7px] w-[7px] rounded-full bg-[var(--green)] shadow-[0_0_10px_var(--green)]" />
          Crypto · Rust · SwiftUI
        </span>
      }
      title={
        <>
          Hi, I'm <GradientText>Tao</GradientText>{' '}
          <span role="img" aria-label="waving hand" className="animate-wiggle inline-block">👋</span>
          <span className="mt-2 block text-lg font-medium text-muted">
            Blockchain &amp; software engineer in Tokyo
          </span>
        </>
      }
      description={
        <>
          I build crypto wallet infrastructure, cross-platform SDKs, and native
          macOS &amp; iOS apps — and write about the journey here.
        </>
      }
      avatar={
        <img
          className="h-60 w-60 rounded-full shadow-glow ring-1 ring-line transition-all duration-300 hover:scale-105"
          src="/assets/images/avatar.png"
          alt="Tao Xu — Tokyo-based blockchain and software engineer"
          width="240"
          height="240"
          loading="eager"
          fetchPriority="high"
        />
      }
      socialButtons={
        <div className="flex flex-wrap gap-3">
          <a className="btn btn-primary" href="/projects/">View projects</a>
          <a className="btn btn-outline" href="/about/">About me</a>
        </div>
      }
    />
  </Section>
);

export { Hero };
