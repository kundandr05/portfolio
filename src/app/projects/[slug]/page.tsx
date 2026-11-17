"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft, CheckCircle2, Layers, Target, Rocket } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import PageTransition from '@/components/shared/PageTransition';
import { projects } from '@/data/projects';
import { useState, use } from 'react';

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const project = projects.find((p) => p.slug === slug);
    const [imageError, setImageError] = useState(false);

    if (!project) {
        return notFound();
    }

    return (
        <PageTransition>
            <section className="py-20 min-h-screen">
                <div className="container mx-auto px-4 max-w-5xl">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link href="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors gap-2">
                            <ArrowLeft className="w-5 h-5" /> Back to Projects
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight mb-6">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap gap-2.5 mb-6">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-xl text-slate-600 leading-relaxed font-normal">
                            {project.description}
                        </p>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="relative w-full aspect-video rounded-3xl overflow-hidden border border-slate-200/80 mb-16 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12)] bg-slate-100"
                    >
                        {!imageError ? (
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                onError={() => setImageError(true)}
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400 text-xl font-medium">
                                Project Preview Screenshot
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-2 space-y-8"
                        >
                            {/* Key Features */}
                            {project.keyFeatures && (
                                <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 p-8 rounded-3xl shadow-sm relative overflow-hidden">
                                    <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-500/10 blur-3xl rounded-full" />
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                        <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                                            <Target className="w-5 h-5" />
                                        </div>
                                        Key Features
                                    </h2>
                                    <ul className="space-y-3.5">
                                        {project.keyFeatures.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Technical Architecture */}
                            {project.architecture && (
                                <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 p-8 rounded-3xl shadow-sm relative overflow-hidden">
                                    <div className="absolute -top-12 -right-12 w-36 h-36 bg-violet-500/10 blur-3xl rounded-full" />
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                        <div className="p-2 rounded-xl bg-violet-50 text-violet-600">
                                            <Layers className="w-5 h-5" />
                                        </div>
                                        Technical Architecture
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {project.architecture}
                                    </p>
                                </div>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            {/* Action Links */}
                            <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 p-6 rounded-3xl space-y-3 shadow-sm">
                                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Project Links</h3>
                                {(!project.github || project.github === '#') ? (
                                    <span className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-400 cursor-not-allowed font-medium text-sm" title={project.githubLabel || "Code unavailable"}>
                                        <Github className="w-4 h-4" /> {project.githubLabel || "Code (Coming Soon)"}
                                    </span>
                                ) : (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all duration-200 font-semibold text-sm shadow-sm hover:shadow"
                                    >
                                        <Github className="w-4 h-4" /> View Source Code
                                    </a>
                                )}
                                
                                {(!project.demo || project.demo === '#') ? (
                                    <span className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-400 cursor-not-allowed font-medium text-sm">
                                        <ExternalLink className="w-4 h-4" /> Demo (Coming Soon)
                                    </span>
                                ) : (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold text-sm shadow-sm hover:shadow-md"
                                    >
                                        <ExternalLink className="w-4 h-4" /> {project.demoLabel || "Live Demo"}
                                    </a>
                                )}
                                
                                {project.youtubeUrl && (
                                    <a
                                        href={project.youtubeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100 transition-all duration-200 font-medium text-sm"
                                    >
                                        <ExternalLink className="w-4 h-4" /> Watch on YouTube
                                    </a>
                                )}
                            </div>

                            {/* Challenges & Future */}
                            {project.challenges && (
                                <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 p-6 rounded-3xl shadow-sm">
                                    <h3 className="text-base font-bold text-slate-900 mb-2">Challenges Overcome</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        {project.challenges}
                                    </p>
                                </div>
                            )}
                            {project.futureImprovements && (
                                <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 p-6 rounded-3xl shadow-sm">
                                    <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <Rocket className="w-4 h-4 text-emerald-600" /> Future Iterations
                                    </h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        {project.futureImprovements}
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
