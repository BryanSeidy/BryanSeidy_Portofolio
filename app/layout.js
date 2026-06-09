import './globals.css';

const siteUrl = 'https://bryanseidy-portofolio.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ABOMBA Raphaël — Product-Minded Full Stack Developer & Technical Project Lead',
    template: '%s | ABOMBA Raphaël',
  },
  description:
    'Portfolio of ABOMBA Raphaël, a product-minded full stack developer and technical project lead building SaaS platforms, AI automation systems, Mobile Money integrations and business-focused web products.',
  keywords: [
    'ABOMBA Raphaël',
    'BryanSeidy',
    'Product-Minded Full Stack Developer',
    'Technical Project Lead',
    'Product Engineer',
    'Full Stack Developer Cameroon',
    'SaaS Developer',
    'AI Automation Builder',
    'Mobile Money Integration',
    'Next.js Developer',
    'Remote Full Stack Developer',
  ],
  authors: [{ name: 'ABOMBA Raphaël' }],
  creator: 'ABOMBA Raphaël',
  openGraph: {
    title: 'ABOMBA Raphaël — Product-Minded Full Stack Developer & Technical Project Lead',
    description:
      'I design, build and lead digital products that solve business problems: SaaS platforms, automation systems, AI-powered workflows and technical project delivery.',
    url: siteUrl,
    siteName: 'ABOMBA Raphaël Portfolio',
    locale: 'en_US',
    alternateLocale: ['fr_FR', 'ja_JP'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABOMBA Raphaël — Product-Minded Full Stack Developer & Technical Project Lead',
    description:
      'SaaS platforms, AI automation, Mobile Money integrations and technical project leadership from Douala, Cameroon.',
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      en: siteUrl,
      fr: siteUrl,
      ja: siteUrl,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
