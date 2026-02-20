"use client";

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    image: string;
    github?: string;
    demo?: string;
    demoLabel?: string;
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.18}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileHover={{ scale: 1.02, cursor: "grabbing" }}
            whileTap={{ cursor: "grabbing" }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative w-full h-[450px] bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden group perspective-1000"
        >
            {/* Glow Effect */}
            <div
                className={`absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-transparent to-neon-purple/20 opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`}
            />

            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                {/* Placeholder for actual image */}
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
                    Project Preview
                </div>
            </div>

            {/* Content */}
            <div className="p-6 relative z-20 h-[calc(100%-12rem)] flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-neon-cyan transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-neon-cyan border border-neon-cyan/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex gap-4 mt-auto">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-white hover:text-neon-cyan transition-colors"
                        >
                            <Github className="w-4 h-4" /> Code
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-white hover:text-neon-magenta transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" /> {project.demoLabel || "Live Demo"}
                        </a>
                    )}
                    <Link
                        href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="ml-auto text-xs text-gray-500 hover:text-white flex items-center gap-1"
                    >
                        Details <ArrowRight className="w-3 h-3" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
