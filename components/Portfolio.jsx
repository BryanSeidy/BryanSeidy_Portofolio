'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  ArrowDownToLine,
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

const navItems = [
  { id: 'home', label: 'Index' },
  { id: 'story', label: 'Story' },
  { id: 'work', label: 'Work' },
  { id: 'expertise', label: 'Systems' },
  { id: 'impact', label: 'Impact' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'contact', label: 'Contact' },
];

const analysisHighlights = [
  'Positioning evolved from software engineering student to product-minded full stack developer and technical project lead.',
  'Strongest proof: ownership of MIC SARL technical direction, C-CONNECT MVP, WeTell automation, and Patrie Art platform delivery.',
  'Hidden strength: connecting product thinking, execution discipline, AI automation, infrastructure, and stakeholder communication.',
  'Business impact signal: faster data workflows, production-ready systems, improved publishing operations, and user-centered platforms.',
];

const metrics = [
  { value: '3+', label: 'years building web products' },
  { value: '45%', label: 'automation rate reported on WeTell workflows' },
  { value: '1k+', label: 'users reached through Patrie Art' },
  { value: '4', label: 'flagship systems presented as case studies' },
];
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
          image: '/images/projects/civika.png',
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
          image: '/images/projects/patrie-art.png',
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
          image: '/images/projects/civika.png',
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
      email: 'assomabomba@gmail.com',
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
    results: ['Platform deployed online', 'More than 1,000 users reached', 'Improved cultural visibility'],
    impact: 'Gave Patrie Art a credible digital home and expanded access to its cultural work.',
  },
];

const expertise = [
  {
    title: 'Frontend systems',
    tools: 'Next.js, React, Vue.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS',
    note: 'Interfaces with editorial rhythm, responsive precision, and product-level usability.',
  },
  {
    title: 'Backend & APIs',
    tools: 'Laravel, Node.js, Next.js, PHP, Python, Java, API REST',
    note: 'Secure service layers, business logic, integrations, and maintainable code foundations.',
  },
  {
    title: 'Data & infrastructure',
    tools: 'MySQL, PostgreSQL, SQLite, Docker, Linux, GitHub, CI/CD, Nginx, Postman, Office 365',
    note: 'Data models, deployment pipelines, environments, and operational reliability.',
  },
  {
    title: 'AI & automation',
    tools: 'OpenAI API, Gemini API, Claude API, AI agents, scraping, data processing, prompt engineering, automation',
    note: 'Automation systems that reduce workload and unlock faster business decisions.',
  },
];

const timeline = [
  {
    period: '2025—2026',
    title: 'Responsable du Département Technique & Full Stack Developer',
    org: 'MIC SARL',
    text: 'Leading technical project direction, development coordination, trainee supervision, Mobile Money integration, and AI automation initiatives.',
  },
  {
    period: '2025—Present',
    title: 'Founder & Developer',
    org: 'C-CONNECT',
    text: 'Conceiving and building a secure pan-African collaborative platform with scalable full-stack architecture.',
  },
  {
    period: '2025',
    title: 'Web & Automation Developer',
    org: 'WeTell Africa Group',
    text: 'Built scraping and normalization tooling that automated 45% of repetitive data-processing workflows.',
  },
  {
    period: '2024',
    title: 'Web Developer',
    org: 'Patrie Art',
    text: 'Delivered and maintained an institutional website that reached more than 1,000 users.',
  },
  {
    period: '2025—Present',
    title: "Bachelor's in Software Engineering",
    org: 'University Institute of Technology of Douala',
    text: 'Continuing formal engineering training while building production products and leading technical execution.',
  },
  {
    period: '2024',
    title: 'HND in Software Engineering',
    org: 'University Institute of the Gulf of Guinea',
    text: 'Validated software engineering fundamentals before moving into larger product and leadership responsibilities.',
  },
  {
    period: '2022',
    title: 'Baccalaureate Series D',
    org: 'Lycée Général Leclerc, Yaoundé',
    text: 'Scientific foundation supporting analytical problem-solving and engineering studies.',
  },
];

