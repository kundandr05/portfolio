"use client";

import { motion } from 'framer-motion';
import { Github, Star, GitBranch, Users } from 'lucide-react';

export default function GithubStats() {
    return (
        <section className="py-20 bg-slate-100/40">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 rounded-2xl max-w-5xl mx-auto border border-slate-200/80 shadow-md"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-4">
                            <Github className="w-14 h-14 text-slate-800" />
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">GitHub Activity</h2>
                                <p className="text-slate-500 text-sm">Open source contributions & projects</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center w-full md:w-auto">
                            <div>
                                <div className="text-3xl font-bold text-blue-600 flex justify-center items-center gap-2">
                                    <Star className="w-5 h-5" /> Active
                                </div>
                                <p className="text-slate-500 text-xs font-medium mt-1">Repositories</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-rose-600 flex justify-center items-center gap-2">
                                    <GitBranch className="w-5 h-5" /> 2026
                                </div>
                                <p className="text-slate-500 text-xs font-medium mt-1">Latest Activity</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-emerald-600 flex justify-center items-center gap-2">
                                    <Users className="w-5 h-5" /> Active
                                </div>
                                <p className="text-slate-500 text-xs font-medium mt-1">Contributions</p>
                            </div>
                        </div>

                        <a
                            href="https://github.com/kundandr05"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                        >
                            View GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
