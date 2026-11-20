"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import ResumeModal from '@/components/shared/ResumeModal';

const navLinks = [
  { id: 'projects', name: 'Work', href: '/#projects', color: 'hover:bg-[#fde047]' },
  { id: 'about', name: 'About', href: '/#about', color: 'hover:bg-[#38bdf8]' },
  { id: 'publications', name: 'Research & Books', href: '/#publications', color: 'hover:bg-[#ef4444] hover:text-white' },
  { id: 'experience', name: 'Experience', href: '/#experience', color: 'hover:bg-[#22c55e] hover:text-white' },
  { id: 'skills', name: 'Skills', href: '/#skills', color: 'hover:bg-[#fde047]' },
  { id: 'contact', name: 'Contact', href: '/#contact', color: 'hover:bg-[#38bdf8]' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');

  useEffect(() => {
    const sectionIds = ['projects', 'about', 'publications', 'experience', 'skills', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-3 sm:top-4 left-0 right-0 z-40 px-3 sm:px-6 max-w-6xl mx-auto">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 350, damping: 24 }}
          className="bg-[#ffffff] border-2 border-[#18181b] rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 shadow-[4px_4px_0px_#18181b] flex items-center justify-between relative"
        >
          {/* Subtle Decorative Washi Tape on top left corner */}
          <div className="hidden sm:block absolute -top-2.5 left-8 w-16 h-4 bg-[#fde047]/80 border-t border-b border-[#18181b]/30 rotate-[-2deg] pointer-events-none shadow-xs" />

          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Kundan DR Homepage"
          >
            <motion.span
              whileHover={{ rotate: 12, scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              className="w-8 h-8 rounded-lg bg-[#ef4444] text-white border-2 border-[#18181b] flex items-center justify-center font-black font-display text-base shadow-[2px_2px_0px_#18181b]"
            >
              K
            </motion.span>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg tracking-tight text-[#18181b] group-hover:text-[#ef4444] transition-colors">
                kundan.dr
              </span>
              <span className="text-[10px] font-mono text-stone-500 font-bold uppercase tracking-wider -mt-1 hidden xs:block">
                ai &amp; backend
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items with Active Indicator Gliding on Scroll */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <div key={link.id} className="relative">
                  <Link
                    href={link.href}
                    className="relative px-3 py-1.5 text-xs font-bold text-[#18181b] rounded-lg transition-colors block z-10 hover:text-[#ef4444]"
                  >
                    {link.name}
                  </Link>

                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#fde047] border-2 border-[#18181b] rounded-lg shadow-[2px_2px_0px_#18181b] z-0 pointer-events-none"
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Action: Resume & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-extrabold text-[#18181b] bg-[#fde047] border-2 border-[#18181b] rounded-xl shadow-[3px_3px_0px_#18181b] hover:-translate-y-0.5 hover:rotate-1 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#18181b] transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#18181b]" />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#18181b] bg-white border-2 border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b] hover:bg-[#fde047] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="md:hidden mt-2 p-5 bg-[#faf7ee] border-2 border-[#18181b] rounded-2xl shadow-[6px_6px_0px_#18181b] flex flex-col gap-3"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#18181b]/20">
                <span className="text-xs font-mono font-bold text-stone-500 uppercase">Directory</span>
                <span className="text-xs font-handwriting text-stone-600">tumble into a section ↘</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.04 }}
                    whileHover={{ scale: 1.04, rotate: 0 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`p-3 text-sm font-extrabold text-[#18181b] bg-white border-2 border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b] transition-all block ${
                        idx % 2 === 0 ? '-rotate-1' : 'rotate-1'
                      } ${link.color}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="pt-2 border-t border-[#18181b]/20 flex justify-between items-center text-xs font-mono text-stone-500">
                <span>Graduating 2027 · MIT Mysuru</span>
                <a
                  href="mailto:kundandr05@gmail.com"
                  className="font-bold text-[#ef4444] hover:underline"
                >
                  kundandr05@gmail.com
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
