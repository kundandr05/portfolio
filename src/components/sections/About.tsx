"use client";

import { motion } from 'framer-motion';
import { Download, User, Target, Zap, Eye } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import ResumeModal from '@/components/shared/ResumeModal';

export default function About() {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
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
        <>
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
                                    AI & Machine Learning Engineering student with hands-on experience building Agentic AI systems, multimodal assistants, and full-stack applications using Python, FastAPI, React, and Next.js.
                                </p>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    Published research author with an IJCRT publication and two independently published Amazon KDP books. Experienced in hackathon-driven software development, LLM integration, and rapid prototyping.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    I am passionate about building intelligent systems that combine research, engineering, and real-world impact. Incoming incubation intern at WizzyBox.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Experience */}
                                <div className="glass-panel p-6 rounded-xl hover:border-neon-cyan/50 transition-colors duration-300 md:col-span-2">
                                    <h3 className="text-xl font-bold text-neon-cyan mb-4">Experience</h3>
                                    
                                    <div className="mb-2">
                                        <p className="text-white font-medium">Software Engineering Intern (Incubation Internship)</p>
                                        <p className="text-gray-400 text-sm">WizzyBox Private Limited (WCAP) | Starting Sep 2026</p>
                                    </div>
                                    <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                                        <li>Selected for the highly competitive WizzyBox Career Accelerator Program (WCAP) in partnership with NammaQA.</li>
                                        <li>Will be engaging in end-to-end training, live project exposure, and hands-on deliverables in an onsite/offshore model.</li>
                                        <li>Focused on industry-led technologies spanning AI/ML, Python Full-Stack, and Software Testing.</li>
                                    </ul>
                                </div>

                                {/* Academic */}
                                <div className="glass-panel p-6 rounded-xl hover:border-neon-magenta/50 transition-colors duration-300">
                                    <h3 className="text-xl font-bold text-neon-magenta mb-4">Education</h3>
                                    
                                    <div className="mb-4">
                                        <p className="text-white font-medium">B.E. in Computer Science & Engineering (AI & ML)</p>
                                        <p className="text-gray-400 text-sm">Maharaja Institute of Technology, Mysuru | Expected 2027</p>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <p className="text-white font-medium">Pre-University Course (PCMB)</p>
                                        <p className="text-gray-400 text-sm">Sri Adichunchanagiri Independent PU College | 2023</p>
                                    </div>

                                    <div>
                                        <p className="text-white font-medium">Secondary School Leaving Certificate</p>
                                        <p className="text-gray-400 text-sm">BGS Central School, Bhadravathi | 2021</p>
                                    </div>
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
                                        <li>Incoming Incubation Intern at WizzyBox</li>
                                        <li>Published Research Paper in IJCRT (Agentic AI)</li>
                                        <li>2 Books Published on Amazon KDP</li>
                                        <li>Built Zeno AI Multimodal Assistant</li>
                                        <li>AIML Undergraduate (2023–2027)</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Skills/Strengths & Resume */}
                        <div className="space-y-8">
                            {/* Profile Image Card */}
                            <motion.div variants={itemVariants} className="flex justify-center items-center relative group py-8">
                                <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] mx-auto">
                                    {/* Rotating Rings */}
                                    <div className="absolute inset-0 border-2 border-neon-cyan/30 rounded-full animate-[spin_10s_linear_infinite]" />
                                    <div className="absolute inset-2 border-2 border-neon-magenta/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                    <div className="absolute inset-4 border-2 border-neon-green/30 rounded-full animate-[spin_20s_linear_infinite]" />

                                    {/* Image Core */}
                                    <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl bg-gray-900">
                                        <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                                        <Image
                                            src="/suit-photo.jpg"
                                            alt="Profile"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
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
                                    <button
                                        onClick={() => setIsResumeModalOpen(true)}
                                        className="px-6 py-3 bg-neon-cyan/20 border border-neon-cyan text-neon-cyan rounded-lg hover:bg-neon-cyan hover:text-black transition-all duration-300 flex items-center gap-2 font-medium"
                                    >
                                        <Eye className="w-5 h-5" /> View Resume
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>
            
            <ResumeModal 
                isOpen={isResumeModalOpen} 
                onClose={() => setIsResumeModalOpen(false)} 
            />
        </>
    );
}
