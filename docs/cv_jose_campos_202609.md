# Jose Guilherme Campos
## Senior Product Engineer | Building Digital Products for the AI Era — Full Stack & Mobile

Ribeirão Preto, SP — Brazil
+55 (16) 98802-0195 | zecampos2015@yahoo.com.br
linkedin.com/in/jose-campos-dev | github.com/zecampos | skyzeaudio.web.app

---

## SUMMARY

Product engineer with **9+ years of experience** turning ideas into shipped, revenue-ready products: from discovery and PRD to architecture, code, app store release, monetization, and go-to-market. I use **AI as a delivery multiplier** — agent-driven development (Claude Code), phased planning with verifiable success criteria, and automated tests as a safety net — which lets me take complete products to production on my own in weeks. Strong technical foundation in **TypeScript, Node.js/Bun, NestJS, React, Vue, and React Native**, native apps (**Swift/SwiftUI, Kotlin/Compose**), real-time audio in **C++**, and **RAG/LLM** systems. Currently at **PropHub**, a white-label multi-tenant prop trading platform, working on security, performance, and OMS architecture.

---

## PRODUCT & AI — HOW I DELIVER

- **End-to-end product ownership, solo:** PRD, technical spec, design system, development, app stores (Google Play/App Store), subscription billing, onboarding funnel with paywall, telemetry, website, branding, and launch content.
- **AI-native development:** agentic workflow with Claude Code and MCP, milestone/phase planning with verifiable plans, automated review and audits — e.g. SendMe: 20 planned phases, 107 executed plans, and ~1,000 commits in 3.5 months.
- **Speed with quality:** 6 products built in 2026 — SendMe, BassRig and KeysRig (Android and iOS), and the META Gestão website — all with automated tests and CI.
- **AI inside the product:** hybrid-search RAG in production, multi-LLM orchestration with fallback, neural models running on-device in real time (Neural Amp Modeler).
- **Automated go-to-market:** ASO, bilingual landing pages, Instagram publishing automation via Graph API, and code-generated promo videos.

---

## TECHNICAL SKILLS

**Languages:** TypeScript, JavaScript, Python, Go, Swift, Kotlin, C++, SQL
**Frontend:** React, Next.js, Vue 3, Nuxt, Angular, Astro, Tailwind CSS
**Mobile:** React Native, Expo, SwiftUI, Jetpack Compose, NDK
**Backend:** Node.js, Bun, Hono, NestJS, Express, Directus, FastAPI, Django, Ruby on Rails
**Databases:** PostgreSQL (incl. PostGIS, Aurora), MySQL, MongoDB, Redis, Firestore, Qdrant, SQLite
**ORMs:** Drizzle, TypeORM, Prisma, Sequelize, Mongoose, SQLAlchemy
**Audio & DSP:** AVAudioEngine, AUAudioUnit, Oboe, Accelerate/vDSP, partitioned convolution (IR), Neural Amp Modeler, sfizz, MIDI
**Architecture:** REST, GraphQL, Microservices, Multi-tenant, Clean Architecture, SOLID, DDD, Event-driven
**Messaging:** RabbitMQ, Kafka, WebSockets
**Cloud & DevOps:** AWS (ECS, Aurora/RDS, S3, CloudFront, KMS), GCP/Firebase, Azure, Oracle Cloud, Vercel, Docker, Docker Swarm
**CI/CD:** GitHub Actions, GitLab CI, Bitbucket Pipelines, EAS Build/Submit
**Security:** JWT, OAuth2, OWASP Top 10, RBAC, encryption key rotation, secrets management (Infisical), multi-tenant isolation
**Testing:** Jest, Vitest, Playwright, Maestro, k6 (load), Pytest, XCTest/Swift Testing, TDD
**Payments & Subscriptions:** Stripe, RevenueCat, StoreKit 2, Google Play Billing
**AI/ML:** Anthropic Claude, Google Gemini, Ollama, RAG, embeddings, MCP, AI-assisted development (Claude Code)

---

## PROFESSIONAL EXPERIENCE

### Senior Software Engineer — PropHub (prophub.tech)
**Jun 2026 – Present**

White-label multi-tenant prop trading platform (evaluation challenges, funded accounts, payouts, tournaments), with 15+ isolated client environments on AWS and a new perpetual-futures DEX aggregator product (Hyperliquid, AsterDEX, Polymarket).

- Implemented **master encryption key rotation** for the credential vault: current/previous key decryption fallback, re-encryption job, and a KMS operations runbook.
- Fixed cross-tenant and cross-account data leaks; built a **tenant-scoping helper** with an automated regression check in CI.
- Refactored the **OMS**, moving order placement/cancellation (Polymarket, Aster) onto a shared `VenueAdapter`, in phases, with pin tests written first.
- **Reduced RDS load**: batched the prop engine's daily evaluation, removed N+1 queries in analytics/observability, and added indexes.
- Built a **k6 load-testing harness** for the risk engine (smoke, stress, scenarios, and trigger latency) and a Directus latency report.
- Set up a **self-hosted Infisical secrets manager** on Oracle Cloud from scratch (compose, registry, CI deploy) and added per-tenant secret injection to the dev environment.
- Standardized PRs with semantic title/branch linting in CI, a contributing guide, and a PR template.
- **Stack:** TypeScript, Bun, Hono, Drizzle, PostgreSQL, Redis, Nuxt 4, Vue 3, Directus, AWS (ECS, Aurora, KMS), GitHub Actions, Vitest, k6.

### Freelance Backend Engineer — AI Document Chat
**2024 – 2025**

