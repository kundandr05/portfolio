"use client";

import { motion } from 'framer-motion';
import ProjectCarousel from '@/components/projects/ProjectCarousel';

import { projects } from '@/data/projects';

export default function Projects() {
    return (
        <>
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
                            A showcase of my AI, backend development, research, and software engineering projects, highlighting practical problem-solving and real-world application development.
                        </p>
                    </motion.div>

                    <div className="w-full mt-12 pb-12">
                        <ProjectCarousel projects={projects} />
                    </div>
                </div>
            </section>
        </>
    );
}
