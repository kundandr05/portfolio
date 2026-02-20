"use client";

import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';

const achievements = [
    {
        title: "📄 Research Publication",
        organization: "International Journal of Creative Research and Development",
        date: "2025",
        description: "Published an Agentic AI research paper.",
        icon: Award,
        color: "text-neon-cyan"
    },
    {
        title: "🤖 AI System Development",
        organization: "Independent Project",
        date: "2025",
        description: "Built a scalable multi-agent AI system with backend architecture using FastAPI.",
        icon: Star,
        color: "text-neon-magenta"
    },
    {
        title: "☁ Cloud & AI Simulations",
        organization: "AWS, Tata Gen AI, IBM, Azure",
        date: "2024",
        description: "Completed AWS, Tata Gen AI, IBM Data Science, and Azure cloud simulations.",
        icon: Medal,
        color: "text-neon-green"
    },
    {
        title: "📚 Published Author",
        organization: "Amazon",
        date: "2023 - 2024",
        description: "Independently published two books on Amazon.",
        icon: Trophy,
        color: "text-yellow-400"
    }
];

export default function Achievements() {
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
                            Honors & <span className="text-neon-magenta">Achievements</span>
                        </h1>
                        <p className="text-gray-400">Milestones that mark my journey of excellence.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="glass-panel p-8 rounded-2xl flex items-start gap-6 border border-white/5 hover:border-white/20 transition-all duration-300"
                            >
                                <div className={`p-4 bg-white/5 rounded-full ${item.color} shadow-[0_0_15px_currentColor]`}>
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-neon-cyan mb-2">{item.organization} | {item.date}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
