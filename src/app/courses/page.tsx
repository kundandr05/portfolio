"use client";

import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';

const courses = [
    {
        title: "AWS APAC – Solutions Architecture",
        platform: "Forage",
        date: "2024",
        skills: ["AWS", "Cloud Architecture", "System Design"],
        certificateLink: "#",
        image: "/cert1.jpg"
    },
    {
        title: "Gen AI Powered Data Analytics",
        platform: "Tata",
        date: "2024",
        skills: ["AI", "Data Analytics", "Machine Learning"],
        certificateLink: "#",
        image: "/cert2.jpg"
    },
    {
        title: "Software Engineering Simulation",
        platform: "Wells Fargo",
        date: "2024",
        skills: ["Software Engineering", "System Design"],
        certificateLink: "#",
        image: "/cert3.jpg"
    },
    {
        title: "Tools for Data Science",
        platform: "IBM",
        date: "2024",
        skills: ["Python", "Data Science", "IBM"],
        certificateLink: "#",
        image: "/cert4.jpg"
    },
    {
        title: "Microsoft Azure Cloud Services",
        platform: "Microsoft",
        date: "2024",
        skills: ["Azure", "Cloud Computing"],
        certificateLink: "#",
        image: "/cert5.jpg"
    },
    {
        title: "Crash Course on Python",
        platform: "Google",
        date: "2024",
        skills: ["Python Programming"],
        certificateLink: "#",
        image: "/cert6.jpg"
    }
];

export default function Courses() {
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
                            Certifications & <span className="text-neon-magenta">Courses</span>
                        </h1>
                        <p className="text-gray-400">Continuous learning is the key to staying ahead.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {courses.map((course, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass-panel p-6 rounded-2xl border-l-4 border-l-neon-magenta hover:border-l-neon-cyan transition-all duration-300 group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                                            {course.title}
                                        </h3>
                                        <p className="text-neon-magenta text-sm font-medium flex items-center gap-1 mt-1">
                                            <Award className="w-4 h-4" /> {course.platform}
                                        </p>
                                    </div>
                                    <div className="p-2 bg-white/5 rounded-lg">
                                        {/* Placeholder for small certificate image icon */}
                                        <Award className="w-6 h-6 text-gray-400" />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
                                    <Calendar className="w-3 h-3" />
                                    {course.date}
                                </div>

                                <div className="mb-6">
                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Skills Learned:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {course.skills.map((skill, i) => (
                                            <span key={i} className="flex items-center gap-1 text-xs px-2 py-1 bg-white/5 rounded text-gray-300">
                                                <CheckCircle className="w-3 h-3 text-neon-green" /> {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href={course.certificateLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-2 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                                >
                                    View Certificate <ExternalLink className="w-4 h-4" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
