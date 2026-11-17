"use client";

import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const courses = [
    {
        title: "AWS APAC – Solutions Architecture",
        platform: "Forage",
        date: "2024",
        skills: ["AWS", "Cloud Architecture", "System Design"],
        certificateLink: "#",
        image: "/cert1.jpg"
    },
    {
        title: "Gen AI Powered Data Analytics",
        platform: "Tata",
        date: "2024",
        skills: ["AI", "Data Analytics", "Machine Learning"],
        certificateLink: "#",
        image: "/cert2.jpg"
    },
    {
        title: "Software Engineering Simulation",
        platform: "Wells Fargo",
        date: "2024",
        skills: ["Software Engineering", "System Design"],
        certificateLink: "#",
        image: "/cert3.jpg"
    },
    {
        title: "Tools for Data Science",
        platform: "IBM",
        date: "2024",
        skills: ["Python", "Data Science", "IBM"],
        certificateLink: "#",
        image: "/cert4.jpg"
    },
    {
        title: "Microsoft Azure Cloud Services",
        platform: "Microsoft",
        date: "2024",
        skills: ["Azure", "Cloud Computing"],
        certificateLink: "#",
        image: "/cert5.jpg"
    },
    {
        title: "Crash Course on Python",
        platform: "Google",
        date: "2024",
        skills: ["Python Programming"],
        certificateLink: "#",
        image: "/cert6.jpg"
    }
];

export default function Courses() {
    return (
        <>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 relative">
                        <span className="font-handwriting text-2xl text-rose-500 font-bold rotate-[-2deg] inline-block mb-1">
                            lifelong learning 📜
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                            Certifications &{' '}
                            <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600">
                                Specialized Training
                            </span>
                        </h2>
                        <p className="text-slate-600 text-base max-w-xl mx-auto mt-2">
                            Industry credentials certified by Google, IBM, Microsoft, and DeepLearning.AI.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {courses.map((course, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass-panel p-6 rounded-2xl border-l-4 border-l-rose-500 hover:border-l-blue-600 transition-all duration-300 group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                            {course.title}
                                        </h3>
                                        <p className="text-rose-600 text-sm font-semibold flex items-center gap-1 mt-1">
                                            <Award className="w-4 h-4" /> {course.platform}
                                        </p>
                                    </div>
                                    <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                                        <Award className="w-5 h-5" />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-slate-400 text-xs mb-4">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {course.date}
                                </div>

                                <div className="mb-6">
                                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-2 font-medium">Skills Learned:</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {course.skills.map((skill, i) => (
                                            <span key={i} className="flex items-center gap-1 text-xs px-2.5 py-1 bg-slate-100 rounded-full text-slate-700 font-medium">
                                                <CheckCircle className="w-3 h-3 text-emerald-600" /> {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {(!course.certificateLink || course.certificateLink === '#') ? (
                                    <span className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-500 text-xs font-medium flex items-center justify-center gap-2 cursor-not-allowed bg-slate-50">
                                        Certificate Available On Request
                                    </span>
                                ) : (
                                    <a
                                        href={course.certificateLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-2.5 rounded-xl border border-blue-200 bg-blue-50 text-blue-600 text-xs font-medium hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2 shadow-sm"
                                    >
                                        View Certificate <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
