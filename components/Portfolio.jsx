'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  Award,
  Bot,
  Briefcase,
  ChevronDown,
  Download,
  Github,
  Globe2,
  Layers,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Network,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  TerminalSquare,
  Users,
  Workflow,
  X,
  Zap,
} from 'lucide-react';

const languages = {
  en: { label: 'English', short: 'EN', flag: '🇬🇧', htmlLang: 'en' },
  fr: { label: 'Français', short: 'FR', flag: '🇫🇷', htmlLang: 'fr' },
  ja: { label: '日本語', short: 'JP', flag: '🇯🇵', htmlLang: 'ja' },
};

const icons = {
  product: Target,
  execution: Layers,
  leadership: Users,
  ai: Bot,
  automation: Workflow,
  business: Briefcase,
  backend: TerminalSquare,
  architecture: Network,
  delivery: Rocket,
  security: ShieldCheck,
  impact: Zap,
  proof: Award,
};

const content = {
  en: {
    nav: [
      { id: 'home', label: 'Home' },
      { id: 'story', label: 'About' },
      { id: 'value', label: 'Value' },
      { id: 'work', label: 'Work' },
      { id: 'services', label: 'Services' },
      { id: 'contact', label: 'Contact' },
    ],
    hero: {
      kicker: 'Product-Minded Full Stack Developer & Technical Project Lead',
      headline: 'I design, build and lead digital products that solve business problems.',
      support:
        'From product strategy to deployment, I create scalable web platforms, automation systems and AI-powered experiences for teams that need execution, clarity and measurable impact.',
      paragraph:
        'I work at the intersection of engineering, product thinking and technical leadership. I can shape a product direction, architect the system, build the core experience, integrate payments or AI workflows, and coordinate delivery until the product is useful in the real world.',
      primaryCta: 'Discuss a project',
      secondaryCta: 'View case studies',
      availability: 'Available for remote roles, technical lead missions and premium product builds',
      cardTitle: 'What I deliver',
      cardText:
        'Production-ready platforms, clean technical foundations, useful automation, and the communication discipline required to move ideas from concept to launch.',
      signature: ['SaaS Platforms', 'AI & Automation', 'Mobile Money', 'Technical Leadership'],
    },
    metrics: [
      { value: '4', label: 'flagship products shaped as business case studies' },
      { value: '45%', label: 'reported workflow automation gain on WeTell Africa' },
      { value: '3+', label: 'years building and shipping web systems' },
      { value: '1k+', label: 'users reached through delivered web experiences' },
    ],
    story: {
      label: '01 · About',
      title: 'I am not only writing code. I am turning business needs into working systems.',
      body: [
        'My technical journey has been shaped by ownership. At MIC SARL, I moved beyond isolated implementation and took responsibility for technical department execution: planning initiatives, guiding interns, improving delivery standards and helping transform business ideas into usable platforms.',
        'That experience changed the way I build. I do not start with features; I start with the problem, the users, the operational constraints and the result the business needs. Then I design the simplest credible path from idea to product: the architecture, interfaces, data model, integrations, deployment and maintenance rhythm.',
        'I am building a career as a product engineer and technical project lead who can operate with founders, CTOs, recruiters and product teams. My focus is useful technology: SaaS platforms, business applications, AI-powered workflows, automation systems and web experiences that improve how people work.',
      ],
      highlights: [
        'I lead with product context before technical complexity.',
        'I own the path from idea, architecture and implementation to delivery.',
        'I communicate clearly with stakeholders, contributors and users.',
        'I use AI and automation when they create real operational leverage.',
      ],
    },
    value: {
      label: '02 · Value proposition',
      title: 'Why teams work with me',
      intro:
        'I bring more than development capacity. I bring product judgment, execution discipline and the ability to connect technical decisions to business outcomes.',
      cards: [
        {
          icon: 'product',
          title: 'Product Thinking',
          description: 'I transform loose ideas into scoped product decisions, user flows and release priorities.',
          value: 'Business value: fewer wasted features and a clearer path to market.',
          outcome: 'Outcome: sharper MVPs, better UX decisions and more confident stakeholder alignment.',
        },
        {
          icon: 'execution',
          title: 'Full Stack Execution',
          description: 'I design and deliver complete systems across frontend, backend, databases, APIs and deployment.',
          value: 'Business value: one builder who understands the whole product surface.',
          outcome: 'Outcome: faster delivery, cleaner handoffs and maintainable technical foundations.',
        },
        {
          icon: 'leadership',
          title: 'Technical Leadership',
          description: 'I coordinate initiatives, mentor contributors and turn ambiguity into execution plans.',
          value: 'Business value: teams move with clarity instead of scattered effort.',
          outcome: 'Outcome: better standards, stronger accountability and predictable progress.',
        },
        {
          icon: 'ai',
          title: 'AI Integration',
          description: 'I integrate AI where it improves workflows, decision support or user experiences.',
          value: 'Business value: smarter operations without unnecessary complexity.',
          outcome: 'Outcome: assistants, intelligent workflows and useful AI features aligned with real needs.',
        },
        {
          icon: 'automation',
          title: 'Process Automation',
          description: 'I identify repetitive work and build systems that reduce manual effort.',
          value: 'Business value: more team time goes into decisions, clients and growth.',
          outcome: 'Outcome: scraping, normalization, reporting and operational automation pipelines.',
        },
        {
          icon: 'business',
          title: 'Business Alignment',
          description: 'I make technical choices with budget, speed, maintenance and customer value in mind.',
          value: 'Business value: technology serves the objective instead of becoming the objective.',
          outcome: 'Outcome: pragmatic architecture, measurable delivery and products built for adoption.',
        },
      ],
    },
    projects: {
      label: '03 · Selected case studies',
      title: 'Products and platforms built around measurable usefulness.',
      intro:
        'Each project is presented as a product problem, not a visual screenshot. The focus is the business need, the system delivered and the contribution I made to move it forward.',
      view: 'Open project',
      contribution: 'Key contributions',
      impact: 'Business impact',
      stack: 'Technologies',
      problem: 'Problem',
      solution: 'Solution',
      outcome: 'Outcome',
      items: [
        {
          title: 'MIC SARL',
          category: 'Multi-SaaS Platform · Technical Leadership',
          link: 'https://mouahaindustrycompanysarl.com/',
          image: '/images/projects/mic.png',
          problem:
            'MIC SARL needed a reliable technical foundation for multiple business modules: e-learning, e-commerce, real estate and services, with enough structure to support contributors and future growth.',
          solution:
            'I contributed to the product architecture, coordinated technical execution, supported deployment and maintenance, and helped integrate Mobile Money flows for real commercial use.',
          technologies: 'Next.js, React, Laravel, MySQL, Tailwind CSS, APIs, Docker, GitHub, Mobile Money integrations',
          outcome: 'A multi-module platform direction with clearer governance, reusable foundations and stronger delivery discipline.',
          contributions: [
            'Led technical initiatives inside the department and translated business needs into implementation priorities.',
            'Structured a multi-module system across learning, commerce, real estate and service experiences.',
            'Supported Mobile Money integration, deployment, maintenance and contributor coordination.',
          ],
          impact:
            'Improved MIC SARL’s ability to deliver digital services, coordinate technical work and move from isolated features toward a scalable product ecosystem.',
        },
        {
          title: 'WeTell Africa',
          category: 'Automation · Data Processing Platform',
          link: 'https://wetellafrica.com/',
          image: '/images/projects/cinema-scraper.png',
          problem:
            'The team needed to collect, clean and organize fragmented information without spending excessive manual time on repetitive data work.',
          solution:
            'I built automation and data processing workflows focused on scraping, normalization and structured outputs that could support faster analysis and operations.',
          technologies: 'Python, scraping workflows, data normalization, automation scripts, structured datasets, API-ready processing',
          outcome: 'A more efficient workflow with a reported 45% automation gain and cleaner data prepared for operational use.',
          contributions: [
            'Designed scraping workflows around reliable data quality instead of raw extraction volume.',
            'Created normalization logic to make fragmented information easier to process and reuse.',
            'Reduced repetitive manual work and improved productivity for information-heavy tasks.',
          ],
          impact:
            'Helped the team redirect effort from low-value collection tasks toward analysis, decisions and higher-value operational work.',
        },
        {
          title: 'Patrie Art',
          category: 'Institutional Website · Web Presence',
          link: 'https://patrieart.com/',
          image: '/images/projects/patrie-art1.png',
          problem:
            'Patrie Art needed a credible online presence that could communicate its mission, improve visibility and remain maintainable over time.',
          solution:
            'I delivered and maintained a web experience focused on clarity, institutional credibility, user access and consistent publishing support.',
          technologies: 'WordPress, PHP, HTML, CSS, UX improvement, content structure, maintenance workflows',
          outcome: 'A stronger digital presence with improved access to institutional information and public-facing content.',
          contributions: [
            'Improved the structure and usability of the institutional website.',
            'Supported visibility through clearer content presentation and maintenance practices.',
            'Helped keep the experience reliable for visitors and stakeholders.',
          ],
          impact:
            'Strengthened the organization’s public credibility and made its work easier to discover, understand and share.',
        },
        {
          title: 'C-CONNECT',
          category: 'Founder-Led MVP · Pan-African Collaboration Platform',
          link: 'https://github.com/BryanSeidy/C-CONNECT',
          image: '/images/projects/connect.png',
          problem:
            'Organizations and partners across the African ecosystem need more structured ways to connect, collaborate and manage trusted digital interactions.',
          solution:
            'I founded and built the MVP foundation: product design, authentication, user management, role structure and scalable architecture for future collaboration features.',
          technologies: 'Next.js, React, Node.js, TypeScript, Tailwind CSS, PostgreSQL, authentication, GitHub, CI/CD foundations',
          outcome: 'A launchable MVP foundation built around secure access, user management and scalable product direction.',
          contributions: [
            'Defined the product vision and transformed it into a practical MVP scope.',
            'Implemented authentication and user management as the trust layer of the product.',
            'Designed the architecture to support future collaboration, roles and partner workflows.',
          ],
          impact:
            'Created the technical and product base for a pan-African platform with the potential to support collaboration at ecosystem scale.',
        },
      ],
    },
    services: {
      label: '04 · Services',
      title: 'Where I create value for teams, founders and clients',
      intro:
        'I work best where technical delivery needs product thinking: SaaS platforms, MVPs, business tools, AI systems and technical coordination.',
      items: [
        {
          icon: 'delivery',
          title: 'Product Development',
          what: 'I design and build SaaS platforms, MVPs and business applications from concept to deployment.',
          why: 'Modern teams need products that are usable, maintainable and shipped fast enough to learn from the market.',
          impact: 'Impact: faster validation, cleaner product foundations and a credible path from prototype to production.',
        },
        {
          icon: 'ai',
          title: 'AI Solutions',
          what: 'I build AI assistants, workflow automations and AI-powered product features.',
          why: 'AI creates value when it removes friction, improves decisions or gives users a better experience.',
          impact: 'Impact: smarter workflows, reduced manual effort and differentiated product experiences.',
        },
        {
          icon: 'backend',
          title: 'Backend Engineering',
          what: 'I implement APIs, authentication, data models, business logic and integrations.',
          why: 'Strong backend foundations protect the product as usage, complexity and customer expectations grow.',
          impact: 'Impact: reliable systems, secure access, maintainable logic and integrations that support revenue.',
        },
        {
          icon: 'architecture',
          title: 'Technical Leadership',
          what: 'I coordinate projects, plan technical execution, guide contributors and make architecture decisions.',
          why: 'Execution fails when technical choices, priorities and communication are not aligned.',
          impact: 'Impact: clearer roadmaps, better delivery rhythm and stronger accountability across the build process.',
        },
      ],
    },
    expertise: {
      label: '05 · Stack & operating system',
      title: 'A technical toolkit organized around outcomes.',
      intro:
        'I use tools pragmatically. The goal is not to display a long list of technologies; the goal is to choose the stack that helps the product ship, scale and remain maintainable.',
      items: [
        { title: 'Frontend Experience', note: 'Interfaces, dashboards, landing pages and product flows.', tools: 'React, Next.js, TypeScript, JavaScript, Tailwind CSS' },
        { title: 'Backend Systems', note: 'APIs, authentication, business rules and data models.', tools: 'Node.js, Laravel, PHP, MySQL, PostgreSQL' },
        { title: 'Automation & Data', note: 'Scraping, normalization, reporting and process automation.', tools: 'Python, scripts, APIs, structured datasets' },
        { title: 'Delivery & Operations', note: 'Deployment, maintenance, collaboration and technical coordination.', tools: 'Docker, GitHub, CI/CD, documentation, project planning' },
      ],
    },
    finalCta: {
      eyebrow: 'Let’s build something meaningful',
      title: 'Need a technical partner who understands both business and engineering?',
      text: 'If you are hiring for a product engineer role, looking for a full stack developer with ownership, or need someone to lead a technical build from idea to deployment, I would be glad to talk.',
      primary: 'Start a conversation',
      phone: 'Call me',
    },
    blueprint: {
      label: '06 · Portfolio strategy',
      title: 'The experience is structured for international credibility and conversion.',
      items: [
        'Content hierarchy: hero, story, value proposition, case studies, services, expertise and final conversion CTA.',
        'Multilingual strategy: culturally adapted English, French and Japanese content with persistent no-reload switching.',
        'UX direction: elegant motion, discoverable projects, premium SaaS-style cards, strong accessibility contrast and clear CTAs.',
        'SEO focus: product engineer positioning, technical project leadership, SaaS development, AI automation and Cameroon-based international availability.',
        'Conversion path: recruiters, CTOs, founders and clients can quickly understand what I build, why it matters and how to contact me.',
        'Proof strategy: projects are reframed as case studies with problem, solution, contribution, outcome and business impact.',
      ],
    },
    contact: {
      email: 'abombarapael1@gmail.com',
      phone: '+237 654 746 532',
      socials: 'Professional profiles',
      backTop: 'Back to top ↑',
    },
  },
  fr: {
    nav: [
      { id: 'home', label: 'Accueil' },
      { id: 'story', label: 'Profil' },
      { id: 'value', label: 'Valeur' },
      { id: 'work', label: 'Projets' },
      { id: 'services', label: 'Services' },
      { id: 'contact', label: 'Contact' },
    ],
    hero: {
      kicker: 'Développeur Full Stack orienté produit & Lead Technique',
      headline: 'Je conçois, développe et pilote des produits digitaux qui résolvent de vrais problèmes business.',
      support:
        'De la stratégie produit au déploiement, je construis des plateformes web scalables, des systèmes d’automatisation et des expériences intégrant l’IA pour des équipes qui recherchent de l’exécution, de la clarté et de l’impact mesurable.',
      paragraph:
        'J’interviens à la croisée de l’ingénierie, de la vision produit et du leadership technique. Je peux clarifier une direction produit, architecturer le système, développer l’expérience principale, intégrer des paiements ou des workflows IA, puis coordonner la livraison jusqu’à un produit réellement utile.',
      primaryCta: 'Discuter d’un projet',
      secondaryCta: 'Voir les cas d’étude',
      availability: 'Disponible pour missions remote, rôles de lead technique et produits premium',
      cardTitle: 'Ce que je livre',
      cardText:
        'Des plateformes prêtes pour la production, des bases techniques propres, des automatisations utiles et la rigueur de communication nécessaire pour passer d’une idée à un lancement.',
      signature: ['Plateformes SaaS', 'IA & Automatisation', 'Mobile Money', 'Leadership technique'],
    },
    metrics: [
      { value: '4', label: 'produits majeurs présentés comme cas business' },
      { value: '45%', label: 'gain d’automatisation rapporté sur WeTell Africa' },
      { value: '3+', label: 'années à construire et livrer des systèmes web' },
      { value: '1k+', label: 'utilisateurs touchés par des expériences livrées' },
    ],
    story: {
      label: '01 · À propos',
      title: 'Je ne me limite pas au code. Je transforme des besoins business en systèmes opérationnels.',
      body: [
        'Mon parcours technique s’est construit autour de la responsabilité. Chez MIC SARL, je suis sorti de la simple exécution pour prendre en charge l’avancement technique du département : planifier les initiatives, encadrer des stagiaires, améliorer les standards de livraison et transformer des idées business en plateformes utilisables.',
        'Cette expérience a changé ma manière de construire. Je ne démarre pas par les fonctionnalités ; je commence par le problème, les utilisateurs, les contraintes opérationnelles et le résultat attendu par l’entreprise. Ensuite, je définis le chemin le plus crédible vers le produit : architecture, interfaces, modèle de données, intégrations, déploiement et maintenance.',
        'Je développe ma carrière comme product engineer et lead technique capable de travailler avec des fondateurs, CTOs, recruteurs et équipes produit. Mon objectif est une technologie utile : SaaS, applications métier, workflows IA, automatisation et expériences web qui améliorent concrètement le travail.',
      ],
      highlights: [
        'Je place le contexte produit avant la complexité technique.',
        'Je prends en charge le passage de l’idée à la livraison.',
        'Je communique clairement avec les parties prenantes, contributeurs et utilisateurs.',
        'J’utilise l’IA et l’automatisation lorsqu’elles créent un vrai levier opérationnel.',
      ],
    },
    value: {
      label: '02 · Proposition de valeur',
      title: 'Pourquoi les équipes travaillent avec moi',
      intro:
        'J’apporte plus qu’une capacité de développement : du jugement produit, de la discipline d’exécution et la capacité de relier les choix techniques aux résultats business.',
      cards: [
        { icon: 'product', title: 'Vision Produit', description: 'Je transforme des idées floues en décisions produit, parcours utilisateurs et priorités de release.', value: 'Valeur business : moins de fonctionnalités inutiles et un accès marché plus clair.', outcome: 'Résultat : MVP plus précis, meilleurs choix UX et alignement plus solide.' },
        { icon: 'execution', title: 'Exécution Full Stack', description: 'Je livre des systèmes complets : frontend, backend, bases de données, APIs et déploiement.', value: 'Valeur business : un profil capable de comprendre toute la surface produit.', outcome: 'Résultat : livraison plus rapide, transitions plus propres et bases maintenables.' },
        { icon: 'leadership', title: 'Leadership Technique', description: 'Je coordonne les initiatives, accompagne les contributeurs et transforme l’ambiguïté en plan d’exécution.', value: 'Valeur business : l’équipe avance avec clarté au lieu de disperser ses efforts.', outcome: 'Résultat : meilleurs standards, responsabilité accrue et progression prévisible.' },
        { icon: 'ai', title: 'Intégration IA', description: 'J’intègre l’IA lorsqu’elle améliore les workflows, la décision ou l’expérience utilisateur.', value: 'Valeur business : des opérations plus intelligentes sans complexité inutile.', outcome: 'Résultat : assistants, workflows intelligents et fonctionnalités IA utiles.' },
        { icon: 'automation', title: 'Automatisation des Processus', description: 'J’identifie les tâches répétitives et construis des systèmes qui réduisent l’effort manuel.', value: 'Valeur business : plus de temps pour les décisions, les clients et la croissance.', outcome: 'Résultat : scraping, normalisation, reporting et pipelines opérationnels.' },
        { icon: 'business', title: 'Alignement Business', description: 'Je prends des décisions techniques en tenant compte du budget, de la vitesse, de la maintenance et de la valeur client.', value: 'Valeur business : la technologie sert l’objectif au lieu de devenir l’objectif.', outcome: 'Résultat : architecture pragmatique, livraison mesurable et adoption facilitée.' },
      ],
    },
    projects: {
      label: '03 · Cas d’étude',
      title: 'Des produits et plateformes construits autour d’une utilité mesurable.',
      intro: 'Chaque projet est présenté comme un problème produit, pas comme une simple capture d’écran. L’accent est mis sur le besoin business, le système livré et ma contribution.',
      view: 'Ouvrir le projet', contribution: 'Contributions clés', impact: 'Impact business', stack: 'Technologies', problem: 'Problème', solution: 'Solution', outcome: 'Résultat',
      items: [
        { title: 'MIC SARL', category: 'Plateforme Multi-SaaS · Leadership Technique', link: 'https://mouahaindustrycompanysarl.com/', image: '/images/projects/civika.png', problem: 'MIC SARL avait besoin d’une base technique fiable pour plusieurs modules business : e-learning, e-commerce, immobilier et services.', solution: 'J’ai contribué à l’architecture produit, coordonné l’exécution technique, accompagné le déploiement et la maintenance, puis soutenu l’intégration Mobile Money.', technologies: 'Next.js, React, Laravel, MySQL, Tailwind CSS, APIs, Docker, GitHub, Mobile Money', outcome: 'Une direction multi-module plus structurée, des bases réutilisables et une meilleure discipline de livraison.', contributions: ['Pilotage d’initiatives techniques et traduction des besoins business en priorités d’implémentation.', 'Structuration d’un système multi-module autour de l’apprentissage, du commerce, de l’immobilier et des services.', 'Support de l’intégration Mobile Money, du déploiement, de la maintenance et de la coordination.'], impact: 'Renforcement de la capacité de MIC SARL à livrer des services digitaux et à évoluer vers un écosystème produit scalable.' },
        { title: 'WeTell Africa', category: 'Automatisation · Plateforme de traitement de données', link: 'https://wetellafrica.com/', image: '/images/projects/cinema-scraper.png', problem: 'L’équipe devait collecter, nettoyer et organiser des informations fragmentées sans perdre trop de temps sur des tâches répétitives.', solution: 'J’ai construit des workflows d’automatisation centrés sur le scraping, la normalisation et des sorties structurées pour l’analyse.', technologies: 'Python, scraping, normalisation de données, scripts d’automatisation, datasets structurés', outcome: 'Un workflow plus efficace avec un gain d’automatisation rapporté de 45% et des données plus propres.', contributions: ['Conception de workflows de scraping orientés qualité.', 'Création d’une logique de normalisation pour réutiliser l’information.', 'Réduction du travail manuel répétitif et amélioration de la productivité.'], impact: 'L’équipe peut concentrer davantage d’énergie sur l’analyse, la décision et les activités à plus forte valeur.' },
        { title: 'Patrie Art', category: 'Site institutionnel · Présence web', link: 'https://patrieart.com/', image: '/images/projects/patrie-art.png', problem: 'Patrie Art avait besoin d’une présence en ligne crédible, visible et maintenable.', solution: 'J’ai livré et maintenu une expérience web orientée clarté, crédibilité institutionnelle et accès utilisateur.', technologies: 'WordPress, PHP, HTML, CSS, amélioration UX, structure de contenu, maintenance', outcome: 'Une présence digitale plus forte et un accès amélioré aux informations institutionnelles.', contributions: ['Amélioration de la structure et de l’utilisabilité du site.', 'Support de la visibilité grâce à une présentation plus claire.', 'Maintenance de l’expérience pour les visiteurs et partenaires.'], impact: 'La crédibilité publique de l’organisation est renforcée et son travail devient plus facile à découvrir et partager.' },
        { title: 'C-CONNECT', category: 'MVP fondateur · Plateforme collaborative panafricaine', link: 'https://github.com/BryanSeidy/C-CONNECT', image: '/images/projects/civika.png', problem: 'Les organisations et partenaires africains ont besoin de mieux se connecter, collaborer et gérer des interactions numériques fiables.', solution: 'J’ai fondé et développé la base MVP : design produit, authentification, gestion utilisateurs, rôles et architecture scalable.', technologies: 'Next.js, React, Node.js, TypeScript, Tailwind CSS, PostgreSQL, authentification, GitHub, CI/CD', outcome: 'Une base MVP lançable autour de l’accès sécurisé, de la gestion utilisateurs et d’une direction produit scalable.', contributions: ['Définition de la vision produit et transformation en périmètre MVP.', 'Implémentation de l’authentification et de la gestion utilisateurs.', 'Architecture pensée pour la collaboration, les rôles et les workflows partenaires.'], impact: 'Création d’une base produit et technique pour une plateforme panafricaine à potentiel écosystémique.' },
      ],
    },
    services: {
      label: '04 · Services', title: 'Là où je crée de la valeur pour les équipes, fondateurs et clients', intro: 'J’apporte le plus de valeur lorsque la livraison technique demande une vraie lecture produit.',
      items: [
        { icon: 'delivery', title: 'Développement Produit', what: 'Je conçois et construis des SaaS, MVPs et applications métier du concept au déploiement.', why: 'Les équipes modernes ont besoin de produits utilisables, maintenables et livrés assez vite pour apprendre du marché.', impact: 'Impact : validation plus rapide, meilleures fondations et passage crédible du prototype à la production.' },
        { icon: 'ai', title: 'Solutions IA', what: 'Je développe des assistants IA, automatisations et fonctionnalités alimentées par l’IA.', why: 'L’IA crée de la valeur lorsqu’elle réduit la friction, améliore la décision ou enrichit l’expérience.', impact: 'Impact : workflows plus intelligents, moins de tâches manuelles et expériences différenciantes.' },
        { icon: 'backend', title: 'Ingénierie Backend', what: 'Je construis APIs, authentification, modèles de données, logique métier et intégrations.', why: 'Un backend solide protège le produit quand l’usage, la complexité et les attentes augmentent.', impact: 'Impact : systèmes fiables, accès sécurisé, logique maintenable et intégrations liées au revenu.' },
        { icon: 'architecture', title: 'Leadership Technique', what: 'Je coordonne les projets, planifie l’exécution, guide les contributeurs et décide l’architecture.', why: 'L’exécution échoue lorsque les choix techniques, priorités et communications ne sont pas alignés.', impact: 'Impact : roadmaps plus claires, meilleur rythme de livraison et responsabilité renforcée.' },
      ],
    },
    expertise: { label: '05 · Stack & méthode', title: 'Une boîte à outils organisée autour des résultats.', intro: 'Je choisis les outils de façon pragmatique pour livrer, faire évoluer et maintenir le produit.', items: [ { title: 'Expérience Frontend', note: 'Interfaces, dashboards, landing pages et parcours produit.', tools: 'React, Next.js, TypeScript, JavaScript, Tailwind CSS' }, { title: 'Systèmes Backend', note: 'APIs, authentification, règles métier et données.', tools: 'Node.js, Laravel, PHP, MySQL, PostgreSQL' }, { title: 'Automatisation & Données', note: 'Scraping, normalisation, reporting et automatisation.', tools: 'Python, scripts, APIs, datasets structurés' }, { title: 'Livraison & Opérations', note: 'Déploiement, maintenance, collaboration et coordination.', tools: 'Docker, GitHub, CI/CD, documentation, planning' } ] },
    finalCta: { eyebrow: 'Construisons quelque chose d’utile', title: 'Vous cherchez un partenaire technique qui comprend le business autant que l’ingénierie ?', text: 'Si vous recrutez un product engineer, un développeur full stack avec ownership ou une personne capable de piloter un build technique de l’idée au déploiement, échangeons.', primary: 'Démarrer la conversation', phone: 'M’appeler' },
    blueprint: { label: '06 · Stratégie portfolio', title: 'L’expérience est pensée pour la crédibilité internationale et la conversion.', items: ['Hiérarchie : hero, histoire, proposition de valeur, cas d’étude, services, expertise et CTA final.', 'Multilingue : contenu anglais, français et japonais adapté culturellement avec switch sans rechargement.', 'UX : motion élégant, projets lisibles, cartes premium type SaaS, contraste accessible et CTAs clairs.', 'SEO : product engineer, leadership technique, SaaS, automatisation IA et disponibilité internationale depuis le Cameroun.', 'Conversion : recruteurs, CTOs, fondateurs et clients comprennent rapidement ce que je construis et comment me contacter.', 'Preuve : projets reformulés en cas d’étude avec problème, solution, contribution, résultat et impact business.'] },
    contact: { email: 'assomabomba@gmail.com', phone: '+237 654 746 532', socials: 'Profils professionnels', backTop: 'Retour en haut ↑' },
  },
  ja: {
    nav: [
      { id: 'home', label: 'ホーム' },
      { id: 'story', label: '概要' },
      { id: 'value', label: '価値' },
      { id: 'work', label: '実績' },
      { id: 'services', label: 'サービス' },
      { id: 'contact', label: '連絡' },
    ],
    hero: {
      kicker: 'プロダクト志向のフルスタック開発者 & テクニカルプロジェクトリード',
      headline: '私は、事業課題を解決するデジタルプロダクトを設計し、開発し、リードします。',
      support: 'プロダクト戦略からデプロイまで、スケーラブルなWebプラットフォーム、業務自動化、AIを活用した体験を形にします。',
      paragraph: '私の強みは、エンジニアリング、プロダクト思考、技術リーダーシップをつなぐことです。方向性を整理し、アーキテクチャを設計し、主要機能を実装し、決済やAIワークフローを統合し、実際に使われる状態まで届けます。',
      primaryCta: 'プロジェクトを相談する', secondaryCta: 'ケーススタディを見る', availability: 'リモート職、テクニカルリード、プレミアム開発案件に対応可能', cardTitle: '提供できること', cardText: '本番運用を見据えたプラットフォーム、保守しやすい技術基盤、意味のある自動化、そしてアイデアをローンチへ進めるためのコミュニケーション力です。', signature: ['SaaS プラットフォーム', 'AI・自動化', 'Mobile Money', '技術リード'],
    },
    metrics: [ { value: '4', label: '主要プロジェクトをビジネスケースとして整理' }, { value: '45%', label: 'WeTell Africaで報告された自動化改善' }, { value: '3+', label: 'Webシステムの開発・提供経験年数' }, { value: '1k+', label: '提供したWeb体験が届けたユーザー数' } ],
    story: { label: '01 · 私について', title: '私はコードを書くだけではなく、事業ニーズを動くシステムに変えます。', body: ['私のキャリアは「オーナーシップ」によって磨かれてきました。MIC SARLでは単なる実装担当ではなく、技術部門の推進、施策の計画、インターンの指導、納品基準の改善、事業アイデアのプロダクト化に関わってきました。', 'その経験により、開発の出発点が変わりました。機能から始めるのではなく、課題、ユーザー、運用制約、事業として必要な成果から考えます。そのうえで、アーキテクチャ、UI、データ、連携、デプロイ、保守までを現実的な道筋に落とし込みます。', '私は、創業者、CTO、採用担当、プロダクトチームと対話できるプロダクトエンジニア／テクニカルリードを目指しています。SaaS、業務アプリ、AIワークフロー、自動化、Web体験を通じて、仕事の進め方を良くする技術を届けます。'], highlights: ['技術の複雑さより先に、プロダクトの文脈を理解します。', 'アイデアから設計、実装、納品まで責任を持ちます。', '関係者、開発メンバー、ユーザーに明確に伝えます。', 'AIと自動化は、運用上の効果がある場合に活用します。'] },
    value: { label: '02 · 提供価値', title: 'チームが私と働く理由', intro: '私は単なる開発リソースではなく、プロダクト判断、実行力、技術判断を事業成果につなげる視点を提供します。', cards: [ { icon: 'product', title: 'プロダクト思考', description: '曖昧なアイデアを、スコープ、ユーザーフロー、リリース優先度へ落とし込みます。', value: '事業価値：不要な機能を減らし、市場投入までの道筋を明確にします。', outcome: '成果：より鋭いMVP、良いUX判断、関係者の合意形成。' }, { icon: 'execution', title: 'フルスタック実行力', description: 'フロントエンド、バックエンド、DB、API、デプロイまで一貫して構築します。', value: '事業価値：プロダクト全体を理解して動ける開発者を得られます。', outcome: '成果：速い納品、スムーズな連携、保守しやすい基盤。' }, { icon: 'leadership', title: '技術リーダーシップ', description: '施策を整理し、メンバーを支援し、曖昧さを実行計画に変えます。', value: '事業価値：チームが迷わず前に進めます。', outcome: '成果：標準化、責任の明確化、予測しやすい進捗。' }, { icon: 'ai', title: 'AI統合', description: 'AIが業務、意思決定、ユーザー体験を改善する場面で導入します。', value: '事業価値：不要な複雑さなしに、より賢い業務を実現します。', outcome: '成果：AIアシスタント、スマートワークフロー、有用なAI機能。' }, { icon: 'automation', title: 'プロセス自動化', description: '繰り返し作業を見つけ、手作業を減らすシステムを作ります。', value: '事業価値：チームの時間を判断、顧客、成長へ使えます。', outcome: '成果：スクレイピング、正規化、レポート、運用自動化。' }, { icon: 'business', title: '事業との整合', description: '予算、速度、保守性、顧客価値を踏まえて技術判断をします。', value: '事業価値：技術が目的化せず、事業目的に貢献します。', outcome: '成果：現実的な設計、測定可能な納品、導入されるプロダクト。' } ] },
    projects: { label: '03 · ケーススタディ', title: '測定可能な有用性を中心に構築したプロダクト。', intro: '各プロジェクトは単なるスクリーンショットではなく、課題、解決策、成果、貢献を明確に示します。', view: 'プロジェクトを見る', contribution: '主な貢献', impact: '事業インパクト', stack: '技術', problem: '課題', solution: '解決策', outcome: '成果', items: [ { title: 'MIC SARL', category: 'マルチSaaS · 技術リード', link: 'https://mouahaindustrycompanysarl.com/', image: '/images/projects/civika.png', problem: 'eラーニング、EC、不動産、サービスを含む複数モジュールに対応できる信頼性の高い技術基盤が必要でした。', solution: 'プロダクトアーキテクチャ、技術実行、デプロイ、保守、Mobile Money連携を支援しました。', technologies: 'Next.js, React, Laravel, MySQL, Tailwind CSS, APIs, Docker, GitHub, Mobile Money', outcome: 'マルチモジュールの方向性、再利用可能な基盤、より明確な納品体制を実現しました。', contributions: ['事業ニーズを実装優先度に変換し、技術施策をリード。', '学習、商取引、不動産、サービスを横断する構造を整理。', 'Mobile Money連携、デプロイ、保守、メンバー調整を支援。'], impact: 'MIC SARLがデジタルサービスを提供し、スケーラブルなプロダクト群へ進む力を高めました。' }, { title: 'WeTell Africa', category: '自動化 · データ処理プラットフォーム', link: 'https://wetellafrica.com/', image: '/images/projects/cinema-scraper.png', problem: '断片化された情報の収集、整理、正規化に多くの手作業が発生していました。', solution: 'スクレイピング、正規化、構造化出力を中心とした自動化ワークフローを構築しました。', technologies: 'Python, scraping, data normalization, automation scripts, structured datasets', outcome: '報告ベースで45%の自動化改善と、より扱いやすいデータフローを実現しました。', contributions: ['量より品質を重視したスクレイピング設計。', '再利用しやすい情報にするための正規化ロジック。', '反復作業を削減し、生産性を改善。'], impact: 'チームが収集作業ではなく、分析と意思決定に集中できるようにしました。' }, { title: 'Patrie Art', category: '組織サイト · Webプレゼンス', link: 'https://patrieart.com/', image: '/images/projects/patrie-art.png', problem: '信頼でき、見つけやすく、保守しやすいオンラインプレゼンスが必要でした。', solution: '明確さ、信頼性、アクセス性、継続的な保守を意識したWeb体験を提供しました。', technologies: 'WordPress, PHP, HTML, CSS, UX improvement, content structure, maintenance', outcome: '組織情報へのアクセスとデジタル上の信頼性が向上しました。', contributions: ['サイト構造と使いやすさを改善。', '明確な情報提示と保守を支援。', '訪問者と関係者に安定した体験を提供。'], impact: '組織の活動がより発見されやすく、理解されやすくなりました。' }, { title: 'C-CONNECT', category: '創業者主導MVP · パンアフリカ連携プラットフォーム', link: 'https://github.com/BryanSeidy/C-CONNECT', image: '/images/projects/civika.png', problem: 'アフリカの組織やパートナーが、信頼できる形でつながり、協働する仕組みが必要です。', solution: 'プロダクト設計、認証、ユーザー管理、ロール構造、拡張可能なアーキテクチャを含むMVP基盤を構築しました。', technologies: 'Next.js, React, Node.js, TypeScript, Tailwind CSS, PostgreSQL, authentication, GitHub, CI/CD', outcome: '安全なアクセスとユーザー管理を中心に、ローンチ可能なMVP基盤を作りました。', contributions: ['プロダクトビジョンをMVPスコープに変換。', '認証とユーザー管理を実装。', '将来の連携、ロール、パートナーワークフローに備えた設計。'], impact: 'エコシステム規模の協働を支えるパンアフリカ型プラットフォームの基礎を作りました。' } ] },
    services: { label: '04 · サービス', title: 'チーム、創業者、クライアントに価値を提供する領域', intro: '技術納品にプロダクト思考が必要な場面で最も価値を発揮します。', items: [ { icon: 'delivery', title: 'プロダクト開発', what: 'SaaS、MVP、業務アプリを構想からデプロイまで設計・開発します。', why: '現代のチームには、使いやすく保守しやすく、学習のために素早く出せるプロダクトが必要です。', impact: '効果：検証の高速化、きれいな基盤、プロトタイプから本番への道筋。' }, { icon: 'ai', title: 'AIソリューション', what: 'AIアシスタント、ワークフロー自動化、AI機能を構築します。', why: 'AIは摩擦を減らし、意思決定や体験を良くするときに価値を生みます。', impact: '効果：賢い業務、手作業削減、差別化された体験。' }, { icon: 'backend', title: 'バックエンド開発', what: 'API、認証、データモデル、業務ロジック、連携を実装します。', why: '強いバックエンドは、利用拡大と複雑化に耐えるための基盤です。', impact: '効果：信頼性、安全なアクセス、保守可能なロジック、収益を支える連携。' }, { icon: 'architecture', title: '技術リーダーシップ', what: 'プロジェクト調整、技術計画、メンバー支援、アーキテクチャ判断を行います。', why: '技術判断、優先順位、コミュニケーションが揃わないと実行は失速します。', impact: '効果：明確なロードマップ、良い納品リズム、高い責任感。' } ] },
    expertise: { label: '05 · 技術スタックと進め方', title: '成果から逆算して使う技術ツールキット。', intro: '技術リストを並べるためではなく、出荷し、拡張し、保守するために適切なツールを選びます。', items: [ { title: 'フロントエンド体験', note: 'UI、ダッシュボード、LP、プロダクトフロー。', tools: 'React, Next.js, TypeScript, JavaScript, Tailwind CSS' }, { title: 'バックエンドシステム', note: 'API、認証、業務ルール、データモデル。', tools: 'Node.js, Laravel, PHP, MySQL, PostgreSQL' }, { title: '自動化・データ', note: 'スクレイピング、正規化、レポート、業務自動化。', tools: 'Python, scripts, APIs, structured datasets' }, { title: 'デリバリー・運用', note: 'デプロイ、保守、協働、技術調整。', tools: 'Docker, GitHub, CI/CD, documentation, planning' } ] },
    finalCta: { eyebrow: '意味のあるものを作りましょう', title: '事業とエンジニアリングの両方を理解する技術パートナーが必要ですか？', text: 'プロダクトエンジニア、オーナーシップのあるフルスタック開発者、またはアイデアからデプロイまでリードできる人材を探しているなら、ぜひお話ししましょう。', primary: '相談を始める', phone: '電話する' },
    blueprint: { label: '06 · ポートフォリオ戦略', title: '国際的な信頼性とコンバージョンを意識した構成です。', items: ['構成：ヒーロー、ストーリー、価値提案、ケーススタディ、サービス、専門性、最終CTA。', '多言語：英語、フランス語、日本語を文化的に調整し、リロードなしで切替。', 'UX：上品なモーション、見つけやすい実績、SaaS風カード、アクセシブルなコントラスト、明確なCTA。', 'SEO：プロダクトエンジニア、技術リード、SaaS開発、AI自動化、カメルーンからの国際対応。', '導線：採用担当、CTO、創業者、クライアントが価値と連絡方法をすぐ理解できます。', '証明：課題、解決策、貢献、成果、事業インパクトでプロジェクトをケース化。'] },
    contact: { email: 'assomabomba@gmail.com', phone: '+237 654 746 532', socials: 'プロフィール', backTop: 'トップへ戻る ↑' },
  },
};

