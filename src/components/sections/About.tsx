"use client";

import React, { useSyncExternalStore, useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { User, BookOpen, Clock, Headphones, Hammer } from 'lucide-react';

// SSR-safe client time subscriber
function subscribe(callback: () => void) {
  const timer = setInterval(callback, 1000);
  return () => clearInterval(timer);
}

function getSnapshot() {
  return new Date().toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
}

function getServerSnapshot() {
  return '--:--:-- --';
}

// Animated Stat Counter Component
function StatCounter({ target, duration = 1.4 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(target > 100 ? target - 10 : 0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView) return;
    const startVal = target > 100 ? target - 20 : 0;
    const startTime = performance.now();

    function updateCount(currentTime: number) {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startVal + (target - startVal) * ease);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    }

    requestAnimationFrame(updateCount);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const liveTime = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <section id="about" className="py-16 md:py-24 relative">
      {/* Section Header with Highlighter Sweep */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-start mb-12"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#38bdf8] text-[#18181b] border-2 border-[#18181b] rounded-md shadow-[2px_2px_0px_#18181b] text-xs font-black uppercase tracking-wider rotate-1 mb-3 cursor-default"
        >
          <User className="w-3.5 h-3.5" />
          <span>Behind The Code</span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-[#18181b]">
          A short note on{' '}
          <motion.span
            initial={{ backgroundSize: "0% 100%" }}
            whileInView={{ backgroundSize: "100% 100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{
              backgroundImage: "linear-gradient(to right, #fde047, #fde047)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0% 100%",
            }}
            className="px-2 py-0.5 rounded-md border-2 border-[#18181b] shadow-[2px_2px_0px_#18181b] inline-block -rotate-1"
          >
            who I am
          </motion.span>
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
          Undergraduate engineer at MIT Mysuru, researcher, and author. I care about systems that work reliably and feel good to use.
        </p>
      </motion.div>

      {/* Main Grid: Notebook Paper Story + Photo & Pinboard with Scroll Reveals */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Notebook Page Story with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 45, rotate: -1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: -0.5 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="lg:col-span-7 bg-white border-2 border-[#18181b] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#18181b] relative"
        >
          {/* Top Washi Tape */}
          <div className="absolute -top-3 left-12 w-24 h-6 bg-[#fde047]/90 border border-[#18181b]/30 rotate-2 z-20 pointer-events-none shadow-xs" />

          {/* Notebook Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-stone-100">
            <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-widest">
              FIELD NOTES // KUNDAN DR
            </span>
            <span className="text-xs font-handwriting text-[#ef4444] font-bold text-base rotate-[-2deg]">
              written by hand ✍️
            </span>
          </div>

          {/* First-person story paragraphs */}
          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              I got into coding because I wanted to build systems that cut through confusion. My undergraduate work at <strong>Maharaja Institute of Technology, Mysuru</strong> is focused on <strong>Artificial Intelligence &amp; Machine Learning</strong>, but my everyday curiosity lives in backend plumbing: writing deterministic scheduling algorithms, streaming API responses, and coordinating multi-agent workflows.
            </p>

            <p>
              When I hit algorithmic roadblocks—like the NP-hard constraint solver in <em>DispatchGrid</em> or tournament bracket state machines—I don&apos;t just copy boilerplates. I research the math, write out the state transitions, and test edge cases until it holds. That curiosity led to publishing peer-reviewed research in the <strong>International Journal of Creative Research Thoughts (IJCRT)</strong> on Agentic AI.
            </p>

            <p>
              Beyond code, I think a lot about cognitive bandwidth and developer productivity. I&apos;ve written and published two books on <strong>Amazon KDP</strong> (<em>The Two-Speed Mind</em> and <em>Reclaim Your Focus</em>) exploring how to switch between rapid execution and deep, uninterrupted architectural thinking.
            </p>

            <p>
              Right now, I am blending backend engineering with interface craftsmanship as a <strong>UI/UX Design Intern at WizzyBox</strong> (WCAP), preparing to graduate in 2027 and eager to contribute to high-impact teams.
            </p>
          </div>

          {/* Quick Stats Grid with Animated Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t-2 border-[#18181b]/10 text-center">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="p-3 bg-[#faf7ee] border border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b]"
            >
              <span className="block font-display font-black text-2xl text-[#ef4444]">
                <StatCounter target={2027} duration={1.6} />
              </span>
              <span className="text-[11px] font-mono text-stone-600 font-bold">Graduation Year</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="p-3 bg-[#faf7ee] border border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b]"
            >
              <span className="block font-display font-black text-2xl text-[#22c55e]">
                <StatCounter target={1} duration={1} /> Paper
              </span>
              <span className="text-[11px] font-mono text-stone-600 font-bold">IJCRT Peer-Reviewed</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="p-3 bg-[#faf7ee] border border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b] col-span-2 sm:col-span-1"
            >
              <span className="block font-display font-black text-2xl text-[#38bdf8]">
                <StatCounter target={2} duration={1.2} /> Books
              </span>
              <span className="text-[11px] font-mono text-stone-600 font-bold">Amazon KDP</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Polaroid Photo + "Currently" Pinboard Strip with Spring Pop-In */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Polaroid Frame Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: 4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 280, damping: 20, delay: 0.2 }}
            whileHover={{ rotate: 0, y: -4 }}
            className="bg-white border-2 border-[#18181b] rounded-2xl p-4 shadow-[6px_6px_0px_#18181b] relative cursor-default"
          >
            <div className="absolute -top-3 right-8 w-20 h-5 bg-[#fed7aa] border border-[#18181b]/30 -rotate-3 z-20 pointer-events-none shadow-xs" />

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#18181b]/30 bg-stone-100 mb-3">
              <Image
                src="/kundan-profile.jpg"
                alt="Kundan working at desk"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="flex items-center justify-between text-xs font-handwriting text-stone-700 px-1">
              <span className="font-bold text-sm text-[#18181b]">Kundan DR</span>
              <span>Mysuru, India 🇮🇳</span>
            </div>
          </motion.div>

          {/* "Currently" Pinboard Strip */}
          <motion.div
            initial={{ opacity: 0, y: 35, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 280, damping: 20, delay: 0.3 }}
            className="bg-[#ffffff] border-2 border-[#18181b] rounded-2xl p-5 shadow-[5px_5px_0px_#18181b]"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#18181b]/20">
              <span className="text-xs font-mono font-bold text-[#18181b] flex items-center gap-1.5 uppercase">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
                Live Status // Currently
              </span>
              <span className="text-[11px] font-mono font-bold text-stone-500">
                IST (UTC+5:30)
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 bg-[#fde047] border border-[#18181b] rounded-md shrink-0 mt-0.5 shadow-[1px_1px_0px_#18181b]">
                  <Hammer className="w-3.5 h-3.5 text-[#18181b]" />
                </div>
                <div>
                  <span className="font-bold text-[#18181b] block">Building:</span>
                  <span className="text-stone-600">DispatchGrid 2-opt route solver &amp; multi-agent tournament pipelines</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 bg-[#38bdf8] border border-[#18181b] rounded-md shrink-0 mt-0.5 shadow-[1px_1px_0px_#18181b]">
                  <BookOpen className="w-3.5 h-3.5 text-[#18181b]" />
                </div>
                <div>
                  <span className="font-bold text-[#18181b] block">Reading:</span>
                  <span className="text-stone-600">Designing Data-Intensive Applications by Martin Kleppmann</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 bg-[#22c55e] border border-[#18181b] rounded-md shrink-0 mt-0.5 shadow-[1px_1px_0px_#18181b]">
                  <Headphones className="w-3.5 h-3.5 text-[#18181b]" />
                </div>
                <div>
                  <span className="font-bold text-[#18181b] block">Listening to:</span>
                  <span className="text-stone-600">Ambient synthwave &amp; lo-fi deep focus playlists</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-stone-100">
                <div className="p-1.5 bg-[#ef4444] text-white border border-[#18181b] rounded-md shrink-0 mt-0.5 shadow-[1px_1px_0px_#18181b]">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-bold text-[#18181b] block">Mysuru Local Time:</span>
                  <span className="text-stone-800 font-mono font-bold">{liveTime}</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Horizontal Scroll-Driven Journey Timeline: School → Coding → Books → Paper → Internship */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-14 pt-8 border-t-2 border-[#18181b]/15"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-[#fde047] border border-[#18181b] rounded text-xs font-mono font-bold uppercase shadow-[1px_1px_0px_#18181b]">
              JOURNEY // ROADMAP
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-black text-[#18181b]">
              Timeline: School → Coding → Books → Paper → Internship
            </h3>
          </div>
          <span className="text-xs font-mono text-stone-500 font-bold">
            ← Scroll horizontally to explore →
          </span>
        </div>

        <div className="overflow-x-auto pb-4 pt-2 flex gap-4 sm:gap-6 snap-x">
          {[
            {
              step: "01",
              stage: "School",
              year: "2021 – 2023",
              title: "PCMB Pre-University",
              detail: "Physics, Chem, Math, Bio foundations at Sri Adichunchanagiri PU College.",
              color: "bg-[#faf7ee]",
              badge: "bg-[#38bdf8] text-[#18181b]",
            },
            {
              step: "02",
              stage: "Coding",
              year: "2023 – 2027",
              title: "B.E. AI & ML (MIT Mysuru)",
              detail: "Algorithms, distributed backend logic, neural networks, and full-stack development.",
              color: "bg-white",
              badge: "bg-[#fde047] text-[#18181b]",
            },
            {
              step: "03",
              stage: "Books",
              year: "2025",
              title: "2x Amazon KDP Author",
              detail: "Published 'The Two-Speed Mind' & 'Reclaim Your Focus' on cognitive productivity.",
              color: "bg-[#faf7ee]",
              badge: "bg-[#ef4444] text-white",
            },
            {
              step: "04",
              stage: "Paper",
              year: "2025",
              title: "IJCRT Research Publication",
              detail: "Peer-reviewed research paper on Agentic AI coordination & automated tournament management.",
              color: "bg-white",
              badge: "bg-[#22c55e] text-white",
            },
            {
              step: "05",
              stage: "Internship",
              year: "2026 – Present",
              title: "WizzyBox UI/UX Intern (WCAP)",
              detail: "Designing empathy maps, information architecture, wireframes, and enterprise design systems.",
              color: "bg-[#faf7ee]",
              badge: "bg-[#38bdf8] text-[#18181b]",
            }
          ].map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: 30, rotate: idx % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, x: 0, rotate: idx % 2 === 0 ? -0.5 : 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 300, damping: 24 }}
              whileHover={{ y: -5, rotate: 0, boxShadow: "6px 6px 0px #18181b" }}
              className={`shrink-0 w-64 sm:w-72 ${item.color} border-2 border-[#18181b] rounded-2xl p-5 shadow-[4px_4px_0px_#18181b] snap-start flex flex-col justify-between relative cursor-default`}
            >
              <div className="absolute -top-2.5 right-6 w-14 h-4 bg-[#fef08a] border border-[#18181b]/30 -rotate-2 z-10 pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#18181b]/15">
                  <span className={`px-2 py-0.5 border border-[#18181b] rounded text-[10px] font-mono font-bold uppercase ${item.badge}`}>
                    {item.stage}
                  </span>
                  <span className="text-xs font-mono font-bold text-stone-500">{item.year}</span>
                </div>
                <h4 className="font-display font-black text-base text-[#18181b] mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-[#18181b]/10 flex items-center justify-between text-[11px] font-mono text-stone-400">
                <span>Phase {item.step} of 05</span>
                <span className="text-[#ef4444] font-bold">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
