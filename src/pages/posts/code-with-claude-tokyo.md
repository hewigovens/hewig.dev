---
layout: '@/templates/BasePost.astro'
title: 'Code w/ Claude, Tokyo'
description: 'Notes from Anthropic’s Code w/ Claude in Tokyo — the sessions, the office hours, and what I took home about how insiders actually use coding agents.'
pubDate: 2026-06-14T00:00:00Z
imgSrc: '/assets/images/cwc-tokyo.webp'
imgAlt: 'Code w/ Claude Tokyo venue'
draft: true
---

Last week I went to [*Code w/ Claude* Tokyo Extended](https://claude.com/code-with-claude/tokyo-extended) expecting a casual hands-on meetup — a room full of people who like the same tools I do. It turned out to be much more than that.

The ticket was free (though you do need to sign up early). On top of that, attendees walked away with three months of Max 20x and $100 in API credits — so the event more than paid for itself before the first session even started. Food, beverages, bento boxes, and a relaxed closing reception. People had flown in from all over; it was the first time I'd been in a room with that many Claude users from that many countries.

<figure>
<img src="/assets/images/cwc-posters-wall.webp" alt="A wall of generative Code w/ Claude posters at the venue" />
<figcaption>A wall of generative "Code w/ Claude" posters at the venue. Free to take.</figcaption>
</figure>

## The sessions

The [full agenda of talks and workshops](https://claude.com/code-with-claude/tokyo-extended#agenda) is on the event page, and plenty of them were worth the trip. I'll highlight just two.

### How we use Claude Code

The first was a workshop — Anthropic engineers walking through how *they* actually use Claude Code internally. The framing that stuck with me: models are slow, so you really don't want to be fixing their mistakes after a long wait.

1. **Remove ambiguity.** Make the agent interview you before it commits to anything.
2. **Understand and plan.** Plans you can actually read — interactive HTML, not Markdown.
3. **Integrated verification.** Build it in from the start, not as a step you bolt on at the end.

None of it is a flashy trick — it's all process, not magic. Which, it turned out, was the theme of the whole event.

<figure>
<img src="/assets/images/cwc-session-how-we-claude-code.webp" alt="The How we use Claude Code workshop" />
<figcaption>The "How we use Claude Code" workshop.</figcaption>
</figure>

### Rewriting Bun in Rust

The other was the closing session — the first time it was shared publicly: [Jarred](https://x.com/jarredsumner), the creator of [Bun](https://bun.sh/), walking through rewriting Bun in Rust with Claude. When that PR discussed on X and got merged eventually, I read through the migration plan — it's a serious rewrite. Now I could hear how it actually went.

Rewrites used to be too expensive to justify; now they make sense — though not as easy as it looks:

- **Write the rules first.** Every translation decision made once — how each old pattern maps to the new one.
- **Audit the rules themselves.** 8 agents reviewed the rulebook; one translated 3 real files twice.
- **One loop.** Generate → adversarial review → fixes → count what's left, until zero.
- **Four stages.** Files → Crates → Binary → Behavior. Bun has over 4,000 TypeScript tests, and they're implementation-agnostic.

They ran 16 agents × 4 worktrees = 64 Claudes, and banned slow commands like `git` and `cargo`. **Adversarial review** matters most: 2+ adversarial reviewers for every change, and you have to watch for cheating — even the reviewers get reviewed.

<figure>
<img src="/assets/images/cwc-jarred-bun-rust.webp" alt="Jarred on stage presenting the Bun-in-Rust rewrite" />
<figcaption>Jarred presenting the Bun-in-Rust rewrite — the closing session.</figcaption>
</figure>

Rewrite something the size of Bun and you run straight into the obvious question:

<figure>
<img src="/assets/images/cwc-slide-review-million.svg" alt="Slide: How do you review a million lines of code?" />
</figure>

### Office hours

There were a handful of 15-minute 1:1 office-hour slots with Anthropic employees — you had to book one, and they went fast. I grabbed one, and it was the part I'd undervalued the most going in. A few things that came up:

- **The product is a little ahead of model capability on purpose.** The team builds at the edge of what Claude can do, then dogfoods hard to find where the boundaries actually are. Using it heavily *is* the research.
- **Integrations** — Slack, Linear, and the Claude GitHub App are where a lot of the real workflow lives.
- **PR review as a pipeline** — automatic, classify, and adversarial reviews, all feeding into a human at the end rather than replacing one.
- **Bottom-up and top-down at once** — adoption grows from engineers experimenting *and* from leadership pushing, and you need both.

They also pushed Claude Managed Agents (CMA) pretty hard.

## Thoughts on coding agents

A few things crystallized for me at the event:

**1. The big tools are converging on the same idea.** The way I use Claude and Codex is, at the core, roughly the same workflow. What separates them is how far each pushes that idea — better tools, more tokens, higher limits. The mental model transfers; the ceiling is what differs.

**2. Knowing how insiders work is genuinely valuable.** Not because of secret tricks, but because it confirms which fundamentals still matter — and shows how they show up differently now. The clearest example: **Rust and [Jujutsu](https://github.com/jj-vcs/jj) weren't designed for AI coding agents, yet they work better with them than tools that were.** A strict compiler and a clean model of change turn out to be exactly what an agent needs, even though no one built them with agents in mind.

**3. Don't fix the code — fix the process that generates it.** This is the answer to that million-lines question, and the line I keep coming back to. You don't review a million lines by reading them. When the output is wrong, the instinct is to patch the output; the higher-leverage move is to fix the *process*: sample some of the results, edit the prompts to handle what went wrong, and regenerate — so the *next* hundred outputs are right too.

<figure>
<img src="/assets/images/cwc-slide-dont-fix-code.svg" alt="Slide: Don't fix the code. Fix the process that generates the code." />
</figure>

## One more thing

The swag deserves its own paragraph. Pixel-art stickers, a programmable gadget — the [M5Stack Cardputer Adv](https://docs.m5stack.com/ja/core/Cardputer-Adv) — and a little Claude wizard doll. Naturally, the first thing I did was get a Claude-style Tamagotchi running on the Cardputer.

<figure>
<div style="display:flex;gap:0.5rem;align-items:flex-start;">
<img src="/assets/images/cwc-swag.webp" alt="The swag: a c/c card, pixel-art stickers, and an M5Stack Cardputer Adv" style="flex:1;min-width:0;margin:0;border-radius:0.5rem;" />
<img src="/assets/images/cwc-claude-on-cardputer.webp" alt="A Claude-style Tamagotchi running on the Cardputer" style="flex:1;min-width:0;margin:0;border-radius:0.5rem;" />
</div>
<figcaption>The haul — a c/c card, stickers, the Cardputer Adv — and the Cardputer already running a Claude-style Tamagotchi.</figcaption>
</figure>

My favorite piece was the little Claude wizard doll.

<figure>
<img src="/assets/images/cwc-claude-doll.webp" alt="The Claude wizard plush doll" />
<figcaption>Claude, as a pixel wizard.</figcaption>
</figure>

The highlight, though, was the people. [Boris](https://x.com/bcherny) — who, it turns out, speaks Japanese — took a selfie of the whole room from the stage, and I got to show him my Pebble running a Claude watch face.

<figure>
<img src="/assets/images/cwc-boris.webp" alt="Boris on stage taking a selfie of the room" />
<figcaption>The same moment from the floor — Boris taking the shot.</figcaption>
</figure>

<blockquote class="twitter-tweet" data-dnt="true" data-align="center">
<a href="https://x.com/bcherny/status/2064885111477219664">Boris's stage selfie of the whole room at Code w/ Claude, Tokyo</a>
</blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I came for a meetup and left with a sharper picture of where the frontier is — and a renewed conviction that the leverage isn't in the code, it's in the process that writes it.
