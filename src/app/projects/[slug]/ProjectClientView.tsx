"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertTriangle,
  Rocket,
  Camera,
  ArrowDown,
  Layers,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import { Project } from '@/data/projects';

interface ProjectClientViewProps {
  project: Project;
  prevProject: Project;
  nextProject: Project;
}

function ScreenshotSlot({
  title,
  description,
  placeholderText,
}: {
  title: string;
  description: string;
  placeholderText: string;
}) {
  return (
    <div className="relative p-5 sm:p-6 bg-[#faf7ee] border-2 border-dashed border-[#18181b]/40 rounded-xl shadow-[3px_3px_0px_#18181b] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Washi tape stamp */}
      <div className="absolute -top-2.5 right-6 w-28 h-5 bg-[#fde047] border border-[#18181b]/40 -rotate-2 z-10 pointer-events-none shadow-xs text-[9px] font-mono font-bold text-[#18181b] flex items-center justify-center">
        SCREENSHOT SLOT
      </div>

      <div className="w-12 h-12 rounded-xl bg-white border-2 border-[#18181b] flex items-center justify-center mb-3 shadow-[2px_2px_0px_#18181b]">
        <Camera className="w-5 h-5 text-stone-700" />
      </div>

      <h4 className="text-sm font-display font-black text-[#18181b] mb-1">
        {title}
      </h4>

      <p className="text-xs text-stone-600 max-w-sm mb-3">
        {description}
      </p>

      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#fef08a] text-[#854d0e] border border-[#ca8a04] rounded-md text-xs font-mono font-bold">
        <span>📌</span>
        <span>{placeholderText}</span>
      </span>
    </div>
  );
}

