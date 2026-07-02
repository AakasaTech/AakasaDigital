import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import './globals.css';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aakasa Digital',
  alternateName: 'Aakasa Digital (Pvt) Ltd',
  url: 'https://aakasa.dev',
  logo: 'https://aakasa.dev/logo.png',
  description:
    'Aakasa Digital builds practical SaaS and AI-powered software products for freelancers, startups, and small businesses.',
  email: 'hello@aakasa.dev',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@aakasa.dev',
    contactType: 'customer support',
    availableLanguage: 'English',
  },
  // Add social profile URLs to sameAs when accounts are created:
  // e.g. 'https://twitter.com/aakasadigital', 'https://linkedin.com/company/aakasadigital'
  sameAs: [],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Aakasa Digital',
  url: 'https://aakasa.dev',
};

export const metadata: Metadata = {
  title: {
    default: 'Aakasa Digital | Practical SaaS & AI-Powered Business Software',
    template: '%s | Aakasa Digital',
  },
  description:
    'Aakasa Digital builds SaaS and AI-powered software products for freelancers, startups, and small businesses.',
  keywords: [
    'SaaS',
    'AI software',
    'business software',
    'invoicing',
    'help desk',
    'small business',
    'freelancer tools',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico',        sizes: 'any' },
      { url: '/favicon-16x16.png',  sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png',  sizes: '32x32', type: 'image/png' },
      { url: '/app_icon.png',       sizes: '512x512', type: 'image/png' },
    ],
    shortcut: ['/app_icon.png'],
    apple:    { url: '/apple-touch-icon.png' },
    other:    [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://aakasa.dev',
    siteName:    'Aakasa Digital',
    title:       'Aakasa Digital | Practical SaaS & AI-Powered Business Software',
    description: 'Aakasa Digital builds SaaS and AI-powered software products for freelancers, startups, and small businesses.',
    images: [{ url: '/android-chrome-512x512.png', width: 512, height: 512 }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Aakasa Digital | Practical SaaS & AI-Powered Business Software',
    description: 'Aakasa Digital builds SaaS and AI-powered software products for freelancers, startups, and small businesses.',
    images:      ['/android-chrome-512x512.png'],
  },
  metadataBase: new URL('https://aakasa.dev'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <JsonLd schema={[organizationSchema, websiteSchema]} />
      </head>
      <body className="antialiased">
        {/* Skip to main content — keyboard navigation a11y */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
