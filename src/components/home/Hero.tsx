"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, BookOpen, GraduationCap, Award, Compass } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Typewriter from '@/components/shared/Typewriter';
import ResumeModal from '@/components/shared/ResumeModal';
import Marquee from '@/components/shared/Marquee';

export default function Hero() {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

    return (
        <section className="min-h-[calc(100vh-80px)] flex flex-col relative overflow-hidden">
            <div className="flex-1 flex items-center justify-center py-16 md:py-24">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

                    {/* Left Column: Expressive Typography & Personality */}
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="lg:col-span-7 text-center lg:text-left space-y-7"
                    >
                        <motion.div variants={fadeInUp} className="space-y-3">
                            {/* Quirky Human Greeting + Live Availability Pill */}
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                                <span className="font-handwriting text-2xl text-blue-600 font-bold rotate-[-3deg] inline-block tracking-wide">
                                    Hey there! I&apos;m
                                </span>
                                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    Open to Internships & Research
                                </div>
                            </div>

                            {/* Bold Name */}
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight text-slate-900 leading-[1.05]">
                                Kundan DR
                            </h1>

                            {/* Creative Serif-Italic Mashup Headline (The Human Designer Touch) */}
                            <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-800 font-bold tracking-tight leading-snug">
                                I architect{' '}
                                <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-indigo-600 to-blue-600 decoration-wavy underline decoration-rose-300">
                                    autonomous intelligence
                                </span>{' '}
                                & high-throughput backends.
                            </h2>

                            {/* Animated Typewriter Subhead */}
                            <div className="text-lg md:text-2xl font-medium text-slate-600 min-h-[36px] flex items-center justify-center lg:justify-start">
                                <Typewriter 
                                    words={[
                                        "Agentic AI & Multi-Agent Workflows.",
                                        "FastAPI, Groq AI & Algorithmic Optimization.",
                                        "Published Researcher & 2x Author.",
                                        "Full-Stack Architect & UI/UX Craftsman."
                                    ]} 
                                />
                            </div>

                            {/* Handwritten Sticky Micro-Callout */}
                            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2">
                                <span className="font-handwriting text-lg text-rose-500 font-bold rotate-[1deg] flex items-center gap-1.5">
                                    <Sparkles className="w-4 h-4 text-rose-500 inline" />
                                    1 IJCRT Peer-Reviewed Paper + 2 Amazon KDP Books Worldwide
                                </span>
                            </div>
                        </motion.div>

                        {/* Bio Paragraph */}
                        <motion.p
                            variants={fadeInUp}
                            className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
                        >
                            AI & Machine Learning Engineering undergrad at <strong className="text-slate-900 font-semibold">Maharaja Institute of Technology, Mysuru</strong>. Building practical multi-agent recovery systems, LLM-orchestrated architectures, and performant web products with obsessive attention to craft.
                        </motion.p>

                        {/* Tactile Action Buttons (Satisfying physical depth) */}
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-wrap gap-4 justify-center lg:justify-start items-center pt-2"
                        >
                            <Link
                                href="#projects"
                                className="btn-tactile px-7 py-3.5 bg-slate-900 text-white rounded-2xl font-bold text-sm tracking-wide flex items-center gap-2 hover:bg-slate-800 transition-all group"
                            >
                                Explore My Work
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <button
                                onClick={() => setIsResumeModalOpen(true)}
                                className="btn-tactile-secondary px-6 py-3.5 bg-white text-slate-800 border-2 border-slate-200 rounded-2xl font-bold text-sm tracking-wide hover:bg-slate-50 hover:border-blue-400 hover:text-blue-600 transition-all flex items-center gap-2"
                            >
                                <Download className="w-4 h-4 text-blue-600" />
                                View Resume
                            </button>

                            <Link
                                href="#human-desk"
                                className="font-handwriting text-xl text-blue-600 hover:text-blue-800 transition-colors rotate-[-2deg] font-bold underline decoration-dotted ml-2"
                            >
                                see my studio desk ↓
                            </Link>
                        </motion.div>

                        {/* Social Links Row */}
                        <motion.div variants={fadeInUp} className="flex gap-5 justify-center lg:justify-start pt-2 items-center">
                            <span className="text-xs uppercase tracking-widest font-bold text-slate-400">Connect:</span>
                            {[
                                { icon: Github, href: "https://github.com/kundandr05", label: "GitHub", hover: "hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200" },
                                { icon: Linkedin, href: "https://linkedin.com/in/kundan-d-r-914274310", label: "LinkedIn", hover: "hover:text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200" },
                                { icon: Mail, href: "mailto:kundandr05@gmail.com", label: "Email", hover: "hover:text-rose-600 hover:bg-rose-50 hover:border-rose-200" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className={`p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 ${social.hover} shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0`}
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Tactile Polaroid Studio Portrait with Floating Pins */}
                    <div className="lg:col-span-5 flex justify-center items-center relative py-8">
                        {/* Soft Ambient Prism Halo */}
                        <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-gradient-to-tr from-blue-400/20 via-violet-400/20 to-rose-400/20 blur-3xl rounded-full pointer-events-none" />

                        {/* Tactile Polaroid Frame */}
                        <div className="relative rotate-[-2deg] hover:rotate-0 transition-transform duration-500 ease-out group">
                            {/* Washi Tape Strip */}
                            <div className="tape-strip" />

                            {/* White Polaroid Card */}
                            <div className="bg-white p-4 pb-6 rounded-2xl shadow-[0_20px_50px_-10px_rgba(15,23,42,0.18)] border border-slate-200/90 w-[290px] md:w-[350px]">
                                {/* Portrait Image Container */}
                                <div className="relative w-full aspect-[4/4.5] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                                    <Image
                                        src="/suit-photo.jpg"
                                        alt="Kundan DR"
                                        fill
                                        sizes="(max-width: 768px) 290px, 350px"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                </div>
                                {/* Handwritten Caption on Polaroid Bottom */}
                                <div className="pt-3 text-center">
                                    <p className="font-handwriting text-xl text-slate-700 font-bold tracking-wide">
                                        Kundan DR — Mysuru, India 🇮🇳
                                    </p>
                                    <p className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mt-0.5">
                                        AI & ML Engineer • Author
                                    </p>
                                </div>
                            </div>

                            {/* 4 Floating Interactive Hologram Pins around the Polaroid */}
                            {/* Pin 1: IJCRT Publication (Top Left) */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -left-8 md:-left-12 rotate-[-5deg] bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg rounded-2xl p-2.5 px-3.5 flex items-center gap-2 hover:scale-105 hover:border-blue-400 transition-all cursor-default z-30"
                            >
                                <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                                    <Award className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold text-slate-900 leading-tight">IJCRT Published</p>
                                    <p className="text-[9px] text-slate-500 font-mono">Agentic AI Paper</p>
                                </div>
                            </motion.div>

                            {/* Pin 2: 2x Amazon Books (Top Right) */}
                            <motion.div
                                animate={{ y: [0, -7, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -top-5 -right-6 md:-right-10 rotate-[5deg] bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg rounded-2xl p-2.5 px-3.5 flex items-center gap-2 hover:scale-105 hover:border-rose-400 transition-all cursor-default z-30"
                            >
                                <div className="p-1.5 rounded-lg bg-rose-50 text-rose-600">
                                    <BookOpen className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold text-slate-900 leading-tight">2x Author</p>
                                    <p className="text-[9px] text-slate-500 font-mono">Amazon KDP Worldwide</p>
                                </div>
                            </motion.div>

                            {/* Pin 3: MIT Mysuru (Bottom Left) */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-6 md:-left-10 rotate-[-4deg] bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg rounded-2xl p-2.5 px-3.5 flex items-center gap-2 hover:scale-105 hover:border-indigo-400 transition-all cursor-default z-30"
                            >
                                <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                                    <GraduationCap className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold text-slate-900 leading-tight">MIT Mysuru</p>
                                    <p className="text-[9px] text-slate-500 font-mono">AIML &apos;27</p>
                                </div>
                            </motion.div>

                            {/* Pin 4: WizzyBox (Bottom Right) */}
                            <motion.div
                                animate={{ y: [0, -7, 0] }}
                                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                className="absolute -bottom-5 -right-6 md:-right-8 rotate-[4deg] bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg rounded-2xl p-2.5 px-3.5 flex items-center gap-2 hover:scale-105 hover:border-emerald-400 transition-all cursor-default z-30"
                            >
                                <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                                    <Compass className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold text-slate-900 leading-tight">WizzyBox</p>
                                    <p className="text-[9px] text-slate-500 font-mono">UI/UX Design Intern</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Marquee ticker */}
            <Marquee />
            
            {/* Resume Modal */}
            <ResumeModal 
                isOpen={isResumeModalOpen} 
                onClose={() => setIsResumeModalOpen(false)} 
            />
        </section>
    );
}
