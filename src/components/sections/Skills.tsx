"use client";

import { motion } from 'framer-motion';
import { Code2, Database, Globe, Cpu, Palette, Layers } from 'lucide-react';

const skillCategories = [
    {
        title: "Programming",
        icon: Code2,
        color: "text-neon-cyan",
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
        color: "text-neon-purple",
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
        color: "text-neon-green",
        skills: [
            { name: "React.js & Next.js", level: 88 },
            { name: "FastAPI & Express.js", level: 82 },
            { name: "Flutter & Mobile/PWA", level: 80 },
            { name: "Node.js & Tailwind CSS", level: 85 },
            { name: "REST APIs & Prisma", level: 82 }
        ]
    },
    {
        title: "Databases & Backend",
        icon: Database,
        color: "text-neon-cyan",
        skills: [
            { name: "PostgreSQL & Supabase", level: 82 },
            { name: "SQL & SQLite", level: 85 },
            { name: "Firebase (Auth & Firestore)", level: 80 }
        ]
    },
    {
        title: "UI/UX & Product Design",
        icon: Palette,
        color: "text-neon-magenta",
        skills: [
            { name: "Design Thinking & User Research", level: 85 },
            { name: "Empathy Mapping & Personas", level: 85 },
            { name: "User Journeys & Information Architecture", level: 82 },
            { name: "Wireframing, Prototyping & Figma", level: 85 }
        ]
    },
    {
        title: "Tools & Cloud Platforms",
        icon: Globe,
        color: "text-neon-purple",
        skills: [
            { name: "Git & GitHub", level: 88 },
            { name: "Vercel & Render", level: 85 },
            { name: "OpenRouter & Groq", level: 82 },
            { name: "Figma", level: 85 }
        ]
    }
];

export default function Skills() {
    return (
        <>
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
        </>
    );
}