const deliverables = [
  'Sitemap: Index, Story, Selected Work, Case Studies, Expertise, Leadership & Impact, Timeline, Contact.',
  'Core message: product-minded full stack developer who turns business ideas into shipped systems.',
  'Tagline: Engineering useful products, automations, and platforms with product discipline.',
  'Elevator pitch: Raphaël helps teams transform ideas, data, and operational pain points into reliable web platforms and automated workflows.',
  'Design system: dark editorial canvas, large typography, asymmetric grids, restrained blue accent, glass panels, soft gradients, and cinematic scroll pacing.',
  'Conversion path: read positioning, trust the proof, inspect case studies, understand technical depth, then start a focused conversation.',
];

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

  const cvFiles = [
    { label: 'CV EN', href: '/ABOMBA_Raphael-CV-EN.pdf', download: 'ABOMBA_Raphael-CV-EN.pdf' },
    { label: 'CV FR', href: '/ABOMBA_Raphael-CV-FR.pdf', download: 'ABOMBA_Raphael-CV-FR.pdf' },
  ];

  const downloadCV = (file = cvFiles[0]) => {
    const link = document.createElement('a');
    link.href = file.href;
    link.download = file.download;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <button type="button" className="icon-button" onClick={() => setDarkMode((value) => !value)} aria-label="Toggle color mode">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button type="button" className="nav-cta" onClick={() => downloadCV()}>
            <Download size={16} /> CV EN
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
              <a href="#work" className="primary-button">
                View selected work <ArrowUpRight size={18} />
              </a>
              <a href="mailto:assomabomba@gmail.com" className="secondary-button">
                Start a conversation
              </a>
              <a href="/ABOMBA_Raphael-CV-FR.pdf" download className="secondary-button">
                CV français <ArrowDownToLine size={18} />
              </a>
            </div>
          </div>
          <aside className="hero-card" aria-label="Positioning summary">
            <span className="availability"><span /> {t.hero.availability}</span>
            <div>
              <h2>{t.hero.cardTitle}</h2>
              <p>{t.hero.cardText}</p>
            </div>
            <div className="signature-grid">
              <span>Next.js</span><span>Laravel</span><span>Vue.js</span><span>Claude API</span><span>Docker</span><span>Mobile Money</span>
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

      <section id="impact" className="section-shell impact-section">
        <div className="impact-copy">
          <span className="section-label">05 · Leadership & impact</span>
          <h2>Built for teams that need momentum, clarity, and technical ownership.</h2>
          <p>
            I bring structure to execution: clarifying priorities, coordinating contributors, documenting standards, choosing pragmatic
            architectures, and using automation where it creates real leverage.
          </p>
        </div>
        <div className="impact-list">
          <article><Briefcase size={20} /><span>Technical project coordination and delivery standards</span></article>
          <article><Network size={20} /><span>Secure roles, authentication, integrations, and CI/CD foundations</span></article>
          <article><Award size={20} /><span>Coursera project management, Alison computer security, and ISTIA computer network certifications</span></article>
          <article><Globe2 size={20} /><span>French fluent, professional English, internationally oriented availability</span></article>
        </div>
      </section>

      <section id="timeline" className="section-shell timeline-section">
        <span className="section-label">06 · Experience timeline</span>
        <h2>Progression through increasingly larger systems.</h2>
        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={`${item.period}-${item.org}`}>
              <time>{item.period}</time>
              <div>
                <h3>{item.title}</h3>
                <p className="timeline-org">{item.org}</p>
                <p>{item.text}</p>
              </div>
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
          <a href="mailto:assomabomba@gmail.com" className="primary-button"><Mail size={18} /> assomabomba@gmail.com</a>
          <a href="https://wa.me/237654746532" className="secondary-button"><Phone size={18} /> +237 654 746 532</a>
          {cvFiles.map((file) => (
            <a key={file.href} href={file.href} download={file.download} className="secondary-button">
              <Download size={18} /> Download {file.label}
            </a>
          ))}
        </div>
        <div className="social-row" aria-label={t.contact.socials}>
          <a href="https://github.com/BryanSeidy" target="_blank" rel="noopener noreferrer"><Github size={18} /> GitHub</a>
          <a href="https://www.linkedin.com/in/seidy-bryan" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /> LinkedIn</a>
          <a href="https://bryanseidy-portofolio.vercel.app" target="_blank" rel="noopener noreferrer"><Globe2 size={18} /> Portfolio</a>
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
