"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, FileText, Github, Linkedin, Mail, Sparkles, BookOpen, GraduationCap, Award, Compass } from 'lucide-react';
import ResumeModal from '@/components/shared/ResumeModal';

const roles = [
  "AI & ML Engineer",
  "Backend Developer (FastAPI)",
  "Published Author (2x)",
  "UI/UX Design Intern (WizzyBox)"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative pt-6 pb-16 md:pt-12 md:pb-24">
        {/* Top Announcement Pill */}
        <div className="flex items-center justify-start mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#ffffff] border-2 border-[#18181b] rounded-full shadow-[2px_2px_0px_#18181b] text-xs font-bold text-[#18181b] -rotate-1 hover:rotate-0 transition-transform cursor-default"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse" />
            <span>Open to internships and research (2027 graduate)</span>
          </motion.div>
        </div>

        {/* Main Grid: Left Story & Right Tape-Framed Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Slot Role, Friendly Copy, Action Buttons */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Title with Bouncy Drop-In Words */}
            <div className="relative">
              {/* Handwritten Doodle Arrow pointing to role */}
              <div className="absolute -top-6 right-8 hidden sm:flex items-center gap-1 text-[#ef4444] font-handwriting text-lg font-bold rotate-6 select-none pointer-events-none">
                <span>hey there!</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-[#18181b] leading-[1.1]">
                Hi, I&apos;m <span className="relative inline-block text-[#ef4444]">
                  Kundan
                  {/* Wobbly hand-drawn underline */}
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#fde047]" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <path d="M0,7 Q25,0 50,7 T100,7" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>. <br />
                I build practical{' '}
                <span className="bg-[#fde047] px-2 py-0.5 rounded-md border-2 border-[#18181b] shadow-[2px_2px_0px_#18181b] inline-block -rotate-1">
                  autonomous AI
                </span>{' '}
                & scalable backends.
              </h1>
            </div>

            {/* Slot-Machine Role Cycler */}
            <div className="flex items-center gap-2 text-base sm:text-lg font-mono">
              <span className="text-stone-500 font-bold">&gt; role:</span>
              <div className="h-9 overflow-hidden relative inline-flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="inline-block px-2.5 py-0.5 bg-[#ffffff] border border-[#18181b] rounded-md shadow-[2px_2px_0px_#18181b] font-bold text-[#18181b]"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Honest, Friendly First-Person Paragraph */}
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-xl">
              I am an AI & ML undergraduate at <strong>Maharaja Institute of Technology Mysuru</strong>.
              Currently designing systems as a UI/UX Intern at <strong>WizzyBox</strong>, publishing peer-reviewed research on Agentic AI coordination in <strong>IJCRT</strong>, and writing books on attention & deep work.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/#projects"
                className="btn-scrapbook-primary"
              >
                <span>View Selected Work</span>
                <ArrowDownRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="btn-scrapbook-secondary"
              >
                <FileText className="w-4 h-4 text-[#ef4444]" />
                <span>Resume (PDF)</span>
              </button>

              {/* Social Stamp Buttons */}
              <div className="flex items-center gap-2 ml-1">
                <a
                  href="https://github.com/kundandr05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white border-2 border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b] hover:bg-[#38bdf8] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <Github className="w-4 h-4 text-[#18181b]" />
                </a>
                <a
                  href="https://linkedin.com/in/kundan-d-r-914274310"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white border-2 border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b] hover:bg-[#38bdf8] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-[#18181b]" />
                </a>
                <a
                  href="mailto:kundandr05@gmail.com"
                  className="p-2.5 bg-white border-2 border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b] hover:bg-[#fde047] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                  aria-label="Direct Email"
                  title="Email Me"
                >
                  <Mail className="w-4 h-4 text-[#18181b]" />
                </a>
              </div>
            </div>

            {/* Playful Drag Hint */}
            <div className="flex items-center gap-2 text-xs font-handwriting text-stone-500 pt-1 select-none">
              <span className="text-base text-[#ef4444]">★</span>
              <span>hint: badges on the photo are draggable stickers! Grab &apos;em and toss them around ↘</span>
            </div>

          </div>

          {/* Right Column: Tape-Mounted Photo + Interactive Draggable Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-6 lg:mt-0">
            <div className="relative w-72 sm:w-80 md:w-88 aspect-[4/5]">
              
              {/* Washi Tape Strip on Top Edge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#fef08a] border-t border-b border-[#18181b]/30 -rotate-2 z-20 pointer-events-none shadow-xs flex items-center justify-center">
                <span className="text-[10px] font-mono text-stone-500 tracking-widest uppercase">KUNDAN // 2026</span>
              </div>

              {/* Hand-Drawn Photo Frame */}
              <div className="w-full h-full p-3 bg-white border-2 border-[#18181b] rounded-2xl shadow-[8px_8px_0px_#18181b] rotate-2 hover:rotate-0 transition-transform duration-300 relative overflow-visible flex flex-col justify-between">
                
                {/* Photo Container */}
                <div className="relative w-full h-[85%] rounded-xl overflow-hidden border border-[#18181b]/20 bg-stone-100">
                  <Image
                    src="/suit-photo.jpg"
                    alt="Kundan DR"
                    fill
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 300px, 400px"
                  />
                </div>

                {/* Polaroid Caption Strip */}
                <div className="pt-2 px-1 flex items-center justify-between text-xs font-handwriting text-stone-700">
                  <span className="font-bold text-sm text-[#18181b]">Kundan DR</span>
                  <span className="text-stone-500">Mysuru, Karnataka 📍</span>
                </div>

                {/* Hand-Drawn Sparkle in corner */}
                <div className="absolute -bottom-5 -right-5 w-10 h-10 pointer-events-none text-[#fde047]">
                  <Sparkles className="w-8 h-8 fill-[#fde047] stroke-[#18181b] stroke-[2]" />
                </div>
              </div>

              {/* DRAGGABLE STICKER 1: IJCRT Published */}
              <motion.div
                drag
                dragConstraints={{ left: -140, right: 140, top: -120, bottom: 120 }}
                whileDrag={{ scale: 1.12, rotate: 0, zIndex: 50 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-5 -left-8 sm:-left-12 cursor-grab active:cursor-grabbing z-30 select-none"
              >
                <div className="px-3 py-1.5 bg-[#ef4444] text-white border-2 border-[#18181b] rounded-xl shadow-[3px_3px_0px_#18181b] -rotate-6 flex items-center gap-1.5 text-xs font-black">
                  <Award className="w-3.5 h-3.5 text-yellow-200" />
                  <span>IJCRT Published</span>
                </div>
              </motion.div>

              {/* DRAGGABLE STICKER 2: 2x Author */}
              <motion.div
                drag
                dragConstraints={{ left: -140, right: 140, top: -120, bottom: 120 }}
                whileDrag={{ scale: 1.12, rotate: 0, zIndex: 50 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-4 -right-6 sm:-right-8 cursor-grab active:cursor-grabbing z-30 select-none"
              >
                <div className="px-3 py-1.5 bg-[#fde047] text-[#18181b] border-2 border-[#18181b] rounded-xl shadow-[3px_3px_0px_#18181b] rotate-6 flex items-center gap-1.5 text-xs font-black">
                  <BookOpen className="w-3.5 h-3.5 text-[#ef4444]" />
                  <span>2x Author</span>
                </div>
              </motion.div>

              {/* DRAGGABLE STICKER 3: MIT Mysuru '27 */}
              <motion.div
                drag
                dragConstraints={{ left: -140, right: 140, top: -120, bottom: 120 }}
                whileDrag={{ scale: 1.12, rotate: 0, zIndex: 50 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -left-6 sm:-left-10 cursor-grab active:cursor-grabbing z-30 select-none"
              >
                <div className="px-3 py-1.5 bg-[#38bdf8] text-[#18181b] border-2 border-[#18181b] rounded-xl shadow-[3px_3px_0px_#18181b] -rotate-3 flex items-center gap-1.5 text-xs font-black">
                  <GraduationCap className="w-3.5 h-3.5 text-[#18181b]" />
                  <span>MIT Mysuru &apos;27</span>
                </div>
              </motion.div>

              {/* DRAGGABLE STICKER 4: WizzyBox UI/UX */}
              <motion.div
                drag
                dragConstraints={{ left: -140, right: 140, top: -120, bottom: 120 }}
                whileDrag={{ scale: 1.12, rotate: 0, zIndex: 50 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-5 -right-6 sm:-right-8 cursor-grab active:cursor-grabbing z-30 select-none"
              >
                <div className="px-3 py-1.5 bg-[#22c55e] text-white border-2 border-[#18181b] rounded-xl shadow-[3px_3px_0px_#18181b] rotate-4 flex items-center gap-1.5 text-xs font-black">
                  <Compass className="w-3.5 h-3.5 text-white" />
                  <span>WizzyBox Intern</span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </>
  );
}
