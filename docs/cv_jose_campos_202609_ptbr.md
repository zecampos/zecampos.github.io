# Jose Guilherme Campos
## Product Engineer Sênior | Produtos Digitais na Era da IA — Full Stack & Mobile

Ribeirão Preto, SP — Brasil
+55 (16) 98802-0195 | zecampos2015@yahoo.com.br
linkedin.com/in/jose-campos-dev | github.com/zecampos | skyzeaudio.web.app

---

## RESUMO

Engenheiro de produto com **mais de 9 anos de experiência** e foco em transformar ideia em produto rodando: da descoberta e do PRD até arquitetura, código, publicação nas lojas, monetização e go-to-market. Uso **IA como multiplicador de entrega** — desenvolvimento orientado por agentes (Claude Code), planejamento por fases com critérios de verificação e testes automatizados como rede de segurança — o que me permite, sozinho, levar produtos completos ao ar em semanas. Base técnica sólida em **TypeScript, Node.js/Bun, NestJS, React, Vue e React Native**, apps nativos (**Swift/SwiftUI, Kotlin/Compose**), áudio em tempo real em **C++** e sistemas **RAG/LLM**. Atualmente na **PropHub**, plataforma white-label multi-tenant de prop trading, atuando em segurança, performance e arquitetura de OMS.

---

## PRODUTO & IA — COMO ENTREGO

- **Produto de ponta a ponta, sozinho:** PRD, especificação técnica, design system, desenvolvimento, lojas (Google Play/App Store), billing por assinatura, funil de onboarding com paywall, telemetria, site, marca e conteúdo de lançamento.
- **Desenvolvimento nativo em IA:** fluxo agêntico com Claude Code e MCP, planejamento em milestones/fases com planos verificáveis, revisão e auditoria automatizadas — ex.: SendMe com 20 fases planejadas, 107 planos executados e ~1.000 commits em 3,5 meses.
- **Velocidade com qualidade:** 6 produtos construídos em 2026 — SendMe, BassRig e KeysRig (Android e iOS) e o site da META Gestão — todos com testes automatizados e CI.
- **IA dentro do produto:** RAG com busca híbrida em produção, orquestração de múltiplos LLMs com fallback, modelos neurais rodando on-device em tempo real (Neural Amp Modeler).
- **Go-to-market automatizado:** ASO, landing pages bilíngues, automação de publicação no Instagram via Graph API e vídeos promocionais gerados por código.

---

## HABILIDADES TÉCNICAS

**Linguagens:** TypeScript, JavaScript, Python, Go, Swift, Kotlin, C++, SQL
**Frontend:** React, Next.js, Vue 3, Nuxt, Angular, Astro, Tailwind CSS
**Mobile:** React Native, Expo, SwiftUI, Jetpack Compose, NDK
**Backend:** Node.js, Bun, Hono, NestJS, Express, Directus, FastAPI, Django, Ruby on Rails
**Bancos de Dados:** PostgreSQL (incl. PostGIS, Aurora), MySQL, MongoDB, Redis, Firestore, Qdrant, SQLite
**ORMs:** Drizzle, TypeORM, Prisma, Sequelize, Mongoose, SQLAlchemy
**Áudio & DSP:** AVAudioEngine, AUAudioUnit, Oboe, Accelerate/vDSP, convolução particionada (IR), Neural Amp Modeler, sfizz, MIDI
**Arquitetura:** REST, GraphQL, Microsserviços, Multi-tenant, Clean Architecture, SOLID, DDD, Event-driven
**Mensageria:** RabbitMQ, Kafka, WebSockets
**Cloud & DevOps:** AWS (ECS, Aurora/RDS, S3, CloudFront, KMS), GCP/Firebase, Azure, Oracle Cloud, Vercel, Docker, Docker Swarm
**CI/CD:** GitHub Actions, GitLab CI, Bitbucket Pipelines, EAS Build/Submit
**Segurança:** JWT, OAuth2, OWASP Top 10, RBAC, rotação de chaves de criptografia, gestão de segredos (Infisical), isolamento multi-tenant
**Testes:** Jest, Vitest, Playwright, Maestro, k6 (carga), Pytest, XCTest/Swift Testing, TDD
**Pagamentos & Assinaturas:** Stripe, RevenueCat, StoreKit 2, Google Play Billing
**IA/ML:** Anthropic Claude, Google Gemini, Ollama, RAG, embeddings, MCP, desenvolvimento assistido por IA (Claude Code)

