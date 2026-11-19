"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, PenTool, Terminal, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    step: "01",
    title: "Unpack Friction & Edge Cases",
    subtitle: "Research & Problem Discovery",
    desc: "From user research at WizzyBox to NP-hard scheduling bottlenecks in DispatchGrid, I map failure states, edge cases, and human behavior before touching code or Figma.",
    color: "tomato",
    badgeBg: "bg-[#ef4444] text-white",
    cardBg: "bg-white",
    rotation: "-rotate-1",
    icon: Compass,
  },
  {
    step: "02",
    title: "Lo-Fi Wireframing & State Modeling",
    subtitle: "Tactile Prototyping",
    desc: "Sketching paper wireframes, finite state machines, and API schemas. Testing assumptions early prevents costly architectural rework and keeps interfaces obvious.",
    color: "yellow",
    badgeBg: "bg-[#fde047] text-[#18181b]",
    cardBg: "bg-[#faf7ee]",
    rotation: "rotate-1",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Deterministic Engineering",
    subtitle: "Clean Code & Solid Backends",
    desc: "Writing modular TypeScript and Python (FastAPI), writing strict database security rules (Firestore & SQLite WAL), and testing concurrency with automated test suites.",
    color: "sky",
    badgeBg: "bg-[#38bdf8] text-[#18181b]",
    cardBg: "bg-white",
    rotation: "-rotate-1.5",
    icon: Terminal,
  },
  {
    step: "04",
    title: "Ergonomics & Performance Polish",
    subtitle: "Zero-Latency Handoff",
    desc: "Auditing Lighthouse metrics, eliminating layout shifts, verifying keyboard navigation, and tuning micro-interactions so the final product feels effortless to use.",
    color: "green",
    badgeBg: "bg-[#22c55e] text-white",
    cardBg: "bg-[#faf7ee]",
    rotation: "rotate-1",
    icon: CheckCircle2,
  },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-16 md:py-24 relative">
      {/* Section Header with Highlighter Sweep */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-start mb-12"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#38bdf8] text-[#18181b] border-2 border-[#18181b] rounded-md shadow-[2px_2px_0px_#18181b] text-xs font-black uppercase tracking-wider -rotate-1 mb-3 cursor-default"
        >
          <Lightbulb className="w-3.5 h-3.5" />
          <span>Engineering Philosophy</span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-[#18181b]">
          How I{' '}
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
            work &amp; build
          </motion.span>
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
          A disciplined 4-step workflow combining UI/UX design clarity with rigorous backend engineering.
        </p>
      </motion.div>

      {/* 4-Step Process Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40, rotate: idx % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: idx % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 24,
                delay: idx * 0.1,
              }}
              whileHover={{
                y: -6,
                rotate: 0,
                boxShadow: "7px 7px 0px #18181b",
                transition: { duration: 0.2 },
              }}
              className={`${item.cardBg} border-2 border-[#18181b] rounded-2xl p-6 shadow-[4px_4px_0px_#18181b] flex flex-col justify-between relative cursor-default`}
            >
              {/* Step Ribbon Badge */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#18181b]/15">
                <span className={`px-2.5 py-0.5 border border-[#18181b] rounded-md text-xs font-mono font-bold shadow-[1px_1px_0px_#18181b] ${item.badgeBg}`}>
                  STEP {item.step}
                </span>
                <div className="p-2 bg-white border border-[#18181b] rounded-xl shadow-[1px_1px_0px_#18181b]">
                  <Icon className="w-4 h-4 text-[#18181b]" />
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-lg font-display font-black text-[#18181b] leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] font-mono text-[#ef4444] font-bold uppercase tracking-wider">
                  {item.subtitle}
                </p>
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed pt-1">
                  {item.desc}
                </p>
              </div>

              {/* Small Doodle Arrow Indicator */}
              <div className="pt-4 mt-4 border-t border-[#18181b]/10 flex items-center justify-between text-xs font-handwriting text-stone-500">
                <span>Phase {item.step} of 04</span>
                <span className="text-[#ef4444] text-sm font-bold">↳</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