const Portfolio = () => {
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const t = content[language];

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    const savedLanguage = window.localStorage.getItem('portfolio-language');
    if (savedTheme) setTheme(savedTheme);
    if (savedLanguage && content[savedLanguage]) setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = languages[language].htmlLang;
  }, [language]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);

      let current = null;
      for (const item of t.nav) {
        const element = document.getElementById(item.id);
        if (element && element.getBoundingClientRect().top <= 140) {
          current = item;
        }
      }
      if (current) setActiveSection(current.id);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [t.nav]);

  const themeLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <main className={`portfolio-shell ${theme === 'light' ? 'light' : ''}`}>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <div className="grain" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="navigation" aria-label="Primary navigation">
        <a className="brand-mark" href="#home" aria-label="ABOMBA Raphaël home">AR</a>
        <nav className="nav-links" aria-label="Main sections">
          {t.nav.map((item) => (
            <a className={activeSection === item.id ? 'active' : ''} href={`#${item.id}`} key={item.id}>{item.label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <div className="language-switcher" aria-label="Language selector">
            {Object.entries(languages).map(([key, meta]) => (
              <button
                type="button"
                className={language === key ? 'selected' : ''}
                onClick={() => setLanguage(key)}
                aria-pressed={language === key}
                key={key}
              >
                <span aria-hidden="true">{meta.flag}</span>{meta.short}
              </button>
            ))}
          </div>
          <button className="icon-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={themeLabel} type="button">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="nav-cta" href="#contact"><Mail size={16} /> {t.nav[t.nav.length - 1].label}</a>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" type="button">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {t.nav.map((item) => (
            <a href={`#${item.id}`} key={item.id} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
        </nav>
      )}

      <section id="home" className="section-shell hero content-transition" key={language}>
        <span className="hero-kicker reveal"><Sparkles size={15} /> {t.hero.kicker}</span>
        <div className="hero-grid">
          <div>
            <p className="eyebrow reveal">ABOMBA Raphaël · BryanSeidy</p>
            <h1 className="reveal delay-1">{t.hero.headline}</h1>
            <p className="hero-lede reveal delay-2">{t.hero.support}</p>
            <p className="hero-positioning">{t.hero.paragraph}</p>
            <div className="hero-actions">
              <a className="primary-button" href="#contact"><Mail size={18} /> {t.hero.primaryCta}</a>
              <a className="secondary-button" href="#work">{t.hero.secondaryCta} <ArrowUpRight size={18} /></a>
              <a className="secondary-button" href="/CV_Raphael_ABOMBA.pdf" download><Download size={18} /> CV</a>
            </div>
          </div>
          <aside className="hero-card" aria-label="Positioning summary">
            <span className="availability"><span /> {t.hero.availability}</span>
            <div>
              <h2>{t.hero.cardTitle}</h2>
              <p>{t.hero.cardText}</p>
            </div>
            <div className="signature-grid">
              {t.hero.signature.map((item) => <span key={item}>{item}</span>)}
            </div>
          </aside>
        </div>
        <div className="metric-strip" aria-label="Portfolio metrics">
          {t.metrics.map((metric) => (
            <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
          ))}
        </div>
        <a className="scroll-cue" href="#story"><ChevronDown size={16} /> Scroll</a>
      </section>

      <section id="story" className="section-shell split-section">
        <div><span className="section-label">{t.story.label}</span></div>
        <div className="section-copy">
          <h2>{t.story.title}</h2>
          {t.story.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="analysis-grid">
            {t.story.highlights.map((highlight) => (
              <article key={highlight}><Sparkles size={18} /><p>{highlight}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section id="value" className="section-shell brand-section">
        <div className="brand-statement">
          <span className="section-label">{t.value.label}</span>
          <h2>{t.value.title}</h2>
          <p>{t.value.intro}</p>
        </div>
        <div className="value-grid">
          {t.value.cards.map((card) => {
            const Icon = icons[card.icon];
            return (
              <article className="value-card" key={card.title}>
                <Icon size={23} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <strong>{card.value}</strong>
                <span>{card.outcome}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section id="work" className="section-shell work-section">
        <div className="section-heading">
          <div>
            <span className="section-label">{t.projects.label}</span>
            <h2>{t.projects.title}</h2>
          </div>
          <p>{t.projects.intro}</p>
        </div>
        <div className="case-grid">
          {t.projects.items.map((project, index) => (
            <article className="case-card" key={project.title}>
              <div className="case-image">
                <Image src={project.image} alt={`${project.title} preview`} fill sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="case-content">
                <div className="case-meta"><span>{String(index + 1).padStart(2, '0')}</span><span>{project.category}</span></div>
                <h3>{project.title}</h3>
                <p>{project.solution}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">{t.projects.view} <ArrowUpRight size={18} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell case-study-section" aria-label="Detailed case studies">
        {t.projects.items.map((project, index) => (
          <article id={`case-${index}`} className="case-study" key={project.title}>
            <div className="case-study-intro">
              <span className="section-label">Case study · {String(index + 1).padStart(2, '0')}</span>
              <h2>{project.title}</h2>
              <p>{project.category}</p>
            </div>
            <div className="case-study-grid">
              <div><h3>{t.projects.problem}</h3><p>{project.problem}</p></div>
              <div><h3>{t.projects.solution}</h3><p>{project.solution}</p></div>
              <div><h3>{t.projects.outcome}</h3><p>{project.outcome}</p></div>
              <div><h3>{t.projects.stack}</h3><p>{project.technologies}</p></div>
              <div className="wide"><h3>{t.projects.contribution}</h3><ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div className="wide"><h3>{t.projects.impact}</h3><p>{project.impact}</p></div>
            </div>
          </article>
        ))}
      </section>

      <section id="services" className="section-shell services-section">
        <div className="section-heading">
          <div>
            <span className="section-label">{t.services.label}</span>
            <h2>{t.services.title}</h2>
          </div>
          <p>{t.services.intro}</p>
        </div>
        <div className="services-grid">
          {t.services.items.map((service) => {
            const Icon = icons[service.icon];
            return (
              <article className="service-card" key={service.title}>
                <Icon size={24} />
                <h3>{service.title}</h3>
                <p>{service.what}</p>
                <p>{service.why}</p>
                <strong>{service.impact}</strong>
              </article>
            );
          })}
        </div>
      </section>

      <section id="expertise" className="section-shell expertise-section">
        <div className="section-heading">
          <div>
            <span className="section-label">{t.expertise.label}</span>
            <h2>{t.expertise.title}</h2>
          </div>
          <p>{t.expertise.intro}</p>
        </div>
        <div className="expertise-grid">
          {t.expertise.items.map((item) => (
            <article className="expertise-card" key={item.title}>
              <TerminalSquare size={22} />
              <h3>{item.title}</h3>
              <p>{item.note}</p>
              <span>{item.tools}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell blueprint-section">
        <span className="section-label">{t.blueprint.label}</span>
        <h2>{t.blueprint.title}</h2>
        <div className="blueprint-grid">
          {t.blueprint.items.map((item) => <article key={item}>{item}</article>)}
        </div>
      </section>

      <section id="contact" className="section-shell contact-section">
        <p className="eyebrow">{t.finalCta.eyebrow}</p>
        <h2>{t.finalCta.title}</h2>
        <p>{t.finalCta.text}</p>
        <div className="contact-actions">
          <a href={`mailto:${t.contact.email}`} className="primary-button"><Mail size={18} /> {t.finalCta.primary}</a>
          <a href="https://wa.me/237654746532" className="secondary-button"><Phone size={18} /> {t.finalCta.phone}</a>
        </div>
        <div className="social-row" aria-label={t.contact.socials}>
          <a href="https://github.com/BryanSeidy" target="_blank" rel="noopener noreferrer"><Github size={18} /> GitHub</a>
          <a href="https://www.linkedin.com/in/abomba-raphael" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /> LinkedIn</a>
          <a href="https://abomba-raphael.vercel.app" target="_blank" rel="noopener noreferrer"><Globe2 size={18} /> Portfolio</a>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 ABOMBA Raphaël · Product-Minded Full Stack Developer</span>
        <a href="#home">{t.contact.backTop}</a>
      </footer>
    </main>
  );
};

export default Portfolio;
