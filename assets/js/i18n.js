const translations = {
  pt: {
    // Nav
    'nav.home': 'Home',
    'nav.services': 'Serviços',
    'nav.works': 'Projetos',
    'nav.experience': 'Experiência',
    'nav.contact': 'Contato',
    'nav.cta': 'Fale Comigo',

    // Hero
    'hero.phrases': [
      'Eu sou Jose Guilherme',
      'Product Engineer',
      'Construo produtos com IA',
      'Da ideia às lojas'
    ],
    'hero.description': 'Engenheiro de produto com mais de 9 anos de experiência. Levo ideias do PRD à produção — arquitetura, código, lojas, monetização e lançamento — usando IA como multiplicador de entrega.',
    'hero.cvHref': 'assets/cv_jose_campos.pdf',
    'hero.downloadCv': 'Download CV',
    'hero.myProjects': 'Meus Projetos',

    // Stats
    'stats.experience': 'Anos de<br>Experiência',
    'stats.projects': 'Projetos<br>Entregues',
    'stats.companies': 'Empresas<br>Atendidas',
    'stats.personal': 'Apps<br>Autorais',
    'stats.products2026': 'Produtos<br>em 2026',

    // Services
    'services.title': 'Como <span class="text-gradient">Entrego</span>',
    'services.subtitle': 'Do problema ao produto no ar — com IA acelerando cada etapa.',
    'services.product.title': 'Produto de Ponta a Ponta',
    'services.product.text': 'PRD, design, desenvolvimento, publicação nas lojas, assinaturas, funil de onboarding e lançamento. Um único responsável do zero ao faturamento.',
    'services.ai.title': 'Desenvolvimento com IA',
    'services.ai.text': 'Fluxo agêntico com Claude Code e MCP, planejamento por fases com critérios verificáveis e testes automatizados: velocidade de time com qualidade de produção.',
    'services.mobile.title': 'Apps Mobile & Nativos',
    'services.mobile.text': 'React Native/Expo, SwiftUI e Kotlin/Compose. Áudio em tempo real em C++, BLE, offline-first e publicação nas lojas.',
    'services.api.title': 'APIs, IA & Cloud',
    'services.api.text': 'Node.js/Bun, NestJS, FastAPI e Go. RAG e LLMs, arquitetura multi-tenant, segurança e deploy em AWS, GCP e Firebase.',

    // Works
    'works.title': 'Projetos <span class="text-gradient">Recentes</span>',
    'works.subtitle': 'Produtos próprios e projetos entregues para grandes empresas.',
    'works.all': 'Todos',
    'works.fullstack': 'Full Stack',
    'works.visit': 'Visitar &rarr;',
    'works.personal.title': 'Projetos Autorais',
    'works.personal.subtitle': 'Produtos próprios, do zero ao deploy — concepção, arquitetura e código.',
    'works.corporate.title': 'Experiência Corporativa',
    'works.corporate.subtitle': 'Projetos entregues para grandes empresas, fintechs e startups.',
    'works.gomove.text': 'Plataforma de monitoramento cardíaco para reabilitação cardiovascular domiciliar. BLE em background, alertas por voz, Live Activities iOS, modo offline e dashboard para clínicas.',
    'works.cardiocow.text': 'Sistema de monitoramento fisiológico de bovinos com sensor BLE XOSS. Captura de batimentos, geolocalização e dados climáticos (INMET) com sincronização offline-first.',
    'works.safeo.text': 'Índice de Segurança Urbana (0–10) por região do Brasil. Pipeline ETL de microdados públicos (ISP-RJ, SSP-SP, SINESP), geocodificação com PostGIS e API REST com score por raio.',
    'works.raolog.text': 'Plataforma de automação logística para empresa de coletas (~80/dia). Atribuição automática de rotas por geofencing, app do motorista, dashboard admin e formulário público para clientes.',
    'works.arenaconnect.text': 'Marketplace PWA para reserva de quadras esportivas e matchmaking de atletas amadores. Busca geolocalizada, vagas abertas em tempo real e dashboard financeiro para gestores de arena.',
    'works.ellie.text': 'App de relacionamento para jovens cristãos. Discovery por localização e interesses, match-and-chat e moderação de fotos com Google Cloud Vision API. Foco em segurança (OWASP Top 10).',
    'works.bb.text': 'App de seguros com React Native para o Banco do Brasil. Aumento significativo na venda de novos seguros e integração com WhatsApp via microsserviços em Go e Node.js.',
    'works.englishcraft.text': 'Plataforma de aprendizado de inglês com IPA, flashcards interativos e sistema freemium. App cross-platform + API escalável.',
    'works.aichat.text': 'API de chat com documentos usando IA. Upload de PDF/DOCX/áudio, busca semântica com RAG e integração com Google Gemini e Ollama.',
    'works.celler.text': 'App bancário com React Native para fintech. APIs com Azure Functions e camadas de segurança contra ataques MITM.',
    'works.chatbots.title': 'Chatbots Corporativos',
    'works.chatbots.text': 'Chatbots para grandes empresas como Americanas e Canon. Otimização de atendimento ao cliente com integração via Ruby on Rails.',
    'works.pagpop.text': 'App e portal web para fintech. Acesso a extratos e transações bancárias via web com React e Vue.js + app React Native.',
    'works.bassrig.text': 'Pedalboard de baixo no celular com ~6 ms de latência: drive, compressor, EQ, amps neurais NAM, cabinets por IR e synth. Engine de áudio em C++ compartilhada entre Android (Oboe) e iOS (AVAudioEngine). Assinatura no Google Play.',
    'works.keysrig.text': 'Teclado de palco para iPad e Android: até 6 layers por patch, splits, pads contínuos, arpejador, reverb com shimmer, MIDI learn e importação de instrumentos SFZ/SF2.',
    'works.sendme.text': 'App que conecta missionários a apoiadores e igrejas: orar, ajudar via PIX e se voluntariar. Monorepo com app, painel admin e 23 Cloud Functions; ~170 arquivos de teste e CI.',
    'works.prophub.text': 'Plataforma white-label multi-tenant de prop trading. Rotação de chaves de criptografia, isolamento entre tenants, refactor do OMS, redução de carga no RDS e testes de carga k6.',
    'works.meta.text': 'Site institucional para consultoria industrial: design system, layout desktop/mobile, blog em Markdown, SEO/AEO e deploy na Vercel.',
    'works.meta.tag': 'Web · Freelance',

    // Experience
    'experience.title': 'Minha <span class="text-gradient">Experiência</span>',
    'experience.freelance.date': '2024 - 2025',
    'experience.prophub.date': '06/2026 - Presente',
    'experience.ilia.company': 'Ília, Brasília - Remoto',
    'experience.celler.company': 'Celler, São Paulo - Remoto',
    'experience.wt9.company': 'WT9, São Paulo - Remoto',
    'experience.nama.company': 'Nama, São Paulo - Remoto',
    'experience.duodev.company': 'DuoDev, São Paulo - Remoto',

    // Education
    'education.title': 'Minha <span class="text-gradient">Formação</span>',
    'education.ads': 'Análise e Desenvolvimento de Sistemas',
    'education.admin': 'Administração de Empresas',
    'education.certification': 'Certificação',

    // Skills
    'skills.title': 'Minhas <span class="text-gradient">Skills</span>',
    'skills.subtitle': 'Tecnologias e ferramentas que utilizo no dia a dia.',

    // Contact
    'contact.title': 'Vamos <span class="text-gradient">Trabalhar Juntos?</span>',
    'contact.subtitle': 'Entre em contato e vamos conversar sobre seu projeto.',
    'contact.location': 'Localização',
    'contact.form.name': 'Seu nome',
    'contact.form.email': 'Seu email',
    'contact.form.subject': 'Assunto',
    'contact.form.message': 'Sua mensagem',
    'contact.form.send': 'Enviar Mensagem',

    // Footer
    'footer.copy': '&copy; 2026 Jose Guilherme Campos. Todos os direitos reservados.',
  },

  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.works': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.cta': 'Hire Me',

    'hero.phrases': [
      "I'm Jose Guilherme",
      'Product Engineer',
      'I build products with AI',
      'From idea to app stores'
    ],
    'hero.description': 'Product engineer with 9+ years of experience. I take ideas from PRD to production — architecture, code, app stores, monetization, and launch — using AI as a delivery multiplier.',
    'hero.cvHref': 'assets/cv_jose_campos_en.pdf',
    'hero.downloadCv': 'Download CV',
    'hero.myProjects': 'My Projects',

    'stats.experience': 'Years of<br>Experience',
    'stats.projects': 'Projects<br>Delivered',
    'stats.companies': 'Companies<br>Served',
    'stats.personal': 'Authored<br>Apps',
    'stats.products2026': 'Products<br>in 2026',

    'services.title': 'How I <span class="text-gradient">Deliver</span>',
    'services.subtitle': 'From problem to shipped product — with AI accelerating every step.',
    'services.product.title': 'End-to-End Product',
    'services.product.text': 'PRD, design, development, app store release, subscriptions, onboarding funnel, and launch. One owner from zero to revenue.',
    'services.ai.title': 'AI-Native Development',
    'services.ai.text': 'Agentic workflow with Claude Code and MCP, phased planning with verifiable criteria, and automated tests: team-level speed with production quality.',
    'services.mobile.title': 'Mobile & Native Apps',
    'services.mobile.text': 'React Native/Expo, SwiftUI, and Kotlin/Compose. Real-time audio in C++, BLE, offline-first, and app store publishing.',
    'services.api.title': 'APIs, AI & Cloud',
    'services.api.text': 'Node.js/Bun, NestJS, FastAPI, and Go. RAG and LLMs, multi-tenant architecture, security, and deploys on AWS, GCP, and Firebase.',

    'works.title': 'Recent <span class="text-gradient">Projects</span>',
    'works.subtitle': 'My own products and projects delivered for major companies.',
    'works.all': 'All',
    'works.fullstack': 'Full Stack',
    'works.visit': 'Visit &rarr;',
    'works.personal.title': 'Authored Projects',
    'works.personal.subtitle': 'My own products, from zero to deploy — concept, architecture and code.',
    'works.corporate.title': 'Corporate Experience',
    'works.corporate.subtitle': 'Projects delivered for large companies, fintechs and startups.',
    'works.gomove.text': 'Heart-rate monitoring platform for at-home cardiovascular rehabilitation. Background BLE, voice alerts, iOS Live Activities, offline mode and a clinic dashboard.',
    'works.cardiocow.text': 'Bovine physiological monitoring system using XOSS BLE sensor. Heart-rate capture, geolocation and weather data (INMET) with offline-first sync.',
    'works.safeo.text': 'Urban Safety Index (0–10) per region in Brazil. ETL pipeline of public microdata (ISP-RJ, SSP-SP, SINESP), PostGIS geocoding and REST API with radius-based score.',
    'works.raolog.text': 'Logistics automation platform for a package-pickup company (~80/day). Geofence-based route assignment, driver app, admin dashboard and public form for customers.',
    'works.arenaconnect.text': 'PWA marketplace for sports court booking and amateur athlete matchmaking. Geolocated search, real-time open slots and a financial dashboard for arena managers.',
    'works.ellie.text': 'Dating app for young Christian users. Location and interest-based discovery, match-and-chat and photo moderation with Google Cloud Vision API. Security-first (OWASP Top 10).',
    'works.bb.text': 'Insurance app with React Native for Banco do Brasil. Significant increase in new insurance sales and WhatsApp integration via microservices in Go and Node.js.',
    'works.englishcraft.text': 'English learning platform with IPA, interactive flashcards, and freemium system. Cross-platform app + scalable API.',
    'works.aichat.text': 'AI-powered document chat API. PDF/DOCX/audio upload, semantic search with RAG, and Google Gemini & Ollama integration.',
    'works.celler.text': 'Banking app with React Native for fintech. APIs with Azure Functions and MITM attack security layers.',
    'works.chatbots.title': 'Corporate Chatbots',
    'works.chatbots.text': 'Chatbots for large companies like Americanas and Canon. Customer service optimization with Ruby on Rails integration.',
    'works.pagpop.text': 'Fintech app and web portal. Bank statements and transactions via web with React and Vue.js + React Native app.',
    'works.bassrig.text': 'Bass pedalboard on your phone with ~6 ms latency: drive, compressor, EQ, NAM neural amps, IR cabinets, and synth. C++ audio engine shared between Android (Oboe) and iOS (AVAudioEngine). Subscription on Google Play.',
    'works.keysrig.text': 'Stage keyboard for iPad and Android: up to 6 layers per patch, splits, continuous pads, arpeggiator, shimmer reverb, MIDI learn, and SFZ/SF2 instrument import.',
    'works.sendme.text': 'App connecting missionaries with supporters and churches: pray, give via PIX, and volunteer. Monorepo with app, admin panel, and 23 Cloud Functions; ~170 test files and CI.',
    'works.prophub.text': 'White-label multi-tenant prop trading platform. Encryption key rotation, tenant isolation, OMS refactor, RDS load reduction, and k6 load testing.',
    'works.meta.text': 'Corporate website for an industrial consultancy: design system, desktop/mobile layouts, Markdown blog, SEO/AEO, and Vercel deploy.',
    'works.meta.tag': 'Web · Freelance',

    'experience.title': 'My <span class="text-gradient">Experience</span>',
    'experience.freelance.date': '2024 - 2025',
    'experience.prophub.date': '06/2026 - Present',
    'experience.ilia.company': 'Ília, Brasília - Remote',
    'experience.celler.company': 'Celler, São Paulo - Remote',
    'experience.wt9.company': 'WT9, São Paulo - Remote',
    'experience.nama.company': 'Nama, São Paulo - Remote',
    'experience.duodev.company': 'DuoDev, São Paulo - Remote',

    'education.title': 'My <span class="text-gradient">Education</span>',
    'education.ads': 'Systems Analysis and Development',
    'education.admin': 'Business Administration',
    'education.certification': 'Certification',

    'skills.title': 'My <span class="text-gradient">Skills</span>',
    'skills.subtitle': 'Technologies and tools I use on a daily basis.',

    'contact.title': 'Let\'s <span class="text-gradient">Work Together?</span>',
    'contact.subtitle': 'Get in touch and let\'s talk about your project.',
    'contact.location': 'Location',
    'contact.form.name': 'Your name',
    'contact.form.email': 'Your email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your message',
    'contact.form.send': 'Send Message',

    'footer.copy': '&copy; 2026 Jose Guilherme Campos. All rights reserved.',
  },

  es: {
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.works': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'nav.cta': 'Contáctame',

    'hero.phrases': [
      'Soy Jose Guilherme',
      'Product Engineer',
      'Construyo productos con IA',
      'De la idea a las tiendas'
    ],
    'hero.description': 'Ingeniero de producto con más de 9 años de experiencia. Llevo ideas del PRD a producción — arquitectura, código, tiendas, monetización y lanzamiento — usando la IA como multiplicador de entrega.',
    'hero.cvHref': 'assets/cv_jose_campos_es.pdf',
    'hero.downloadCv': 'Descargar CV',
    'hero.myProjects': 'Mis Proyectos',

    'stats.experience': 'Años de<br>Experiencia',
    'stats.projects': 'Proyectos<br>Entregados',
    'stats.companies': 'Empresas<br>Atendidas',
    'stats.personal': 'Apps<br>Propias',
    'stats.products2026': 'Productos<br>en 2026',

    'services.title': 'Cómo <span class="text-gradient">Entrego</span>',
    'services.subtitle': 'Del problema al producto en producción — con IA acelerando cada etapa.',
    'services.product.title': 'Producto de Punta a Punta',
    'services.product.text': 'PRD, diseño, desarrollo, publicación en tiendas, suscripciones, embudo de onboarding y lanzamiento. Un solo responsable de cero a la facturación.',
    'services.ai.title': 'Desarrollo con IA',
    'services.ai.text': 'Flujo agéntico con Claude Code y MCP, planificación por fases con criterios verificables y pruebas automatizadas: velocidad de equipo con calidad de producción.',
    'services.mobile.title': 'Apps Mobile y Nativas',
    'services.mobile.text': 'React Native/Expo, SwiftUI y Kotlin/Compose. Audio en tiempo real en C++, BLE, offline-first y publicación en tiendas.',
    'services.api.title': 'APIs, IA y Cloud',
    'services.api.text': 'Node.js/Bun, NestJS, FastAPI y Go. RAG y LLMs, arquitectura multi-tenant, seguridad y deploy en AWS, GCP y Firebase.',

    'works.title': 'Proyectos <span class="text-gradient">Recientes</span>',
    'works.subtitle': 'Productos propios y proyectos entregados para grandes empresas.',
    'works.all': 'Todos',
    'works.fullstack': 'Full Stack',
    'works.visit': 'Visitar &rarr;',
    'works.personal.title': 'Proyectos Propios',
    'works.personal.subtitle': 'Productos propios, desde cero hasta el deploy — concepto, arquitectura y código.',
    'works.corporate.title': 'Experiencia Corporativa',
    'works.corporate.subtitle': 'Proyectos entregados para grandes empresas, fintechs y startups.',
    'works.gomove.text': 'Plataforma de monitoreo cardíaco para rehabilitación cardiovascular domiciliaria. BLE en segundo plano, alertas por voz, Live Activities iOS, modo offline y dashboard para clínicas.',
    'works.cardiocow.text': 'Sistema de monitoreo fisiológico bovino con sensor BLE XOSS. Captura de latidos, geolocalización y datos climáticos (INMET) con sincronización offline-first.',
    'works.safeo.text': 'Índice de Seguridad Urbana (0–10) por región de Brasil. Pipeline ETL de microdatos públicos (ISP-RJ, SSP-SP, SINESP), geocodificación con PostGIS y API REST con score por radio.',
    'works.raolog.text': 'Plataforma de automatización logística para empresa de recolección (~80/día). Asignación automática de rutas por geofencing, app del conductor, dashboard admin y formulario público para clientes.',
    'works.arenaconnect.text': 'Marketplace PWA para reserva de canchas deportivas y matchmaking de atletas amateur. Búsqueda geolocalizada, vacantes abiertas en tiempo real y dashboard financiero para gestores de arena.',
    'works.ellie.text': 'App de citas para jóvenes cristianos. Discovery por ubicación e intereses, match-and-chat y moderación de fotos con Google Cloud Vision API. Enfoque en seguridad (OWASP Top 10).',
    'works.bb.text': 'App de seguros con React Native para Banco do Brasil. Aumento significativo en ventas de nuevos seguros e integración con WhatsApp vía microservicios en Go y Node.js.',
    'works.englishcraft.text': 'Plataforma de aprendizaje de inglés con IPA, flashcards interactivos y sistema freemium. App multiplataforma + API escalable.',
    'works.aichat.text': 'API de chat con documentos usando IA. Carga de PDF/DOCX/audio, búsqueda semántica con RAG e integración con Google Gemini y Ollama.',
    'works.celler.text': 'App bancaria con React Native para fintech. APIs con Azure Functions y capas de seguridad contra ataques MITM.',
    'works.chatbots.title': 'Chatbots Corporativos',
    'works.chatbots.text': 'Chatbots para grandes empresas como Americanas y Canon. Optimización de atención al cliente con integración vía Ruby on Rails.',
    'works.pagpop.text': 'App y portal web para fintech. Acceso a extractos y transacciones bancarias vía web con React y Vue.js + app React Native.',
    'works.bassrig.text': 'Pedalera de bajo en el celular con ~6 ms de latencia: drive, compresor, EQ, amplificadores neuronales NAM, gabinetes por IR y synth. Motor de audio en C++ compartido entre Android (Oboe) e iOS (AVAudioEngine). Suscripción en Google Play.',
    'works.keysrig.text': 'Teclado de escenario para iPad y Android: hasta 6 capas por patch, splits, pads continuos, arpegiador, reverb con shimmer, MIDI learn e importación de instrumentos SFZ/SF2.',
    'works.sendme.text': 'App que conecta misioneros con donantes e iglesias: orar, ayudar vía PIX y ser voluntario. Monorepo con app, panel admin y 23 Cloud Functions; ~170 archivos de prueba y CI.',
    'works.prophub.text': 'Plataforma white-label multi-tenant de prop trading. Rotación de claves de cifrado, aislamiento entre tenants, refactor del OMS, reducción de carga en RDS y pruebas de carga k6.',
    'works.meta.text': 'Sitio institucional para consultoría industrial: design system, layouts desktop/mobile, blog en Markdown, SEO/AEO y deploy en Vercel.',
    'works.meta.tag': 'Web · Freelance',

    'experience.title': 'Mi <span class="text-gradient">Experiencia</span>',
    'experience.freelance.date': '2024 - 2025',
    'experience.prophub.date': '06/2026 - Presente',
    'experience.ilia.company': 'Ília, Brasília - Remoto',
    'experience.celler.company': 'Celler, São Paulo - Remoto',
    'experience.wt9.company': 'WT9, São Paulo - Remoto',
    'experience.nama.company': 'Nama, São Paulo - Remoto',
    'experience.duodev.company': 'DuoDev, São Paulo - Remoto',

    'education.title': 'Mi <span class="text-gradient">Formación</span>',
    'education.ads': 'Análisis y Desarrollo de Sistemas',
    'education.admin': 'Administración de Empresas',
    'education.certification': 'Certificación',

    'skills.title': 'Mis <span class="text-gradient">Skills</span>',
    'skills.subtitle': 'Tecnologías y herramientas que utilizo a diario.',

    'contact.title': '¿<span class="text-gradient">Trabajamos Juntos?</span>',
    'contact.subtitle': 'Ponte en contacto y hablemos sobre tu proyecto.',
    'contact.location': 'Ubicación',
    'contact.form.name': 'Tu nombre',
    'contact.form.email': 'Tu email',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Tu mensaje',
    'contact.form.send': 'Enviar Mensaje',

    'footer.copy': '&copy; 2026 Jose Guilherme Campos. Todos los derechos reservados.',
  }
};

let currentLang = localStorage.getItem('lang') || 'pt';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

  const t = translations[lang];

  // Translate text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });

  document.querySelectorAll('[data-i18n-href]').forEach(el => {
    const key = el.getAttribute('data-i18n-href');
    if (t[key]) {
      el.href = t[key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });

  // Update lang switcher UI
  const currentLangEl = document.getElementById('current-lang');
  currentLangEl.textContent = lang.toUpperCase();

  document.querySelectorAll('.lang-switcher__option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  // Restart typing animation with new phrases
  if (typeof restartTyping === 'function') {
    restartTyping(t['hero.phrases']);
  }
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  // Language dropdown toggle
  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    langDropdown.classList.remove('open');
  });

  langDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Language option click
  document.querySelectorAll('.lang-switcher__option').forEach(opt => {
    opt.addEventListener('click', () => {
      setLanguage(opt.dataset.lang);
      langDropdown.classList.remove('open');
    });
  });

  // Apply saved language
  if (currentLang !== 'pt') {
    setLanguage(currentLang);
  }
});
