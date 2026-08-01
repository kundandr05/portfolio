"use client";

import { motion } from 'framer-motion';
import { Briefcase, Calendar, BookOpen, ExternalLink, FileText } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';

const experiences = [
    {
        id: 1,
        role: "Research Project Developer",
        company: "Maharaja Institute of Technology, Mysuru",
        period: "2025",
        description: [
            "Designed and developed an intelligent tournament management system using Agentic AI.",
            "Developed REST APIs with FastAPI ensuring performance and scalability.",
            "Implemented autonomous workflows and multi-agent coordination logic.",
            "Conducted unit, integration, and system testing for reliability.",
            "Research published in IJCRT, demonstrating applied AI engineering skills."
        ],
        skills: ["Agentic AI", "Python", "FastAPI", "SQLite", "System Testing", "Research"]
    }
];

const publications = [
    {
        id: 1,
        title: "Agentic AI Tournament Management System",
        journal: "International Journal of Creative Research Thoughts (IJCRT)",
        date: "2025",
        description: "A research paper detailing the design, architecture, and implementation of a multi-agent system for automating tournament workflows. Explores the practical applications of Agentic AI in complex, real-world scheduling and coordination problems.",
        link: "/paper.pdf", // Updated to local PDF
        type: "Research Paper"
    },
    {
        id: 2,
        title: "RECLAIM YOUR FOCUS: A Guide to Dopamine Detox and Get Things Done",
        journal: "Amazon",
        date: "2024",
        description: "In a world drowning in digital noise, our brains are overstimulated by notifications and endless scrolling. This book is your roadmap back to clarity, exploring the science behind distractions and how our modern environment overloads the brain's reward system.",
        link: "https://a.co/d/07SiOZpN",
        type: "Book"
    },
    {
        id: 3,
        title: "The Two-Speed Mind: Solving the 90s vs. 2000s Conflict to End Your Structural Stress",
        journal: "Amazon",
        date: "2024",
        description: "Stop calling it burnout. It's structural failure. You are suffering from a structural non-alignment between the stable 1990s Mindset and the relentless speed of the 2000s World. This book introduces Computational Physics to expose the true source of modern anxiety.",
        link: "https://a.co/d/0euaUcnC",
        type: "Book"
    }
];

export default function Experience() {
    return (
        <PageTransition>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan mb-16 text-center"
                    >
                        Experience
                    </motion.h1>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-magenta opacity-30" />

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row gap-8 mb-12 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[6px] w-3 h-3 rounded-full bg-neon-cyan shadow-[0_0_10px_#00f3ff] z-10 mt-6" />

                                {/* Content Card */}
                                <div className="md:w-1/2 pl-8 md:pl-0 md:pr-12 group">
                                    <div className={`glass-panel p-6 rounded-xl hover:border-neon-cyan/50 transition-all duration-300 transform group-hover:-translate-y-1 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                                        }`}>
                                        <div className="flex items-center gap-2 text-neon-cyan mb-2">
                                            <Briefcase className="w-4 h-4" />
                                            <h3 className="font-bold text-lg">{exp.role}</h3>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                                            <Calendar className="w-3 h-3" />
                                            <span>{exp.period}</span>
                                            <span className="mx-2">|</span>
                                            <span>{exp.company}</span>
                                        </div>
                                        <ul className="text-gray-300 mb-4 leading-relaxed text-sm list-disc list-inside space-y-1">
                                            {exp.description.map((point, idx) => (
                                                <li key={idx}>{point}</li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, i) => (
                                                <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty Space for alignment */}
                                <div className="md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Research Publications Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-32 max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple mb-12 text-center">
                            Publications & Authorship
                        </h2>

                        <div className="space-y-6">
                            {publications.map((pub, index) => (
                                <motion.div
                                    key={pub.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-neon-cyan/50 transition-colors duration-300"
                                >
                                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-neon-cyan/10 blur-3xl rounded-full group-hover:bg-neon-cyan/20 transition-colors" />
                                    
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                {pub.type === "Book" ? (
                                                    <BookOpen className="w-6 h-6 text-neon-purple" />
                                                ) : (
                                                    <FileText className="w-6 h-6 text-neon-cyan" />
                                                )}
                                                <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                                                    {pub.title}
                                                </h3>
                                            </div>
                                            
                                            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                                                <span className="flex items-center gap-1 text-neon-magenta">
                                                    <Calendar className="w-4 h-4" /> {pub.date}
                                                </span>
                                                <span>|</span>
                                                <span className="font-medium text-gray-300">{pub.journal}</span>
                                            </div>
                                            
                                            <p className="text-gray-300 leading-relaxed text-sm">
                                                {pub.description}
                                            </p>
                                        </div>

                                        <a
                                            href={pub.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="shrink-0 flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-neon-cyan/20 hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 font-medium"
                                        >
                                            View <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </PageTransition>
    );
}
