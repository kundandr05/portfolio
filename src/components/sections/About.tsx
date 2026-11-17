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
                        className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 mb-12 text-center"
                    >
                        About Me
                    </motion.h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column: Bio & Info */}
                        <div className="space-y-8">
                            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <User className="text-blue-600" /> Who I Am
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    AI & Machine Learning Engineering student with hands-on experience building Agentic AI systems, LLM-powered applications, and full-stack software. Skilled in Python, FastAPI, React, Next.js, REST APIs, database development, and AI integration.
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Published research author with an IJCRT publication and two Amazon KDP books. Also developing expertise in UI/UX design and user-centred product development.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    Passionate about developing practical AI-driven solutions and building scalable applications that solve real-world problems. UI/UX Design Intern at WizzyBox.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Experience */}
                                <div className="glass-panel p-6 rounded-xl hover:border-blue-400/50 transition-colors duration-300 md:col-span-2">
                                    <h3 className="text-xl font-bold text-blue-600 mb-4">Experience</h3>
                                    
                                    <div className="mb-2">
                                        <p className="text-slate-900 font-semibold">UI/UX Design Intern – WizzyBox Career Accelerator Program (WCAP)</p>
                                        <p className="text-slate-500 text-sm">WizzyBox Private Limited | Sep 2026 – Present</p>
                                    </div>
                                    <ul className="text-slate-600 text-sm list-disc list-inside space-y-1">
                                        <li>Selected for WCAP, delivered by WizzyBox in partnership with NammaQA.</li>
                                        <li>Applying design thinking through target audience research, empathy mapping, personas, user stories, and user journey mapping.</li>
                                        <li>Working on competitive audits, problem statements, information architecture, user flows, storyboards, and low-fidelity wireframes.</li>
                                    </ul>
                                </div>

                                {/* Academic */}
                                <div className="glass-panel p-6 rounded-xl hover:border-indigo-400/50 transition-colors duration-300">
                                    <h3 className="text-xl font-bold text-indigo-600 mb-4">Education</h3>
                                    
                                    <div className="mb-4">
                                        <p className="text-slate-900 font-medium">B.E. in Computer Science & Engineering (AI & ML)</p>
                                        <p className="text-slate-500 text-sm">Maharaja Institute of Technology, Mysuru | Expected 2027</p>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <p className="text-slate-900 font-medium">Pre-University Course (PCMB)</p>
                                        <p className="text-slate-500 text-sm">Sri Adichunchanagiri Independent PU College | 2023</p>
                                    </div>

                                    <div>
                                        <p className="text-slate-900 font-medium">Secondary School Leaving Certificate</p>
                                        <p className="text-slate-500 text-sm">BGS Central School, Bhadravathi | 2021</p>
                                    </div>
                                </div>

                                {/* Goals */}
                                <div className="glass-panel p-6 rounded-xl hover:border-emerald-400/50 transition-colors duration-300">
                                    <h3 className="text-xl font-bold text-emerald-600 flex items-center gap-2 mb-2">
                                        <Target className="w-5 h-5" /> Goals
                                    </h3>
                                    <p className="text-slate-600 text-sm">To specialize in Artificial Intelligence and Multi-Agent Systems, contributing to innovative research and developing impactful AI-driven products at scale.</p>
                                </div>

                                {/* Highlights */}
                                <div className="glass-panel p-6 rounded-xl hover:border-rose-400/50 transition-colors duration-300 md:col-span-2">
                                    <h3 className="text-xl font-bold text-rose-600 mb-4">Highlights</h3>
                                    <ul className="text-slate-600 text-sm list-disc list-inside space-y-2">
                                        <li>UI/UX Design Intern at WizzyBox (WCAP)</li>
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
                                    {/* Rotating Rings in Prism Colors */}
                                    <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full animate-[spin_12s_linear_infinite]" />
                                    <div className="absolute inset-2 border-2 border-indigo-500/20 rounded-full animate-[spin_18s_linear_infinite_reverse]" />
                                    <div className="absolute inset-4 border-2 border-rose-500/20 rounded-full animate-[spin_24s_linear_infinite]" />

                                    {/* Image Core */}
                                    <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(37,99,235,0.2)] bg-slate-100">
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
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Zap className="text-indigo-600" /> Soft Skills
                                </h2>
                                <div className="grid grid-cols-2 gap-4">
                                    {['Problem Solving', 'Analytical Thinking', 'Team Collaboration', 'Communication'].map((strength, index) => (
                                        <div key={index} className="flex items-center gap-2 text-slate-700 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-blue-600" />
                                            {strength}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl text-center">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Resume</h2>
                                <p className="text-slate-500 mb-6">Want to know more about my professional background?</p>
                                <div className="flex justify-center gap-4">
                                    <button
                                        onClick={() => setIsResumeModalOpen(true)}
                                        className="px-6 py-3 bg-blue-50 border border-blue-200 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2 font-medium shadow-sm"
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
