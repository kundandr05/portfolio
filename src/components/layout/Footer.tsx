"use client";

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t-2 border-[#18181b] bg-[#faf7ee] py-10 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Colophon & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-[#ef4444] text-white border border-[#18181b] flex items-center justify-center font-black font-display text-xs shadow-[1px_1px_0px_#18181b]">
              K
            </span>
            <span className="font-display font-black text-sm text-[#18181b]">
              Kundan DR · Portfolio
            </span>
          </div>

          <p className="text-xs font-mono text-stone-500" suppressHydrationWarning>
            © {new Date().getFullYear()} Kundan DR. Hand-crafted with Next.js 16, TypeScript &amp; Tailwind CSS.
          </p>
          <p className="text-[11px] font-mono text-stone-400">
            Deployed on Vercel · Mysuru, Karnataka, India 🇮🇳
          </p>
        </div>

        {/* Center: Playful Handwritten Stamp */}
        <div className="hidden lg:block text-center">
          <span className="font-handwriting text-lg text-stone-700 font-bold -rotate-1 inline-block">
            &ldquo;Built with code, grit &amp; zero templates&rdquo; 🛠️
          </span>
        </div>

        {/* Right: Socials & Back to Top Button */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/kundandr05"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white text-[#18181b] border-2 border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b] hover:bg-[#38bdf8] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="https://linkedin.com/in/kundan-d-r-914274310"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white text-[#18181b] border-2 border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b] hover:bg-[#38bdf8] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4 text-[#0a66c2]" />
          </a>

          <a
            href="mailto:kundandr05@gmail.com"
            className="p-2 bg-white text-[#18181b] border-2 border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b] hover:bg-[#fde047] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4 text-[#ef4444]" />
          </a>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 px-3 py-2 bg-[#fde047] text-[#18181b] border-2 border-[#18181b] rounded-xl text-xs font-bold shadow-[2px_2px_0px_#18181b] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all ml-1"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
