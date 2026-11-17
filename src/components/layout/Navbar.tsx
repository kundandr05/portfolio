"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import ResumeModal from '@/components/shared/ResumeModal';

const navItems = [
    { name: 'Work', path: '/#work' },
    { name: 'About', path: '/#about' },
    { name: 'Research & Books', path: '/#research' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Contact', path: '/#contact' }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('/#work');
    const [isResumeOpen, setIsResumeOpen] = useState(false);
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
            { rootMargin: '-25% 0px -65% 0px' }
        );

        navItems.forEach((item) => {
            const id = item.path.replace('/#', '');
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [pathname]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
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
        <>
            <header className="fixed top-0 left-0 right-0 z-40 bg-[#faf8f5]/90 dark:bg-[#141413]/90 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800 transition-colors">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        
                        {/* Wordmark */}
                        <Link
                            href="/"
                            className="group flex items-baseline gap-2 text-stone-900 dark:text-stone-100 font-bold tracking-tight hover:text-[#c2410c] transition-colors"
                        >
                            <span className="font-serif-editorial text-2xl font-semibold tracking-tight">
                                Kundan DR
                            </span>
                            <span className="hidden sm:inline text-xs font-mono text-stone-400 dark:text-stone-500 font-normal">
                                / engineer &bull; author
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.path;
                                return (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        onClick={(e) => handleNavClick(e, item.path)}
                                        className={cn(
                                            "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all",
                                            isActive
                                                ? "text-[#c2410c] dark:text-orange-400 font-semibold bg-orange-50 dark:bg-orange-950/40"
                                                : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100/60 dark:hover:bg-stone-800/60"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}

                            <div className="pl-3 border-l border-stone-200 dark:border-stone-800 ml-2">
                                <button
                                    onClick={() => setIsResumeOpen(true)}
                                    className="btn-editorial-primary text-xs !py-1.5 !px-3"
                                >
                                    <FileText className="w-3.5 h-3.5" />
                                    Resume
                                </button>
                            </div>
                        </nav>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center gap-2 md:hidden">
                            <button
                                onClick={() => setIsResumeOpen(true)}
                                className="btn-editorial-primary text-xs !py-1.5 !px-2.5"
                                aria-label="View Resume"
                            >
                                <FileText className="w-3.5 h-3.5" />
                            </button>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 focus:outline-none"
                                aria-label="Toggle navigation menu"
                                aria-expanded={isOpen}
                            >
                                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                {isOpen && (
                    <div className="md:hidden border-t border-stone-200 dark:border-stone-800 bg-[#faf8f5] dark:bg-[#141413] px-4 pt-3 pb-6 space-y-1 shadow-lg">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={(e) => handleNavClick(e, item.path)}
                                className={cn(
                                    "block px-3 py-2 rounded-lg text-sm font-medium",
                                    activeSection === item.path
                                        ? "text-[#c2410c] font-semibold bg-orange-50 dark:bg-orange-950/40"
                                        : "text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                )}
            </header>

            <ResumeModal
                isOpen={isResumeOpen}
                onClose={() => setIsResumeOpen(false)}
            />
        </>
    );
}
