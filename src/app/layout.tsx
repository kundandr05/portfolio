import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AuroraBackground from '@/components/shared/AuroraBackground';
import CustomCursor from '@/components/shared/CustomCursor';
import Preloader from '@/components/shared/Preloader';
import ScrollProgress from '@/components/shared/ScrollProgress';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata: Metadata = {
  metadataBase: new URL('https://kundandr-portfolio.vercel.app/'),
  title: 'Kundan DR | AI & Machine Learning Engineer',
  description: 'Portfolio of Kundan DR, an AI & Machine Learning Engineer, Backend Developer (FastAPI), Published Researcher, and Author. Showcasing projects in Agentic AI, LLMs, and Software Development.',
  keywords: ['Kundan DR', 'AI Engineer', 'Machine Learning', 'FastAPI', 'Agentic AI', 'Backend Developer', 'Portfolio'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="bg-black text-white min-h-screen flex flex-col antialiased selection:bg-neon-cyan selection:text-black">
        <Preloader />
        <ScrollProgress />
        <CustomCursor />
        <AuroraBackground />
        <Navbar />
        <main className="flex-grow pt-16 container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
