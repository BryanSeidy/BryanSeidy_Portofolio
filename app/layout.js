import './globals.css';

const siteUrl = 'https://bryanseidy-portofolio.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ABOMBA Raphaël — Product-Minded Full Stack Developer',
    template: '%s | ABOMBA Raphaël',
  },
  description:
    'Portfolio of ABOMBA Raphaël, a product-minded full stack developer, technical project lead, and AI automation builder creating SaaS platforms and business systems.',
  keywords: [
    'ABOMBA Raphaël',
    'BryanSeidy',
    'Full Stack Developer Cameroon',
    'Product Engineer',
    'Technical Project Lead',
    'AI Automation Builder',
    'Next.js Developer',
    'SaaS Developer',
  ],
  authors: [{ name: 'ABOMBA Raphaël' }],
  creator: 'ABOMBA Raphaël',
  openGraph: {
    title: 'ABOMBA Raphaël — Product-Minded Full Stack Developer',
    description:
      'Technical project lead and AI automation builder delivering SaaS platforms, web systems, and measurable business value.',
    url: siteUrl,
    siteName: 'ABOMBA Raphaël Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABOMBA Raphaël — Product-Minded Full Stack Developer',
    description: 'SaaS platforms, AI automations, and technical project leadership from Douala, Cameroon.',
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
