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
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-4">
                            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Touch</span>
                        </h1>
                        <p className="text-slate-600">Open to AI internships, research collaborations, and backend development opportunities.</p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-8">
                        {/* Contact Info Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-panel p-8 md:p-12 rounded-2xl border border-slate-200/80"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <a href="tel:+917019934034" className="flex items-center gap-4 group hover:bg-slate-50 p-4 rounded-xl transition-colors">
                                    <div className="p-4 bg-rose-50 rounded-xl text-rose-600 group-hover:scale-110 transition-transform">
                                        <Phone className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-slate-900 font-semibold mb-1">Phone</h3>
                                        <p className="text-slate-600 group-hover:text-rose-600 transition-colors">+91 7019934034</p>
                                    </div>
                                </a>

                                <a href="mailto:kundandr05@gmail.com" className="flex items-center gap-4 group hover:bg-slate-50 p-4 rounded-xl transition-colors">
                                    <div className="p-4 bg-blue-50 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
                                        <Mail className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-slate-900 font-semibold mb-1">Email</h3>
                                        <p className="text-slate-600 group-hover:text-blue-600 transition-colors">kundandr05@gmail.com</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-4">
                                    <div className="p-4 bg-emerald-50 rounded-xl text-emerald-600">
                                        <MapPin className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-slate-900 font-semibold mb-1">Location</h3>
                                        <p className="text-slate-600">Mysuru, Karnataka, India</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glass-panel p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-200/80"
                        >
                            <h2 className="text-2xl font-bold text-slate-900">Connect Online</h2>
                            <div className="flex gap-4">
                                {[
                                    { icon: Github, name: "GitHub", href: "https://github.com/kundandr05", color: "hover:text-blue-600 hover:border-blue-300" },
                                    { icon: Linkedin, name: "LinkedIn", href: "https://linkedin.com/in/kundan-d-r-914274310", color: "hover:text-indigo-600 hover:border-indigo-300" }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`px-6 py-3 rounded-xl bg-white border border-slate-200 flex items-center gap-3 text-slate-700 transition-all duration-300 hover:scale-105 shadow-sm ${social.color}`}
                                    >
                                        <social.icon className="w-5 h-5" />
                                        <span className="font-medium text-sm">{social.name}</span>
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
