"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap, Compass, FileCheck, ExternalLink } from 'lucide-react';
import { experiences } from '@/data/experience';

export default function Experience() {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start 75%", "end 80%"]
  });
  const linePathLength = useSpring(scrollYProgress, { stiffness: 240, damping: 28 });

  return (
    <section id="experience" className="py-16 md:py-24 relative">
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
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#22c55e] text-white border-2 border-[#18181b] rounded-md shadow-[2px_2px_0px_#18181b] text-xs font-black uppercase tracking-wider rotate-1 mb-3 cursor-default"
        >
          <Briefcase className="w-3.5 h-3.5" />
          <span>Timeline</span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-[#18181b]">
          Experience &amp;{' '}
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
            education
          </motion.span>
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
          Real roles and institutional grounding. No exaggerated job titles or fake enterprise claims.
        </p>
      </motion.div>

      {/* Roadmap Container with Animated Dotted Line and Popping Stops */}
      <div ref={roadmapRef} className="relative pl-6 sm:pl-10 space-y-12 ml-2 sm:ml-4">
        
        {/* Animated SVG Dotted Line that draws itself as you scroll */}
        <div className="absolute top-4 bottom-4 left-0 w-2 flex justify-center pointer-events-none">
          <svg className="w-2 h-full" viewBox="0 0 2 100" preserveAspectRatio="none">
            <motion.path
              d="M 1,0 L 1,100"
              stroke="#18181b"
              strokeWidth="2.5"
              strokeDasharray="4 4"
              strokeLinecap="round"
              style={{ pathLength: linePathLength }}
            />
          </svg>
        </div>

        {experiences.map((item, idx) => (
          <div key={item.id} className="relative group">
            
            {/* Pop Stop Pin on Dotted Line with Spring Entrance */}
            <motion.div
              initial={{ scale: 0, rotate: -40 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 420,
                damping: 18,
                delay: idx * 0.2,
              }}
              whileHover={{ scale: 1.18, rotate: idx % 2 === 0 ? 8 : -8 }}
              className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 sm:w-10 sm:h-10 rounded-xl border-2 border-[#18181b] flex items-center justify-center shadow-[3px_3px_0px_#18181b] cursor-default z-10 ${
                item.color === 'tomato'
                  ? 'bg-[#ef4444] text-white'
                  : 'bg-[#fde047] text-[#18181b]'
              }`}
            >
              {item.id === 'wizzybox' ? (
                <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </motion.div>

            {/* Experience Card with Staggered Scroll Reveal */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: idx % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, x: 0, rotate: idx % 2 === 0 ? -0.5 : 0.5 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 24,
                delay: 0.1 + idx * 0.15,
              }}
              whileHover={{
                y: -5,
                rotate: 0,
                boxShadow: "8px 8px 0px #18181b",
                transition: { duration: 0.2 },
              }}
              className="bg-white border-2 border-[#18181b] rounded-2xl p-6 sm:p-8 shadow-[5px_5px_0px_#18181b] relative cursor-default"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-[#18181b]/15">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`px-2 py-0.5 border border-[#18181b] rounded-md text-[10px] font-mono font-bold uppercase shadow-[1px_1px_0px_#18181b] ${
                        item.color === 'tomato' ? 'bg-[#ef4444] text-white' : 'bg-[#fde047] text-[#18181b]'
                      }`}
                    >
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-stone-500 font-bold">{item.location}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-[#18181b]">
                    {item.role}
                  </h3>
                  <p className="text-sm font-bold text-stone-700">{item.organization}</p>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 bg-[#faf7ee] border border-[#18181b] rounded-lg shadow-[1px_1px_0px_#18181b] text-xs font-mono font-bold self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5 text-stone-500" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Highlights Bullet List */}
              <ul className="space-y-2 text-stone-700 text-xs sm:text-sm">
                {item.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <span className="text-[#ef4444] font-bold text-base leading-none mt-0.5">↳</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Document Link for Verified Offer Letter with Tactile Wobble */}
              {item.documentUrl && (
                <div className="pt-4 mt-4 border-t border-[#18181b]/15 flex items-center justify-start">
                  <motion.a
                    href={item.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, rotate: -1 }}
                    whileTap={{ scale: 0.95, x: 2, y: 2 }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#fde047] text-[#18181b] border-2 border-[#18181b] rounded-xl text-xs font-bold shadow-[2px_2px_0px_#18181b] hover:bg-yellow-300 transition-colors"
                  >
                    <FileCheck className="w-3.5 h-3.5 text-[#ef4444]" />
                    <span>{item.documentLabel || 'View Verification Document (PDF)'}</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </motion.a>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
