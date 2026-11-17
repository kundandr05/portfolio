"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';

const filterTabs = [
    { id: 'all', label: 'All Work' },
    { id: 'flagship', label: 'Featured Systems' },
    { id: 'ai', label: 'AI & Agents' },
    { id: 'fullstack', label: 'Full-Stack' }
];

export default function Projects() {
    const [selectedTab, setSelectedTab] = useState('all');

    const filteredProjects = useMemo(() => {
        if (selectedTab === 'flagship') return projects.filter(p => p.featured);
        if (selectedTab === 'ai') return projects.filter(p => p.tags.some(t => ['Agentic AI', 'Groq AI', 'Gemini API', 'Ollama', 'Local LLMs'].includes(t)));
        if (selectedTab === 'fullstack') return projects.filter(p => p.tags.some(t => ['React', 'Next.js', 'Node.js', 'FastAPI', 'Express'].includes(t)));
        return projects;
    }, [selectedTab]);

    const flagshipProjects = filteredProjects.filter(p => p.featured);
    const secondaryProjects = filteredProjects.filter(p => !p.featured);

    return (
        <section id="work" className="py-20 border-b border-stone-200/80 dark:border-stone-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-[#c2410c] dark:text-orange-400 font-bold">
                            Selected Work
                        </span>
                        <h2 className="font-serif-editorial text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 font-semibold mt-1">
                            Things I&apos;ve built and shipped
                        </h2>
                        <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base mt-2 max-w-xl">
                            Each project is an experiment in constraint solving, autonomous multi-agent systems, or lightweight user interfaces.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800/80 rounded-xl border border-stone-200 dark:border-stone-700/80 self-start md:self-auto">
                        {filterTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setSelectedTab(tab.id)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                    selectedTab === tab.id
                                        ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-xs font-semibold'
                                        : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Flagship Projects (Large 3-line story cards) */}
                {flagshipProjects.length > 0 && (
                    <div className="space-y-10 mb-12">
                        {flagshipProjects.map((project) => (
                            <article
                                key={project.slug}
                                className="card-editorial p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                            >
                                {/* Screenshot Container */}
                                <div className="lg:col-span-6 relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 520px"
                                        className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                                    />
                                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-stone-900/85 backdrop-blur-xs text-white text-[11px] font-mono">
                                        {project.timeline}
                                    </span>
                                </div>

                                {/* Content: 3-line story (Problem -> Built -> Result) */}
                                <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-mono text-stone-500 dark:text-stone-400">{project.role}</span>
                                        </div>
                                        <h3 className="font-serif-editorial text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 font-semibold tracking-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm font-medium mt-0.5 mb-4">
                                            {project.subtitle}
                                        </p>

                                        {/* 3-Part Honest Narrative */}
                                        <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed border-t border-b border-stone-100 dark:border-stone-800 py-3.5 my-3">
                                            <div>
                                                <strong className="text-stone-900 dark:text-stone-200 font-semibold">The Problem: </strong>
                                                <span className="text-stone-600 dark:text-stone-400">{project.problem}</span>
                                            </div>
                                            <div>
                                                <strong className="text-stone-900 dark:text-stone-200 font-semibold">What I Built: </strong>
                                                <span className="text-stone-600 dark:text-stone-400">{project.built}</span>
                                            </div>
                                            <div>
                                                <strong className="text-stone-900 dark:text-stone-200 font-semibold">Outcome: </strong>
                                                <span className="text-stone-600 dark:text-stone-400">{project.result}</span>
                                            </div>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2.5 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-[11px] font-mono"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Links */}
                                    <div className="flex items-center gap-3 pt-3">
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="btn-editorial-primary text-xs"
                                        >
                                            Case study
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>

                                        {project.demo && project.demo !== '#' && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-editorial-secondary text-xs"
                                            >
                                                <ExternalLink className="w-3.5 h-3.5 text-[#c2410c]" />
                                                {project.demoLabel || 'Live Demo'}
                                            </a>
                                        )}

                                        {project.github && project.github !== '#' && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                                                title="View source code"
                                                aria-label={`Source code for ${project.title}`}
                                            >
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {/* Secondary Projects (Compact 2-Column Grid) */}
                {secondaryProjects.length > 0 && (
                    <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-6 font-semibold">
                            Additional Projects &amp; Prototypes
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {secondaryProjects.map((project) => (
                                <article
                                    key={project.slug}
                                    className="card-editorial p-6 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 mb-4">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 400px"
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="flex items-center justify-between text-[11px] font-mono text-stone-400 mb-1">
                                            <span>{project.role}</span>
                                            <span>{project.timeline}</span>
                                        </div>
                                        <h4 className="font-serif-editorial text-xl text-stone-900 dark:text-stone-100 font-semibold tracking-tight">
                                            {project.title}
                                        </h4>
                                        <p className="text-stone-600 dark:text-stone-400 text-xs leading-relaxed mt-2 line-clamp-3">
                                            {project.built}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 my-3">
                                            {project.tags.slice(0, 4).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 text-[10px] font-mono"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-3 border-t border-stone-100 dark:border-stone-800 mt-2">
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="text-xs font-semibold text-[#c2410c] hover:underline flex items-center gap-1"
                                        >
                                            Read case study <ArrowRight className="w-3 h-3" />
                                        </Link>

                                        <div className="flex items-center gap-2">
                                            {project.github && project.github !== '#' && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 p-1"
                                                    aria-label={`GitHub repository for ${project.title}`}
                                                >
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            )}
                                            {project.demo && project.demo !== '#' && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-stone-500 hover:text-[#c2410c] p-1"
                                                    aria-label={`Live demo for ${project.title}`}
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
