import {
  ColorTags,
  Project,
  Section,
  Tags,
} from '@/components';
import { GradientText } from '@/components/GradientText';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="reqwest-enum"
        description="Type-safe and enum style API for Rust, tt abstracts away repetitive boilerplate code like url formatting,
        query / header encoding and response deserialization, plus async by default and lightweight JSON-RPC support."
        link="https://github.com/hewigovens/reqwest-enum"
        img={{
          src: '/assets/images/project-cargo.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.RUST}>Rust</Tags>
            <Tags color={ColorTags.SWIFT}>Enum</Tags>
            <Tags color={ColorTags.SKY}>HTTP</Tags>
            <Tags color={ColorTags.LIME}>JSONRPC</Tags>
          </>
        }
      />
      <Project
        name="Wallet Core"
        description="Trust Wallet Core is an open-source, cross-platform, mobile-focused
        library implementing low-level cryptographic wallet functionality
        for a high number of blockchains."
        link="https://github.com/trustwallet/wallet-core"
        img={{ src: '/assets/images/project-wallet-core.png', alt: 'Wallet Core' }}
        category={
          <>
            <Tags color={ColorTags.CPP}>C++</Tags>
            <Tags color={ColorTags.YELLOW}>Cross Platform</Tags>
            <Tags color={ColorTags.WEBASSEMBLY}>Web Assembly</Tags>
            <Tags color={ColorTags.FUCHSIA}>SDK</Tags>
          </>
        }
      />
      <Project
        name="Inspect"
        description="Inspect is an action extension (works in both Safari, Chrome and Edge) that allows you to
        inspect and export website's https certificate information."
        link="https://apps.apple.com/us/app/inspect-view-tls-certificate/id1074957486"
        img={{ src: '/assets/images/project-inspect.png', alt: 'Inspect iOS app' }}
        category={
          <>
            <Tags color={ColorTags.SWIFT}>Swift</Tags>
            <Tags color={ColorTags.INDIGO}>TLS</Tags>
            <Tags color={ColorTags.BLUE}>OpenSSL</Tags>
            <Tags color={ColorTags.FUCHSIA}>iOS</Tags>
          </>
        }
      />
      <Project
        name="GhostTile"
        description="Hide your running applications from Dock like a charm."
        link="https://ghosttile.kernelpanic.im/"
        img={{ src: '/assets/images/project-ghost.png', alt: 'GhostTile macOS app' }}
        category={
          <>
            <Tags color={ColorTags.OBJC}>ObjcC</Tags>
            <Tags color={ColorTags.GREEN}>XPC</Tags>
            <Tags color={ColorTags.ROSE}>Code injection</Tags>
            <Tags color={ColorTags.FUCHSIA}>macOS</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
