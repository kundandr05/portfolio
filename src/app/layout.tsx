import type { Metadata } from 'next';
import { Bricolage_Grotesque, Plus_Jakarta_Sans, Caveat, Fira_Code } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/shared/CustomCursor';
import ScrollProgress from '@/components/shared/ScrollProgress';
import ScrollToTop from '@/components/shared/ScrollToTop';
import SmoothScroll from '@/components/shared/SmoothScroll';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

const fira = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kundandr-portfolio.vercel.app/'),
  title: 'Kundan DR · AI & Backend Engineer · Scrapbook Portfolio',
  description: 'Undergraduate AI & ML Engineer at MIT Mysuru (2027), UI/UX Design Intern at WizzyBox, published researcher in IJCRT, and author of 2 Amazon KDP books.',
  keywords: [
    'Kundan DR',
    'AI Engineer',
    'Machine Learning',
    'FastAPI',
    'Agentic AI',
    'Backend Developer',
    'MIT Mysuru',
    'WizzyBox',
    'Portfolio'
  ],
  authors: [{ name: 'Kundan DR', url: 'https://kundandr-portfolio.vercel.app/' }],
  creator: 'Kundan DR',
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kundandr-portfolio.vercel.app/',
    title: 'Kundan DR · AI & Backend Engineer · Scrapbook Portfolio',
    description: 'Undergraduate AI & ML Engineer at MIT Mysuru, UI/UX Intern at WizzyBox, IJCRT Published Researcher, and Author.',
    siteName: 'Kundan DR Portfolio',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kundan DR Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kundan DR · AI & Backend Engineer',
    description: 'Undergraduate AI & ML Engineer at MIT Mysuru, UI/UX Intern at WizzyBox, Published Researcher, and Author.',
    images: ['/opengraph-image'],
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kundan DR',
  url: 'https://kundandr-portfolio.vercel.app/',
  jobTitle: 'AI & Machine Learning Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'WizzyBox Private Limited',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Maharaja Institute of Technology Mysuru',
  },
  sameAs: [
    'https://github.com/kundandr05',
    'https://linkedin.com/in/kundan-d-r-914274310',
    'https://amzn.in/d/08HiYofZ',
    'https://amzn.in/d/0by7Rnky',
  ],
  knowsAbout: [
    'Agentic AI',
    'FastAPI',
    'Python',
    'Next.js',
    'React',
    'Tailwind CSS',
    'Combinatorial Optimization',
    'Multi-Agent Coordination',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${jakarta.variable} ${caveat.variable} ${fira.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-[#faf7ee] text-[#18181b] min-h-screen flex flex-col antialiased selection:bg-[#fde047] selection:text-[#18181b]" suppressHydrationWarning>
        {/* Accessible Skip Link */}
        <a
          href="#projects"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#fde047] focus:text-[#18181b] focus:border-2 focus:border-[#18181b] focus:rounded-xl focus:shadow-[3px_3px_0px_#18181b] focus:font-bold"
        >
          Skip to main work
        </a>

        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main className="flex-grow pt-20 container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-x-clip">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <Analytics />
          <SpeedInsights />
        </SmoothScroll>
      </body>
    </html>
  );
}
