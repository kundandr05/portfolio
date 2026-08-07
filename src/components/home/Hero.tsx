"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import MagneticWrapper from '@/components/shared/MagneticWrapper';
import Typewriter from '@/components/shared/Typewriter';

export default function Hero() {
    return (
        <section className="min-h-[calc(100vh-80px)] flex items-center justify-center py-20 relative overflow-hidden">
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
                            <a
                                href="/Kundan_DR_Resume_2027_AI_ML.pdf"
                                download
                                className="px-8 py-4 bg-neon-magenta/10 border border-neon-magenta text-neon-magenta rounded-full font-medium hover:bg-neon-magenta hover:text-white hover:scale-105 hover:shadow-[0_8px_32px_rgba(255,0,110,0.4)] transition-all duration-300 flex items-center gap-2"
                            >
                                Resume
                                <Download className="w-5 h-5" />
                            </a>
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

                {/* Visual Element / 3D Floating Profile */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative mx-auto lg:ml-auto perspective-1000"
                >
                    <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] transform-style-3d">
                        {/* Floating 3D Orbits */}
                        <motion.div 
                            animate={{ rotateX: 360, rotateY: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-2 border-neon-cyan/20 rounded-full" 
                        />
                        <motion.div 
                            animate={{ rotateX: -360, rotateY: -180 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 border-2 border-neon-magenta/20 rounded-full" 
                        />
                        <motion.div 
                            animate={{ rotateZ: 360, rotateX: 180 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-8 border-[1px] border-neon-purple/30 rounded-full" 
                        />

                        {/* Floating Geometric Shapes (Parallax Particles) */}
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 90, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 left-10 w-8 h-8 border border-neon-cyan/50 backdrop-blur-md rounded-lg"
                        />
                        <motion.div
                            animate={{ y: [0, 30, 0], rotate: [0, -90, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-20 right-10 w-12 h-12 border border-neon-magenta/50 rounded-full backdrop-blur-md"
                        />
                        <motion.div
                            animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute top-1/2 -left-5 w-6 h-6 bg-neon-purple/20 blur-sm rounded-full"
                        />

                        {/* Glowing Core / Glassmorphism Profile */}
                        <motion.div 
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-12 rounded-full bg-surface/50 backdrop-blur-xl border border-neon-cyan/30 flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(0,217,255,0.2)]"
                        >
                            <Image
                                src="/profile.jpg"
                                alt="Profile"
                                fill
                                className="object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                                priority
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
