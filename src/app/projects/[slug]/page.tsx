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
                        <Link href="/projects" className="inline-flex items-center text-neon-cyan hover:text-white transition-colors gap-2">
                            <ArrowLeft className="w-5 h-5" /> Back to Projects
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap gap-3 mb-6">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 text-sm rounded-full bg-white/5 text-neon-cyan border border-neon-cyan/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            {project.description}
                        </p>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 mb-16 shadow-[0_0_50px_rgba(0,243,255,0.1)]"
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
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-gray-500 text-xl font-medium">
                                Project Preview Screenshot
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-2 space-y-12"
                        >
                            {/* Key Features */}
                            {project.keyFeatures && (
                                <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon-cyan/20 blur-3xl rounded-full" />
                                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                        <Target className="text-neon-cyan" /> Key Features
                                    </h2>
                                    <ul className="space-y-4">
                                        {project.keyFeatures.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                <CheckCircle2 className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Technical Architecture */}
                            {project.architecture && (
                                <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon-purple/20 blur-3xl rounded-full" />
                                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                        <Layers className="text-neon-purple" /> Technical Architecture
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
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
                            className="space-y-8"
                        >
                            {/* Action Links */}
                            <div className="glass-panel p-6 rounded-2xl space-y-4">
                                {(!project.github || project.github === '#') ? (
                                    <span className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed font-medium" title={project.githubLabel || "Code unavailable"}>
                                        <Github className="w-5 h-5" /> {project.githubLabel || "Code (Coming Soon)"}
                                    </span>
                                ) : (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-neon-cyan/20 hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 font-medium"
                                    >
                                        <Github className="w-5 h-5" /> View Source Code
                                    </a>
                                )}
                                
                                {(!project.demo || project.demo === '#') ? (
                                    <span className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed font-medium">
                                        <ExternalLink className="w-5 h-5" /> Demo (Coming Soon)
                                    </span>
                                ) : (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-neon-magenta/20 border border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-white transition-all duration-300 font-medium"
                                    >
                                        <ExternalLink className="w-5 h-5" /> {project.demoLabel || "Live Demo"}
                                    </a>
                                )}
                            </div>

                            {/* Challenges & Future */}
                            {project.challenges && (
                                <div className="glass-panel p-6 rounded-2xl">
                                    <h3 className="text-lg font-bold text-white mb-3">Challenges Overcome</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {project.challenges}
                                    </p>
                                </div>
                            )}
                            {project.futureImprovements && (
                                <div className="glass-panel p-6 rounded-2xl">
                                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                        <Rocket className="w-4 h-4 text-neon-green" /> Future Iterations
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
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