---

## EXPERIÊNCIA PROFISSIONAL

### Engenheiro de Software Sênior — PropHub (prophub.tech)
**Jun/2026 – Atual**

Plataforma white-label multi-tenant de prop trading (desafios de avaliação, contas financiadas, payouts, torneios), com 15+ ambientes isolados de clientes na AWS e um novo produto agregador de DEXs de futuros perpétuos (Hyperliquid, AsterDEX, Polymarket).

- Implementei **rotação da chave mestra de criptografia** do cofre de credenciais: fallback de decriptação chave atual/anterior, job de re-criptografia e runbook de operação com KMS.
- Corrigi vazamentos de dados entre tenants e entre contas; criei helper de **escopo por tenant** com checagem de regressão automatizada no CI.
- Refatorei o **OMS** migrando envio/cancelamento de ordens (Polymarket, Aster) para um `VenueAdapter` comum, em fases, com testes de fixação escritos antes.
- **Reduzi carga no RDS**: avaliação diária do prop engine em lote, eliminação de N+1 em analytics/observabilidade e novos índices.
- Construí harness de **testes de carga k6** para o risk engine (smoke, stress, cenários e latência de gatilhos) e relatório de latência do Directus.
- Subi do zero o **gerenciador de segredos Infisical self-hosted** na Oracle Cloud (compose, registry, deploy via CI) e integrei injeção de segredos por tenant no ambiente de dev.
- Padronizei PRs com lint semântico de títulos/branches no CI, guia de contribuição e template de PR.
- **Stack:** TypeScript, Bun, Hono, Drizzle, PostgreSQL, Redis, Nuxt 4, Vue 3, Directus, AWS (ECS, Aurora, KMS), GitHub Actions, Vitest, k6.

### Engenheiro Backend Freelancer — AI Document Chat
**2024 – 2025**

- Projetei e entreguei **API REST end-to-end** (arquitetura → produção) para chat com documentos via IA.
- Sistema **RAG** com busca híbrida (vetores densos + esparsos) sobre Qdrant; múltiplos provedores LLM (Google Gemini, Ollama) com fallback.
- Deploy com Docker Swarm + Traefik + SSL automatizado; **99,9% de uptime** em produção.
- **Stack:** Python, FastAPI, PostgreSQL, Qdrant, Docker, Pytest, Alembic.

### Desenvolvedor Backend & Mobile — Ília (Remoto)
**Fev/2022 – Dez/2025** | *Cliente principal: Banco do Brasil Seguros*

- Projetei e desenvolvi **microsserviços em Go e Node.js** para integração com WhatsApp via Meta API, habilitando vendas de seguros por canais conversacionais.
- Liderei a evolução do app mobile de seguros do Banco do Brasil em **React Native**, contribuindo para aumento mensurável na venda de novos seguros.
- Refatorei componentes críticos para performance e acessibilidade; defini padrões de testes (Jest) para a squad.
- **Stack:** Node.js, Go, TypeScript, React Native, Jest, GitLab CI.

### Desenvolvedor de Software — Celler Bank (Fintech, Remoto)
**Jul/2021 – Jan/2022**

- Construí **APIs Node.js sobre Azure Functions** suportando milhares de requisições concorrentes.
- Serviços em Go para integração com parceiros, reduzindo latência e taxa de erros.
- Camadas de segurança contra ataques **MITM**, prevenindo perdas por fraude.
- **Stack:** Node.js, Go, React Native, Azure Functions, MongoDB.

### Desenvolvedor de Software — WT9 (Remoto)
**Jan/2021 – Jul/2021**

- MVPs em mobile (React Native) e web (React, Angular, Vue.js); APIs em Node.js e Django.

### Desenvolvedor de Software — Nama (Remoto)
**Ago/2020 – Jan/2021**

- Chatbots AIML para grandes varejistas (**Americanas, Canon**) e API em Ruby on Rails para integração.

