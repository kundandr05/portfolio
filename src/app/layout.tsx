import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ParticleBackground from '@/components/shared/ParticleBackground';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata: Metadata = {
  title: 'Cyberpunk Portfolio | Developer & Creator',
  description: 'A futuristic portfolio showcasing my projects and skills.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="bg-black text-white min-h-screen flex flex-col antialiased selection:bg-neon-cyan selection:text-black">
        <ParticleBackground />
        <Navbar />
        <main className="flex-grow pt-16 container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
