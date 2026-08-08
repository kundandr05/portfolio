"use client";

import { motion } from 'framer-motion';
import { Code2, Database, Globe, Cpu } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';

const skillCategories = [
    {
        title: "Programming",
        icon: Code2,
        color: "text-neon-cyan",
        skills: [
            { name: "Python", level: 90 },
            { name: "JavaScript/TypeScript", level: 85 },
            { name: "Java", level: 75 },
            { name: "C", level: 70 },
            { name: "HTML/CSS", level: 90 }
        ]
    },
    {
        title: "AI & Machine Learning",
        icon: Cpu,
        color: "text-neon-purple",
        skills: [
            { name: "Agentic AI & Multi-Agent Systems", level: 85 },
            { name: "LLMs (Gemini, Perplexity, OpenAI)", level: 85 },
            { name: "RAG & Prompt Engineering", level: 80 },
            { name: "OpenRouter API", level: 80 }
        ]
    },
    {
        title: "Frameworks & Databases",
        icon: Database,
        color: "text-neon-green",
        skills: [
            { name: "React.js & Next.js", level: 85 },
            { name: "FastAPI", level: 80 },
            { name: "Node.js & Tailwind CSS", level: 80 },
            { name: "SQL, SQLite & SQLite Cloud", level: 75 }
        ]
    },
    {
        title: "Cloud, Deployment & Tools",
        icon: Globe,
        color: "text-neon-magenta",
        skills: [
            { name: "Firebase Auth, Render, Vercel", level: 80 },
            { name: "AWS & Azure (Basics)", level: 65 },
            { name: "Git, GitHub & REST APIs", level: 85 },
            { name: "System Architecture", level: 75 }
        ]
    }
];

export default function Skills() {
    return (
        <PageTransition>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                            Technical <span className="text-neon-cyan">Skills</span>
                        </h1>
                        <p className="text-gray-400">Technologies, tools, and concepts I have worked with through projects, research, and continuous learning.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {skillCategories.map((category, catIndex) => (
                            <motion.div
                                key={catIndex}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: catIndex * 0.1 }}
                                className="glass-panel p-8 rounded-2xl relative overflow-hidden group"
                            >
                                {/* Background Glow */}
                                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-${category.color.replace('text-', '')}/20 to-transparent blur-3xl rounded-full`} />

                                <div className="flex items-center gap-3 mb-8">
                                    <category.icon className={`w-8 h-8 ${category.color}`} />
                                    <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                                </div>

                                <div className="space-y-6">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex}>
                                            <div className="flex justify-between items-end mb-2">
                                                <span className="text-gray-300 font-medium">{skill.name}</span>
                                            </div>
                                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: 0.2 }}
                                                    className={`h-full rounded-full ${category.color.replace('text-', 'bg-')} shadow-[0_0_10px_currentColor]`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
