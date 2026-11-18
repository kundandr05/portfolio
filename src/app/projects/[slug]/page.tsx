"use client";

import React, { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, AlertTriangle, Rocket } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import { projects } from '@/data/projects';

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return notFound();
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : projects[projects.length - 1];
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

  return (
    <PageTransition>
      <div className="py-8 sm:py-12 max-w-4xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-[#18181b] border-2 border-[#18181b] rounded-xl text-xs font-bold shadow-[2px_2px_0px_#18181b] hover:bg-[#fde047] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>

          <span className="text-xs font-mono font-bold text-stone-500 uppercase">
            CASE STUDY // {project.category}
          </span>
        </div>

        {/* Notebook Lab Binder Article */}
        <article className="bg-white border-2 border-[#18181b] rounded-2xl p-6 sm:p-10 md:p-12 shadow-[8px_8px_0px_#18181b] relative">
          
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

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-scrapbook-primary py-2 px-4 text-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{project.demoLabel || 'Open Live Demo'}</span>
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-scrapbook-secondary py-2 px-4 text-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{project.githubLabel || 'View Source Code'}</span>
                </a>
              )}
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
            <section className="bg-[#faf7ee] p-5 sm:p-6 rounded-2xl border-2 border-[#18181b]/30">
              <h2 className="text-lg font-display font-black text-[#18181b] flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-[#ef4444] text-white text-xs rounded font-mono">01</span>
                Problem &amp; Real-World Context
              </h2>
              <p className="text-stone-700">{project.problem}</p>
            </section>

            {/* 2. Technical Approach */}
            <section className="bg-[#faf7ee] p-5 sm:p-6 rounded-2xl border-2 border-[#18181b]/30">
              <h2 className="text-lg font-display font-black text-[#18181b] flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-[#fde047] text-[#18181b] text-xs rounded font-mono">02</span>
                Technical Approach &amp; Solution
              </h2>
              <p className="text-stone-700">{project.built}</p>
            </section>

            {/* 3. System Architecture */}
            <section className="bg-[#faf7ee] p-5 sm:p-6 rounded-2xl border-2 border-[#18181b]/30">
              <h2 className="text-lg font-display font-black text-[#18181b] flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-[#38bdf8] text-[#18181b] text-xs rounded font-mono">03</span>
                System Architecture
              </h2>
              <p className="text-stone-700">{project.architecture}</p>
            </section>

            {/* 4. Key Implementation Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <section className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-[#18181b]">
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
              </section>
            )}

            {/* 5. Challenges Overcome & What Broke */}
            <section className="bg-[#fff1f2] p-5 sm:p-6 rounded-2xl border-2 border-[#ef4444]">
              <h2 className="text-lg font-display font-black text-[#ef4444] flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-[#ef4444]" />
                Challenges Overcome &amp; Edge Cases
              </h2>
              <p className="text-stone-800 text-xs sm:text-sm">{project.challenges}</p>
            </section>

            {/* 6. Outcome & What I Learned */}
            <section className="bg-[#f0fdf4] p-5 sm:p-6 rounded-2xl border-2 border-[#22c55e]">
              <h2 className="text-lg font-display font-black text-[#15803d] flex items-center gap-2 mb-2">
                <Rocket className="w-5 h-5 text-[#15803d]" />
                Outcome &amp; Production Status
              </h2>
              <p className="text-stone-800 text-xs sm:text-sm">{project.outcome}</p>
            </section>

            {/* Tech Stack Chips */}
            <div className="pt-4">
              <span className="block text-xs font-mono font-bold text-stone-500 uppercase mb-2">
                Technologies Used:
              </span>
              <div className="flex flex-wrap gap-1.5">
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

          </div>

          {/* Next / Previous Project Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t-2 border-[#18181b]/15">
            <Link
              href={`/projects/${prevProject.slug}`}
              className="p-4 bg-[#faf7ee] border-2 border-[#18181b] rounded-xl shadow-[3px_3px_0px_#18181b] hover:-translate-y-0.5 transition-all text-left group"
            >
              <span className="text-[10px] font-mono text-stone-500 uppercase block">← Previous Project</span>
              <span className="text-sm font-display font-black text-[#18181b] group-hover:text-[#ef4444]">
                {prevProject.title}
              </span>
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="p-4 bg-[#faf7ee] border-2 border-[#18181b] rounded-xl shadow-[3px_3px_0px_#18181b] hover:-translate-y-0.5 transition-all text-right group"
            >
              <span className="text-[10px] font-mono text-stone-500 uppercase block">Next Project →</span>
              <span className="text-sm font-display font-black text-[#18181b] group-hover:text-[#ef4444]">
                {nextProject.title}
              </span>
            </Link>
          </div>

        </article>

      </div>
    </PageTransition>
  );
}
