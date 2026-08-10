"use client";

import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, FileText } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import PublicationCarousel from '@/components/publications/PublicationCarousel';
import Image from 'next/image';

const publications = [
    {
        type: "research",
        title: "Tournament Management Agent Using Agentic Artificial Intelligence",
        publisher: "IJCRT",
        date: "December 2025",
        description: "A detailed design and implementation of an AI-powered Tournament Management Agent based on Agentic Artificial Intelligence. The system introduces an autonomous conversational agent capable of understanding natural language queries and executing tournament management tasks.",
        link: "http://ijcrt.org/viewfull.php?&p_id=IJCRT2512785",
        image: "/paper-image.png",
        icon: FileText,
        color: "text-neon-cyan"
    },
    {
        type: "book",
        title: "RECLAIM YOUR FOCUS: A Guide to Dopamine Detox and Get Things Done",
        publisher: "Amazon",
        date: "2024",
        description: "In a world drowning in digital noise, our brains are overstimulated by notifications and endless scrolling. This book is your roadmap back to clarity, exploring the science behind distractions and how our modern environment overloads the brain's reward system. Learn to strategically fast from high-stimulation activities, combat burnout, and forge new habits for a more intentional life.",
        link: "https://a.co/d/07SiOZpN",
        image: "/book-reclaim.jpg",
        icon: BookOpen,
        color: "text-neon-magenta"
    },
    {
        type: "book",
        title: "The Two-Speed Mind: Solving the 90s vs. 2000s Conflict to End Your Structural Stress",
        publisher: "Amazon",
        date: "2024",
        description: "Stop calling it burnout. It's structural failure. You are suffering from a structural non-alignment between the stable 1990s Mindset and the relentless speed of the 2000s World. This book introduces Computational Physics to expose the true source of modern anxiety and provides a clear path to achieving the structural rebellion required for computational peace.",
        link: "https://a.co/d/0euaUcnC",
        image: "/book-twospeed.jpg",
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

                    <PublicationCarousel publications={publications} />
                </div>
            </section>
        </PageTransition>
    );
}
