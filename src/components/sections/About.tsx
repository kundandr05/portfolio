"use client";

import { motion } from 'framer-motion';
import { Download, User, Target, Zap, Eye, GraduationCap, Briefcase, Sparkles, CheckCircle2, MapPin, BookOpen, Award, Check } from 'lucide-react';
import { useState } from 'react';
import ResumeModal from '@/components/shared/ResumeModal';

export default function About() {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

    return (
        <>
            <section id="about" className="py-16 sm:py-20 relative">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Creative Typography Header */}
                    <div className="text-center mb-12 sm:mb-16 relative">
                        <span className="font-handwriting text-xl sm:text-2xl text-rose-500 font-bold rotate-[-2deg] inline-block mb-1">
                            the human journey ✨
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                            A Bit About{' '}
                            <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600">
                                Who I Am
                            </span>
                        </h2>
                        <p className="text-slate-600 text-xs sm:text-base max-w-xl mx-auto mt-2">
                            Engineer, researcher, and author obsessed with building intelligent systems that solve real human challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                        {/* Left Column: Bio & Core Experience (Span 7) */}
                        <div className="lg:col-span-7 space-y-6">
                            
                            {/* Bio Card */}
                            <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)] relative overflow-hidden group">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                                        <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                                            <User className="w-5 h-5" />
                                        </div>
                                        Engineering Philosophy
                                    </h3>
                                    <span className="font-handwriting text-base sm:text-lg text-blue-600 font-bold rotate-[2deg] hidden sm:inline-block">
                                        100% human crafted ☕
                                    </span>
                                </div>
                                <p className="text-slate-700 leading-relaxed mb-3.5 text-xs sm:text-sm md:text-base">
                                    I am an <strong className="text-slate-900 font-semibold">AI & Machine Learning Engineering student</strong> at Maharaja Institute of Technology, Mysuru. My sweet spot lies at the intersection of <strong className="text-slate-900 font-semibold">Agentic Multi-Agent Systems</strong>, high-speed Python/FastAPI backends, and modern TypeScript architectures.
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-3.5 text-xs sm:text-sm md:text-base">
                                    Beyond software code, I am a published researcher with a peer-reviewed paper in <strong className="text-slate-900 font-semibold">IJCRT</strong> and have written two full-length books published globally on <strong className="text-slate-900 font-semibold">Amazon KDP</strong> exploring digital focus and computational stress models.
                                </p>
                                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm md:text-base">
                                    Currently combining algorithmic engineering with human empathy as a <strong className="text-slate-900 font-semibold">UI/UX Design Intern at WizzyBox</strong> (WCAP).
                                </p>
                            </div>

                            {/* Experience Card */}
                            <div className="bg-white/95 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)] relative">
                                <div className="flex items-center justify-between mb-3.5">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                                            <Briefcase className="w-5 h-5" />
                                        </div>
                                        <h4 className="text-base sm:text-lg font-bold text-slate-900">Current Internship</h4>
                                    </div>
                                    <a
                                        href="/WizzyBox_Offer_Letter.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-semibold text-blue-600 hover:text-blue-800 underline decoration-dotted"
                                    >
                                        Offer Letter ↗
                                    </a>
                                </div>
                                <div>
                                    <p className="text-slate-900 font-bold text-xs sm:text-sm">UI/UX Design Intern – WizzyBox Career Accelerator Program (WCAP)</p>
                                    <p className="text-slate-500 text-[11px] sm:text-xs mb-3 font-mono">WizzyBox Private Limited &bull; Sep 2026 – Present</p>
                                </div>
                                <ul className="text-slate-600 text-xs space-y-2 leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                        <span>Applying design thinking: target audience research, empathy mapping, user stories & journey mapping.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                        <span>Producing competitive audits, problem statements, user flows, storyboards, and low-fidelity Figma prototypes.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Academic Timeline Card */}
                            <div className="bg-white/95 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)]">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
                                        <GraduationCap className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-base sm:text-lg font-bold text-slate-900">Education & Foundation</h4>
                                </div>
                                <div className="space-y-3.5">
                                    <div className="border-l-2 border-blue-500 pl-3.5 py-0.5">
                                        <p className="text-slate-900 font-bold text-xs sm:text-sm">B.E. in Computer Science & Engineering (AI & ML)</p>
                                        <p className="text-slate-500 text-[11px] font-mono">Maharaja Institute of Technology, Mysuru &bull; Expected 2027</p>
                                    </div>
                                    <div className="border-l-2 border-indigo-300 pl-3.5 py-0.5">
                                        <p className="text-slate-900 font-medium text-xs sm:text-sm">Pre-University Course (PCMB)</p>
                                        <p className="text-slate-500 text-[11px] font-mono">Sri Adichunchanagiri Independent PU College &bull; 2023</p>
                                    </div>
                                    <div className="border-l-2 border-slate-200 pl-3.5 py-0.5">
                                        <p className="text-slate-900 font-medium text-xs sm:text-sm">Secondary School Leaving Certificate (SSLC)</p>
                                        <p className="text-slate-500 text-[11px] font-mono">BGS Central School, Bhadravathi &bull; 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Fast Facts & Superpowers (Span 5) */}
                        <div className="lg:col-span-5 space-y-6">
                            
                            {/* Fast Facts Card (Replaces duplicate photo with high-value recruiter facts) */}
                            <div className="bg-white/95 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)] relative">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-base sm:text-lg font-bold text-slate-900">Candidate Quick Facts</h4>
                                </div>

                                <div className="space-y-3 text-xs">
                                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                                        <span className="text-slate-500 font-medium">Location</span>
                                        <span className="text-slate-900 font-bold">Mysuru, KA, India</span>
                                    </div>
                                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                                        <span className="text-slate-500 font-medium">Undergraduate Degree</span>
                                        <span className="text-slate-900 font-bold">B.E. AIML (2023–2027)</span>
                                    </div>
                                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                                        <span className="text-slate-500 font-medium">Research Paper</span>
                                        <span className="text-blue-600 font-bold">IJCRT Published (2025)</span>
                                    </div>
                                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                                        <span className="text-slate-500 font-medium">Authorship</span>
                                        <span className="text-rose-600 font-bold">2 Books on Amazon</span>
                                    </div>
                                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                                        <span className="text-slate-500 font-medium">Current Internship</span>
                                        <span className="text-emerald-600 font-bold">UI/UX @ WizzyBox</span>
                                    </div>
                                    <div className="flex items-center justify-between py-2">
                                        <span className="text-slate-500 font-medium">Availability</span>
                                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px]">
                                            Open for Internships
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Core Superpowers Chips */}
                            <div className="bg-white/95 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)]">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-2 rounded-xl bg-purple-50 text-purple-600">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-base sm:text-lg font-bold text-slate-900">Superpowers & Mindset</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Agentic Workflows",
                                        "FastAPI / Async Python",
                                        "Prompt Engineering",
                                        "System Architecture",
                                        "Algorithmic Thinking",
                                        "Technical Writing",
                                        "UI/UX Empathy Mapping",
                                        "Zero Template Philosophy"
                                    ].map((power, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2.5 py-1 rounded-xl bg-slate-100 border border-slate-200/80 text-[11px] font-semibold text-slate-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors"
                                        >
                                            {power}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Resume Quick Access Banner */}
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 sm:p-7 rounded-3xl shadow-lg relative overflow-hidden group">
                                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                                <h4 className="text-lg sm:text-xl font-bold font-display mb-1">Looking for a verified candidate?</h4>
                                <p className="text-blue-100 text-xs leading-relaxed mb-4">
                                    Full resume with project metrics, internship details, and published paper references.
                                </p>
                                <button
                                    onClick={() => setIsResumeModalOpen(true)}
                                    className="px-4 py-2.5 bg-white text-blue-700 rounded-xl font-bold text-xs hover:bg-blue-50 shadow-xs transition-all flex items-center gap-2"
                                >
                                    <Eye className="w-4 h-4" /> Open Interactive Resume
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <ResumeModal 
                isOpen={isResumeModalOpen} 
                onClose={() => setIsResumeModalOpen(false)} 
            />
        </>
    );
}
