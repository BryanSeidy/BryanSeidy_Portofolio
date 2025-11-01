'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Mail, Github, Linkedin, ChevronDown, ExternalLink, Code, Briefcase, GraduationCap, Award, Moon, Sun, Menu, X, Download } from 'lucide-react';

// Composant principal du portfolio
const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calculer la progression du scroll
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (currentScrollY / windowHeight) * 100;
      setScrollProgress(scrolled);

      // Détecter la section active
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour télécharger le CV
  const downloadCV = () => {
    // Créer un lien de téléchargement
    const link = document.createElement('a');
    link.href = '/CV_Raphael_ABOMBA.pdf'; // Vous devrez mettre votre CV dans le dossier public
    link.download = 'CV_Raphael_ABOMBA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Données du portfolio basées sur le CV
  const portfolioData = {
    hero: {
      name: "ABOMBA Raphaël",
      title: "Software Engineering Student",
      tagline: "Building the future, one line of code at a time",
      description: "Passionate developer specializing in web development and data science"
    },
    about: {
      bio: "Dynamique, motivé avec un esprit analytique et d'équipe. Je souhaite apporter ma pierre à l'édifice dans le domaine du Développement et de la Data Science. Actuellement à la recherche d'une opportunité de stage pour mettre en pratique mes compétences tout en acquérant de nouvelles expériences professionnelles.",
      location: "Douala, Cameroon",
      email: "bryanseidy@gmail.com",
      phone: "+237 659 993 077"
    },
    skills: [
      { name: "HTML/CSS", level: 90, icon: "/images/skills/html-css.png" },
      { name: "JavaScript", level: 85, icon: "/images/skills/javascript.png" },
      { name: "TypeScript", level: 80, icon: "/images/skills/typescript.png" },
      { name: "React.js", level: 85, icon: "/images/skills/react.png" },
      { name: "Next.js", level: 80, icon: "/images/skills/nextjs.png" },
      { name: "Node.js", level: 75, icon: "/images/skills/nodejs.png" },
      { name: "Python", level: 80, icon: "/images/skills/python.png" },
      { name: "PHP", level: 75, icon: "/images/skills/php.svg" },
      { name: "MongoDB", level: 70, icon: "/images/skills/mongodb.png" },
      { name: "MySQL", level: 75, icon: "/images/skills/mysql.png" },
      { name: "Git", level: 85, icon: "/images/skills/git.png" },
      { name: "WordPress", level: 70, icon: "/images/skills/wordpress.png" }
    ],
    projects: [
      {
        title: "CIVIKA",
        description: "Première plateforme panafricaine dédiée aux Organisations de la Société Civile (OSC). Elle connecte, outille et valorise les acteurs du changement.",
        tech: ["React", "Node.js", "MongoDB", "Express.js"],
        image: "/images/projects/civika.png",
        period: "Août - Sept 2024",
        type: "Web Collaborative App"
      },
      {
        title: "Cinema Scraper",
        description: "Outil d'automatisation pour extraire les horaires de séances de cinéma, avec matching intelligent de films et export CSV. Interface GUI moderne avec thème clair/sombre.",
        tech: ["Python", "Selenium", "Tkinter", "Pandas"],
        image: "/images/projects/cinema-scraper.png",
        period: "Sept 2024",
        type: "Automation Tool"
      },
      {
        title: "Sessrail",
        description: "Plateforme de réseau ferroviaire régional avec suivi en temps réel, design responsive et cartes interactives pour la planification d'itinéraires.",
        tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"],
        image: "/images/projects/sessrail.png",
        period: "2024",
        type: "Transportation Platform"
      },
      {
        title: "Patrie Art",
        description: "Site web pour l'association culturelle Patrie Art, présentant les événements artistiques et mettant en relation artistes et public.",
        tech: ["HTML", "CSS", "JavaScript", "PHP"],
        image: "/images/projects/patrie-art.jpg",
        period: "Août - Oct 2024",
        type: "Association Website"
      },
      {
        title: "Builder Brothers",
        description: "Site vitrine pour entreprise de construction avec gestion de projets, implémentation de base de données et système de maintenance.",
        tech: ["React", "Node.js", "MySQL"],
        image: "/images/projects/builder-brothers.png",
        period: "Mai 2024",
        type: "Corporate Website"
      },
      {
        title: "Art Sous Le Manguier",
        description: "Site WordPress pour reportages artistiques avec système de matching automatique d'artistes et suivi de reportages.",
        tech: ["WordPress", "PHP", "MySQL"],
        image: "/images/projects/art-sous-le-manguier.png",
        period: "Oct 2024",
        type: "Media Platform"
      }
    ],
    experience: [
      {
        title: "Software Engineering Intern",
        company: "WE TELL Africa Group",
        period: "Juillet - Sept 2024",
        location: "Douala",
        tasks: [
          "Conception et réalisation d'une application de smart gestion des stages",
          "Manipulation du langage C et conception d'une application de gestion d'étudiants",
          "Manipulation du langage Python et conception d'une application de gestion de mots de passes"
        ]
      },
      {
        title: "Software Engineering Intern",
        company: "Patrie Art",
        period: "Août - Oct 2024",
        location: "Douala",
        tasks: [
          "Conception et implémentation du site web de l'association Patrie Art"
        ]
      },
      {
        title: "IT Maintenance Intern",
        company: "SECEL",
        period: "Juin - Août 2022",
        location: "Douala",
        tasks: [
          "Identification des ressources nécessaires à la résolution d'un dysfonctionnement",
          "Installation, entretien et dépannage des équipements informatiques",
          "Réalisation d'un câblage réseau de matériels informatiques"
        ]
      }
    ],
    education: [
      {
        degree: "BTS en Génie Logiciel",
        institution: "Institut Universitaire du Golfe de Guinée (IUGG ISTA)",
        year: "2024",
        location: "Douala"
      },
      {
        degree: "Baccalauréat série D",
        institution: "Lycée Général Leclerc",
        year: "2022",
        location: "Yaoundé"
      }
    ],
    certifications: [
      {
        title: "Attestation Sécurité Informatique",
        issuer: "ALISON USA",
        year: "2024"
      },
      {
        title: "Attestation en Programmation Web",
        issuer: "IME Douala",
        year: "2022"
      },
      {
        title: "Attestation Réseau Informatique",
        issuer: "ISTIA Yaoundé",
        year: "2022"
      }
    ]
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Barre de progression */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-700 z-[60]">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Indicateur de section */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-4">
        {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="group flex items-center"
            title={section.charAt(0).toUpperCase() + section.slice(1)}
          >
            <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === section 
                ? 'bg-blue-500 border-blue-500 scale-125' 
                : darkMode ? 'border-gray-600 hover:border-blue-400' : 'border-gray-400 hover:border-blue-500'
            }`} />
            <span className={`ml-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              activeSection === section ? 'opacity-100 text-blue-500' : ''
            }`}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </a>
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-1 w-full z-50 transition-all duration-500 ${scrollY > 50 ? (darkMode ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-white/95 backdrop-blur-lg shadow-lg') : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              RA
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`capitalize transition-all duration-300 hover:text-blue-500 ${
                    activeSection === section ? 'text-blue-500' : ''
                  }`}
                >
                  {section}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={downloadCV}
                className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>CV</span>
              </button>
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-800 transition-all duration-300"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-6 py-4 space-y-3">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  className="block capitalize py-2 hover:text-blue-500 transition-colors"
                >
                  {section}
                </a>
              ))}
              <button
                onClick={() => {
                  downloadCV();
                  setMenuOpen(false);
                }}
                className="flex items-center space-x-2 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger CV</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
               style={{ top: '20%', left: '10%', animationDuration: '4s' }} />
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
               style={{ bottom: '20%', right: '10%', animationDuration: '6s', animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto"
             style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-slide-up">
              {portfolioData.hero.name}
            </h1>
            <p className="text-2xl md:text-3xl text-blue-400 mb-6 animate-slide-up"
               style={{ animationDelay: '0.2s' }}>
              {portfolioData.hero.title}
            </p>
            <p className="text-xl md:text-2xl mb-8 opacity-80 animate-slide-up"
               style={{ animationDelay: '0.4s' }}>
              {portfolioData.hero.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
                 style={{ animationDelay: '0.6s' }}>
              <a
                href="#projects"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                See My Work
              </a>
              <button
                onClick={downloadCV}
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-blue-500 rounded-full text-lg font-semibold hover:bg-blue-500/10 hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 opacity-50" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed opacity-90">
                {portfolioData.about.bio}
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span>{portfolioData.about.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <span>{portfolioData.about.location}</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 hover:scale-105 transition-transform duration-500">
                <div className={`w-full h-full rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center text-8xl`}>
                  👨‍💻
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Skills & Tools
          </h2>
          <p className="text-center text-xl opacity-70 mb-12">I constantly try to improve</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {portfolioData.skills.map((skill, index) => (
              <div key={skill.name} className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group`}>
                <div className="w-16 h-16 mb-3 group-hover:scale-110 transition-transform duration-300 relative flex items-center justify-center">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold mb-3">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div key={project.title} className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl group`}>
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-500 mb-2">{project.type}</div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="opacity-70 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm opacity-60">{project.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:scale-102 transition-all duration-500 shadow-lg hover:shadow-2xl`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-xl text-blue-500 mb-1">{exp.company}</p>
                    <p className="opacity-60">{exp.location}</p>
                  </div>
                  <div className="text-right">
                    <Briefcase className="w-8 h-8 text-blue-500 mb-2" />
                    <p className="text-sm opacity-60">{exp.period}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-6">
                  {exp.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-2">▸</span>
                      <span className="opacity-80">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 mr-3 text-blue-500" />
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                  <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                  <p className="text-blue-500 mb-1">{edu.institution}</p>
                  <p className="text-sm opacity-60">{edu.year} • {edu.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold mb-8 flex items-center">
              <Award className="w-8 h-8 mr-3 text-blue-500" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {portfolioData.certifications.map((cert, index) => (
                <div key={index} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:scale-105 transition-transform duration-300`}>
                  <h4 className="font-bold mb-2">{cert.title}</h4>
                  <p className="text-sm text-blue-500 mb-1">{cert.issuer}</p>
                  <p className="text-sm opacity-60">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-xl opacity-80 mb-8">
              Intéressé par une collaboration ? N'hésitez pas à me contacter !
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:bryanseidy@gmail.com"
                className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="opacity-60 mb-4 md:mb-0">
              © 2024 ABOMBA Raphaël. All rights reserved.
            </p>
            <a
              href="#home"
              className="text-blue-500 hover:text-purple-600 transition-colors duration-300 flex items-center space-x-2"
            >
              <span>Back to top</span>
              <ChevronDown className="w-4 h-4 rotate-180" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;