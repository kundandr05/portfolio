"use client";

import { motion } from 'framer-motion';
import { Download, User, Target, Zap } from 'lucide-react';
import Image from 'next/image';
import PageTransition from '@/components/shared/PageTransition';

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <PageTransition>
            <section className="py-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="container mx-auto px-4"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple mb-12 text-center"
                    >
                        About Me
                    </motion.h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column: Bio & Info */}
                        <div className="space-y-8">
                            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <User className="text-neon-cyan" /> Who I Am
                                </h2>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    I am a Computer Science (AI & ML) undergraduate at Maharaja Institute of Technology, Mysuru, with interests in Artificial Intelligence, backend development, and intelligent automation.
                                </p>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    I have designed and published an Agentic AI-based Tournament Management System in a peer-reviewed journal, demonstrating practical expertise in multi-agent systems, FastAPI, and intelligent automation.
                                </p>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    Beyond academics, I am also an author of two published books, reflecting my creativity, discipline, and storytelling ability.
                                </p>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    I am passionate about building intelligent systems that combine research, engineering, and real-world impact.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    Currently focused on strengthening software engineering fundamentals, improving Zeno AI, solving data structures and algorithms problems, and preparing for AI and software development internships.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Academic */}
                                <div className="glass-panel p-6 rounded-xl hover:border-neon-magenta/50 transition-colors duration-300">
                                    <h3 className="text-xl font-bold text-neon-magenta mb-2">Education</h3>
                                    <p className="text-white font-medium">Bachelor of Engineering (B.E.) in Computer Science & Engineering (AI & ML)</p>
                                    <p className="text-gray-400 text-sm mb-2">Maharaja Institute of Technology, Mysuru | 2023 - 2027</p>
                                    <p className="text-gray-300 text-sm">Focused on Artificial Intelligence, Machine Learning, Backend Systems, and Intelligent Automation.</p>
                                </div>

                                {/* Goals */}
                                <div className="glass-panel p-6 rounded-xl hover:border-neon-green/50 transition-colors duration-300">
                                    <h3 className="text-xl font-bold text-neon-green flex items-center gap-2 mb-2">
                                        <Target className="w-5 h-5" /> Goals
                                    </h3>
                                    <p className="text-gray-300 text-sm">To specialize in Artificial Intelligence and Multi-Agent Systems, contributing to innovative research and developing impactful AI-driven products at scale.</p>
                                </div>

                                {/* Highlights */}
                                <div className="glass-panel p-6 rounded-xl hover:border-neon-cyan/50 transition-colors duration-300 md:col-span-2">
                                    <h3 className="text-xl font-bold text-neon-cyan mb-4">Highlights</h3>
                                    <ul className="text-gray-300 text-sm list-disc list-inside space-y-2">
                                        <li>Research Paper Published (IJCRT)</li>
                                        <li>2 Books Published on Amazon KDP</li>
                                        <li>Built Zeno AI Chatbot using FastAPI</li>
                                        <li>Developed Agentic AI Tournament Management System</li>
                                        <li>AIML Undergraduate (2023–2027)</li>
                                        <li>Open to AI & Software Development Internships</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Skills/Strengths & Resume */}
                        <div className="space-y-8">
                            {/* Profile Image Card */}
                            <motion.div variants={itemVariants} className="glass-panel p-4 rounded-2xl flex justify-center items-center overflow-hidden relative group">
                                <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <div className="relative w-3/4 md:w-2/3 lg:w-3/4 mx-auto aspect-square rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                    <Image
                                        src="/profile.jpg"
                                        alt="Profile"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </motion.div>
                            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <Zap className="text-neon-purple" /> Soft Skills
                                </h2>
                                <div className="grid grid-cols-2 gap-4">
                                    {['Problem Solving', 'Analytical Thinking', 'Team Collaboration', 'Communication'].map((strength, index) => (
                                        <div key={index} className="flex items-center gap-2 text-gray-300">
                                            <div className="w-2 h-2 rounded-full bg-neon-cyan" />
                                            {strength}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl text-center">
                                <h2 className="text-2xl font-bold text-white mb-6">Resume</h2>
                                <p className="text-gray-400 mb-6">Want to know more about my professional background?</p>
                                <div className="flex justify-center gap-4">
                                    <a
                                        href="/Kundan_DR_Resume_2027_AI_ML.pdf"
                                        download
                                        className="px-6 py-3 bg-neon-cyan/20 border border-neon-cyan text-neon-cyan rounded-lg hover:bg-neon-cyan hover:text-black transition-all duration-300 flex items-center gap-2 font-medium"
                                    >
                                        <Download className="w-5 h-5" /> Download CV
                                    </a>
                                    {/* Future: Add View Resume Modal Trigger */}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </PageTransition>
    );
}
