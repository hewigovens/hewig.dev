import {
  HeroAvatar,
  Section,
} from '@/components';

const Hero = () => (
  <Section>
    <HeroAvatar
      tag={
        <span className="eyebrow">// crypto · rust · swiftui</span>
      }
      title="I build crypto wallet infrastructure and native Apple apps"
      description="Blockchain and software engineer in Tokyo, working on cross-platform SDKs and Rust tools. I write about the work here."
      avatar={
        <img
          className="h-60 w-60 rounded-full ring-1 ring-line"
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