- Designed and delivered an **end-to-end REST API** (architecture → production) for AI-powered document chat.
- **RAG** system with hybrid search (dense + sparse vectors) on Qdrant; multiple LLM providers (Google Gemini, Ollama) with fallback.
- Deployed with Docker Swarm + Traefik + automated SSL; **99.9% uptime** in production.
- **Stack:** Python, FastAPI, PostgreSQL, Qdrant, Docker, Pytest, Alembic.

### Backend & Mobile Developer — Ília (Remote)
**Feb 2022 – Dec 2025** | *Main client: Banco do Brasil Seguros*

- Designed and built **Go and Node.js microservices** integrating WhatsApp via Meta API, enabling insurance sales through conversational channels.
- Led the evolution of Banco do Brasil's insurance mobile app in **React Native**, contributing to a measurable increase in new policy sales.
- Refactored critical components for performance and accessibility; set testing standards (Jest) for the squad.
- **Stack:** Node.js, Go, TypeScript, React Native, Jest, GitLab CI.

### Software Developer — Celler Bank (Fintech, Remote)
**Jul 2021 – Jan 2022**

- Built **Node.js APIs on Azure Functions** handling thousands of concurrent requests.
- Go services for partner integrations, reducing latency and error rates.
- Security layers against **MITM** attacks, preventing fraud losses.
- **Stack:** Node.js, Go, React Native, Azure Functions, MongoDB.

### Software Developer — WT9 (Remote)
**Jan 2021 – Jul 2021**

- Mobile (React Native) and web (React, Angular, Vue.js) MVPs; Node.js and Django APIs.

### Software Developer — Nama (Remote)
**Aug 2020 – Jan 2021**

- AIML chatbots for major retailers (**Americanas, Canon**) and a Ruby on Rails integration API.

### Software Developer — DuoDev (Remote)
**Dec 2018 – Jul 2021**

- React Native, React, Angular, and Vue.js apps and Node.js APIs for multiple early-stage clients (HealthTech, parking marketplace).

### Software Developer — PagPop (Fintech, Ribeirão Preto)
**Sep 2017 – Dec 2018**

- React Native app and React/Vue.js portals for the banking experience; MySQL as the transactional database.

---

## PERSONAL PROJECTS

### SkyzeAudio — Audio Apps Studio for Musicians
Brand, bilingual website, and 4 native apps (iOS + Android) — skyzeaudio.web.app
- **BassRig (Android — on Google Play, subscription):** bass pedalboard on your phone with ~6 ms latency — drive, compressor, EQ, NAM neural amps, IR cabinets, tuner, and synth. Kotlin/Compose + **Oboe C++ engine**, DSP shared with iOS.
- **BassRig (iOS/iPadOS):** SwiftUI + AVAudioEngine with C++ DSP kernels as AUAudioUnits; real-time-safe render thread (no allocations/locks, lock-free ring buffers), atomic crossfaded model/IR swaps, 1.75 ms CPU budget per buffer on A12. ~170 tests, including DSP performance tests.
- **KeysRig (iOS and Android):** stage keyboard with up to 6 layers per patch, splits, continuous pads, arpeggiator, FDN reverb with shimmer, MIDI learn, and SFZ/SF2 import (sfizz, TinySoundFont).
- Complete product: PRD, onboarding funnel with paywall and telemetry, RevenueCat + Firebase/Cloud Functions, store listings, website, automated Instagram, and launch videos. ~460 commits in 2.5 months.

### SendMe — Christian Missions Platform
Expo + Firebase + React (admin) — sendme.app.br · Android on Google Play
- App connecting missionaries with supporters and churches: pray, help (PIX/QR), and go (volunteering); moderation admin panel with TOTP MFA.
- pnpm monorepo (mobile, admin, Cloud Functions, shared Zod packages); 23 Cloud Functions, tested Firestore rules, sharded counters, and a billing kill switch.
- ~170 test files (Vitest, Firebase emulator, Playwright, Maestro); CI with GitHub Actions and EAS.

### GO MOVE At Home — Cardiovascular Rehabilitation (HealthTech)
NestJS + Expo + BLE + PostgreSQL — gomoveathome.com
- BLE heart-rate monitoring, voice alerts, iOS Live Activities, offline-first sync, and a clinic dashboard.

### Safeo — Urban Safety Index API (GovTech + GIS)
Python ETL + NestJS + PostGIS — safeo.com.br
- Multi-source ETL of public crime microdata and a radius-based safety score API over millions of records.

### RAO LOG — Logistics Automation
NestJS + React/Vite + Expo — raolog.com.br
- Replaced a manual WhatsApp workflow (~80 pickups/day) with automatic geofencing-based route assignment.

### EnglishCraft — IPA-Based English Learning
NestJS + React Native + Python — englishcraft.pro
- Cross-platform app with IPA pronunciation, flashcards, freemium subscriptions, and Python NLP microservices.

**Others:** CardioCow (cattle IoT/BLE — cardiocow.app), ArenaConnect (sports court PWA — arenaconnect.app), Ellie (dating app — ellieapp.com.br), META Gestão Industrial corporate website (Astro, freelance — metagestaoindustrial.com.br).

---

## EDUCATION

**Systems Analysis and Development** — Estácio, São Paulo (2016)
**Business Administration** — Centro Universitário Moura Lacerda, São Paulo (2008–2012)

---

## CERTIFICATIONS

FastAPI Development Course — Dunossauro (2024) · AI/ML Integration with Python APIs (2024) · Vector Database Implementation (Qdrant) · Docker & Container Orchestration

---

## LANGUAGES

Portuguese — Native · English — B2
