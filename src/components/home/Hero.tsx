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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-sm font-medium mb-2">
                            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
                            Open to Internships
                        </div>
                        <h2 className="text-neon-cyan text-xl md:text-2xl font-medium tracking-wide">
                            HELLO, I AM
                        </h2>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tighter">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
                                Kundan DR
                            </span>
                        </h1>
                        <h3 className="text-xl md:text-3xl font-light text-gray-300 min-h-[40px]">
                            <Typewriter 
                                words={[
                                    "AI & Machine Learning Engineer",
                                    "Backend Developer",
                                    "FastAPI Developer",
                                    "Researcher",
                                    "Published Author"
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
                                className="px-8 py-4 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan rounded-full font-medium hover:bg-neon-cyan hover:text-black transition-all duration-300 flex items-center gap-2 group"
                            >
                                View Projects
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </MagneticWrapper>

                        <MagneticWrapper>
                            <Link
                                href="/about"
                                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300"
                            >
                                About Me
                            </Link>
                        </MagneticWrapper>

                        <MagneticWrapper>
                            <a
                                href="/Kundan_DR_Resume_2027_AI_ML.pdf"
                                download
                                className="px-8 py-4 bg-neon-magenta/10 border border-neon-magenta text-neon-magenta rounded-full font-medium hover:bg-neon-magenta hover:text-black transition-all duration-300 flex items-center gap-2"
                            >
                                Resume
                                <Download className="w-5 h-5" />
                            </a>
                        </MagneticWrapper>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="flex gap-6 justify-center lg:justify-start pt-8"
                    >
                        {[
                            { icon: Github, href: "https://github.com/kundandr05", color: "hover:text-neon-cyan" },
                            { icon: Linkedin, href: "https://linkedin.com/in/kundan-d-r-914274310", color: "hover:text-neon-magenta" },
                            { icon: Mail, href: "mailto:kundandr05@gmail.com", color: "hover:text-neon-green" }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-400 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                            >
                                <social.icon className="w-8 h-8" />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Visual Element / Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative mx-auto lg:ml-auto"
                >
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                        {/* Rotating Rings */}
                        <div className="absolute inset-0 border-2 border-neon-cyan/30 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-4 border-2 border-neon-magenta/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute inset-8 border-2 border-neon-green/30 rounded-full animate-[spin_20s_linear_infinite]" />

                        {/* Glowing Core / Image Placeholder */}
                        <div className="absolute inset-10 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
                            <Image
                                src="/profile.png"
                                alt="Profile"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
