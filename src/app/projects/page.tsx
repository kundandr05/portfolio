"use client";

import { motion } from 'framer-motion';
import PageTransition from '@/components/shared/PageTransition';
import ProjectCard from '@/components/projects/ProjectCard';

const projects = [
    {
        title: "Agentic AI Tournament System",
        description: "An intelligent multi-agent system designed to automate tournament scheduling, team registration, and match coordination with AI-driven decision workflows.",
        tags: ["Python", "FastAPI", "SQLite", "Multi-Agent Systems", "AI"],
        image: "/project1.jpg",
        github: "#",
        demo: "#",
        demoLabel: "Research Paper"
    },
    {
        title: "AI Query Assistant Integration",
        description: "AI-powered natural language assistant integrated into the tournament system to enable intelligent data retrieval and real-time user interaction.",
        tags: ["Python", "NLP", "OpenAI API", "FastAPI"],
        image: "/project2.jpg",
        github: "#"
    },
    {
        title: "3-Day Agentic AI Prototype",
        description: "Built a prototype autonomous agent system demonstrating workflow automation and inter-agent coordination using applied AI architecture principles.",
        tags: ["Python", "Autonomous Agents", "System Design"],
        image: "/project3.jpg",
        github: "#"
    },
    {
        title: "Cloud & AI Simulation Experience",
        description: "Completed hands-on cloud and AI job simulations including AWS Solutions Architecture, AI-powered data analytics, and Azure fundamentals.",
        tags: ["AWS", "Azure", "IBM Cloud", "Cloud Architecture"],
        image: "/project4.jpg",
        demo: "#",
        demoLabel: "Certificate"
    }
];

export default function Projects() {
    return (
        <PageTransition>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                            Featured <span className="text-neon-cyan">Projects</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            A collection of my recent work, showcasing my skills in full-stack development and UI/UX design.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
