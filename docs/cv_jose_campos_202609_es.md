# Jose Guilherme Campos
## Product Engineer Sénior | Productos Digitales en la Era de la IA — Full Stack & Mobile

Ribeirão Preto, SP — Brasil
+55 (16) 98802-0195 | zecampos2015@yahoo.com.br
linkedin.com/in/jose-campos-dev | github.com/zecampos | skyzeaudio.web.app

---

## RESUMEN

Ingeniero de producto con **más de 9 años de experiencia** convirtiendo ideas en productos en producción: desde el discovery y el PRD hasta la arquitectura, el código, la publicación en tiendas, la monetización y el go-to-market. Uso la **IA como multiplicador de entrega** — desarrollo guiado por agentes (Claude Code), planificación por fases con criterios de verificación y pruebas automatizadas como red de seguridad — lo que me permite, por mi cuenta, llevar productos completos a producción en semanas. Sólida base técnica en **TypeScript, Node.js/Bun, NestJS, React, Vue y React Native**, apps nativas (**Swift/SwiftUI, Kotlin/Compose**), audio en tiempo real en **C++** y sistemas **RAG/LLM**. Actualmente en **PropHub**, plataforma white-label multi-tenant de prop trading, trabajando en seguridad, rendimiento y arquitectura del OMS.

---

## PRODUCTO E IA — CÓMO ENTREGO

- **Producto de punta a punta, en solitario:** PRD, especificación técnica, design system, desarrollo, tiendas (Google Play/App Store), suscripciones, embudo de onboarding con paywall, telemetría, sitio web, marca y contenido de lanzamiento.
- **Desarrollo nativo en IA:** flujo agéntico con Claude Code y MCP, planificación en milestones/fases con planes verificables, revisión y auditoría automatizadas — ej.: SendMe con 20 fases planificadas, 107 planes ejecutados y ~1.000 commits en 3,5 meses.
- **Velocidad con calidad:** 6 productos construidos en 2026 — SendMe, BassRig y KeysRig (Android e iOS) y el sitio de META Gestão — todos con pruebas automatizadas y CI.
- **IA dentro del producto:** RAG con búsqueda híbrida en producción, orquestación de múltiples LLMs con fallback, modelos neuronales ejecutándose on-device en tiempo real (Neural Amp Modeler).
- **Go-to-market automatizado:** ASO, landing pages bilingües, automatización de publicaciones en Instagram vía Graph API y videos promocionales generados por código.

---

## HABILIDADES TÉCNICAS

**Lenguajes:** TypeScript, JavaScript, Python, Go, Swift, Kotlin, C++, SQL
**Frontend:** React, Next.js, Vue 3, Nuxt, Angular, Astro, Tailwind CSS
**Mobile:** React Native, Expo, SwiftUI, Jetpack Compose, NDK
**Backend:** Node.js, Bun, Hono, NestJS, Express, Directus, FastAPI, Django, Ruby on Rails
**Bases de Datos:** PostgreSQL (incl. PostGIS, Aurora), MySQL, MongoDB, Redis, Firestore, Qdrant, SQLite
**ORMs:** Drizzle, TypeORM, Prisma, Sequelize, Mongoose, SQLAlchemy
**Audio y DSP:** AVAudioEngine, AUAudioUnit, Oboe, Accelerate/vDSP, convolución particionada (IR), Neural Amp Modeler, sfizz, MIDI
**Arquitectura:** REST, GraphQL, Microservicios, Multi-tenant, Clean Architecture, SOLID, DDD, Event-driven
**Mensajería:** RabbitMQ, Kafka, WebSockets
**Cloud y DevOps:** AWS (ECS, Aurora/RDS, S3, CloudFront, KMS), GCP/Firebase, Azure, Oracle Cloud, Vercel, Docker, Docker Swarm
**CI/CD:** GitHub Actions, GitLab CI, Bitbucket Pipelines, EAS Build/Submit
**Seguridad:** JWT, OAuth2, OWASP Top 10, RBAC, rotación de claves de cifrado, gestión de secretos (Infisical), aislamiento multi-tenant
**Pruebas:** Jest, Vitest, Playwright, Maestro, k6 (carga), Pytest, XCTest/Swift Testing, TDD
**Pagos y Suscripciones:** Stripe, RevenueCat, StoreKit 2, Google Play Billing
**IA/ML:** Anthropic Claude, Google Gemini, Ollama, RAG, embeddings, MCP, desarrollo asistido por IA (Claude Code)

