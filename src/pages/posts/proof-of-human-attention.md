---
layout: '@/templates/BasePost.astro'
title: 'Proof of Human Attention'
description: 'How a GitHub Desktop patch became JayJay, a native jj client and review tools for working with agents, and why review is about attention, not lines.'
pubDate: 2026-11-14T00:00:00Z
imgSrc: '/assets/images/proof-of-human-attention.webp'
imgAlt: 'The JayJay blue jay looking at one unreviewed file in a list where two are already checked'
draft: false
---

## I wanted a second window

In March I asked Codex for two things in one message: let GitHub Desktop open more than one window, and make its diff view smarter.

The first request was not new. The [upstream issue](https://github.com/desktop/desktop/issues/3606) asking for multiple windows was opened in 2017. It has 205 thumbs-up and 129 comments, and it is still open. But my reason was new. I used to stay in one repository and one branch for days. Now I had agents working in several worktrees at once, and one window to look at all of them.

The patch worked. I used it every day and published builds of the fork. Then it grew. With four windows open, every window refreshed every repository in the sidebar, the app slowed until it could not show a diff, and then it crashed. Fixing that meant inventing a "primary window", which meant handling what happens when the primary window closes. By the end of April I wrote to Codex: *our fork scope expands quite a lot.* The app was built around one window, and I was arguing with that decision in every commit.

In June I sent [the work](https://github.com/desktop/desktop/pull/22382) upstream anyway: 1,123 lines, 21 files, three demo videos. A bot closed the pull request three days later because the issue it fixed had no `help wanted` label. I opened a narrower issue. A bot answered that one too: *we are not committing to implementing this feature at this time.*

I do not blame the maintainers. A nine-year-old request is an answer in itself. I still carry the patch, and I have rebased it onto eleven upstream releases. But a second window was never the real problem.

## jj, and no GUI that felt native

Back in March, when the fork was a few days old, I kept seeing [Jujutsu](https://github.com/jj-vcs/jj) on X. I tried it and it fit the way I was already working:

- **A simple mental model.** The working copy is a change. There is no staging area and nothing to stash.
- **Stable change IDs.** A change keeps its ID when it is amended or rebased, so you can follow it through every rewrite.
- **Lightweight workspaces.** Each agent gets its own directory on the same repository.
- **Undo and conflicts built in.** Every operation can be undone, and a conflict is a state you can leave and come back to, not an emergency.

History that is meant to be rewritten is exactly what agents produce. I tried the GUIs that existed. None of them felt native on the Mac.

A few years ago that would have been the end of it. I would have added a thumbs-up to somebody's issue and waited, the way 205 people are still waiting for a second window. But this is the era of on-demand software. If the tool you want does not exist, you can just build it, for yourself, this week. So nine days after that first message about GitHub Desktop, I made the first commit of JayJay.

It is native because I am stubborn about that, and I have [written about why](/posts/native-obsession/). The short version: GitHub Desktop is Electron, and it is slow on large repositories. JayJay has a Rust core, SwiftUI on macOS, and GPUI on Linux and Windows.

## The real problem was the diff

The second half of that first message was about the diff. That was the real itch, and the diff is where you spend most of your time in any client, so it was the first thing I had to get right.

GitHub has two products for looking at code, the desktop app and the pull request page. I had trouble reviewing in both.

**The desktop app** is built for committing, not for reading. Every changed file lands in one list, already checked, which is how the app stages it for the next commit. When an agent has worked for an hour and nothing is committed yet, that list is the whole working copy, and nothing tells you what changed since you last looked. So I reviewed with an inverse trick: I unstaged a file to mean "I have read this one". A checkbox that means *staged* was standing in for *reviewed*, backwards. It is not intuitive at all.

**The pull request page** has the force push. It tells you someone "force-pushed from `abc123` to `def456`". Sometimes the compare link shows the two lines that changed. Sometimes the branch was rebased and it shows you everything, and you have no idea what is different from what you read yesterday. It is worse if you review commit by commit: the commits you worked through are replaced by new ones, and your progress is gone.

Both products assume the same thing: history only grows, and you review once. Neither is true any more. Agents rewrite. They amend, rebase, and regenerate, and the thing you reviewed an hour ago is gone.

## Then review became the point

JayJay started as a jj client, and it is a full one now: the change graph, rebase, squash and split, bookmarks, workspaces, conflicts, stacked pull requests. But review became its center, for a plain reason: Codex and Claude wrote almost all of it, and I had to review what they wrote.

Doing that every day changed what I think review is. Review used to mean reading a diff line by line. That does not scale to what agents produce, and it was never the point. An agent can write the code, write the tests, and review its own diff. The one thing it cannot supply is the fact that a person looked. What a change needs before it lands is **proof of human attention**.

Reading every line is one way to give that proof, and now the most expensive one. So my review moved in two directions. Up, from lines to the shape of the change. And sideways, to other proofs: a manual test, a screenshot, a recording, a UI test I watched pass. Much of that proof is made inside the coding session, in what I asked the agent to show me along the way, and it is not always in the pull request or the change itself.

Attention is the scarce thing, and a review tool should be built to spend it well. Three things follow from that.

**Do not spend attention on the trivial.** Before I look at a change, an agent triages it. It marks the files that need no human judgment as reviewed, and leaves the rest alone. Here is a real one from this week. The agent marked a prop renamed from `failed` to `failure` and the matching label. It left me the logic, the test, and the translated strings, which need a person who reads the language.

<figure>
<img src="/assets/images/jayjay-agent-review.webp" alt="JayJay reviewing a change: two files already marked reviewed by an agent, three left for a person" />
<figcaption>The Agent mark in JayJay: two files cleared before I started, three left for me.</figcaption>
</figure>

**Make attention cheap to spend.** Reviewed files hide. The tree view shows the shape of a change before any line of it. The next unreviewed file opens by itself, and everything has a keyboard shortcut. Marks work on hunks too, so you can mark part of a file as reviewed.

**Make attention survive rewrites.** This is the force-push problem again. Review marks belong to the content, so a rebase that changes nothing keeps them, and only what really changed comes back as unreviewed. You can review a stack one change at a time, publish it as one pull request per change, and keep the Viewed marks in sync with GitHub.

JayJay is more than one app now. It is a small suite, and every part exists to help you focus your attention and show the proof of it:

- **The app** is a full jj client with review built in.
- **The `jayjay` command and agent skill** are the agent's side. The agent reads the notes I leave on a line, fixes them, resolves them, and marks the trivial files before I start.
- **[JayJay Diff](https://diff.hewig.dev)** is the same review in a browser, for any public GitHub pull request, comparison, or commit. It needs no jj and no install: swap `github.com` for `diff.hewig.dev` in the URL.

## How I review now

I read less code than I used to, and I think I review better.

- **Intent first.** What was this change supposed to do, and does the description say so?
- **Then shape, not lines.** Is the folder structure right? Does each file have one responsibility? A change with the right shape and a wrong line is easy to fix. The reverse is not.
- **Then proof matched to the change.** I ask the agent to show me, not tell me. A UI change comes with a screenshot or a recording from the running app. A bug fix comes with the test that failed before and passes now. A performance change comes with a before and after measurement. Looking at a screenshot takes five seconds and tells me more than the fifty lines that produced it.
- **Then an independent review.** A fresh agent that did not write the change and does not share its context reads the diff as an adversary. I tell it to stop once the design is settled. Left alone it will find edge cases forever.

## Where it is

Software is on demand now, but only the first version. Writing the code was the easy part. Polish is what takes the time, because polish is attention too: using the app every day, noticing what feels wrong, and deciding what right looks like. No agent can do that part for me.

So JayJay is not polished, and I waited to announce it because of that. Then I understood that you never finish polishing.

The app is free and source-available, with the Rust libraries under Apache-2.0. It runs on macOS 26 and later, on Linux, and on Windows from the Microsoft Store. The user base is small: the releases have been downloaded about 5,700 times, and the people who stayed have been generous with bug reports.

If you do not use jj, start with [JayJay Diff](https://diff.hewig.dev) on a pull request you have to review anyway. If you do, try the app on a real working copy and tell me the first step that confused you.

[jayjay.hewig.dev](https://jayjay.hewig.dev)
