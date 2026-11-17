"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import MagneticWrapper from '@/components/shared/MagneticWrapper';

const navItems = [
    { name: 'Home', path: '/#home' },
    { name: 'Studio Desk', path: '/#desk' },
    { name: 'About', path: '/#about' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Publications', path: '/#publications' },
    { name: 'Contact', path: '/#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('/#home');
    const pathname = usePathname();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`/#${entry.target.id}`);
                    }
                });
            },
            { rootMargin: '-20% 0px -70% 0px' }
        );

        navItems.forEach((item) => {
            const id = item.path.replace('/#', '');
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [pathname]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hash = window.location.hash;
            if (hash) {
                setActiveSection(`/${hash}`);
            }
        }
    }, [pathname]);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        setIsOpen(false);
        const id = path.replace('/#', '');
        const element = document.getElementById(id);
        if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', path);
            setActiveSection(path);
        }
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/#home" onClick={(e) => handleLinkClick(e, '/#home')} className="flex items-center space-x-2.5 group">
                        <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-sm group-hover:bg-blue-600 transition-colors">
                            K
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-black font-display tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                                KUNDAN DR
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono">
                                AI Engineer &bull; Author
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <MagneticWrapper key={item.path}>
                                <Link
                                    href={item.path}
                                    onClick={(e) => handleLinkClick(e, item.path)}
                                    className={cn(
                                        "px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 relative group inline-block",
                                        activeSection === item.path
                                            ? "text-blue-600 bg-blue-50/80 font-bold"
                                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                                    )}
                                >
                                    <span>{item.name}</span>
                                </Link>
                            </MagneticWrapper>
                        ))}

                        <a
                            href="mailto:kundandr05@gmail.com"
                            className="ml-3 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-blue-600 transition-colors shadow-sm"
                        >
                            Let&apos;s Talk
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-700 hover:text-blue-600 p-2 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-lg"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={(e) => handleLinkClick(e, item.path)}
                                className={cn(
                                    "block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors",
                                    activeSection === item.path
                                        ? "text-blue-600 bg-blue-50 font-bold"
                                        : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-2">
                            <a
                                href="mailto:kundandr05@gmail.com"
                                className="block w-full text-center px-4 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-bold shadow-sm"
                            >
                                Contact Directly
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
