import { ColorTags } from '@/components/Tags';

import type { Values } from '@/components/types/TypeUnion';

export type ProjectCategory = 'rust' | 'macos' | 'ios' | 'contributions';

export type ProjectLink =
  | { kind: 'internal'; path: string }
  | { kind: 'external'; url: string };

export type TagEntry = {
  color: Values<typeof ColorTags>;
  label: string;
};

export type ProjectEntry = {
  name: string;
  description: string;
  img: { src: string; alt: string };
  category: ProjectCategory;
  tags: TagEntry[];
  link: ProjectLink;
};

export const categoryLabels: Record<
  ProjectCategory,
  { prefix: string; highlight: string }
> = {
  rust: { prefix: 'Rust', highlight: 'Libraries & Tools' },
  macos: { prefix: 'macOS', highlight: 'Apps' },
  ios: { prefix: 'iOS', highlight: 'Apps' },
  contributions: { prefix: 'Open Source', highlight: 'Contributions' },
};

export const categoryOrder: ProjectCategory[] = [
  'rust',
  'macos',
  'ios',
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
    name: 'amux',
    description:
      'A tiny Rust CLI that keeps your fleet of local AI/code agents organised inside tmux with consistent commands to launch, attach, detach, and prune sessions.',
    img: { src: '/assets/images/project-amux.svg', alt: 'amux CLI' },
    category: 'rust',
    tags: [
      { color: ColorTags.RUST, label: 'Rust' },
      { color: ColorTags.SLATE, label: 'CLI' },
      { color: ColorTags.GREEN, label: 'tmux' },
      { color: ColorTags.INDIGO, label: 'Agents' },
    ],
    link: { kind: 'external', url: 'https://github.com/hewigovens/amux' },
  },
  {
    name: 'Miso',
    description:
      'A lightweight macOS menu bar utility providing a floating HUD overlay for quick input method switching. Zero permissions required.',
    img: { src: '/assets/images/project-miso.png', alt: 'Miso' },
    category: 'macos',
    tags: [
      { color: ColorTags.SWIFT, label: 'Swift' },
      { color: ColorTags.FUCHSIA, label: 'macOS' },
      { color: ColorTags.SLATE, label: 'Menu Bar' },
      { color: ColorTags.EMERALD, label: 'Input Method' },
    ],
    link: { kind: 'external', url: 'https://github.com/hewigovens/miso' },
  },
  {
    name: 'hw-core',
    description:
      'Cross platform hardware wallet interface. A Rust-based library implementing low-level wallet functionality, including Trezor Host Protocol.',
    img: { src: '/assets/images/project-hw-core.png', alt: 'hw-core' },
    category: 'rust',
    tags: [
      { color: ColorTags.RUST, label: 'Rust' },
      { color: ColorTags.CYAN, label: 'Hardware Wallet' },
      { color: ColorTags.GREEN, label: 'Trezor' },
      { color: ColorTags.INDIGO, label: 'BLE' },
    ],
    link: { kind: 'external', url: 'https://github.com/hewigovens/hw-core' },
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
      { color: ColorTags.SWIFT, label: 'Swift' },
      { color: ColorTags.FUCHSIA, label: 'macOS' },
      { color: ColorTags.VIOLET, label: 'Reverse Engineering' },
      { color: ColorTags.EMERALD, label: 'Diagnostics' },
    ],
    link: {
      kind: 'external',
      url: 'https://github.com/hewigovens/app-detective',
    },
  },
  {
    name: 'Solana Primitives',
    description:
      'A Rust crate providing fundamental data structures and tools for constructing and submitting Solana transactions.',
    img: { src: '/assets/images/project-cargo.png', alt: 'Solana Primitives' },
    category: 'rust',
    tags: [
      { color: ColorTags.RUST, label: 'Rust' },
      { color: ColorTags.LIME, label: 'Blockchain' },
      { color: ColorTags.VIOLET, label: 'Solana' },
      { color: ColorTags.INDIGO, label: 'SDK' },
    ],
    link: {
      kind: 'external',
      url: 'https://github.com/hewigovens/solana-primitives',
    },
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
      { color: ColorTags.SWIFT, label: 'Swift' },
      { color: ColorTags.FUCHSIA, label: 'macOS' },
      { color: ColorTags.ROSE, label: 'Productivity' },
      { color: ColorTags.INDIGO, label: 'Automation' },
    ],
    link: {
      kind: 'external',
      url: 'https://a1.hewig.dev/staged/',
    },
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
      { color: ColorTags.RUST, label: 'Rust' },
      { color: ColorTags.BLUE, label: 'Docker' },
      { color: ColorTags.VIOLET, label: 'eBPF' },
      { color: ColorTags.EMERALD, label: 'DevContainer' },
    ],
    link: {
      kind: 'external',
      url: 'https://github.com/hewigovens/aya-devcontainer',
    },
  },
  {
    name: 'reqwest-enum',
    description:
      'Type-safe and enum style API for Rust, it abstracts away repetitive boilerplate code like url formatting, query / header encoding and response deserialization, plus async by default and lightweight JSON-RPC support.',
    img: { src: '/assets/images/project-cargo.png', alt: 'reqwest-enum' },
    category: 'rust',
    tags: [
      { color: ColorTags.RUST, label: 'Rust' },
      { color: ColorTags.SWIFT, label: 'Enum' },
      { color: ColorTags.SKY, label: 'HTTP' },
      { color: ColorTags.LIME, label: 'JSONRPC' },
    ],
    link: {
      kind: 'external',
      url: 'https://github.com/hewigovens/reqwest-enum',
    },
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
      { color: ColorTags.OBJC, label: 'ObjcC' },
      { color: ColorTags.GREEN, label: 'XPC' },
      { color: ColorTags.ROSE, label: 'Code injection' },
      { color: ColorTags.FUCHSIA, label: 'macOS' },
    ],
    link: { kind: 'internal', path: '/projects/ghosttile/' },
  },
  {
    name: 'Anytime',
    description:
      'A timezone-aware world clock app for Mac and iPhone. Quickly see what time it is for your team, anywhere.',
    img: {
      src: '/assets/images/project-anytime.png',
      alt: 'Anytime',
    },
    category: 'ios',
    tags: [
      { color: ColorTags.SWIFT, label: 'Swift' },
      { color: ColorTags.FUCHSIA, label: 'macOS' },
      { color: ColorTags.SKY, label: 'iOS' },
      { color: ColorTags.EMERALD, label: 'Productivity' },
    ],
    link: { kind: 'internal', path: '/projects/anytime/' },
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
      { color: ColorTags.SWIFT, label: 'Swift' },
      { color: ColorTags.INDIGO, label: 'TLS' },
      { color: ColorTags.BLUE, label: 'OpenSSL' },
      { color: ColorTags.FUCHSIA, label: 'iOS' },
    ],
    link: { kind: 'internal', path: '/projects/inspect/' },
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
      { color: ColorTags.CPP, label: 'C++' },
      { color: ColorTags.YELLOW, label: 'Cross Platform' },
      { color: ColorTags.WEBASSEMBLY, label: 'Web Assembly' },
      { color: ColorTags.FUCHSIA, label: 'SDK' },
    ],
    link: {
      kind: 'external',
      url: 'https://github.com/trustwallet/wallet-core',
    },
  },
];
