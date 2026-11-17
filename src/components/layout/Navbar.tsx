"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/shared/ThemeToggle';
import MagneticWrapper from '@/components/shared/MagneticWrapper';

const navItems = [
    { name: 'Home', path: '/#home' },
    { name: 'About', path: '/#about' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Courses', path: '/#courses' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Achievements', path: '/#achievements' },
    { name: 'Publications', path: '/#publications' },
    { name: 'Contact', path: '/#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('/#home');
    const pathname = usePathname();

    useEffect(() => {
        // Scroll spy logic
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

    // Update active section on initial load or manual navigation
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
            // Update URL hash without jumping
            window.history.pushState(null, '', path);
            setActiveSection(path);
        }
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/#home" onClick={(e) => handleLinkClick(e, '/#home')} className="flex items-center space-x-2 group">
                        <Terminal className="w-7 h-7 text-blue-600 group-hover:text-indigo-600 transition-colors duration-300" />
                        <span className="text-xl font-bold font-display tracking-wider text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                            KUNDAN DR
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex items-center space-x-6">
                        <motion.div 
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                                }
                            }}
                            className="flex space-x-1"
                        >
                            {navItems.map((item) => (
                                <motion.div 
                                    key={item.path}
                                    variants={{
                                        hidden: { opacity: 0, y: -10 },
                                        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
                                    }}
                                >
                                    <MagneticWrapper>
                                        <Link
                                            href={item.path}
                                            onClick={(e) => handleLinkClick(e, item.path)}
                                            className={cn(
                                                "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group overflow-hidden inline-block",
                                                activeSection === item.path
                                                    ? "text-blue-600 font-semibold"
                                                    : "text-slate-600 hover:text-slate-900"
                                            )}
                                        >
                                            <span className="relative z-10">{item.name}</span>
                                            {activeSection === item.path && (
                                                <motion.div
                                                    layoutId="navbar-indicator"
                                                    className="absolute inset-0 bg-blue-50 border-b-2 border-blue-600 rounded-lg"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                            <div className="absolute inset-0 bg-slate-100/60 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                                        </Link>
                                    </MagneticWrapper>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="flex items-center space-x-4 pl-6 border-l border-slate-200">
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="xl:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-700 hover:text-blue-600 focus:outline-none p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
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
                        className="xl:hidden bg-white/95 border-b border-slate-200 shadow-xl overflow-hidden backdrop-blur-md"
                    >
                        <div className="px-3 pt-3 pb-4 space-y-1 sm:px-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    onClick={(e) => handleLinkClick(e, item.path)}
                                    className={cn(
                                        "block px-3 py-2.5 rounded-lg text-base font-medium transition-colors duration-200",
                                        activeSection === item.path
                                            ? "text-blue-600 bg-blue-50 font-semibold"
                                            : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
