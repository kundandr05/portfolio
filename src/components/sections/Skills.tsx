"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import { skillCategories, marqueeRow1, marqueeRow2 } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      {/* Section Header with Highlighter Sweep */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-start mb-10"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#fde047] text-[#18181b] border-2 border-[#18181b] rounded-md shadow-[2px_2px_0px_#18181b] text-xs font-black uppercase tracking-wider -rotate-1 mb-3 cursor-default"
        >
          <Wrench className="w-3.5 h-3.5" />
          <span>Technical Toolkit</span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-[#18181b]">
          Skills I&apos;ve actually{' '}
          <motion.span
            initial={{ backgroundSize: "0% 100%" }}
            whileInView={{ backgroundSize: "100% 100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-[#fde047] px-2 py-0.5 rounded-md border-2 border-[#18181b] shadow-[2px_2px_0px_#18181b] inline-block -rotate-1"
          >
            shipped with
          </motion.span>
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
          Zero arbitrary percentage bars. Every tool listed below is directly tied to a shipped project or verified research.
        </p>
      </motion.div>

      {/* MARQUEE TAPE 1: Left to Right with Pause on Hover */}
      <div className="mb-4 -mx-4 sm:-mx-8 overflow-hidden py-2.5 bg-[#fde047] border-y-2 border-[#18181b] rotate-1 shadow-[3px_3px_0px_#18181b]">
        <div className="animate-marquee gap-8 font-display font-black text-sm sm:text-base tracking-wide text-[#18181b] select-none">
          {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 shrink-0">
              <span>{item}</span>
              <span className="text-[#ef4444] text-xs">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* MARQUEE TAPE 2: Right to Left with Pause on Hover */}
      <div className="mb-12 -mx-4 sm:-mx-8 overflow-hidden py-2.5 bg-[#38bdf8] border-y-2 border-[#18181b] -rotate-1 shadow-[3px_3px_0px_#18181b]">
        <div className="animate-marquee-reverse gap-8 font-display font-black text-sm sm:text-base tracking-wide text-[#18181b] select-none">
          {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 shrink-0">
              <span>{item}</span>
              <span className="text-[#18181b] text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Domain-Grouped Skill Clusters with Staggered Scroll Reveals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => {
          const cardRotation = idx % 2 === 0 ? -0.8 : 0.8;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40, rotate: cardRotation }}
              whileInView={{ opacity: 1, y: 0, rotate: cardRotation }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 24,
                delay: idx * 0.1,
              }}
              whileHover={{
                y: -5,
                rotate: 0,
                boxShadow: "8px 8px 0px #18181b",
                transition: { duration: 0.2 },
              }}
              className="bg-white border-2 border-[#18181b] rounded-2xl p-6 shadow-[5px_5px_0px_#18181b] relative cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start justify-between pb-3 mb-4 border-b border-[#18181b]/15">
                <div>
                  <h3 className="text-xl font-display font-black text-[#18181b]">
                    {category.title}
                  </h3>
                  <p className="text-xs text-stone-500 font-mono mt-0.5">{category.tagline}</p>
                </div>
                <span
                  className={`w-3.5 h-3.5 rounded-full border-2 border-[#18181b] ${
                    category.color === 'tomato'
                      ? 'bg-[#ef4444]'
                      : category.color === 'yellow'
                      ? 'bg-[#fde047]'
                      : category.color === 'green'
                      ? 'bg-[#22c55e]'
                      : 'bg-[#38bdf8]'
                  }`}
                />
              </div>

              {/* Skill Tags Linked to Shipped Systems with Micro-Wiggle */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{
                      scale: 1.08,
                      rotate: [-2, 2, 0],
                      backgroundColor: "#ffffff",
                    }}
                    transition={{ duration: 0.2 }}
                    className="group/tag inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#faf7ee] border border-[#18181b] rounded-xl text-xs font-bold text-[#18181b] shadow-[2px_2px_0px_#18181b] cursor-default"
                  >
                    <span>{skill.name}</span>
                    <span className="text-[10px] font-mono text-stone-500 font-normal group-hover/tag:text-[#ef4444] transition-colors">
                      ↳ {skill.usedIn}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
