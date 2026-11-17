"use client";

import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Palette, Layers } from 'lucide-react';

const skillCategories = [
    {
        title: "Programming Languages",
        icon: Code2,
        colorBg: "bg-blue-50 text-blue-600",
        barGradient: "from-blue-500 to-indigo-600",
        skills: [
            { name: "Python", level: 90 },
            { name: "JavaScript / TypeScript", level: 85 },
            { name: "Dart", level: 80 },
            { name: "Java", level: 75 },
            { name: "C", level: 70 }
        ]
    },
    {
        title: "AI & Machine Learning",
        icon: Cpu,
        colorBg: "bg-purple-50 text-purple-600",
        barGradient: "from-purple-500 to-indigo-600",
        skills: [
            { name: "Agentic AI & Multi-Agent Systems", level: 88 },
            { name: "LLM Integration (Gemini, OpenAI, Ollama)", level: 88 },
            { name: "RAG & Prompt Engineering", level: 82 },
            { name: "Sentiment Analysis & Machine Learning", level: 80 }
        ]
    },
    {
        title: "Development & Frameworks",
        icon: Layers,
        colorBg: "bg-emerald-50 text-emerald-600",
        barGradient: "from-emerald-500 to-teal-600",
        skills: [
            { name: "React.js & Next.js", level: 88 },
            { name: "FastAPI & Express.js", level: 82 },
            { name: "Flutter & Mobile/PWA", level: 80 },
            { name: "Node.js & Tailwind CSS", level: 85 },
            { name: "REST APIs & Prisma", level: 82 }
        ]
    },
    {
        title: "Databases & Cloud",
        icon: Database,
        colorBg: "bg-sky-50 text-sky-600",
        barGradient: "from-sky-500 to-blue-600",
        skills: [
            { name: "PostgreSQL & Supabase", level: 82 },
            { name: "SQL & SQLite", level: 85 },
            { name: "Firebase (Auth & Firestore)", level: 80 }
        ]
    },
    {
        title: "UI/UX & Product Design",
        icon: Palette,
        colorBg: "bg-rose-50 text-rose-600",
        barGradient: "from-rose-500 to-pink-600",
        skills: [
            { name: "Design Thinking & User Research", level: 85 },
            { name: "Empathy Mapping & Personas", level: 85 },
            { name: "User Journeys & Information Architecture", level: 82 },
            { name: "Wireframing, Prototyping & Figma", level: 85 }
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16 relative">
                    <span className="font-handwriting text-2xl text-purple-600 font-bold rotate-[-2deg] inline-block mb-1">
                        tools of the craft ⚡
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        Technical{' '}
                        <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600">
                            Arsenal
                        </span>
                    </h2>
                    <p className="text-slate-600 text-base max-w-xl mx-auto mt-2">
                        Technologies, frameworks, and methodologies refined through research, internships, and shipped products.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category, catIndex) => (
                        <div
                            key={catIndex}
                            className="bg-white/95 backdrop-blur-md p-7 rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)] hover:border-blue-400/80 transition-all"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-2.5 rounded-2xl ${category.colorBg}`}>
                                    <category.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">{category.title}</h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between items-end mb-1.5">
                                            <span className="text-slate-700 font-semibold text-xs">{skill.name}</span>
                                            <span className="text-slate-400 text-xs font-mono font-bold">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.9, delay: skillIndex * 0.05 }}
                                                className={`h-full rounded-full bg-gradient-to-r ${category.barGradient}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
