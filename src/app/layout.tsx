import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Fira_Code } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AuroraBackground from '@/components/shared/AuroraBackground';
import CustomCursor from '@/components/shared/CustomCursor';
import Preloader from '@/components/shared/Preloader';
import ScrollProgress from '@/components/shared/ScrollProgress';
import ScrollToTop from '@/components/shared/ScrollToTop';

import Scene from '@/components/shared/Scene';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' });

export const metadata: Metadata = {
  metadataBase: new URL('https://kundandr-portfolio.vercel.app/'),
  title: 'Kundan DR | AI & Machine Learning Engineer',
  description: 'Portfolio of Kundan DR, an AI & Machine Learning Engineer, Backend Developer (FastAPI), Published Researcher, and Author. Showcasing projects in Agentic AI, LLMs, and Software Development.',
  keywords: ['Kundan DR', 'AI Engineer', 'Machine Learning', 'FastAPI', 'Agentic AI', 'Backend Developer', 'Portfolio'],
  openGraph: {
    images: ['/suit-photo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/suit-photo.jpg'],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable}`}>
      <body className="bg-transparent text-foreground min-h-screen flex flex-col antialiased selection:bg-neon-cyan selection:text-black">
        <Scene />
        <Preloader />
        <ScrollProgress />
        <ScrollToTop />
        <CustomCursor />
        <AuroraBackground />
        <Navbar />
        <main className="flex-grow pt-16 container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