---

## EXPERIENCIA PROFESIONAL

### Ingeniero de Software Sénior — PropHub (prophub.tech)
**Jun/2026 – Actualidad**

Plataforma white-label multi-tenant de prop trading (desafíos de evaluación, cuentas fondeadas, payouts, torneos), con más de 15 entornos aislados de clientes en AWS y un nuevo producto agregador de DEXs de futuros perpetuos (Hyperliquid, AsterDEX, Polymarket).

- Implementé la **rotación de la clave maestra de cifrado** del almacén de credenciales: fallback de descifrado clave actual/anterior, job de re-cifrado y runbook de operación con KMS.
- Corregí fugas de datos entre tenants y entre cuentas; creé un helper de **alcance por tenant** con verificación de regresión automatizada en CI.
- Refactoricé el **OMS** migrando el envío/cancelación de órdenes (Polymarket, Aster) a un `VenueAdapter` común, por fases, con pruebas de fijación escritas antes.
- **Reduje la carga en RDS**: evaluación diaria del prop engine por lotes, eliminación de N+1 en analytics/observabilidad y nuevos índices.
- Construí un harness de **pruebas de carga k6** para el risk engine (smoke, stress, escenarios y latencia de disparadores) y un informe de latencia de Directus.
- Levanté desde cero el **gestor de secretos Infisical self-hosted** en Oracle Cloud (compose, registry, deploy vía CI) e integré la inyección de secretos por tenant en el entorno de desarrollo.
- Estandaricé los PRs con lint semántico de títulos/branches en CI, guía de contribución y plantilla de PR.
- **Stack:** TypeScript, Bun, Hono, Drizzle, PostgreSQL, Redis, Nuxt 4, Vue 3, Directus, AWS (ECS, Aurora, KMS), GitHub Actions, Vitest, k6.

### Ingeniero Backend Freelance — AI Document Chat
**2024 – 2025**

- Diseñé y entregué una **API REST end-to-end** (arquitectura → producción) para chat con documentos mediante IA.
- Sistema **RAG** con búsqueda híbrida (vectores densos + dispersos) sobre Qdrant; múltiples proveedores de LLM (Google Gemini, Ollama) con fallback.
- Deploy con Docker Swarm + Traefik + SSL automatizado; **99,9% de uptime** en producción.
- **Stack:** Python, FastAPI, PostgreSQL, Qdrant, Docker, Pytest, Alembic.

### Desarrollador Backend y Mobile — Ília (Remoto)
**Feb/2022 – Dic/2025** | *Cliente principal: Banco do Brasil Seguros*

- Diseñé y desarrollé **microservicios en Go y Node.js** para integración con WhatsApp vía Meta API, habilitando la venta de seguros por canales conversacionales.
- Lideré la evolución de la app móvil de seguros del Banco do Brasil en **React Native**, contribuyendo a un aumento medible en la venta de nuevos seguros.
- Refactoricé componentes críticos para rendimiento y accesibilidad; definí estándares de pruebas (Jest) para el squad.
- **Stack:** Node.js, Go, TypeScript, React Native, Jest, GitLab CI.

### Desarrollador de Software — Celler Bank (Fintech, Remoto)
**Jul/2021 – Ene/2022**

- Construí **APIs Node.js sobre Azure Functions** soportando miles de solicitudes concurrentes.
- Servicios en Go para integración con socios, reduciendo latencia y tasa de errores.
- Capas de seguridad contra ataques **MITM**, previniendo pérdidas por fraude.
- **Stack:** Node.js, Go, React Native, Azure Functions, MongoDB.

### Desarrollador de Software — WT9 (Remoto)
**Ene/2021 – Jul/2021**

- MVPs en mobile (React Native) y web (React, Angular, Vue.js); APIs en Node.js y Django.

### Desarrollador de Software — Nama (Remoto)
**Ago/2020 – Ene/2021**

- Chatbots AIML para grandes minoristas (**Americanas, Canon**) y API en Ruby on Rails para integración.

### Desarrollador de Software — DuoDev (Remoto)
**Dic/2018 – Jul/2021**

