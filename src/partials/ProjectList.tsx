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
        name="hw-core"
        description="Cross platform hardware wallet interface. A Rust-based library implementing low-level wallet functionality, including Trezor Host Protocol."
        link="https://github.com/hewigovens/hw-core"
        img={{
          src: '/assets/images/project-hw-core.png',
          alt: 'hw-core',
        }}
        category={
          <>
            <Tags color={ColorTags.RUST}>Rust</Tags>
            <Tags color={ColorTags.CYAN}>Hardware Wallet</Tags>
            <Tags color={ColorTags.GREEN}>Trezor</Tags>
            <Tags color={ColorTags.INDIGO}>BLE</Tags>
          </>
        }
      />
      <Project
        name="amux"
        description="A tiny Rust CLI that keeps your fleet of local AI/code agents organised inside tmux with consistent commands to launch, attach, detach, and prune sessions."
        link="https://github.com/hewigovens/amux"
        img={{
          src: '/assets/images/project-amux.svg',
          alt: 'amux CLI',
        }}
        category={
          <>
            <Tags color={ColorTags.RUST}>Rust</Tags>
            <Tags color={ColorTags.SLATE}>CLI</Tags>
            <Tags color={ColorTags.GREEN}>tmux</Tags>
            <Tags color={ColorTags.INDIGO}>Agents</Tags>
          </>
        }
      />
      <Project
        name="App Detective"
        description="A tool to detect macOS apps' GUI tech stack, helping developers understand the underlying technologies used in applications."
        link="https://github.com/hewigovens/app-detective"
        img={{
          src: '/assets/images/project-app-detective.png',
          alt: 'App Detective',
        }}
        category={
          <>
            <Tags color={ColorTags.SWIFT}>Swift</Tags>
            <Tags color={ColorTags.FUCHSIA}>macOS</Tags>
            <Tags color={ColorTags.VIOLET}>Reverse Engineering</Tags>
            <Tags color={ColorTags.EMERALD}>Diagnostics</Tags>
          </>
        }
      />
      <Project
        name="Solana Primitives"
        description="A Rust crate providing fundamental data structures and tools for constructing and submitting Solana transactions."
        link="https://github.com/hewigovens/solana-primitives"
        img={{
          src: '/assets/images/project-cargo.png',
          alt: 'Solana Primitives',
        }}
        category={
          <>
            <Tags color={ColorTags.RUST}>Rust</Tags>
            <Tags color={ColorTags.LIME}>Blockchain</Tags>
            <Tags color={ColorTags.VIOLET}>Solana</Tags>
            <Tags color={ColorTags.INDIGO}>SDK</Tags>
          </>
        }
      />
      <Project
        name="Staged Launcher"
        description="The easiest way to manage and delay the launch of applications across different stages on your Mac."
        link="https://github.com/hewigovens/StagedLauncher"
        img={{
          src: '/assets/images/project-staged-launcher.png',
          alt: 'Staged Launcher',
        }}
        category={
          <>
            <Tags color={ColorTags.SWIFT}>Swift</Tags>
            <Tags color={ColorTags.FUCHSIA}>macOS</Tags>
            <Tags color={ColorTags.ROSE}>Productivity</Tags>
            <Tags color={ColorTags.INDIGO}>Automation</Tags>
          </>
        }
      />
      <Project
        name="Aya DevContainer"
        description="DevContainer (Docker) image for Aya-rs, providing a pre-configured development environment for eBPF programming with Rust."
        link="https://github.com/hewigovens/aya-devcontainer"
        img={{
          src: '/assets/images/project-aya-container.png',
          alt: 'Aya DevContainer',
        }}
        category={
          <>
            <Tags color={ColorTags.RUST}>Rust</Tags>
            <Tags color={ColorTags.BLUE}>Docker</Tags>
            <Tags color={ColorTags.VIOLET}>eBPF</Tags>
            <Tags color={ColorTags.EMERALD}>DevContainer</Tags>
          </>
        }
      />
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