export default function ProjectClientView({
  project,
  prevProject,
  nextProject,
}: ProjectClientViewProps) {
  const cs = project.eduAgentCaseStudy;

  return (
    <PageTransition>
      <div className="py-8 sm:py-12 max-w-4xl mx-auto">
        
        {/* Navigation Breadcrumb with Spring Entrance */}
        <div className="mb-8 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-[#18181b] border-2 border-[#18181b] rounded-xl text-xs font-bold shadow-[2px_2px_0px_#18181b] hover:bg-[#fde047] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Projects</span>
            </Link>
          </motion.div>

          <span className="text-xs font-mono font-bold text-stone-500 uppercase">
            CASE STUDY // {project.category}
          </span>
        </div>

        {/* Notebook Lab Binder Article */}
        <motion.article
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="bg-white border-2 border-[#18181b] rounded-2xl p-6 sm:p-10 md:p-12 shadow-[8px_8px_0px_#18181b] relative"
        >
          {/* Top Washi Tape Corner */}
          <div className="absolute -top-3 left-16 w-32 h-6 bg-[#fde047]/90 border border-[#18181b]/30 rotate-1 z-20 pointer-events-none shadow-xs flex items-center justify-center text-[10px] font-mono font-bold text-stone-700">
            ENGINEERING LAB NOTE
          </div>

          {/* Header */}
          <div className="border-b-2 border-[#18181b]/15 pb-8 mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="rubber-stamp text-xs py-0.5 px-2">
                {project.category}
              </span>
              <span className="text-xs font-mono font-bold text-stone-500">
                {project.date} · {project.timeline}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-[#18181b] mb-3">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg font-medium text-stone-700 max-w-2xl">
              {project.tagline}
            </p>

            {/* Meta Strip: Role, Timeline, Stack */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-stone-100 text-xs font-mono">
              <div className="p-2.5 bg-[#faf7ee] border border-[#18181b] rounded-lg">
                <span className="text-stone-500 block text-[10px] uppercase font-bold">Role</span>
                <span className="font-bold text-[#18181b]">{project.role}</span>
              </div>

              <div className="p-2.5 bg-[#faf7ee] border border-[#18181b] rounded-lg">
                <span className="text-stone-500 block text-[10px] uppercase font-bold">Timeline</span>
                <span className="font-bold text-[#18181b]">{project.timeline}</span>
              </div>

              <div className="p-2.5 bg-[#faf7ee] border border-[#18181b] rounded-lg col-span-2 sm:col-span-1">
                <span className="text-stone-500 block text-[10px] uppercase font-bold">Status</span>
                <span className="font-bold text-[#22c55e]">Shipped &amp; Verified</span>
              </div>
            </div>

            {/* Action Links with Wobble & Collapse Press */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  whileTap={{ scale: 0.95, x: 2, y: 2 }}
                  className="btn-scrapbook-primary py-2 px-4 text-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{project.demoLabel || 'Open Live Demo'}</span>
                </motion.a>
              )}

              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  whileTap={{ scale: 0.95, x: 2, y: 2 }}
                  className="btn-scrapbook-secondary py-2 px-4 text-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{project.githubLabel || 'View Source Code'}</span>
                </motion.a>
              )}
            </div>

            {/* Tech Chips */}
            <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-stone-100">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-white border border-[#18181b] rounded-lg text-xs font-mono font-bold text-[#18181b] shadow-[1px_1px_0px_#18181b]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Screenshot Frame */}
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden border-2 border-[#18181b] bg-stone-100 shadow-[4px_4px_0px_#18181b] mb-10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>

          {/* Structured Deep-Dive Sections */}
          <div className="space-y-8 text-stone-800 text-sm sm:text-base leading-relaxed">
            
            {/* 1. Problem & Context */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#faf7ee] p-5 sm:p-6 rounded-2xl border-2 border-[#18181b]/30"
            >
              <h2 className="text-lg font-display font-black text-[#18181b] flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-[#ef4444] text-white text-xs rounded font-mono">01</span>
                Problem &amp; Real-World Context
              </h2>
              <p className="text-stone-700">
                {cs ? cs.overview : project.problem}
              </p>
            </motion.section>

            {cs ? (
              /* BESPOKE LAYOUT FOR EDUAGENT CASE STUDY */
              <>
                {/* 2. What I Built (Student & Instructor with Screenshot Slots) */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-5 sm:p-8 rounded-2xl border-2 border-[#18181b] shadow-[4px_4px_0px_#18181b] space-y-6"
                >
                  <h2 className="text-xl font-display font-black text-[#18181b] flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#22c55e] text-white text-xs rounded font-mono">02</span>
                    What I Built: Student &amp; Instructor Platforms
                  </h2>

                  {/* Student Side */}
                  <div className="space-y-4">
                    <div className="p-4 bg-[#faf7ee] border-2 border-[#18181b] rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="w-5 h-5 text-[#22c55e]" />
                        <h3 className="font-display font-black text-base text-[#18181b]">
                          Student Experience &amp; Adaptive Workspace
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-700">
                        {cs.studentSide.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cs.studentSide.slots.map((slot, idx) => (
                        <ScreenshotSlot
                          key={idx}
                          title={slot.title}
                          description={slot.description}
                          placeholderText={slot.placeholderText}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Instructor / Admin Side */}
                  <div className="space-y-4 pt-4 border-t-2 border-[#18181b]/15">
                    <div className="p-4 bg-[#faf7ee] border-2 border-[#18181b] rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Layers className="w-5 h-5 text-[#38bdf8]" />
                        <h3 className="font-display font-black text-base text-[#18181b]">
                          Instructor &amp; Admin Management Platform
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-700">
                        {cs.instructorSide.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cs.instructorSide.slots.map((slot, idx) => (
                        <ScreenshotSlot
                          key={idx}
                          title={slot.title}
                          description={slot.description}
                          placeholderText={slot.placeholderText}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Database Security */}
                  <div className="p-4 bg-[#f0fdf4] border-2 border-[#22c55e] rounded-xl flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#15803d] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-bold text-sm text-[#15803d]">
                        Database-Layer Security Rules
                      </h4>
                      <p className="text-xs text-stone-700 mt-1">
                        {cs.security}
                      </p>
                    </div>
                  </div>
                </motion.section>

                {/* 3. How the Rule-Based Agent Decides (Flow Diagram) */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#faf7ee] p-5 sm:p-8 rounded-2xl border-2 border-[#18181b] shadow-[4px_4px_0px_#18181b] relative overflow-hidden"
                >
                  <div className="absolute -top-3 left-10 w-36 h-6 bg-[#38bdf8]/90 border border-[#18181b]/30 rotate-1 z-20 pointer-events-none shadow-xs text-[10px] font-mono font-bold text-[#18181b] flex items-center justify-center">
                    DECISION FLOW
                  </div>

                  <h2 className="text-xl font-display font-black text-[#18181b] flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-[#38bdf8] text-[#18181b] text-xs rounded font-mono">03</span>
                    How the Rule-Based Agent Decides
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mb-6 max-w-xl">
                    A deterministic decision loop executed upon quiz submission. Instant results, zero per-request LLM API cost, and predictable prerequisite enforcement.
                  </p>

                  <div className="space-y-3">
                    {/* Step 1 */}
                    <div className="p-4 bg-white border-2 border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b] flex items-start gap-3">
                      <span className="px-2 py-1 bg-[#fde047] text-[#18181b] text-xs font-mono font-black border border-[#18181b] rounded">
                        01
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-display font-bold text-sm text-[#18181b]">Student Submits MCQ Quiz</h4>
                          <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 bg-stone-100 border border-stone-300 rounded font-bold">Trigger</span>
                        </div>
                        <p className="text-xs text-stone-600 mt-0.5">Assessment evaluated and graded automatically upon submission.</p>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ArrowDown className="w-5 h-5 text-[#18181b]" />
                    </div>

                    {/* Step 2 */}
                    <div className="p-4 bg-white border-2 border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b] flex items-start gap-3">
                      <span className="px-2 py-1 bg-[#38bdf8] text-[#18181b] text-xs font-mono font-black border border-[#18181b] rounded">
                        02
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-display font-bold text-sm text-[#18181b]">Rule-Based Agent Evaluates Score</h4>
                          <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 bg-stone-100 border border-stone-300 rounded font-bold">Evaluation</span>
                        </div>
                        <p className="text-xs text-stone-600 mt-0.5">Compares student score directly against the 50% cutoff threshold with zero external LLM API cost.</p>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ArrowDown className="w-5 h-5 text-[#18181b]" />
                    </div>

                    {/* Step 3: Branching */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Branch A: Score < 50% */}
                      <div className="p-4 bg-[#fff1f2] border-2 border-[#ef4444] rounded-xl shadow-[3px_3px_0px_#ef4444]">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="px-2 py-0.5 bg-[#ef4444] text-white text-[10px] font-mono font-bold rounded">Score &lt; 50%</span>
                          <span className="text-xs font-bold text-[#ef4444]">Remedial Branch</span>
                        </div>
                        <h5 className="font-display font-black text-xs text-[#18181b]">Progression Locked &amp; Remedial Lessons Queued</h5>
                        <p className="text-[11px] text-stone-700 mt-1">Agent blocks next module and puts foundational prerequisite lessons at the top of the Continue Learning queue.</p>
                      </div>

                      {/* Branch B: Score >= 50% */}
                      <div className="p-4 bg-[#f0fdf4] border-2 border-[#22c55e] rounded-xl shadow-[3px_3px_0px_#22c55e]">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="px-2 py-0.5 bg-[#22c55e] text-white text-[10px] font-mono font-bold rounded">Score ≥ 50%</span>
                          <span className="text-xs font-bold text-[#15803d]">Pass Branch</span>
                        </div>
                        <h5 className="font-display font-black text-xs text-[#18181b]">Module Mastery Recorded</h5>
                        <p className="text-[11px] text-stone-700 mt-1">Topic competency verified; agent logs completion timestamp and unlocks subsequent curriculum unit.</p>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ArrowDown className="w-5 h-5 text-[#18181b]" />
                    </div>

                    {/* Step 4 */}
                    <div className="p-4 bg-[#fefce8] border-2 border-[#ca8a04] rounded-xl shadow-[2px_2px_0px_#ca8a04] flex items-start gap-3">
                      <span className="px-2 py-1 bg-[#fde047] text-[#18181b] text-xs font-mono font-black border border-[#18181b] rounded">
                        04
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-display font-bold text-sm text-[#18181b]">Progression Unlocked on Retake</h4>
                          <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 bg-yellow-100 border border-yellow-300 rounded font-bold">Resolution</span>
                        </div>
                        <p className="text-xs text-stone-700 mt-0.5">Student completes prerequisite review and re-attempts assessment. Once score clears 50%, curriculum progression is restored.</p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* 4. Architecture / Tech Stack Table */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-[#18181b] shadow-[4px_4px_0px_#18181b]"
                >
                  <h2 className="text-xl font-display font-black text-[#18181b] flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-[#fde047] text-[#18181b] text-xs rounded font-mono">04</span>
                    Architecture &amp; Tech Stack
                  </h2>

                  <div className="overflow-x-auto border-2 border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b]">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-[#faf7ee] border-b-2 border-[#18181b] font-display font-black text-[#18181b]">
                          <th className="p-3 border-r border-[#18181b]/20">Layer</th>
                          <th className="p-3 border-r border-[#18181b]/20">Technologies Used</th>
                          <th className="p-3">Implementation Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#18181b]/15">
                        {cs.architectureTable.map((row, idx) => (
                          <tr key={idx} className="hover:bg-[#faf7ee]/50 transition-colors">
                            <td className="p-3 font-mono font-bold text-[#18181b] border-r border-[#18181b]/10 bg-[#faf7ee]/30 whitespace-nowrap">
                              {row.layer}
                            </td>
                            <td className="p-3 font-mono font-bold text-[#ef4444] border-r border-[#18181b]/10 whitespace-nowrap">
                              {row.technologies}
                            </td>
                            <td className="p-3 text-stone-600 font-sans text-xs">
                              {row.details}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.section>

                {/* 5. Three Challenge Cards */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#faf7ee] p-5 sm:p-6 rounded-2xl border-2 border-[#18181b] shadow-[4px_4px_0px_#18181b]"
                >
                  <h2 className="text-xl font-display font-black text-[#18181b] flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-[#ef4444] text-white text-xs rounded font-mono">05</span>
                    Engineering Challenges &amp; Solutions
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {cs.challengeCards.map((card, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-white border-2 border-[#18181b] rounded-xl shadow-[3px_3px_0px_#18181b] flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="w-6 h-6 rounded-full bg-[#fde047] border border-[#18181b] text-xs font-mono font-black flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <h4 className="font-display font-black text-sm text-[#18181b]">
                              {card.title}
                            </h4>
                          </div>

                          <div className="space-y-2 text-xs">
                            <div className="p-2.5 bg-[#fff1f2] border border-[#ef4444]/30 rounded-lg">
                              <span className="font-mono font-bold text-[10px] text-[#ef4444] block uppercase">
                                Problem
                              </span>
                              <p className="text-stone-700 mt-0.5">
                                {card.problem}
                              </p>
                            </div>

                            <div className="p-2.5 bg-[#fefce8] border border-[#ca8a04]/30 rounded-lg">
                              <span className="font-mono font-bold text-[10px] text-[#ca8a04] block uppercase">
                                What I Did
                              </span>
                              <p className="text-stone-700 mt-0.5">
                                {card.whatIDid}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 p-2.5 bg-[#f0fdf4] border border-[#22c55e]/30 rounded-lg text-xs">
                          <span className="font-mono font-bold text-[10px] text-[#15803d] block uppercase">
                            Result
                          </span>
                          <p className="text-stone-800 font-medium mt-0.5">
                            {card.result}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* 6. What I Learned (TODO Slot) */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-5 sm:p-6 bg-[#fefce8] border-2 border-[#18181b] rounded-2xl shadow-[4px_4px_0px_#18181b] relative overflow-hidden"
                >
                  <div className="absolute -top-3 left-10 w-28 h-6 bg-[#fde047]/90 border border-[#18181b]/30 rotate-2 z-10 pointer-events-none shadow-xs text-[10px] font-mono font-bold text-[#18181b] flex items-center justify-center">
                    PERSONAL LOG
                  </div>

                  <h3 className="font-display font-black text-lg text-[#18181b] flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-[#22c55e] text-white text-xs rounded font-mono">06</span>
                    What I Learned &amp; Key Takeaways
                  </h3>

                  <div className="p-4 bg-white border-2 border-dashed border-[#ca8a04] rounded-xl text-xs sm:text-sm text-stone-700">
                    <p className="font-mono text-[#854d0e] font-bold mb-1">
                      📝 {cs.whatILearnedTodo}
                    </p>
                    <p className="text-xs text-stone-400">
                      [This slot is reserved for Kundan to write 2 lines on takeaways from building EduAgent.]
                    </p>
                  </div>
                </motion.section>
              </>
            ) : (
              /* DEFAULT LAYOUT FOR OTHER PROJECTS */
              <>
                {/* 2. Technical Approach */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#faf7ee] p-5 sm:p-6 rounded-2xl border-2 border-[#18181b]/30"
                >
                  <h2 className="text-lg font-display font-black text-[#18181b] flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-[#fde047] text-[#18181b] text-xs rounded font-mono">02</span>
                    Technical Approach &amp; Solution
                  </h2>
                  <p className="text-stone-700">{project.built}</p>
                </motion.section>

                {/* 3. System Architecture */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#faf7ee] p-5 sm:p-6 rounded-2xl border-2 border-[#18181b]/30"
                >
                  <h2 className="text-lg font-display font-black text-[#18181b] flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-[#38bdf8] text-[#18181b] text-xs rounded font-mono">03</span>
                    System Architecture
                  </h2>
                  <p className="text-stone-700">{project.architecture}</p>
                </motion.section>

                {/* 4. Key Implementation Features */}
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-[#18181b]"
                  >
                    <h2 className="text-lg font-display font-black text-[#18181b] flex items-center gap-2 mb-4">
                      <span className="px-2 py-0.5 bg-[#22c55e] text-white text-xs rounded font-mono">04</span>
                      Key Features &amp; Engineering Highlights
                    </h2>
                    <ul className="space-y-2.5">
                      {project.keyFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.section>
                )}

                {/* 5. Challenges Overcome & What Broke */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#fff1f2] p-5 sm:p-6 rounded-2xl border-2 border-[#ef4444]"
                >
                  <h2 className="text-lg font-display font-black text-[#ef4444] flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-[#ef4444]" />
                    Challenges Overcome &amp; Edge Cases
                  </h2>
                  <p className="text-stone-800 text-xs sm:text-sm">{project.challenges}</p>
                </motion.section>

                {/* 6. Outcome & What I Learned */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#f0fdf4] p-5 sm:p-6 rounded-2xl border-2 border-[#22c55e]"
                >
                  <h2 className="text-lg font-display font-black text-[#15803d] flex items-center gap-2 mb-2">
                    <Rocket className="w-5 h-5 text-[#15803d]" />
                    Outcome &amp; Production Status
                  </h2>
                  <p className="text-stone-800 text-xs sm:text-sm">{project.outcome}</p>
                </motion.section>
              </>
            )}

            {/* Tech Stack Chips at bottom with Hover Wiggle */}
            <div className="pt-4">
              <span className="block text-xs font-mono font-bold text-stone-500 uppercase mb-2">
                Technologies Used:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.08, rotate: 2, backgroundColor: "#fde047" }}
                    className="px-2.5 py-1 bg-white border border-[#18181b] rounded-lg text-xs font-mono font-bold text-[#18181b] shadow-[1px_1px_0px_#18181b] cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

          </div>

          {/* Next / Previous Project Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t-2 border-[#18181b]/15">
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={`/projects/${prevProject.slug}`}
                className="p-4 bg-[#faf7ee] border-2 border-[#18181b] rounded-xl shadow-[3px_3px_0px_#18181b] block text-left group"
              >
                <span className="text-[10px] font-mono text-stone-500 uppercase block">← Previous Project</span>
                <span className="text-sm font-display font-black text-[#18181b] group-hover:text-[#ef4444] transition-colors">
                  {prevProject.title}
                </span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={`/projects/${nextProject.slug}`}
                className="p-4 bg-[#faf7ee] border-2 border-[#18181b] rounded-xl shadow-[3px_3px_0px_#18181b] block text-right group"
              >
                <span className="text-[10px] font-mono text-stone-500 uppercase block">Next Project →</span>
                <span className="text-sm font-display font-black text-[#18181b] group-hover:text-[#ef4444] transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            </motion.div>
          </div>

        </motion.article>

      </div>
    </PageTransition>
  );
}