- Apps React Native, React, Angular y Vue.js y APIs Node.js para múltiples clientes en etapa inicial (HealthTech, marketplace de estacionamientos).

### Desarrollador de Software — PagPop (Fintech, Ribeirão Preto)
**Sep/2017 – Dic/2018**

- App React Native y portales React/Vue.js para la experiencia bancaria; MySQL como base transaccional.

---

## PROYECTOS PROPIOS

### SkyzeAudio — Estudio de Apps de Audio para Músicos
Marca, sitio bilingüe y 4 apps nativas (iOS + Android) — skyzeaudio.web.app
- **BassRig (Android — en Google Play, suscripción):** pedalera de bajo en el celular con ~6 ms de latencia — drive, compresor, EQ, amplificadores neuronales NAM, gabinetes por IR, afinador y synth. Kotlin/Compose + **motor Oboe en C++**, DSP compartido con iOS.
- **BassRig (iOS/iPadOS):** SwiftUI + AVAudioEngine con kernels DSP en C++ como AUAudioUnits; render thread real-time-safe (sin asignaciones/locks, ring buffers lock-free), cambio de modelos/IR con crossfade atómico, presupuesto de CPU de 1,75 ms por buffer en A12. ~170 pruebas, incluyendo rendimiento de DSP.
- **KeysRig (iOS y Android):** teclado de escenario con hasta 6 capas por patch, splits, pads continuos, arpegiador, reverb FDN con shimmer, MIDI learn e importación de SFZ/SF2 (sfizz, TinySoundFont).
- Producto completo: PRD, embudo de onboarding con paywall y telemetría, RevenueCat + Firebase/Cloud Functions, fichas en tiendas, sitio web, Instagram automatizado y videos de lanzamiento. ~460 commits en 2,5 meses.

### SendMe — Plataforma de Misiones Cristianas
Expo + Firebase + React (admin) — sendme.app.br · Android en Google Play
- App que conecta misioneros con donantes e iglesias: orar, ayudar (PIX/QR) e ir (voluntariado); panel admin de moderación con MFA TOTP.
- Monorepo pnpm (mobile, admin, Cloud Functions, paquetes compartidos con Zod); 23 Cloud Functions, reglas de Firestore probadas, contadores fragmentados y kill switch de facturación.
- ~170 archivos de prueba (Vitest, emulador de Firebase, Playwright, Maestro); CI con GitHub Actions y EAS.

### GO MOVE At Home — Rehabilitación Cardiovascular (HealthTech)
NestJS + Expo + BLE + PostgreSQL — gomoveathome.com
- Monitoreo de frecuencia cardíaca vía BLE, alertas por voz, iOS Live Activities, sincronización offline-first y dashboard para clínicas.

### Safeo — API de Índice de Seguridad Urbana (GovTech + GIS)
Python ETL + NestJS + PostGIS — safeo.com.br
- ETL multifuente de microdatos públicos de criminalidad y API de puntuaciones de seguridad por radio sobre millones de registros.

### RAO LOG — Automatización Logística
NestJS + React/Vite + Expo — raolog.com.br
- Reemplazó un flujo manual por WhatsApp (~80 recolecciones/día) por asignación automática de rutas mediante geofencing.

### EnglishCraft — Enseñanza de Inglés con IPA
NestJS + React Native + Python — englishcraft.pro
- App multiplataforma con pronunciación en IPA, flashcards, suscripciones freemium y microservicios Python de NLP.

**Otros:** CardioCow (IoT/BLE bovino — cardiocow.app), ArenaConnect (PWA de canchas deportivas — arenaconnect.app), Ellie (app de citas — ellieapp.com.br), sitio institucional de META Gestão Industrial (Astro, freelance — metagestaoindustrial.com.br).

---

## EDUCACIÓN

**Análisis y Desarrollo de Sistemas** — Estácio, São Paulo (2016)
**Administración de Empresas** — Centro Universitário Moura Lacerda, São Paulo (2008–2012)

---

## CERTIFICACIONES

FastAPI Development Course — Dunossauro (2024) · AI/ML Integration with Python APIs (2024) · Implementación de Vector Database (Qdrant) · Docker & Container Orchestration

---

## IDIOMAS

Portugués — Nativo · Inglés — B2
