"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import ResumeModal from '@/components/shared/ResumeModal';

export default function Hero() {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    return (
        <section className="pt-8 pb-16 md:py-24 border-b border-stone-200/80 dark:border-stone-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    
                    {/* Left Column: Plain, honest, confident introduction */}
                    <div className="lg:col-span-7 space-y-6 text-left">
                        
                        {/* Status Pill */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700/80 text-stone-700 dark:text-stone-300 text-xs font-mono">
                            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                            <span>Open to internships &amp; research from 2027</span>
                        </div>

                        {/* Heading & Statement */}
                        <div className="space-y-3">
                            <h1 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl text-stone-900 dark:text-stone-100 font-semibold tracking-tight leading-[1.1]">
                                Hi, I&apos;m Kundan DR.
                            </h1>
                            <p className="text-xl sm:text-2xl font-serif-editorial text-stone-700 dark:text-stone-300 italic font-normal leading-snug">
                                I study AI &amp; Machine Learning at MIT Mysuru, build autonomous systems and backends, and write about focus.
                            </p>
                        </div>

                        {/* Concise Bio */}
                        <p className="text-stone-600 dark:text-stone-400 text-base sm:text-lg leading-relaxed max-w-xl">
                            Undergrad in Computer Science (AI &amp; ML) graduating in 2027. Currently interning in UI/UX design at <span className="text-stone-900 dark:text-stone-100 font-medium">WizzyBox</span> (WCAP). Published author of a peer-reviewed research paper on Agentic AI in <span className="text-stone-900 dark:text-stone-100 font-medium">IJCRT</span> and two non-fiction books on Amazon.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <Link
                                href="#work"
                                className="btn-editorial-primary"
                            >
                                View selected work
                                <ArrowDown className="w-4 h-4" />
                            </Link>

                            <button
                                onClick={() => setIsResumeOpen(true)}
                                className="btn-editorial-secondary"
                            >
                                <FileText className="w-4 h-4 text-[#c2410c]" />
                                Resume
                            </button>

                            <div className="flex items-center gap-2 pl-2">
                                <a
                                    href="https://github.com/kundandr05"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                                    aria-label="GitHub Profile"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://linkedin.com/in/kundan-d-r-914274310"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                                    aria-label="LinkedIn Profile"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="mailto:kundandr05@gmail.com"
                                    className="p-2 rounded-lg text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                                    aria-label="Send Email"
                                >
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Location footnote */}
                        <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 font-mono pt-1">
                            <MapPin className="w-3.5 h-3.5 text-[#c2410c]" />
                            <span>Based in Mysuru, Karnataka, India</span>
                        </div>
                    </div>

                    {/* Right Column: Thoughtful portrait card */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
                            {/* Card backing */}
                            <div className="bg-white dark:bg-stone-900 p-3.5 pb-5 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.08)]">
                                <div className="relative aspect-[4/4.8] w-full rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-800">
                                    <Image
                                        src="/suit-photo.jpg"
                                        alt="Kundan DR"
                                        fill
                                        sizes="(max-width: 768px) 320px, 340px"
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="pt-3 px-1 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 font-mono">
                                    <span>Kundan DR</span>
                                    <span>AIML &bull; 2027</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ResumeModal
                isOpen={isResumeOpen}
                onClose={() => setIsResumeOpen(false)}
            />
        </section>
    );
}
