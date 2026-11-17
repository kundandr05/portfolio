"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCarousel from '@/components/projects/ProjectCarousel';
import { projects, Project } from '@/data/projects';
import { Sparkles, Layers, Cpu, Code2 } from 'lucide-react';

const categories = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'ai', label: '🤖 Agentic AI & LLMs', icon: Cpu },
    { id: 'fullstack', label: '⚡ Full-Stack & APIs', icon: Code2 },
    { id: 'local', label: '💻 Local AI & Tools', icon: Sparkles },
];

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const filteredProjects = useMemo(() => {
        if (selectedCategory === 'all') return projects;
        if (selectedCategory === 'ai') {
            return projects.filter(p => 
                p.tags.some(t => ['Agentic AI', 'Groq AI', 'LLM', 'Gemini API', 'OpenRouter API'].includes(t)) ||
                p.title.toLowerCase().includes('agentic') || 
                p.title.toLowerCase().includes('zeno') ||
                p.title.toLowerCase().includes('dispatchgrid')
            );
        }
        if (selectedCategory === 'fullstack') {
            return projects.filter(p =>
                p.tags.some(t => ['Node.js', 'Express', 'React', 'Next.js', 'FastAPI'].includes(t))
            );
        }
        if (selectedCategory === 'local') {
            return projects.filter(p =>
                p.tags.some(t => ['Ollama', 'Local AI', 'Python', 'Vanilla JS'].includes(t))
            );
        }
        return projects;
    }, [selectedCategory]);

    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header with Crazy Typography */}
                <div className="text-center mb-10 relative">
                    <span className="font-handwriting text-2xl text-blue-600 font-bold rotate-[-2deg] inline-block mb-1">
                        code, sweat & zero templates 🛠️
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        Featured{' '}
                        <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600">
                            Creations
                        </span>
                    </h2>
                    <p className="text-slate-600 text-base max-w-xl mx-auto mt-2">
                        Production applications, autonomous multi-agent pipelines, and algorithmic solvers built with obsession.
                    </p>
                </div>

                {/* Interactive Filter Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                    {categories.map(cat => {
                        const isSelected = selectedCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                                    isSelected
                                        ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105'
                                        : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400 hover:text-blue-600'
                                }`}
                            >
                                <cat.icon className="w-3.5 h-3.5" />
                                {cat.label}
                            </button>
                        );
                    })}
                </div>

                {/* Carousel Stage */}
                <div className="w-full pb-10">
                    <ProjectCarousel key={selectedCategory} projects={filteredProjects} />
                </div>
            </div>
        </section>
    );
}
