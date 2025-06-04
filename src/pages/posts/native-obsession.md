---
layout: '@/templates/BasePost.astro'
title: 'Native Obsession'
description: 'Exploring the philosophy of embracing native environments from hardware to cloud, crypto and AI.'
pubDate: 2025-06-04T00:00:00Z
imgSrc: '/assets/images/native-concept.jpg'
imgAlt: 'Native concept image'
---

> "Native" is more than a marketing term. When you treat the default environment as a first-class citizen, you gain in performance, user experience, and the speed of evolution. This post, co-created with ChatGPT, examines native from its roots to its manifestations in cloud, crypto, and AI.

# Etymology

- **Native** comes from the Latin *nativus*, meaning "innate" or "born locally".
- In 1964 IBM System/360 used **native mode** to describe running CPU instructions directly instead of emulation. Since then, "native" has been synonymous with performance and authenticity.

# Three Layers of "Native" in Computing

| Layer    | Criteria                                                                    | Value                     | Native ✅                                  | Non Native ❌                                    |
|---------|----------------------------------------------------------------------------|---------------------------|--------------------------------------------|--------------------------------------------------|
| CPU / Code | Compiled output is target ISA machine code; no interpreter or dynamic translation | Maximum performance and efficiency | C/C++ → x86‑64 ELF; Rust → ARM64 Mach‑O    | Java byte‑code (JVM); WebAssembly (needs runtime) |
| OS / API | Uses official platform ABI/SDK; zero bridging for system calls | Full privileges and best power usage | iOS Swift/Objective‑C; Windows UWP         | Electron (Node ↔ C++ bridge); React Native JS side |
| UI / UX  | Controls, interactions, and themes follow platform HIG | Familiarity and full accessibility | SwiftUI/AppKit controls                      | Flutter custom widgets; WebView wrapping a webpage |

## Common Terms and Their Contention

| Term                      | Usual Meaning            | Controversy |
|--------------------------|-------------------------|-------------|
| **native code**          | Machine code             | Does JIT output count? It still depends on the VM lifecycle. |
| **native app**           | Official SDK + native UI | Electron AOT to machine code performs fine, but the UI is not native. |
| **native interface (JNI/NDK)** | Bridge between managed and native code | Only partly native; still affected by GC/VM. |
| **near-native / class-native** | Performance close to native | Marketing buzzword without a clear standard. |

## Cloud Native: Making the Cloud the Default Runtime

| Level        | Criteria                                             | Native ✅                                            | Non-native ❌ |
|-------------|------------------------------------------------------|----------------------------------------------------------------|-------------------|
| Application Architecture | Microservices or functions; each service scales and fails independently | Netflix microservices; Shopify decomposed its Rails monolith to run on Kubernetes | Monolithic Spring Boot WAR directly on EC2 |
| Runtime Unit | Containers or FaaS; start in seconds with declarative scheduling | AWS Lambda; Knative services; Karpenter auto‑scaling containers | Fixed-size VMs; manual Ansible setup |
| Infrastructure | Immutable images + IaC; GitOps can rebuild in one click | Terraform + ArgoCD; Pulumi as code | Console click‑ops; SSH changes to config files |
| Delivery & Ops | CI/CD triggers deployment; observable feedback loop | GitHub Actions → Argo Rollouts; Prometheus + Grafana alerts | Weekend maintenance windows; `ssh tail` logs |
| Resilience & Security | Horizontal scaling + zero-trust policies | GKE Autopilot + OPA; Istio mTLS | Fixed capacity + firewall allowlists |

If any link in the chain still relies on manual steps or fixed resources, it is **cloud-enabled** rather than **cloud-native**.

## Crypto Native: On-chain as Home

| Dimension    | Criteria                                             | Native ✅                                           | Non-native ❌ |
|--------------|------------------------------------------------------|-----------------------------------------------------------|-------------------|
| Asset Native | Value is denominated in on-chain tokens and settles on-chain | ETH, DAI, Curve LP tokens | RWA: tokenized stocks or T-Bills still rely on custody and legal clearing |
| Logic Native | Smart contracts transparently enforce business rules | Uniswap v4; Aave V3; MakerDAO | Binance server matching with batch settlements on chain |
| Governance Native | DAO votes on-chain to adjust parameters or upgrade contracts | ENS DAO, Nouns DAO | Foundation votes offline with on-chain execution merely recorded |


## AI Native: Model-Driven Closed-Loop Systems

| Dimension      | Criteria                                                       | Native ✅                                           | Non-native ❌ |
|---------------|---------------------------------------------------------------|-----------------------------------------------------------|-------------------|
| Data Loop     | Data → training → deployment cycle embedded in the product; model continuously improves | Rewind Pendant personal context model; TikTok immediate feedback recommendation | Exporting logs once a year for third-party offline training |
| AI-first Experience | Interaction centers on conversation, generation, or automatic suggestions | ChatGPT; GitHub Copilot; Perplexity AI | Office/Notion with an "AI summary" button slapped on |
| MLOps Lifecycle | Automated monitoring, A/B testing, canary releases, drift detection | Canva Magic Design with full pipeline observability; Uber Michelangelo | Manually uploading `.pt` files to S3 then restarting services |

# Why the Fascination with Native?

- **Long-term view**: Native architectures maximize underlying capabilities with fewer layers of glue, leading to lower run costs and a higher ceiling for evolution.
- **Mental simplicity**: The closer you are to the default, the fewer abstractions you maintain, lightening the cognitive load for teams.
- **A life metaphor**: Technology choices are like life plans—rather than patching and compromising, deeply couple with your environment and embrace the native habitat from the start.

Native obsession does not reject cross-platform or bridging solutions. It simply reminds us to ask, whenever we seek long-term compounding advantages: **Can we make it native?**
