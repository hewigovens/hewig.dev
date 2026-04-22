---
layout: '@/templates/BasePost.astro'
title: 'Rewriting GhostTile for Modern macOS'
description: 'GhostTile was my first polished paid Mac app. This is the story of why it faded, why I rewrote it, and why I am making the new repo public.'
pubDate: 2026-04-22T00:00:00Z
imgSrc: '/assets/images/ghosttile-2.0.png'
imgAlt: 'GhostTile 2.0 screenshot'
draft: false
---

GhostTile was my first really polished paid Mac app.

Back then I was deep in macOS development, and GhostTile came from a very simple personal pain point: I had apps I used all the time, but I did not want to see them in the Dock, and I did not want them in Cmd+Tab either. I still wanted the normal system surfaces to stay instant. I did not want to replace the Dock with a third-party launcher. I just wanted a few apps to disappear from it.

That idea became GhostTile.

The original version meant a lot to me. It solved a real problem I had, and it also became one of the best ways I ever learned macOS internals. To make GhostTile work, I had to go much deeper into the platform than most apps ever need to. Under the hood it had exactly the kind of machinery you would expect from an older Mac utility living close to the system: `mach_inject`, helper processes, XPC glue, fishhook-style rebinding, `TransformProcessType`, Dock observation, swizzling, and a lot of “how is this still working?” energy.

It was quite a journey, and I am still proud of what I managed to build.

## Why It Stalled

GhostTile never made much money, but that was not the real problem.

The bigger problem was that macOS kept changing. SIP, notarization, hardened runtime expectations, Apple Silicon, and the general direction of platform security made the old GhostTile harder and harder to maintain in a way I felt good about.

At some point I lost motivation, because I knew I did not want the answer to be “please disable SIP” or “please weaken your machine so this utility can keep doing its old tricks.”

I did not want to go backward just to keep GhostTile alive.

So the project faded.

## Why Rewrite It Now

What changed recently was not that macOS got easier. It did not.

What changed was that models like Claude Opus 4 and GPT 5 became capable enough that revisiting a project like this started to feel realistic again. Not effortless, not magical, but realistic.

That gave me a reason to try.

This is not really about money anymore. It is more personal than that. GhostTile was one of the projects I was most proud of, and I needed to give myself an answer: if I rebuilt it today, knowing what I know now, could it still become something worth using?

That is what GhostTile 2.0 is.

## Why It Became a Rewrite

Once I looked at it seriously, it was obvious this could not be a patch release.

The old GhostTile had too much history, too many assumptions from an older version of macOS, and too many features built around workflows that no longer felt like the right center of the product.

So I rewrote it with a few clear goals:

- keep the core idea intact
- make the CLI the canonical automation surface
- bring back the highest-value parts of GhostTile
- stop pretending every old feature needed to survive

That last point mattered a lot. I did not want an archaeology project. I wanted a version of GhostTile that matched modern macOS better, even if that meant leaving some older ideas behind.

## What Changed in the New GhostTile

The new GhostTile still does unusual things, but it is more deliberate about them.

The core now revolves around preparing apps in a cleaner, more explicit way: staging `ghosthide.dylib`, patching the target executable to load it, re-signing the app, and making restore paths clearer when something goes wrong.

Architecturally, it is less of a pile of magic and more of a real system:

- a shared core for app resolution, preparation, restore, and launch behavior
- a CLI that acts as the backbone
- a macOS app built on top of that same core
- a simpler public repo that is easier to understand and easier to work on

I also brought back the parts that still feel essential to GhostTile:

- the menu bar workflow
- a proper managed-app UI
- Overview
- keyboard-first entry points
- notifications for hidden apps

## Why Make It Public

This is a new repo because it is a new chapter for the project.

I am keeping the BSL license as it is, but more as a reminder than something I want to enforce aggressively. I am making the source available because I no longer feel a strong need to treat GhostTile like a closed commercial product. It is still unusual software, but it is less black-magic-heavy than the old version, and I think people may still want to use it.

More importantly, making it public gives GhostTile a better future.

The source is available. The architecture is cleaner. The repo is in better shape. And it is much easier now for contributors, or even coding agents, to work on it in a sane way.

That feels like the right way to give GhostTile back to the community.

## What This Means to Me

GhostTile 2.0 is not about trying to recreate the old business around it.

It is about revisiting one of the projects I cared about most, under modern constraints, with better tools, and answering a question I had been avoiding for years.

Was GhostTile only a product of its time, or was the idea still worth rebuilding?

I think it was worth rebuilding.

Not in exactly the same form. Not with exactly the same tricks. But still worth building.
