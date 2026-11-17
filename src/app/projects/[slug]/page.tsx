"use client";

import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, AlertCircle, Layers, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const projectIndex = projects.findIndex((p) => p.slug === slug);
    const project = projects[projectIndex];

    if (!project) {
        return notFound();
    }

    const nextProject = projects[(projectIndex + 1) % projects.length];

    return (
        <article className="py-12 md:py-20 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Back Link */}
                <div className="mb-8">
                    <Link
                        href="/#work"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-500 hover:text-[#c2410c] dark:hover:text-orange-400 transition-colors"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to selected work
                    </Link>
                </div>

                {/* Case Study Header */}
                <header className="space-y-4 mb-10 pb-8 border-b border-stone-200/80 dark:border-stone-800">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-500">
                        <span className="text-[#c2410c] dark:text-orange-400 font-semibold">{project.role}</span>
                        <span>&bull;</span>
                        <span>{project.timeline}</span>
                    </div>

                    <h1 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
                        {project.title}
                    </h1>

                    <p className="font-serif-editorial text-lg sm:text-xl text-stone-600 dark:text-stone-300 italic">
                        {project.subtitle}
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2.5 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-mono"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Direct Links Header */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                        {project.demo && project.demo !== '#' && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-editorial-primary text-xs"
                            >
                                <ExternalLink className="w-3.5 h-3.5" />
                                {project.demoLabel || 'Open Live Demo'}
                            </a>
                        )}

                        {project.github && project.github !== '#' && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-editorial-secondary text-xs"
                            >
                                <Github className="w-3.5 h-3.5 text-stone-700 dark:text-stone-300" />
                                {project.githubLabel || 'View Source Code'}
                            </a>
                        )}
                    </div>
                </header>

                {/* Main Screenshot Frame */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 mb-12 shadow-[0_4px_24px_-4px_rgba(28,25,23,0.06)]">
                    <Image
                        src={project.image}
                        alt={`${project.title} interface preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 896px"
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Case Study Body */}
                <div className="space-y-12 text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
                    
                    {/* Section 1: The Problem & Context */}
                    <section className="space-y-3">
                        <h2 className="font-serif-editorial text-2xl font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                            The Problem &amp; Context
                        </h2>
                        <p className="card-editorial p-6 border-l-4 border-l-[#c2410c] text-stone-700 dark:text-stone-300">
                            {project.problem}
                        </p>
                    </section>

                    {/* Section 2: Technical Approach */}
                    <section className="space-y-3">
                        <h2 className="font-serif-editorial text-2xl font-semibold text-stone-900 dark:text-stone-100">
                            Technical Approach &amp; Implementation
                        </h2>
                        <p>{project.built}</p>
                    </section>

                    {/* Section 3: Architecture Diagram & Technical Design */}
                    {project.architecture && (
                        <section className="space-y-3">
                            <h2 className="font-serif-editorial text-2xl font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                                <Layers className="w-5 h-5 text-[#c2410c]" />
                                Architecture &amp; System Design
                            </h2>
                            <div className="card-editorial p-6 font-mono text-xs leading-relaxed text-stone-600 dark:text-stone-300 bg-stone-50/50 dark:bg-stone-900/40">
                                {project.architecture}
                            </div>
                        </section>
                    )}

                    {/* Section 4: Key Features */}
                    {project.keyFeatures && project.keyFeatures.length > 0 && (
                        <section className="space-y-4">
                            <h2 className="font-serif-editorial text-2xl font-semibold text-stone-900 dark:text-stone-100">
                                Key Engineering Features
                            </h2>
                            <ul className="grid grid-cols-1 gap-3">
                                {project.keyFeatures.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="card-editorial p-4 flex items-start gap-3 text-xs sm:text-sm"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Section 5: Challenges & What Broke */}
                    {project.challenges && (
                        <section className="space-y-3">
                            <h2 className="font-serif-editorial text-2xl font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                                <AlertCircle className="w-5 h-5 text-amber-600" />
                                Challenges Overcome
                            </h2>
                            <div className="card-editorial p-6 text-stone-600 dark:text-stone-300 text-xs sm:text-sm">
                                {project.challenges}
                            </div>
                        </section>
                    )}

                    {/* Section 6: Outcome & Learnings */}
                    <section className="space-y-3">
                        <h2 className="font-serif-editorial text-2xl font-semibold text-stone-900 dark:text-stone-100">
                            Outcome &amp; Takeaways
                        </h2>
                        <p>{project.result}</p>
                        {project.learnings && (
                            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 italic">
                                <strong>Key takeaway:</strong> {project.learnings}
                            </p>
                        )}
                    </section>
                </div>

                {/* Footer Navigation between Case Studies */}
                <div className="mt-16 pt-8 border-t border-stone-200/80 dark:border-stone-800 flex items-center justify-between">
                    <Link
                        href="/#work"
                        className="text-xs font-mono text-stone-500 hover:text-stone-900 dark:hover:text-stone-100"
                    >
                        &larr; All projects
                    </Link>

                    {nextProject && (
                        <Link
                            href={`/projects/${nextProject.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#c2410c] hover:underline font-semibold"
                        >
                            Next: {nextProject.title} <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
}
