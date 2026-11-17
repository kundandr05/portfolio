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
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold mb-2 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                                Open to Internships
                            </div>
                            <h2 className="text-indigo-600 text-xl md:text-2xl font-semibold tracking-wide">
                                AI/ML Engineer Sculpting the Future
                            </h2>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600">
                                    Kundan DR
                                </span>
                            </h1>
                            <h3 className="text-xl md:text-3xl font-normal text-slate-800 min-h-[40px]">
                                <Typewriter 
                                    words={[
                                        "Intelligent Systems. Elegant Solutions.",
                                        "Where Code Meets Creativity.",
                                        "Agentic AI & LLM Engineering.",
                                        "Backend Architecture."
                                    ]} 
                                />
                            </h3>
                            <h4 className="text-lg md:text-xl font-medium text-slate-500 mt-2">
                                Research Paper Published (IJCRT) &bull; 2 Books Published on Amazon KDP
                            </h4>
                        </motion.div>

                        <motion.p
                            variants={fadeInUp}
                            className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
                        >
                            AI & Machine Learning Engineering student at Maharaja Institute of Technology, Mysuru, with hands-on experience building Agentic AI systems, LLM-powered applications, and full-stack software. Published research author with an IJCRT publication, two Amazon KDP books, and UI/UX design intern at WizzyBox.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-wrap gap-4 justify-center lg:justify-start"
                        >
                            <MagneticWrapper>
                                <Link
                                    href="/projects"
                                    className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 hover:scale-105 shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_25px_rgba(37,99,235,0.35)] transition-all duration-300 flex items-center gap-2 group"
                                >
                                    Explore My Work
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </MagneticWrapper>

                            <MagneticWrapper>
                                <Link
                                    href="/about"
                                    className="px-8 py-4 bg-white/90 border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-slate-50 hover:border-indigo-300 hover:text-indigo-600 hover:scale-105 shadow-sm transition-all duration-300"
                                >
                                    Dive Into the Experience
                                </Link>
                            </MagneticWrapper>

                            <MagneticWrapper>
                                <button
                                    onClick={() => setIsResumeModalOpen(true)}
                                    className="px-8 py-4 bg-rose-50 border border-rose-200 text-rose-600 rounded-full font-medium hover:bg-rose-100 hover:scale-105 shadow-sm transition-all duration-300 flex items-center gap-2"
                                >
                                    Resume
                                    <Download className="w-5 h-5" />
                                </button>
                            </MagneticWrapper>
                        </motion.div>

                        <div className="flex gap-6 justify-center lg:justify-start pt-8">
                            {[
                                { icon: Github, href: "https://github.com/kundandr05", color: "hover:text-blue-600" },
                                { icon: Linkedin, href: "https://linkedin.com/in/kundan-d-r-914274310", color: "hover:text-indigo-600" },
                                { icon: Mail, href: "mailto:kundandr05@gmail.com", color: "hover:text-rose-600" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-slate-400 ${social.color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1`}
                                >
                                    <social.icon className="w-7 h-7" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Profile Showcase Frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative w-full h-[50vh] lg:h-full lg:w-1/2 flex items-center justify-center pointer-events-none"
                    >
                        {/* Radiant Prism Profile Frame */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                            className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full bg-white border-4 border-white shadow-[0_25px_60px_-15px_rgba(37,99,235,0.25)] flex items-center justify-center overflow-hidden pointer-events-auto group"
                        >
                            <Image
                                src="/suit-photo.jpg"
                                alt="Profile"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
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
