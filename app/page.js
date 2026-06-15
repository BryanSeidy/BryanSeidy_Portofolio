import Portfolio from '../components/Portfolio';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'ABOMBA Raphaël',
  alternateName: 'BryanSeidy',
  jobTitle: 'Product-Minded Full Stack Developer & Technical Project Lead',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Douala',
    addressCountry: 'Cameroon',
  },
  email: 'mailto:abombaraphael1@gmail.com',
  telephone: '+237654746532',
  url: 'https://abomba-raphael.vercel.app',
  sameAs: ['https://github.com/BryanSeidy', 'https://www.linkedin.com/in/abomba-raphael'],
  knowsAbout: [
    'Product Engineering',
    'Full Stack Development',
    'Technical Project Leadership',
    'SaaS Platforms',
    'AI Automation',
    'Mobile Money Integrations',
    'Business Process Automation',
    'Next.js',
    'Laravel',
    'TypeScript',
    'Python',
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
