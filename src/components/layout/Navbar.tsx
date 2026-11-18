"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import ResumeModal from '@/components/shared/ResumeModal';

const navLinks = [
  { name: 'Work', href: '/#projects', color: 'hover:bg-[#fde047]' },
  { name: 'About', href: '/#about', color: 'hover:bg-[#38bdf8]' },
  { name: 'Research & Books', href: '/#publications', color: 'hover:bg-[#ef4444] hover:text-white' },
  { name: 'Experience', href: '/#experience', color: 'hover:bg-[#22c55e] hover:text-white' },
  { name: 'Skills', href: '/#skills', color: 'hover:bg-[#fde047]' },
  { name: 'Contact', href: '/#contact', color: 'hover:bg-[#38bdf8]' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed top-3 sm:top-4 left-0 right-0 z-40 transition-all duration-200 px-3 sm:px-6 max-w-6xl mx-auto`}
      >
        <nav className="bg-[#ffffff] border-2 border-[#18181b] rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 shadow-[4px_4px_0px_#18181b] flex items-center justify-between relative">
          {/* Subtle Decorative Washi Tape on top left corner */}
          <div className="hidden sm:block absolute -top-2.5 left-8 w-16 h-4 bg-[#fde047]/80 border-t border-b border-[#18181b]/30 rotate-[-2deg] pointer-events-none shadow-xs" />

          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Kundan DR Homepage"
          >
            <span className="w-8 h-8 rounded-lg bg-[#ef4444] text-white border-2 border-[#18181b] flex items-center justify-center font-black font-display text-base shadow-[2px_2px_0px_#18181b] group-hover:rotate-6 transition-transform">
              K
            </span>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg tracking-tight text-[#18181b] group-hover:text-[#ef4444] transition-colors">
                kundan.dr
              </span>
              <span className="text-[10px] font-mono text-stone-500 font-bold uppercase tracking-wider -mt-1 hidden xs:block">
                ai & backend
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-bold text-[#18181b] rounded-lg border border-transparent hover:border-[#18181b] hover:shadow-[2px_2px_0px_#18181b] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all ${link.color}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action: Resume & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-extrabold text-[#18181b] bg-[#fde047] border-2 border-[#18181b] rounded-xl shadow-[3px_3px_0px_#18181b] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#18181b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#18181b]" />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#18181b] bg-white border-2 border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b] hover:bg-[#fde047] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 p-5 bg-[#faf7ee] border-2 border-[#18181b] rounded-2xl shadow-[6px_6px_0px_#18181b] flex flex-col gap-3"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#18181b]/20">
                <span className="text-xs font-mono font-bold text-stone-500 uppercase">Directory</span>
                <span className="text-xs font-handwriting text-stone-600">tumble into a section ↘</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`p-3 text-sm font-extrabold text-[#18181b] bg-white border-2 border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all ${
                      idx % 2 === 0 ? '-rotate-1 hover:rotate-0' : 'rotate-1 hover:rotate-0'
                    } ${link.color}`}
                  >
                    {link.name}
                  </Link>
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
