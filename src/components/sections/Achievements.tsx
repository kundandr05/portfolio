"use client";

import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal } from 'lucide-react';

const achievements = [
    {
        title: "🏆 SIH Internal Hackathon 2025",
        organization: "MIT Mysore | Team CodeNova",
        date: "Sep 2025",
        description: "Developed Lexsent, a deep learning-based sentiment analysis system using RoBERTa-BiLSTM.",
        icon: Trophy,
        color: "text-neon-magenta"
    },
    {
        title: "🥈 INNOVATHON 2026",
        organization: "SJBIT | Team Eclipse Engine",
        date: "Mar 2026",
        description: "Developed an ERP-Based Integrated Student Management System prototype.",
        icon: Award,
        color: "text-neon-cyan"
    },
    {
        title: "🛡️ AI Customer Risk Intelligence",
        organization: "Dayananda Sagar College of Engineering",
        date: "Apr 2026",
        description: "Developed an AI system for fraud detection and customer churn prediction during a 48-hour hackathon.",
        icon: Star,
        color: "text-neon-green"
    },
    {
        title: "⚙️ AITRONIX 2025 Expo",
        organization: "MIT Mysore",
        date: "May 2025",
        description: "Presented a theft alert notification system using ESP8266 IoT modules.",
        icon: Medal,
        color: "text-yellow-400"
    },
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
        </>
    );
}
