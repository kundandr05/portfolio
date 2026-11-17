"use client";

import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal } from 'lucide-react';

const achievements = [

    {
        title: "🎓 AI & Cloud Certifications",
        organization: "Infosys Springboard, IBM, Google",
        date: "2024 - 2025",
        description: "Certified in Generative AI, LLMOps, IBM AI Fundamentals, and Network Security.",
        icon: Award,
        color: "text-neon-cyan"
    },
    {
        title: "📚 Published Author",
        organization: "Amazon KDP",
        date: "2024",
        description: "Independently published two books: 'Reclaim Your Focus' and 'The Two-Speed Mind'.",
        icon: Star,
        color: "text-neon-purple"
    }
];

export default function Achievements() {
    return (
        <>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-4">
                            Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600">Achievements</span>
                        </h1>
                        <p className="text-slate-600">Milestones that mark my journey of excellence.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -6 }}
                                className="glass-panel p-8 rounded-2xl flex items-start gap-6 border border-slate-200/80 hover:border-blue-300 transition-all duration-300"
                            >
                                <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl shadow-sm">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-blue-600 font-semibold mb-2">{item.organization} &bull; {item.date}</p>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
