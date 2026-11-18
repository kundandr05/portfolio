"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Sparkles, Cpu } from 'lucide-react';
import { projects } from '@/data/projects';

const filterCategories = [
  { id: 'all', label: `All Projects (${projects.length})` },
  { id: 'Flagship', label: '★ Flagships (3)' },
  { id: 'Autonomous AI', label: '🤖 Autonomous AI' },
  { id: 'Full-Stack', label: '⚡ Full-Stack' },
  { id: 'Open Source', label: '🔓 Open Source' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const flagships = filteredProjects.filter((p) => p.category === 'Flagship');
  const secondary = filteredProjects.filter((p) => p.category !== 'Flagship');

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      {/* Section Header with Highlighter Sweep */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-start mb-12"
      >
        <motion.div
          whileHover={{ rotate: 3, scale: 1.05 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ef4444] text-white border-2 border-[#18181b] rounded-md shadow-[2px_2px_0px_#18181b] text-xs font-black uppercase tracking-wider -rotate-1 mb-3 cursor-default"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Selected Work</span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-[#18181b]">
              Things I&apos;ve built with{' '}
              <motion.span
                initial={{ backgroundSize: "0% 100%" }}
                whileInView={{ backgroundSize: "100% 100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="bg-[#fde047] px-2 py-0.5 rounded-md border-2 border-[#18181b] shadow-[2px_2px_0px_#18181b] inline-block -rotate-1"
              >
                real code
              </motion.span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
              From combinatorial heuristic dispatch solvers to autonomous multi-agent coordination pipelines. No dummy templates or fake screenshots.
            </p>
          </div>

          <span className="text-xs font-handwriting text-stone-500 font-bold self-start sm:self-end">
            click cards to read full case studies ↘
          </span>
        </div>

        {/* Filter Pills with Tactile Wobble */}
        <div className="flex flex-wrap gap-2 mt-6">
          {filterCategories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              whileHover={{ scale: 1.04, rotate: [-1, 1, 0] }}
              whileTap={{ scale: 0.95, x: 1, y: 1 }}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl border-2 border-[#18181b] transition-colors ${
                activeFilter === cat.id
                  ? 'bg-[#18181b] text-white shadow-[2px_2px_0px_#ef4444]'
                  : 'bg-white text-[#18181b] shadow-[2px_2px_0px_#18181b] hover:bg-[#fde047]'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Flagship Projects: Oversized Cards with Staggered Scroll Reveals */}
      <div className="space-y-10 mb-14">
        {flagships.map((project, idx) => {
          const initialRotation = idx % 2 === 0 ? -1.5 : 1.5;
          return (
            <motion.article
              key={project.slug}
              data-cursor="view"
              initial={{ opacity: 0, y: 50, rotate: initialRotation }}
              whileInView={{ opacity: 1, y: 0, rotate: initialRotation }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 24,
                delay: idx * 0.1,
              }}
              whileHover={{
                y: -6,
                rotate: 0,
                boxShadow: "10px 10px 0px #18181b",
                transition: { duration: 0.2 },
              }}
              className="group bg-white border-2 border-[#18181b] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#18181b] relative cursor-pointer"
            >
              {/* Washi Tape Accent on Top Edge */}
              <div className="absolute -top-3 right-10 w-24 h-6 bg-[#fde047]/90 border border-[#18181b]/30 -rotate-2 z-20 pointer-events-none shadow-xs" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Project Preview Image with Zoom on Card Hover */}
                <div className="lg:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden border-2 border-[#18181b] bg-stone-100 shadow-[3px_3px_0px_#18181b]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-108 transition-transform duration-500 ease-out"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#faf7ee] relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#18181b_1px,transparent_1px)] [background-size:12px_12px]" />
                      <div className="w-12 h-12 rounded-xl bg-white border-2 border-[#18181b] flex items-center justify-center mb-2 shadow-[2px_2px_0px_#18181b] z-10">
                        <Cpu className="w-6 h-6 text-[#ef4444]" />
                      </div>
                      <span className="text-[10px] font-mono uppercase font-black text-stone-500 tracking-wider z-10">
                        ALGORITHMIC ENGINE // BLUEPRINT
                      </span>
                      <h4 className="text-sm font-display font-black text-[#18181b] mt-1 z-10">
                        Deterministic Constraint Solver
                      </h4>
                      <p className="text-[11px] text-stone-600 mt-1 max-w-xs z-10 font-mono">
                        1,000 jobs in 244ms · 0 overlaps · 2-Opt
                      </p>
                    </div>
                  )}
                  
                  {/* Year Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 border border-[#18181b] rounded-md shadow-[1px_1px_0px_#18181b] text-[10px] font-mono font-bold text-[#18181b] z-20">
                    {project.date} · {project.category}
                  </div>
                </div>

                {/* Project Narrative & Details */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="rubber-stamp text-[10px] py-0.5 px-2">
                        FLAGSHIP
                      </span>
                      <span className="text-xs font-mono text-stone-500">{project.role}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-black text-[#18181b] group-hover:text-[#ef4444] transition-colors">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-stone-600 text-sm font-medium mt-1 mb-4">
                      {project.tagline}
                    </p>

                    {/* 3-Line Story Format */}
                    <div className="space-y-2 bg-[#faf7ee] p-4 rounded-xl border-2 border-[#18181b]/40 text-xs sm:text-sm">
                      <div className="flex items-start gap-2">
                        <span className="px-1.5 py-0.5 bg-[#ef4444] text-white font-black text-[10px] rounded uppercase shrink-0 mt-0.5">
                          Problem
                        </span>
                        <p className="text-stone-700 leading-snug">{project.problem}</p>
                      </div>

                      <div className="flex items-start gap-2">
                        <span className="px-1.5 py-0.5 bg-[#fde047] text-[#18181b] font-black text-[10px] rounded uppercase shrink-0 mt-0.5">
                          Built
                        </span>
                        <p className="text-stone-700 leading-snug">{project.built}</p>
                      </div>

                      <div className="flex items-start gap-2">
                        <span className="px-1.5 py-0.5 bg-[#22c55e] text-white font-black text-[10px] rounded uppercase shrink-0 mt-0.5">
                          Result
                        </span>
                        <p className="text-stone-700 leading-snug font-medium">{project.result}</p>
                      </div>
                    </div>

                    {/* Tech Tags with Micro Wiggle Animation */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.1, rotate: [-2, 2, 0], backgroundColor: "#38bdf8" }}
                          transition={{ duration: 0.25 }}
                          className="px-2 py-0.5 bg-white border border-[#18181b] rounded-md text-[11px] font-mono font-bold text-[#18181b] shadow-[1px_1px_0px_#18181b] cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Buttons with Wobble & Collapse Press */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-5 mt-4 border-t border-[#18181b]/20">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: -1 }}
                      whileTap={{ scale: 0.95, x: 2, y: 2 }}
                    >
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#18181b] text-white border-2 border-[#18181b] rounded-xl text-xs font-bold shadow-[2px_2px_0px_#ef4444]"
                      >
                        <span>Read Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </motion.div>

                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        whileTap={{ scale: 0.95, x: 1, y: 1 }}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#22c55e] text-white border-2 border-[#18181b] rounded-xl text-xs font-bold shadow-[2px_2px_0px_#18181b]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{project.demoLabel || 'Live Demo'}</span>
                      </motion.a>
                    )}

                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, rotate: -1 }}
                        whileTap={{ scale: 0.95, x: 1, y: 1 }}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-white text-[#18181b] border-2 border-[#18181b] rounded-xl text-xs font-bold shadow-[2px_2px_0px_#18181b] hover:bg-[#fde047]"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>{project.githubLabel || 'Code'}</span>
                      </motion.a>
                    )}
                  </div>

                </div>

              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Secondary Projects: Compact 2-Column Grid with Staggered Scroll Reveals */}
      {secondary.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-xl font-display font-black text-[#18181b]">
              More Experiments &amp; Open Source
            </h3>
            <span className="h-0.5 flex-grow bg-[#18181b]/20" />
            <span className="text-xs font-mono text-stone-500 font-bold">{secondary.length} projects</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondary.map((project, idx) => {
              const initRot = idx % 2 === 0 ? -1 : 1;
              return (
                <motion.article
                  key={project.slug}
                  data-cursor="view"
                  initial={{ opacity: 0, y: 40, rotate: initRot }}
                  whileInView={{ opacity: 1, y: 0, rotate: initRot }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 24,
                    delay: idx * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                    rotate: 0,
                    boxShadow: "7px 7px 0px #18181b",
                    transition: { duration: 0.2 },
                  }}
                  className="bg-white border-2 border-[#18181b] rounded-2xl p-5 shadow-[4px_4px_0px_#18181b] flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden border-2 border-[#18181b] mb-4 bg-stone-100 shadow-[2px_2px_0px_#18181b]">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top group-hover:scale-106 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#faf7ee]">
                          <span className="text-[11px] font-mono font-bold text-stone-500">Asset Pending</span>
                        </div>
                      )}
                      <span className="absolute top-2 left-2 px-2 py-0.5 bg-white/90 border border-[#18181b] rounded text-[10px] font-mono font-bold">
                        {project.date} · {project.category}
                      </span>
                    </div>

                    <h4 className="text-lg font-display font-black text-[#18181b] group-hover:text-[#ef4444] transition-colors">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h4>

                    <p className="text-xs text-stone-600 mt-1 mb-3 line-clamp-2">
                      {project.tagline}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.08, rotate: 2 }}
                          className="px-1.5 py-0.5 bg-[#faf7ee] border border-[#18181b]/40 rounded text-[10px] font-mono text-[#18181b]"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#18181b]/20 text-xs font-bold">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 text-[#18181b] hover:text-[#ef4444]"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <div className="flex items-center gap-2">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#22c55e] hover:underline inline-flex items-center gap-0.5"
                        >
                          <span>Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-stone-700 hover:text-black inline-flex items-center gap-0.5"
                        >
                          <Github className="w-3 h-3" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
