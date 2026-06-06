'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  Award,
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
  Sparkles,
  Sun,
  Target,
  TerminalSquare,
  Users,
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
  { value: '4', label: 'flagship systems repositioned as case studies' },
];

const brandPillars = [
  {
    title: 'Product judgement',
    text: 'I translate ambiguous business needs into clear product decisions, scoped releases, and interfaces people can actually use.',
    icon: Target,
  },
  {
    title: 'Full-stack execution',
    text: 'I design, build, deploy, and maintain systems across frontend, backend, databases, APIs, authentication, and CI/CD.',
    icon: Layers,
  },
  {
    title: 'Automation leverage',
    text: 'I use scraping, data processing, AI APIs, and agent workflows to remove repetitive work and accelerate operations.',
    icon: Zap,
  },
  {
    title: 'Technical leadership',
    text: 'I coordinate contributors, establish standards, review implementation choices, and keep projects moving toward measurable outcomes.',
    icon: Users,
  },
];

const caseStudies = [
  {
    name: 'MIC SARL',
    label: 'Technical Department Leadership',
    period: '2025—2026',
    image: '/images/projects/civika.png',
    summary:
      'A multi-service technical department rebuilt around product delivery, internship operations, internal standards, and payment integrations.',
    problem:
      'The organization needed reliable technical coordination across several product initiatives while maintaining speed, clarity, and implementation quality.',
    context:
      'Raphaël operated as Responsable du Département Technique & Full Stack Developer, coordinating digital projects and supervising trainees.',
    architecture:
      'Next.js, TypeScript, React, Laravel, MySQL, Tailwind CSS, Docker, GitHub, APIs, Mobile Money integrations, and agent-based workflows.',
    decisions: [
      'Created reusable development standards to align delivery across contributors.',
      'Combined e-learning, e-commerce, real estate, and service modules into a coherent multi-SaaS platform direction.',
      'Integrated Mobile Money payment services and explored AI agents for operational automation.',
    ],
    results: ['Clearer project governance', 'Stronger delivery consistency', 'Reusable technical foundations'],
    impact: 'Raised the technical maturity of the organization while creating conditions for faster product releases.',
  },
  {
    name: 'C-CONNECT',
    label: 'Pan-African Collaboration Platform',
    period: '2025—Present',
    image: '/images/projects/civika.png',
    summary:
      'A collaborative MVP designed to connect civil society organizations, partners, roles, and secure operational workflows.',
    problem:
      'Civil society actors needed a structured digital space to collaborate, manage users, and create trusted connections beyond informal channels.',
    context:
      'Founder and developer role covering product conception, architecture, implementation, authentication, security, and production readiness.',
    architecture: 'Next.js, Node.js, TypeScript, Tailwind CSS, PostgreSQL, Docker, GitHub, CI/CD.',
    decisions: [
      'Built the MVP around roles, permissions, and secure authentication rather than cosmetic pages.',
      'Prioritized scalable full-stack architecture before public launch.',
      'Designed the product as a pan-African collaboration layer, not a simple directory.',
    ],
    results: ['Operational MVP', 'Scalable architecture', 'Security-first user foundation'],
    impact: 'Created a launchable product foundation for a regional ecosystem platform.',
  },
  {
    name: 'WeTell Africa',
    label: 'Scraping & Data Normalization Tool',
    period: '2025',
    image: '/images/projects/cinema-scraper.png',
    summary:
      'A Python automation system that turns fragmented online information into structured, usable decision data.',
    problem:
      'Teams were spending too much time collecting, cleaning, and organizing information from multiple sources.',
    context:
      'Raphaël designed an internal scraping and normalization tool to reduce repetitive processing and improve strategic visibility.',
    architecture: 'Python, data processing pipelines, automation scripts, API deployment patterns, and structured datasets.',
    decisions: [
      'Focused the tool on normalization quality instead of raw extraction volume.',
      'Automated repetitive collection tasks to free the team from low-value manual work.',
      'Structured outputs for analysis, reporting, and decision support.',
    ],
    results: ['45% automation rate', 'Reduced repetitive processing', 'Cleaner strategic datasets'],
    impact: 'Converted manual operational work into a repeatable data workflow that supports faster decisions.',
  },
  {
    name: 'Patrie Art',
    label: 'Institutional Cultural Platform',
    period: '2024',
    image: '/images/projects/patrie-art.png',
    summary:
      'A complete web platform for a cultural association, focused on visibility, maintenance, and public access to artistic initiatives.',
    problem:
      'The association needed a credible digital presence to present its mission, events, and artists to a broader audience.',
    context:
      'Raphaël led conception, implementation, online deployment, maintenance, and continuous improvement of the platform.',
    architecture: 'PHP, JavaScript, HTML, CSS, MySQL, content structure, hosting, and maintenance workflows.',
    decisions: [
      'Designed the platform around institutional clarity rather than decorative complexity.',
      'Optimized UX, performance, and content hierarchy for public comprehension.',
      'Built a maintainable structure that could evolve with the association.',
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
    tools: 'MySQL, PostgreSQL, SQLite, Docker, Linux, GitHub, CI/CD, Nginx, Postman',
    note: 'Data models, deployment pipelines, environments, and operational reliability.',
  },
  {
    title: 'AI & automation',
    tools: 'OpenAI API, Gemini API, agents, scraping, data processing, prompt engineering',
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
    period: '2024—Present',
    title: 'Licence in Software Engineering',
    org: 'Institut Universitaire de Technologie de Douala',
    text: 'Continuing formal engineering training while building production products and leading technical execution.',
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_Raphael_ABOMBA.pdf';
    link.download = 'CV_Raphael_ABOMBA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className={darkMode ? 'portfolio-shell dark' : 'portfolio-shell light'}>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <div className="grain" aria-hidden="true" />
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />

      <nav className="navigation" aria-label="Primary navigation">
        <a href="#home" className="brand-mark" aria-label="ABOMBA Raphaël home">
          <span>AR</span>
        </a>

        <div className="nav-links" aria-label="Portfolio sections">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={activeSection === item.id ? 'active' : ''}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button type="button" className="icon-button" onClick={() => setDarkMode((value) => !value)} aria-label="Toggle color mode">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button type="button" className="nav-cta" onClick={downloadCV}>
            <Download size={16} /> CV
          </button>
          <button type="button" className="mobile-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}

      <section id="home" className="hero section-shell">
        <div className="hero-kicker reveal">Product-Minded Full Stack Developer · Technical Project Lead · AI & Automation Builder</div>
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">Douala, Cameroon · Available for product teams, SaaS builds, and automation work</p>
            <h1>Engineering useful products from strategy to shipped systems.</h1>
            <p className="hero-lede">
              I help organizations transform business ideas, operational bottlenecks, and data-heavy workflows into elegant web platforms,
              secure architectures, and automation systems that create measurable value.
            </p>
            <div className="hero-actions">
              <a href="#work" className="primary-button">
                View selected work <ArrowUpRight size={18} />
              </a>
              <a href="mailto:assomabomba@gmail.com" className="secondary-button">
                Start a conversation
              </a>
            </div>
          </div>

          <aside className="hero-card reveal delay-1" aria-label="Professional snapshot">
            <div className="availability"><span /> Open to CDI, freelance, remote and international work</div>
            <h2>ABOMBA Raphaël</h2>
            <p>Product-minded builder with full-stack depth, leadership range, and a bias for systems that move businesses forward.</p>
            <div className="signature-grid">
              <span>Next.js</span><span>Laravel</span><span>TypeScript</span><span>AI APIs</span><span>Docker</span><span>Automation</span>
            </div>
          </aside>
        </div>

        <div className="metric-strip reveal delay-2">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <a href="#story" className="scroll-cue" aria-label="Scroll to story">
          Scroll <ChevronDown size={18} />
        </a>
      </section>

      <section id="story" className="section-shell split-section">
        <div className="section-label">01 · Strategy synthesis</div>
        <div className="section-copy">
          <p className="eyebrow">From CV analysis to sharper positioning</p>
          <h2>Not a student portfolio. A builder narrative with leadership proof.</h2>
          <p>
            The old CV presented skills as a list. The new CV reveals a stronger story: Raphaël is already operating across product thinking,
            project coordination, full-stack implementation, data automation, stakeholder support, and production maintenance.
          </p>
          <div className="analysis-grid">
            {analysisHighlights.map((item) => (
              <article key={item}>
                <Sparkles size={18} />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell brand-section">
        <div className="section-label">02 · Personal brand</div>
        <div className="brand-statement">
          <p className="eyebrow">Core message</p>
          <h2>Product discipline, engineering depth, and automation leverage — combined in one builder.</h2>
          <p>
            My value is not only writing code. It is understanding why a product should exist, shaping how it should work, building the
            technical foundation, and improving the operational system around it.
          </p>
        </div>
        <div className="pillar-grid">
          {brandPillars.map(({ title, text, icon: Icon }) => (
            <article className="pillar-card" key={title}>
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section-shell work-section">
        <div className="section-heading">
          <div>
            <span className="section-label">03 · Selected work</span>
            <h2>Four systems. Four types of value.</h2>
          </div>
          <p>
            Each project is framed as a business problem, a product decision, and a technical system — because serious portfolios should show
            judgement, not just screenshots.
          </p>
        </div>

        <div className="case-grid">
          {caseStudies.map((project, index) => (
            <article className="case-card" key={project.name}>
              <div className="case-image">
                <Image src={project.image} alt={`${project.name} project visual`} fill sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <div className="case-content">
                <div className="case-meta"><span>{String(index + 1).padStart(2, '0')}</span>{project.period}</div>
                <h3>{project.name}</h3>
                <p className="case-label">{project.label}</p>
                <p>{project.summary}</p>
                <a href={`#case-${index}`}>
                  Read case study <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell case-study-section" aria-label="Detailed case studies">
        {caseStudies.map((project, index) => (
          <article id={`case-${index}`} className="case-study" key={project.name}>
            <div className="case-study-intro">
              <span className="section-label">Case study · {String(index + 1).padStart(2, '0')}</span>
              <h2>{project.name}</h2>
              <p>{project.summary}</p>
            </div>
            <div className="case-study-grid">
              <div>
                <h3>Problem</h3>
                <p>{project.problem}</p>
              </div>
              <div>
                <h3>Context</h3>
                <p>{project.context}</p>
              </div>
              <div className="wide">
                <h3>Architecture</h3>
                <p>{project.architecture}</p>
              </div>
              <div className="wide">
                <h3>Technical decisions</h3>
                <ul>
                  {project.decisions.map((decision) => <li key={decision}>{decision}</li>)}
                </ul>
              </div>
              <div>
                <h3>Results</h3>
                <ul>
                  {project.results.map((result) => <li key={result}>{result}</li>)}
                </ul>
              </div>
              <div>
                <h3>Business impact</h3>
                <p>{project.impact}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section id="expertise" className="section-shell expertise-section">
        <div className="section-heading">
          <div>
            <span className="section-label">04 · Technical expertise</span>
            <h2>A stack organized around outcomes.</h2>
          </div>
          <p>
            The portfolio intentionally avoids percentage bars. Expertise is shown as product capability: interfaces, services, data,
            infrastructure, and automation.
          </p>
        </div>
        <div className="expertise-grid">
          {expertise.map((item) => (
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
          <article><Award size={20} /><span>Certifications in project management, security, web programming, and networks</span></article>
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
        <span className="section-label">07 · UX, design system & conversion strategy</span>
        <h2>The final portfolio is designed as a cinematic product story.</h2>
        <div className="blueprint-grid">
          {deliverables.map((item) => (
            <article key={item}>{item}</article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell contact-section">
        <p className="eyebrow">Let’s build the next useful system</p>
        <h2>Have a product idea, automation workflow, or technical project that needs ownership?</h2>
        <p>
          I am available for product development, technical leadership, SaaS MVPs, AI/API integrations, and automation systems.
        </p>
        <div className="contact-actions">
          <a href="mailto:assomabomba@gmail.com" className="primary-button"><Mail size={18} /> assomabomba@gmail.com</a>
          <a href="tel:+237654746532" className="secondary-button"><Phone size={18} /> +237 654 746 532</a>
        </div>
        <div className="social-row">
          <a href="https://github.com/BryanSeidy" target="_blank" rel="noopener noreferrer"><Github size={18} /> GitHub</a>
          <a href="https://www.linkedin.com/in/seidy-bryan" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /> LinkedIn</a>
          <a href="https://bryanseidy-portofolio.vercel.app" target="_blank" rel="noopener noreferrer"><Globe2 size={18} /> Portfolio</a>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 ABOMBA Raphaël</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
};

export default Portfolio;
