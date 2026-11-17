import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  metadataBase: new URL('https://kundandr-portfolio.vercel.app/'),
  title: 'Kundan DR — AI & ML Engineer, Researcher, Author',
  description: 'Portfolio of Kundan DR, AI & Machine Learning student at MIT Mysuru. Published author in IJCRT, author of two books on focus, and UI/UX design intern at WizzyBox.',
  keywords: [
    'Kundan DR',
    'AI Engineer',
    'Machine Learning',
    'Agentic AI',
    'FastAPI',
    'WizzyBox',
    'MIT Mysuru',
    'IJCRT',
    'DispatchGrid',
    'Zeno AI'
  ],
  authors: [{ name: 'Kundan DR', url: 'https://kundandr-portfolio.vercel.app' }],
  creator: 'Kundan DR',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kundandr-portfolio.vercel.app',
    title: 'Kundan DR — AI & ML Engineer, Researcher, Author',
    description: 'Autonomous systems, performant backends, and human-centered software. B.E. AIML at MIT Mysuru.',
    siteName: 'Kundan DR Portfolio',
    images: [
      {
        url: '/suit-photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Kundan DR'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kundan DR — AI & ML Engineer, Researcher, Author',
    description: 'Autonomous systems, performant backends, and human-centered software. B.E. AIML at MIT Mysuru.',
    images: ['/suit-photo.jpg']
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kundan DR',
    url: 'https://kundandr-portfolio.vercel.app',
    jobTitle: 'AI & Machine Learning Engineer',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Maharaja Institute of Technology, Mysuru'
    },
    worksFor: {
      '@type': 'Organization',
      name: 'WizzyBox Private Limited'
    },
    sameAs: [
      'https://github.com/kundandr05',
      'https://linkedin.com/in/kundan-d-r-914274310'
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-orange-100 selection:text-orange-950" suppressHydrationWarning>
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-stone-900 focus:text-white focus:rounded-lg focus:shadow-lg focus:font-semibold text-xs"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow pt-20 relative z-10">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
