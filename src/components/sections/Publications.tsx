"use client";

import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, FileText } from 'lucide-react';
import PublicationCarousel from '@/components/publications/PublicationCarousel';

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
        color: "text-blue-600"
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
        color: "text-rose-600"
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
        color: "text-indigo-600"
    }
];

export default function Publications() {
    return (
        <section id="publications" className="py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16 relative">
                    <span className="font-handwriting text-2xl text-rose-500 font-bold rotate-[-2deg] inline-block mb-1">
                        scholarly work & authorship 📖
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        Published{' '}
                        <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600">
                            Words & Papers
                        </span>
                    </h2>
                    <p className="text-slate-600 text-base max-w-xl mx-auto mt-2">
                        Peer-reviewed research in Agentic AI alongside two books authored and published globally on Amazon KDP.
                    </p>
                </div>

                <PublicationCarousel publications={publications} />
            </div>
        </section>
    );
}
