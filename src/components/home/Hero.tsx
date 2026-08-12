"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import MagneticWrapper from '@/components/shared/MagneticWrapper';
import Typewriter from '@/components/shared/Typewriter';
import ResumeModal from '@/components/shared/ResumeModal';
import Marquee from '@/components/shared/Marquee';

export default function Hero() {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

    return (
        <section className="min-h-[calc(100vh-80px)] flex flex-col relative overflow-hidden">
            <div className="flex-1 flex items-center justify-center py-20">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                    {/* Text Content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="text-center lg:text-left space-y-8"
                    >
                        <motion.div variants={fadeInUp} className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-sm font-medium mb-2">
                                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
                                Open to Internships
                            </div>
                            <h2 className="text-neon-purple text-xl md:text-2xl font-medium tracking-wide">
                                AI/ML Engineer Sculpting the Future
                            </h2>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tighter">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-magenta">
                                    Kundan DR
                                </span>
                            </h1>
                            <h3 className="text-xl md:text-3xl font-light text-gray-300 min-h-[40px]">
                                <Typewriter 
                                    words={[
                                        "Intelligent Systems. Elegant Solutions.",
                                        "Where Code Meets Creativity.",
                                        "Agentic AI & LLM Engineering.",
                                        "Backend Architecture."
                                    ]} 
                                />
                            </h3>
                            <h4 className="text-lg md:text-xl font-light text-gray-400 mt-2">
                                Research Paper Published (IJCRT) &bull; 2 Books Published on Amazon KDP
                            </h4>
                        </motion.div>

                        <motion.p
                            variants={fadeInUp}
                            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            AI & ML undergraduate at Maharaja Institute of Technology, Mysuru, with experience in FastAPI, Agentic AI, and backend development. Published researcher and author with a strong interest in intelligent systems, automation, and real-world problem solving. Currently building AI-driven applications and expanding expertise in software development and machine learning.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-wrap gap-4 justify-center lg:justify-start"
                        >
                            <MagneticWrapper>
                                <Link
                                    href="/projects"
                                    className="px-8 py-4 bg-neon-cyan/20 border border-neon-cyan text-neon-cyan rounded-full font-medium hover:bg-neon-cyan hover:text-black hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,217,255,0.4)] transition-all duration-300 flex items-center gap-2 group"
                                >
                                    Explore My Work
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </MagneticWrapper>

                            <MagneticWrapper>
                                <Link
                                    href="/about"
                                    className="px-8 py-4 bg-surface border border-white/10 text-white rounded-full font-medium hover:bg-white/10 hover:border-neon-purple hover:text-neon-purple hover:scale-105 transition-all duration-300"
                                >
                                    Dive Into the Experience
                                </Link>
                            </MagneticWrapper>

                            <MagneticWrapper>
                                <button
                                    onClick={() => setIsResumeModalOpen(true)}
                                    className="px-8 py-4 bg-neon-magenta/10 border border-neon-magenta text-neon-magenta rounded-full font-medium hover:bg-neon-magenta hover:text-white hover:scale-105 hover:shadow-[0_8px_32px_rgba(255,0,110,0.4)] transition-all duration-300 flex items-center gap-2"
                                >
                                    Resume
                                    <Download className="w-5 h-5" />
                                </button>
                            </MagneticWrapper>
                        </motion.div>

                        <div className="flex gap-6 justify-center lg:justify-start pt-8">
                            {[
                                { icon: Github, href: "https://github.com/kundandr05", color: "hover:text-neon-cyan hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.8)]" },
                                { icon: Linkedin, href: "https://linkedin.com/in/kundan-d-r-914274310", color: "hover:text-neon-magenta hover:drop-shadow-[0_0_8px_rgba(255,0,110,0.8)]" },
                                { icon: Mail, href: "mailto:kundandr05@gmail.com", color: "hover:text-neon-purple hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.8)]" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1`}
                                >
                                    <social.icon className="w-8 h-8" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* 3D CyberCore Placeholder (Rendered by Global Scene.tsx) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative w-full h-[50vh] lg:h-full lg:w-1/2 flex items-center justify-center pointer-events-none"
                    >
                        {/* The actual 3D CyberCore is rendered underneath this area by Scene.tsx */}
                        {/* Glassmorphism Profile Overlay (Stable & Professional) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                            className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full bg-surface/30 backdrop-blur-md border border-white/10 flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] pointer-events-auto"
                        >
                            <Image
                                src="/suit-photo.jpg"
                                alt="Profile"
                                fill
                                className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            {/* The scrolling neon marquee at the bottom of the hero section */}
            <Marquee />
            
            <ResumeModal 
                isOpen={isResumeModalOpen} 
                onClose={() => setIsResumeModalOpen(false)} 
            />
        </section>
    );
}
