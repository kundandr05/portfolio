"use client";

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';

const experiences = [
    {
        id: 1,
        role: "AI & Backend Developer – Academic Research Project",
        company: "Maharaja Institute of Technology, Mysuru",
        period: "2025",
        description: [
            "Architected and deployed an intelligent tournament management system using Agentic AI.",
            "Developed REST APIs with FastAPI ensuring performance and scalability.",
            "Implemented autonomous workflows and multi-agent coordination logic.",
            "Conducted unit, integration, and system testing for reliability.",
            "Research published in IJCRT, demonstrating applied AI engineering skills."
        ],
        skills: ["Agentic AI", "Python", "FastAPI", "SQLite", "System Testing", "Research"]
    }
];

export default function Experience() {
    return (
        <PageTransition>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
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
                </div>
            </section>
        </PageTransition>
    );
}