### Desenvolvedor de Software — DuoDev (Remoto)
**Dez/2018 – Jul/2021**

- Apps React Native, React, Angular e Vue.js e APIs Node.js para múltiplos clientes em fase inicial (HealthTech, marketplace de estacionamentos).

### Desenvolvedor de Software — PagPop (Fintech, Ribeirão Preto)
**Set/2017 – Dez/2018**

- App React Native e portais React/Vue.js para experiência bancária; MySQL como base transacional.

---

## PROJETOS AUTORAIS

### SkyzeAudio — Estúdio de Apps de Áudio para Músicos
Marca, site bilíngue e 4 apps nativos (iOS + Android) — skyzeaudio.web.app
- **BassRig (Android — no Google Play, assinatura):** pedalboard de baixo no celular com ~6 ms de latência — drive, compressor, EQ, amps neurais NAM, cabinets por IR, afinador e synth. Kotlin/Compose + engine **Oboe em C++**, DSP compartilhado com iOS.
- **BassRig (iOS/iPadOS):** SwiftUI + AVAudioEngine com kernels DSP em C++ como AUAudioUnits; render thread real-time-safe (sem alocação/locks, ring buffers lock-free), troca de modelos/IR com crossfade atômico, orçamento de CPU de 1,75 ms por buffer em A12. ~170 testes, incluindo performance de DSP.
- **KeysRig (iOS e Android):** teclado de palco com até 6 layers por patch, splits, pads contínuos, arpejador, reverb FDN com shimmer, MIDI learn e importação de SFZ/SF2 (sfizz, TinySoundFont).
- Produto completo: PRD, funil de onboarding com paywall e telemetria, RevenueCat + Firebase/Cloud Functions, listagem nas lojas, site, Instagram automatizado e vídeos de lançamento. ~460 commits em 2,5 meses.

### SendMe — Plataforma de Missões Cristãs
Expo + Firebase + React (admin) — sendme.app.br · Android no Google Play
- App que conecta missionários a apoiadores e igrejas: orar, ajudar (PIX/QR) e ir (voluntariado); painel admin de moderação com MFA TOTP.
- Monorepo pnpm (mobile, admin, Cloud Functions, pacotes compartilhados com Zod); 23 Cloud Functions, regras Firestore testadas, contadores fragmentados e kill switch de billing.
- ~170 arquivos de testes (Vitest, emulador Firebase, Playwright, Maestro); CI com GitHub Actions e EAS.

### GO MOVE At Home — Reabilitação Cardiovascular (HealthTech)
NestJS + Expo + BLE + PostgreSQL — gomoveathome.com
- Monitoramento de frequência cardíaca via BLE, alertas por voz, iOS Live Activities, sincronização offline-first e dashboard para clínicas.

### Safeo — API de Índice de Segurança Urbana (GovTech + GIS)
Python ETL + NestJS + PostGIS — safeo.com.br
- ETL multi-fonte de microdados públicos de criminalidade e API de scores de segurança por raio sobre milhões de registros.

### RAO LOG — Automação Logística
NestJS + React/Vite + Expo — raolog.com.br
- Substituiu workflow manual via WhatsApp (~80 coletas/dia) por atribuição automática de rotas por geofencing.

### EnglishCraft — Ensino de Inglês com IPA
NestJS + React Native + Python — englishcraft.pro
- App cross-platform com pronúncia em IPA, flashcards, assinaturas freemium e microsserviços Python de NLP.

**Outros:** CardioCow (IoT/BLE bovino — cardiocow.app), ArenaConnect (PWA de quadras — arenaconnect.app), Ellie (app de relacionamento — ellieapp.com.br), site institucional META Gestão Industrial (Astro, freelance — metagestaoindustrial.com.br).

---

## EDUCAÇÃO

**Análise e Desenvolvimento de Sistemas** — Estácio, São Paulo (2016)
**Administração de Empresas** — Centro Universitário Moura Lacerda, São Paulo (2008–2012)

---

## CERTIFICAÇÕES

FastAPI Development Course — Dunossauro (2024) · AI/ML Integration with Python APIs (2024) · Implementação de Vector Database (Qdrant) · Docker & Container Orchestration

---

## IDIOMAS

Português — Nativo · Inglês — B2
