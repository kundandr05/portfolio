"use client";

import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <>
            <section className="py-20 min-h-[calc(100vh-200px)] flex items-center">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                            Get in <span className="text-neon-cyan">Touch</span>
                        </h1>
                        <p className="text-gray-400">Open to AI internships, research collaborations, and backend development opportunities.</p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-8">
                        {/* Contact Info Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-panel p-8 md:p-12 rounded-2xl"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <a href="tel:+917019934034" className="flex items-center gap-4 group hover:bg-white/5 p-4 rounded-xl transition-colors">
                                    <div className="p-4 bg-neon-magenta/20 rounded-xl text-neon-magenta group-hover:scale-110 transition-transform">
                                        <Phone className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Phone</h3>
                                        <p className="text-gray-400 group-hover:text-neon-magenta transition-colors">+91 7019934034</p>
                                    </div>
                                </a>

                                <a href="mailto:kundandr05@gmail.com" className="flex items-center gap-4 group hover:bg-white/5 p-4 rounded-xl transition-colors">
                                    <div className="p-4 bg-neon-cyan/20 rounded-xl text-neon-cyan group-hover:scale-110 transition-transform">
                                        <Mail className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Email</h3>
                                        <p className="text-gray-400 group-hover:text-neon-cyan transition-colors">kundandr05@gmail.com</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-4">
                                    <div className="p-4 bg-neon-green/20 rounded-xl text-neon-green">
                                        <MapPin className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Location</h3>
                                        <p className="text-gray-400">Mysuru, Karnataka, India</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glass-panel p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
                        >
                            <h2 className="text-2xl font-bold text-white">Connect Online</h2>
                            <div className="flex gap-4">
                                {[
                                    { icon: Github, name: "GitHub", href: "https://github.com/kundandr05", color: "hover:text-neon-cyan hover:border-neon-cyan" },
                                    { icon: Linkedin, name: "LinkedIn", href: "https://linkedin.com/in/kundan-d-r-914274310", color: "hover:text-neon-magenta hover:border-neon-magenta" }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`px-6 py-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3 text-gray-300 transition-all duration-300 hover:scale-105 ${social.color}`}
                                    >
                                        <social.icon className="w-6 h-6" />
                                        <span className="font-medium">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
