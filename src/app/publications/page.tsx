"use client";

import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, FileText } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import Image from 'next/image';

const publications = [
    {
        type: "research",
        title: "Tournament Management Agent Using Agentic Artificial Intelligence",
        publisher: "IJCRT",
        date: "December 2025",
        description: "A detailed design and implementation of an AI-powered Tournament Management Agent based on Agentic Artificial Intelligence. The system introduces an autonomous conversational agent capable of understanding natural language queries and executing tournament management tasks.",
        link: "http://ijcrt.org/viewfull.php?&p_id=IJCRT2512785",
        icon: FileText,
        color: "text-neon-cyan"
    },
    {
        type: "book",
        title: "Mastering Agentic AI (Placeholder Title)",
        publisher: "Amazon KDP",
        date: "2026",
        description: "A deep dive into building production-ready LLM agents using FastAPI and Python. Covers vector databases, prompt engineering, and autonomous workflows.",
        link: "#",
        image: "/placeholder-book.jpg",
        icon: BookOpen,
        color: "text-neon-magenta"
    },
    {
        type: "book",
        title: "The Future of Backend Architecture (Placeholder Title)",
        publisher: "Amazon KDP",
        date: "2026",
        description: "An exploration of modern backend scalable systems, focusing on microservices, serverless deployments, and optimal API design.",
        link: "#",
        image: "/placeholder-book2.jpg",
        icon: BookOpen,
        color: "text-neon-green"
    }
];

export default function Publications() {
    return (
        <PageTransition>
            <section className="py-20 min-h-screen">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                            Publications & <span className="text-neon-cyan">Books</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            My published research papers and authored books on Artificial Intelligence, Machine Learning, and Software Development.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {publications.map((pub, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-panel rounded-2xl relative overflow-hidden group flex flex-col h-full"
                            >
                                {/* Background Glow */}
                                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-${pub.color.replace('text-', '')}/20 to-transparent blur-3xl rounded-full`} />

                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`p-3 bg-white/5 rounded-lg ${pub.color}`}>
                                            <pub.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{pub.type}</span>
                                            <div className="text-sm text-gray-300">{pub.publisher} &bull; {pub.date}</div>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">
                                        {pub.title}
                                    </h2>

                                    <p className="text-gray-400 mb-8 flex-grow">
                                        {pub.description}
                                    </p>

                                    <a
                                        href={pub.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 ${pub.color} hover:bg-white/10 transition-colors w-fit font-medium`}
                                    >
                                        View Publication
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
