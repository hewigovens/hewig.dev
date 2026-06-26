---
layout: '@/templates/BasePost.astro'
title: 'Closing Loops'
description: 'Three old apps, a decade apart — and what rewriting them taught me about indie dev in the AI coding era.'
pubDate: 2026-04-22T00:00:00Z
imgSrc: '/assets/images/closing-loops.webp'
imgAlt: 'Glowing concentric rings'
draft: false
---

For the past few weeks I have been rewriting three of my old apps:

- **[GhostTile](https://github.com/hewigovens/ghosttile-cli)**, 12 years old — my first commercial Mac app
- **[Inspect](https://github.com/hewigovens/inspect)**, 10 years old — a TLS certificate inspector
- **[Anytime](https://github.com/hewigovens/anytime)**, 8 years old — a timezone calculator

I did not plan a "rewrite season." I started because I wanted to see where the frontier of SOTA coding agents actually was. I had been using Codex and Claude for work and toy projects; I wanted to push them against real code I had written long ago and mostly walked away from.

## Anytime

I started with the easiest one. The prompt was almost embarrassing — *"rewrite this app in modern Swift."* Anytime was small enough that this worked. SwiftUI, SPM, added macOS support, shipped. The agent handled most of the grind; I decided what to keep and what to rebuild.

## Inspect

Inspect was harder. There was an [old branch](https://github.com/hewigovens/inspect/tree/feature/network-extension) I had pushed nearly eight years ago — a packet tunnel to passively monitor TLS handshakes from other apps — and never finished. This time it took an afternoon.

That was a strange feeling. Not pride, exactly. More like *there was no excuse anymore*.

## GhostTile

Then GhostTile — the one I was not sure I could rewrite at all.

The original was my favorite project, full of every macOS trick I had picked up at the time. `mach_inject`, XPC helpers, fishhook-style rebinding, `TransformProcessType`, Dock observation, swizzling. "How is this still working?" energy on every file.

Modern macOS does not forgive that kind of code anymore. SIP, notarization, hardened runtime, Apple Silicon — the platform made most of those tricks either impossible or embarrassing. For years, whenever I thought about reviving GhostTile, the honest answer was "please disable SIP and trust me," and I could not live with that.

What actually changed was not the platform. It was that the agents got good enough to help me list and verify what still works on modern macOS, read the old code to see what was still worth bringing forward, and rebuild the rest around constraints that are real today. The new [GhostTile](https://github.com/hewigovens/ghosttile-cli) still does unusual things — it stages a helper dylib, patches the target binary, re-signs ad hoc — but the architecture is honest and the repo is public. That feels right. I wrote a longer note on [why and how I rewrote it](/posts/rewriting-ghosttile/) if you are curious about the details.

## The indie part

None of these apps ever took off commercially. GhostTile came the closest to being a real product, and even that is generous. But I learned something from each of them — macOS internals, TLS, cross-platform Swift — and every so often someone would email me about a bug or a small feature, which was always the better part of shipping.

I am at a stage now where I do not need side projects to pay for themselves, and that frees them to be what they always wanted to be. The repos are public. No paywalls, no license keys, no enforcement. Each one has a GitHub Sponsors button — if something I built helps you and you feel like chipping in, great; if not, also great. My "ambitious" goal is around $100–200 a month, enough to cover my AI subscriptions, which is a very 2026 sentence and one I enjoy writing.

The real reward is still just hearing from someone who uses it.

## Learn the hard way, still

There is a book called *Learn Python the Hard Way*. The title stayed with me for years. Back then, the indie instinct rhymed with it — write it yourself, understand every line, re-invent the wheel until you have earned your taste. Libraries were something to avoid on principle.

The motivation is different now, but the method survives. Agents can write plausible code for almost anything, which means code you did not write yourself can quietly end up in your project with none of it living in your head. Building from scratch is the clearest defense against that — against slop you cannot debug, abstractions you do not own, and knowledge that never actually made it into your brain.

So my default flipped. Instead of writing everything by hand out of principle, I pick *one thing I actually want to learn* and build that from scratch. The rest — the parts I already know — I am happy to let the agent do.

The more ambitious version of that right now is [hw-core](https://github.com/hewigovens/hw-core). That is the project where I am most deliberately using "build it yourself so it actually lives in your head" as the rule, not the exception.

[Jayjay](https://github.com/hewigovens/jayjay) is another version of the same instinct — a native macOS GUI for [Jujutsu](https://github.com/jj-vcs/jj), written in Rust and SwiftUI. Rust and SwiftUI I already love — I wrote [a whole post](/posts/native-obsession/) about why that is the native combination. What was new to me was jj itself. So building Jayjay from scratch turned out to be the most direct way to actually learn the tool.

Rewriting the old stuff was about closing loops. Building the new thing is about opening them.

---

title image credit to <a href="https://unsplash.com/@pixelprovibes">PixelPro Vibes</a> on <a href="https://unsplash.com/photos/FpC3XIFM2Bg">Unsplash</a>
