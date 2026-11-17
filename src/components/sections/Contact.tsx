"use client";

import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Phone, MessageSquare, ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("kundandr05@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header with Crazy Typography */}
                <div className="text-center mb-16 relative">
                    <span className="font-handwriting text-2xl text-emerald-600 font-bold rotate-[-2deg] inline-block mb-1">
                        let&apos;s start a conversation 📬
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        Let&apos;s Build{' '}
                        <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600">
                            Something Extraordinary
                        </span>
                    </h2>
                    <p className="text-slate-600 text-base max-w-xl mx-auto mt-2">
                        Open for AI Engineering internships, agentic research collaborations, or backend architecture roles.
                    </p>
                </div>

                {/* Tactile Contact Card */}
                <div className="bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-slate-200/90 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.08)] relative">
                    {/* Washi Tape Accent */}
                    <div className="tape-strip" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Email Card */}
                        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between group hover:border-blue-400 transition-all">
                            <div className="flex items-center justify-between mb-3">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <button
                                    onClick={copyEmail}
                                    className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-blue-600 text-xs font-semibold flex items-center gap-1 shadow-2xs"
                                    title="Copy email to clipboard"
                                >
                                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                                    <span>{copied ? "Copied!" : "Copy"}</span>
                                </button>
                            </div>
                            <div>
                                <span className="text-xs uppercase font-mono text-slate-400 tracking-wider font-bold">Direct Email</span>
                                <a
                                    href="mailto:kundandr05@gmail.com"
                                    className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors block mt-0.5 truncate"
                                >
                                    kundandr05@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Phone / WhatsApp Card */}
                        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between group hover:border-emerald-400 transition-all">
                            <div className="flex items-center justify-between mb-3">
                                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-full font-bold">
                                    WhatsApp / Call
                                </span>
                            </div>
                            <div>
                                <span className="text-xs uppercase font-mono text-slate-400 tracking-wider font-bold">Phone Number</span>
                                <a
                                    href="tel:+917019934034"
                                    className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors block mt-0.5"
                                >
                                    +91 70199 34034
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-4">
                            <div className="p-3 bg-rose-50 text-rose-600 rounded-xl">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-xs uppercase font-mono text-slate-400 tracking-wider font-bold">Location</span>
                                <p className="text-sm font-bold text-slate-900 mt-0.5">
                                    Mysuru, Karnataka, India
                                </p>
                                <p className="text-xs text-slate-500 font-mono">Available for Remote / Hybrid</p>
                            </div>
                        </div>

                        {/* Social Quick Links */}
                        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-around">
                            <a
                                href="https://github.com/kundandr05"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors"
                            >
                                <Github className="w-6 h-6" />
                                <span className="text-[11px] font-mono font-bold">GitHub</span>
                            </a>
                            <a
                                href="https://linkedin.com/in/kundan-d-r-914274310"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center gap-1 text-slate-600 hover:text-indigo-600 transition-colors"
                            >
                                <Linkedin className="w-6 h-6" />
                                <span className="text-[11px] font-mono font-bold">LinkedIn</span>
                            </a>
                            <a
                                href="mailto:kundandr05@gmail.com"
                                className="flex flex-col items-center gap-1 text-slate-600 hover:text-rose-600 transition-colors"
                            >
                                <Mail className="w-6 h-6" />
                                <span className="text-[11px] font-mono font-bold">Email</span>
                            </a>
                        </div>
                    </div>

                    {/* Bottom CTA Box */}
                    <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <p className="font-handwriting text-xl text-slate-800 font-bold">
                                Have an internship or project in mind?
                            </p>
                            <p className="text-xs text-slate-500">I typically reply within 24 hours.</p>
                        </div>
                        <a
                            href="mailto:kundandr05@gmail.com"
                            className="btn-tactile px-6 py-3 bg-slate-900 text-white rounded-2xl font-bold text-xs hover:bg-slate-800 transition-all flex items-center gap-2 shrink-0"
                        >
                            <Mail className="w-4 h-4" /> Send Direct Email
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
