"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDownRight, FileText, Github, Linkedin, Mail, Sparkles, BookOpen, GraduationCap, Award, Compass } from 'lucide-react';
import ResumeModal from '@/components/shared/ResumeModal';

const roles = [
  "AI & ML Engineer",
  "Backend Developer (FastAPI)",
  "Published Author (2x)",
  "UI/UX Design Intern (WizzyBox)"
];

// Scramble Typewriter Component for Role Line
function ScrambleRole({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 28);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="font-mono font-bold tracking-tight">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block ml-0.5 text-[#ef4444]"
      >
        _
      </motion.span>
    </span>
  );
}

// Title words for staggered bouncy drop-in
const headlineWords = [
  { text: "Hi,", highlight: false },
  { text: "I'm", highlight: false },
  { text: "Kundan.", highlight: true, color: "tomato" },
  { text: "I", highlight: false },
  { text: "build", highlight: false },
  { text: "practical", highlight: false },
  { text: "autonomous", highlight: true, color: "yellow" },
  { text: "AI", highlight: true, color: "yellow" },
  { text: "&", highlight: false },
  { text: "scalable", highlight: false },
  { text: "backends.", highlight: false }
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
            initial={{ opacity: 0, scale: 0.85, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 20, delay: 0.1 }}
            whileHover={{ scale: 1.04, rotate: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#ffffff] border-2 border-[#18181b] rounded-full shadow-[2px_2px_0px_#18181b] text-xs font-bold text-[#18181b] -rotate-1 transition-transform cursor-default"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse shrink-0" />
            <span>Open to work / jobs, internships &amp; research (2027 graduate)</span>
          </motion.div>
        </div>

        {/* Main Grid: Left Story & Right Tape-Framed Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bouncing Headline, Slot Role, Friendly Copy, Action Buttons */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Title with Bouncy Drop-In Words */}
            <div className="relative">
              {/* Handwritten Doodle Arrow with SVG Path Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.8 }}
                className="absolute -top-7 right-6 hidden sm:flex items-center gap-1 text-[#ef4444] font-handwriting text-lg font-bold rotate-6 select-none pointer-events-none"
              >
                <span>hey there!</span>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <motion.path
                    d="M7 17l9.2-9.2M17 17V7H7"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.7, delay: 1, ease: "easeInOut" }}
                  />
                </svg>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-[#18181b] leading-[1.15] flex flex-wrap gap-x-3 gap-y-1">
                {headlineWords.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: -45, rotate: index % 2 === 0 ? -6 : 6 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 18,
                      delay: 0.15 + index * 0.055,
                    }}
                    className={`inline-block relative ${
                      word.highlight && word.color === "tomato"
                        ? "text-[#ef4444]"
                        : word.highlight && word.color === "yellow"
                        ? "bg-[#fde047] px-2 py-0.5 rounded-md border-2 border-[#18181b] shadow-[2px_2px_0px_#18181b] -rotate-1"
                        : ""
                    }`}
                  >
                    {word.text}
                    {/* Wobbly Underline under Kundan that draws itself */}
                    {word.text === "Kundan." && (
                      <svg className="absolute -bottom-2.5 left-0 w-full h-3.5 text-[#fde047]" viewBox="0 0 100 12" preserveAspectRatio="none">
                        <motion.path
                          d="M0,7 Q25,0 50,7 T100,7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
                        />
                      </svg>
                    )}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Typewriter Scramble Role Line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="flex items-center gap-2 text-base sm:text-lg font-mono"
            >
              <span className="text-stone-500 font-bold">&gt; role:</span>
              <div className="h-9 min-w-[240px] sm:min-w-[280px] overflow-hidden relative inline-flex items-center">
                <span className="inline-block px-3 py-1 bg-[#ffffff] border-2 border-[#18181b] rounded-lg shadow-[2px_2px_0px_#18181b] font-bold text-[#18181b] text-sm sm:text-base">
                  <ScrambleRole key={roles[roleIndex]} text={roles[roleIndex]} />
                </span>
              </div>
            </motion.div>

            {/* Honest, Friendly First-Person Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              I am an AI &amp; ML undergraduate at <strong>Maharaja Institute of Technology Mysuru</strong>.
              Currently designing systems as a UI/UX Intern at <strong>WizzyBox</strong>, publishing peer-reviewed research on Agentic AI coordination in <strong>IJCRT</strong>, and writing books on attention &amp; deep work.
            </motion.p>

            {/* Call-to-Action Buttons with Tactile Press & Hover Wobble */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <motion.div
                whileHover={{ scale: 1.04, rotate: [-1, 1, 0] }}
                whileTap={{ scale: 0.95, x: 2, y: 2 }}
              >
                <Link
                  href="/#projects"
                  className="btn-scrapbook-primary"
                >
                  <span>View Selected Work</span>
                  <ArrowDownRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.button
                onClick={() => setIsResumeModalOpen(true)}
                whileHover={{ scale: 1.04, rotate: [1, -1, 0] }}
                whileTap={{ scale: 0.95, x: 2, y: 2 }}
                className="btn-scrapbook-secondary"
              >
                <FileText className="w-4 h-4 text-[#ef4444]" />
                <span>Resume (PDF)</span>
              </motion.button>

              {/* Social Stamp Buttons */}
              <div className="flex items-center gap-2 ml-1">
                {[
                  { href: "https://github.com/kundandr05", icon: Github, label: "GitHub", hoverBg: "hover:bg-[#38bdf8]" },
                  { href: "https://linkedin.com/in/kundan-d-r-914274310", icon: Linkedin, label: "LinkedIn", hoverBg: "hover:bg-[#38bdf8]" },
                  { href: "mailto:kundandr05@gmail.com", icon: Mail, label: "Email", hoverBg: "hover:bg-[#fde047]" }
                ].map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ scale: 1.12, rotate: idx % 2 === 0 ? -4 : 4 }}
                      whileTap={{ scale: 0.92, x: 1, y: 1 }}
                      className={`p-2.5 bg-white border-2 border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b] ${s.hoverBg} transition-colors`}
                      aria-label={s.label}
                      title={s.label}
                    >
                      <Icon className="w-4 h-4 text-[#18181b]" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Playful Drag Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex items-center gap-2 text-xs font-handwriting text-stone-500 pt-1 select-none"
            >
              <span className="text-base text-[#ef4444]">★</span>
              <span>hint: badges on the photo are elastic draggable stickers! Grab &apos;em and toss them around ↘</span>
            </motion.div>

          </div>

          {/* Right Column: Spring Pop-In Photo with Continuous Floating Loop + Elastic Draggables */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-6 lg:mt-0">
            <div className="relative w-72 sm:w-80 md:w-88 aspect-[4/5]">
              
              {/* Photo Frame Container with Spring Entrance & Continuous Gentle Floating Loop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.75, rotate: -6 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 2,
                  y: [-5, 5, -5],
                }}
                transition={{
                  scale: { type: "spring", stiffness: 280, damping: 20, delay: 0.3 },
                  opacity: { duration: 0.4, delay: 0.3 },
                  rotate: { type: "spring", stiffness: 200, damping: 15, delay: 0.4 },
                  y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
                }}
                className="w-full h-full p-3 bg-white border-2 border-[#18181b] rounded-2xl shadow-[8px_8px_0px_#18181b] hover:rotate-0 transition-transform duration-300 relative overflow-visible flex flex-col justify-between"
              >
                {/* Washi Tape Strip on Top Edge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#fef08a] border-t border-b border-[#18181b]/30 -rotate-2 z-20 pointer-events-none shadow-xs flex items-center justify-center">
                  <span className="text-[10px] font-mono text-stone-500 tracking-widest uppercase">KUNDAN // 2026</span>
                </div>

                {/* Photo Container with Sketch-to-Color Reveal */}
                <motion.div
                  initial={{ filter: "grayscale(100%) contrast(220%) brightness(110%)", scale: 0.96 }}
                  animate={{ filter: "grayscale(0%) contrast(100%) brightness(100%)", scale: 1 }}
                  transition={{ duration: 1.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-[85%] rounded-xl overflow-hidden border border-[#18181b]/20 bg-stone-100"
                >
                  <Image
                    src="/suit-photo.jpg"
                    alt="Kundan DR"
                    fill
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 300px, 400px"
                  />
                </motion.div>

                {/* Polaroid Caption Strip with Animated SVG Signature that draws itself */}
                <div className="pt-2 px-1 flex items-center justify-between text-xs font-handwriting text-stone-700">
                  <div className="flex items-center gap-1.5">
                    <svg width="105" height="24" viewBox="0 0 105 24" className="text-[#18181b]">
                      <motion.path
                        d="M 4,18 Q 8,4 12,8 Q 15,20 18,10 L 22,17 L 27,10 L 31,16 L 36,9 Q 40,20 44,12 L 48,17 M 55,6 L 55,20 Q 64,20 64,13 Q 64,6 55,6 M 72,6 L 72,20 M 72,6 Q 84,5 84,13 Q 84,20 72,20 L 86,20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.6, delay: 0.8, ease: "easeInOut" }}
                      />
                    </svg>
                    <span className="font-mono text-[9px] text-stone-400 font-bold uppercase">(signature)</span>
                  </div>
                  <span className="text-stone-500 font-mono text-[11px]">Mysuru 📍</span>
                </div>

                {/* Hand-Drawn Sparkle that draws itself */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: [0, 15, 0] }}
                  transition={{
                    scale: { type: "spring", stiffness: 300, delay: 0.8 },
                    rotate: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                  }}
                  className="absolute -bottom-5 -right-5 w-10 h-10 pointer-events-none text-[#fde047]"
                >
                  <Sparkles className="w-8 h-8 fill-[#fde047] stroke-[#18181b] stroke-[2]" />
                </motion.div>
              </motion.div>

              {/* DRAGGABLE STICKER 1: IJCRT Published (Elastic Snap-Back, Gentle Float, & Dog-Ear Peel Corner) */}
              <motion.div
                drag
                dragSnapToOrigin
                dragElastic={0.65}
                initial={{ scale: 0, y: -20 }}
                animate={{
                  scale: 1,
                  y: [-4, 4, -4],
                }}
                transition={{
                  scale: { type: "spring", stiffness: 350, damping: 18, delay: 0.5 },
                  y: { repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.2 },
                }}
                whileDrag={{ scale: 1.2, rotate: 0, zIndex: 60 }}
                whileHover={{ scale: 1.1, rotate: -8 }}
                className="absolute -top-6 -left-8 sm:-left-12 cursor-grab active:cursor-grabbing z-30 select-none group"
              >
                <div className="relative px-3.5 py-1.5 bg-[#ef4444] text-white border-2 border-[#18181b] rounded-xl shadow-[3px_3px_0px_#18181b] -rotate-6 flex items-center gap-1.5 text-xs font-black overflow-hidden">
                  <Award className="w-3.5 h-3.5 text-yellow-200" />
                  <span>IJCRT Published</span>
                  {/* Curled Peel Corner */}
                  <div className="absolute top-0 right-0 w-3.5 h-3.5 overflow-hidden pointer-events-none">
                    <div className="w-full h-full bg-[#faf7ee] border-b border-l border-[#18181b] shadow-xs group-hover:scale-130 transition-transform origin-top-right" style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }} />
                  </div>
                </div>
              </motion.div>

              {/* DRAGGABLE STICKER 2: 2x Author (Elastic Snap-Back, Float, & Dog-Ear Peel Corner) */}
              <motion.div
                drag
                dragSnapToOrigin
                dragElastic={0.65}
                initial={{ scale: 0, y: -20 }}
                animate={{
                  scale: 1,
                  y: [4, -4, 4],
                }}
                transition={{
                  scale: { type: "spring", stiffness: 350, damping: 18, delay: 0.6 },
                  y: { repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.4 },
                }}
                whileDrag={{ scale: 1.2, rotate: 0, zIndex: 60 }}
                whileHover={{ scale: 1.1, rotate: 8 }}
                className="absolute -top-5 -right-6 sm:-right-8 cursor-grab active:cursor-grabbing z-30 select-none group"
              >
                <div className="relative px-3.5 py-1.5 bg-[#fde047] text-[#18181b] border-2 border-[#18181b] rounded-xl shadow-[3px_3px_0px_#18181b] rotate-6 flex items-center gap-1.5 text-xs font-black overflow-hidden">
                  <BookOpen className="w-3.5 h-3.5 text-[#ef4444]" />
                  <span>2x Author</span>
                  {/* Curled Peel Corner */}
                  <div className="absolute top-0 right-0 w-3.5 h-3.5 overflow-hidden pointer-events-none">
                    <div className="w-full h-full bg-[#faf7ee] border-b border-l border-[#18181b] shadow-xs group-hover:scale-130 transition-transform origin-top-right" style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }} />
                  </div>
                </div>
              </motion.div>

              {/* DRAGGABLE STICKER 3: MIT Mysuru '27 (Elastic Snap-Back, Float, & Dog-Ear Peel Corner) */}
              <motion.div
                drag
                dragSnapToOrigin
                dragElastic={0.65}
                initial={{ scale: 0, y: 20 }}
                animate={{
                  scale: 1,
                  y: [-3, 3, -3],
                }}
                transition={{
                  scale: { type: "spring", stiffness: 350, damping: 18, delay: 0.7 },
                  y: { repeat: Infinity, duration: 4.6, ease: "easeInOut", delay: 0.6 },
                }}
                whileDrag={{ scale: 1.2, rotate: 0, zIndex: 60 }}
                whileHover={{ scale: 1.1, rotate: -4 }}
                className="absolute -bottom-7 -left-6 sm:-left-10 cursor-grab active:cursor-grabbing z-30 select-none group"
              >
                <div className="relative px-3.5 py-1.5 bg-[#38bdf8] text-[#18181b] border-2 border-[#18181b] rounded-xl shadow-[3px_3px_0px_#18181b] -rotate-3 flex items-center gap-1.5 text-xs font-black overflow-hidden">
                  <GraduationCap className="w-3.5 h-3.5 text-[#18181b]" />
                  <span>MIT Mysuru &apos;27</span>
                  {/* Curled Peel Corner */}
                  <div className="absolute top-0 right-0 w-3.5 h-3.5 overflow-hidden pointer-events-none">
                    <div className="w-full h-full bg-[#faf7ee] border-b border-l border-[#18181b] shadow-xs group-hover:scale-130 transition-transform origin-top-right" style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }} />
                  </div>
                </div>
              </motion.div>

              {/* DRAGGABLE STICKER 4: WizzyBox UI/UX (Elastic Snap-Back, Float, & Dog-Ear Peel Corner) */}
              <motion.div
                drag
                dragSnapToOrigin
                dragElastic={0.65}
                initial={{ scale: 0, y: 20 }}
                animate={{
                  scale: 1,
                  y: [3, -3, 3],
                }}
                transition={{
                  scale: { type: "spring", stiffness: 350, damping: 18, delay: 0.8 },
                  y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.8 },
                }}
                whileDrag={{ scale: 1.2, rotate: 0, zIndex: 60 }}
                whileHover={{ scale: 1.1, rotate: 6 }}
                className="absolute -bottom-6 -right-6 sm:-right-8 cursor-grab active:cursor-grabbing z-30 select-none group"
              >
                <div className="relative px-3.5 py-1.5 bg-[#22c55e] text-white border-2 border-[#18181b] rounded-xl shadow-[3px_3px_0px_#18181b] rotate-4 flex items-center gap-1.5 text-xs font-black overflow-hidden">
                  <Compass className="w-3.5 h-3.5 text-white" />
                  <span>WizzyBox Intern</span>
                  {/* Curled Peel Corner */}
                  <div className="absolute top-0 right-0 w-3.5 h-3.5 overflow-hidden pointer-events-none">
                    <div className="w-full h-full bg-[#faf7ee] border-b border-l border-[#18181b] shadow-xs group-hover:scale-130 transition-transform origin-top-right" style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }} />
                  </div>
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
