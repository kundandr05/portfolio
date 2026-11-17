"use client";

import { useState } from 'react';
import { Mail, Copy, Check, Github, Linkedin, FileText, ArrowUpRight } from 'lucide-react';
import ResumeModal from '@/components/shared/ResumeModal';

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('kundandr05@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <section id="contact" className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    
                    <span className="text-xs font-mono uppercase tracking-wider text-[#c2410c] dark:text-orange-400 font-bold">
                        Get in Touch
                    </span>
                    <h2 className="font-serif-editorial text-4xl sm:text-5xl text-stone-900 dark:text-stone-100 font-semibold mt-1 mb-4">
                        Let&apos;s talk about systems or research
                    </h2>
                    <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-10">
                        I&apos;m actively looking for software engineering internships, AI research collaborations, and backend roles starting from 2027. My inbox is always open.
                    </p>

                    {/* Primary Big Email Action Box */}
                    <div className="card-editorial p-8 sm:p-10 max-w-2xl mx-auto mb-10 text-center">
                        <span className="text-xs font-mono uppercase tracking-wider text-stone-400 block mb-2 font-medium">
                            Direct Email
                        </span>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <a
                                href="mailto:kundandr05@gmail.com"
                                className="font-mono text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 hover:text-[#c2410c] dark:hover:text-orange-400 transition-colors"
                            >
                                kundandr05@gmail.com
                            </a>
                            <button
                                onClick={handleCopy}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:text-stone-900 text-xs font-medium transition-colors"
                                title="Copy email address"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                                        <span>Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-3.5 h-3.5" />
                                        <span>Copy</span>
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="pt-6 mt-6 border-t border-stone-100 dark:border-stone-800 flex flex-wrap items-center justify-center gap-4">
                            <a
                                href="mailto:kundandr05@gmail.com"
                                className="btn-editorial-primary text-xs"
                            >
                                <Mail className="w-4 h-4" />
                                Open Mail Client
                            </a>
                            <button
                                onClick={() => setIsResumeOpen(true)}
                                className="btn-editorial-secondary text-xs"
                            >
                                <FileText className="w-4 h-4 text-[#c2410c]" />
                                View Resume
                            </button>
                        </div>
                    </div>

                    {/* Social & Professional Links */}
                    <div className="flex items-center justify-center gap-8 text-xs font-mono">
                        <a
                            href="https://github.com/kundandr05"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                            <ArrowUpRight className="w-3 h-3 text-stone-400" />
                        </a>
                        <a
                            href="https://linkedin.com/in/kundan-d-r-914274310"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                        >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                            <ArrowUpRight className="w-3 h-3 text-stone-400" />
                        </a>
                    </div>
                </div>
            </section>

            <ResumeModal
                isOpen={isResumeOpen}
                onClose={() => setIsResumeOpen(false)}
            />
        </>
    );
}
