"use client";

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Alex Johnson",
        role: "Project Manager",
        text: "An exceptional developer who brings both technical expertise and creative flair to every project. The attention to detail is unmatched.",
        image: "/avatar1.jpg"
    },
    {
        id: 2,
        name: "Sarah Williams",
        role: "UX Designer",
        text: "Working with this developer was a breeze. They perfectly translated my designs into code and even improved on the animations.",
        image: "/avatar2.jpg"
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "CTO, TechStart",
        text: "Delivered the project ahead of schedule and the code quality was top-notch. Highly recommended for any complex frontend work.",
        image: "/avatar3.jpg"
    }
];

export default function Testimonials() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Client <span className="text-neon-purple">Feedback</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-panel p-8 rounded-2xl relative"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10" />
                            <p className="text-gray-300 leading-relaxed mb-6 italic">&quot;{item.text}&quot;</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-gray-400">
                                    {item.name[0]}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{item.name}</h4>
                                    <p className="text-neon-cyan text-xs">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
