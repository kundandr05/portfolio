"use client";

import { motion } from 'framer-motion';
import { Github, Star, GitBranch, Users } from 'lucide-react';

export default function GithubStats() {
    return (
        <section className="py-20 bg-black/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 rounded-2xl max-w-5xl mx-auto border border-white/10"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-4">
                            <Github className="w-16 h-16 text-white" />
                            <div>
                                <h2 className="text-2xl font-bold text-white">GitHub Contributions</h2>
                                <p className="text-gray-400">My open source activity</p>
                            </div>
                        </div>

                        <div className="flex gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-neon-cyan flex justify-center items-center gap-2">
                                    <Star className="w-5 h-5" /> Active
                                </div>
                                <p className="text-gray-500 text-sm">Repositories</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-neon-magenta flex justify-center items-center gap-2">
                                    <GitBranch className="w-5 h-5" /> 2025
                                </div>
                                <p className="text-gray-500 text-sm">Latest Activity</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-neon-green flex justify-center items-center gap-2">
                                    <Users className="w-5 h-5" /> 10+
                                </div>
                                <p className="text-gray-500 text-sm">Followers</p>
                            </div>
                        </div>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white/10 rounded-lg text-white font-medium hover:bg-white/20 transition-colors"
                        >
                            View Profile
                        </a>
                    </div>

                    {/* Calendar Placeholder */}
                    <div className="mt-8 pt-8 border-t border-white/10">
                        <div className="h-32 w-full bg-black/40 rounded-lg flex items-center justify-center text-gray-600">
                            {/* In a real app, use react-activity-calendar here */}
                            [Contribution Calendar Visualization]
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
