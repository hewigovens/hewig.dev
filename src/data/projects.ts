
export type ProjectCategory = 'rust' | 'macos' | 'ios' | 'web' | 'fonts' | 'contributions';

export type ProjectLink =
  | { kind: 'internal'; path: string }
  | { kind: 'external'; url: string };

export type ProjectEntry = {
  name: string;
  description: string;
  img: { src: string; alt: string; compact?: boolean };
  category: ProjectCategory;
  tags: string[];
  link: ProjectLink;
};

export const categoryLabels: Record<ProjectCategory, string> = {
  rust: 'Rust libraries & tools',
  macos: 'macOS apps',
  ios: 'iOS apps',
  web: 'Web apps',
  fonts: 'Fonts',
  contributions: 'Open source contributions',
};

export const categoryOrder: ProjectCategory[] = [
  'rust',
  'macos',
  'ios',
  'web',
  'fonts',
  'contributions',
];

/** Resolve a ProjectLink to a plain URL string. */
export function resolveLink(entry: ProjectEntry): string {
  return entry.link.kind === 'internal' ? entry.link.path : entry.link.url;
}

/**
 * All projects. Array order = recency (newest first) for the home page.
 * The `category` field drives grouping on the All Projects page.
 */
export const projects: ProjectEntry[] = [
  {
    name: 'Hanori',
    description:
      'Fonts for English, Simplified Chinese, and Japanese reading, with Sans and Serif designs and optional built-in furigana.',
    img: { src: '/assets/images/project-hanori.png', alt: 'Hanori app icon' },
    category: 'fonts',
    tags: [
      'Font',
      'Furigana',
      'Chinese',
      'Japanese',
    ],
    link: { kind: 'external', url: 'https://github.com/hewigovens/hanori-sans' },
  },
  {
    name: 'Budokan event today',
    description:
      "Quick way to view today's event at Nippon Budokan, with start times, details, and the upcoming schedule.",
    img: { src: '/assets/images/project-budokan.svg', alt: 'Budokan event today icon', compact: true },
    category: 'web',
    tags: [
      'TypeScript',
      'Web',
      'Tokyo',
    ],
    link: { kind: 'external', url: 'https://budokan.hewig.dev' },
  },
  {
    name: 'Remote Launcher',
    description:
      'Native macOS launcher for multiple High Performance Screen Sharing sessions.',
    img: { src: '/assets/images/project-remote-launcher.png', alt: 'Remote Launcher app icon' },
    category: 'macos',
    tags: [
      'Swift',
      'macOS',
      'Screen Sharing',
    ],
    link: { kind: 'external', url: 'https://github.com/hewigovens/remote-launcher' },
  },
  {
    name: 'clifpad',
    description:
      'A native scratchpad for Cranelift IR: agents write CLIF, it JIT-compiles and runs in an isolated worker, and every run reports value, optimized IR, disassembly, and timing. Ships an MCP server.',
    img: { src: '/assets/images/project-cargo.png', alt: 'Rust crate' },
    category: 'rust',
    tags: [
      'Rust',
      'Cranelift',
      'JIT',
      'MCP',
    ],
    link: { kind: 'external', url: 'https://github.com/hewigovens/clifpad' },
  },
  {
    name: 'Crypto Playground',
    description:
      'Interactive, visual cryptography from Caesar to SNARKs and lattices, with live intermediate values on real small numbers.',
    img: { src: '/assets/images/project-crypto-playground.svg', alt: 'Crypto Playground icon', compact: true },
    category: 'web',
    tags: [
      'Cryptography',
      'SNARKs',
      'Lattices',
      'Web',
    ],
    link: { kind: 'external', url: 'https://crypto-learn.hewig.dev' },
  },
  {
    name: 'Hearvia',
    description:
      "Live translated subtitles for anything you hear on iPhone and Mac, from other apps' audio or the microphone. Translate with Apple on-device, OpenAI Realtime, Gemini Live, or a local model.",
    img: { src: '/assets/images/project-hearvia.png', alt: 'Hearvia app icon', compact: true },
    category: 'ios',
    tags: [
      'SwiftUI',
      'iOS',
      'macOS',
      'Translation',
    ],
    link: { kind: 'external', url: 'https://hearvia.hewig.dev' },
  },
  {
    name: 'jayjay',
    description:
      'A native macOS GUI for Jujutsu (jj) with a DAG, side-by-side diffs, interdiff, and conflict resolution. Built with Rust and SwiftUI.',
    img: { src: '/assets/images/project-jayjay.svg', alt: 'jayjay macOS app', compact: true },
    category: 'macos',
    tags: [
      'Rust',
      'SwiftUI',
      'macOS',
      'Jujutsu',
    ],
    link: { kind: 'external', url: 'https://jayjay.hewig.dev' },
  },
  {
    name: 'Miso',
    description:
      'A lightweight macOS menu bar utility providing a floating HUD overlay for quick input method switching. Zero permissions required.',
    img: { src: '/assets/images/project-miso.png', alt: 'Miso' },
    category: 'macos',
    tags: [
      'Swift',
      'macOS',
      'Menu Bar',
      'Input Method',
    ],
    link: { kind: 'internal', path: '/projects/miso/' },
  },
  {
    name: 'hw-core',
    description:
      'Cross platform hardware wallet interface. A Rust-based library implementing low-level wallet functionality, including Trezor Host Protocol.',
    img: { src: '/assets/images/project-hw-core.png', alt: 'hw-core' },
    category: 'rust',
    tags: [
      'Rust',
      'Hardware Wallet',
      'Trezor',
      'BLE',
    ],
    link: { kind: 'internal', path: '/projects/hw-core/' },
  },
  {
    name: 'App Detective',
    description:
      "A tool to detect macOS apps' GUI tech stack, helping developers understand the underlying technologies used in applications.",
    img: {
      src: '/assets/images/project-app-detective.png',
      alt: 'App Detective',
    },
    category: 'macos',
    tags: [
      'Swift',
      'macOS',
      'Reverse Engineering',
      'Diagnostics',
    ],
    link: { kind: 'internal', path: '/projects/app-detective/' },
  },
  {
    name: 'Solana Primitives',
    description:
      'A Rust crate providing fundamental data structures and tools for constructing and submitting Solana transactions.',
    img: { src: '/assets/images/project-cargo.png', alt: 'Solana Primitives' },
    category: 'rust',
    tags: [
      'Rust',
      'Blockchain',
      'Solana',
      'SDK',
    ],
    link: { kind: 'internal', path: '/projects/solana-primitives/' },
  },
  {
    name: 'Staged Launcher',
    description:
      'The easiest way to manage and delay the launch of applications across different stages on your Mac.',
    img: {
      src: '/assets/images/project-staged-launcher.png',
      alt: 'Staged Launcher',
    },
    category: 'macos',
    tags: [
      'Swift',
      'macOS',
      'Productivity',
      'Automation',
    ],
    link: { kind: 'internal', path: '/projects/staged-launcher/' },
  },
  {
    name: 'Aya DevContainer',
    description:
      'DevContainer (Docker) image for Aya-rs, providing a pre-configured development environment for eBPF programming with Rust.',
    img: {
      src: '/assets/images/project-aya-container.png',
      alt: 'Aya DevContainer',
    },
    category: 'rust',
    tags: [
      'Rust',
      'Docker',
      'eBPF',
      'DevContainer',
    ],
    link: { kind: 'internal', path: '/projects/aya-devcontainer/' },
  },
  {
    name: 'reqwest-enum',
    description:
      'Type-safe and enum style API for Rust, it abstracts away repetitive boilerplate code like url formatting, query / header encoding and response deserialization, plus async by default and lightweight JSON-RPC support.',
    img: { src: '/assets/images/project-cargo.png', alt: 'reqwest-enum' },
    category: 'rust',
    tags: [
      'Rust',
      'Enum',
      'HTTP',
      'JSONRPC',
    ],
    link: { kind: 'internal', path: '/projects/reqwest-enum/' },
  },
  {
    name: 'GhostTile',
    description: 'Hide your running applications from Dock like a charm.',
    img: {
      src: '/assets/images/project-ghost.png',
      alt: 'GhostTile macOS app',
    },
    category: 'macos',
    tags: [
      'ObjcC',
      'XPC',
      'Code injection',
      'macOS',
    ],
    link: { kind: 'external', url: 'https://ghosttile.hewig.dev' },
  },
  {
    name: 'Anytime',
    description:
      'A timezone-aware world clock app for Mac and iPhone. Quickly see what time it is for your team, anywhere.',
    img: {
      src: '/assets/images/project-anytime.webp',
      alt: 'Anytime', compact: true
    },
    category: 'ios',
    tags: [
      'Swift',
      'macOS',
      'iOS',
      'Productivity',
    ],
    link: { kind: 'external', url: 'https://fourplexlabs.github.io/AnyTime' },
  },
  {
    name: 'Inspect',
    description:
      "Inspect is an action extension (works in both Safari, Chrome and Edge) that allows you to inspect and export website's https certificate information.",
    img: {
      src: '/assets/images/project-inspect.png',
      alt: 'Inspect iOS app',
    },
    category: 'ios',
    tags: [
      'Swift',
      'TLS',
      'OpenSSL',
      'iOS',
    ],
    link: { kind: 'external', url: 'https://fourplexlabs.github.io/Inspect' },
  },
  {
    name: 'Wallet Core',
    description:
      'Trust Wallet Core is an open-source, cross-platform, mobile-focused library implementing low-level cryptographic wallet functionality for a high number of blockchains.',
    img: {
      src: '/assets/images/project-wallet-core.png',
      alt: 'Wallet Core',
    },
    category: 'contributions',
    tags: [
      'C++',
      'Cross Platform',
      'Web Assembly',
      'SDK',
    ],
    link: {
      kind: 'external',
      url: 'https://github.com/trustwallet/wallet-core',
    },
  },
];
