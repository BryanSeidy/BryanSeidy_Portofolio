import Portfolio from '../components/Portfolio';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'ABOMBA Raphaël',
  alternateName: 'BryanSeidy',
  jobTitle: 'Product-Minded Full Stack Developer and Technical Project Lead',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Douala',
    addressCountry: 'Cameroon',
  },
  email: 'mailto:assomabomba@gmail.com',
  telephone: '+237654746532',
  url: 'https://bryanseidy-portofolio.vercel.app',
  sameAs: ['https://github.com/BryanSeidy', 'https://www.linkedin.com/in/seidy-bryan'],
  knowsAbout: [
    'Full Stack Development',
    'Technical Project Leadership',
    'SaaS Platforms',
    'AI Automation',
    'Mobile Money Integrations',
    'Next.js',
    'Laravel',
    'Vue.js',
    'TypeScript',
    'Python',
    'Claude API',
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Portfolio />
    </>
  );
}
