"use client";

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectProps {
    slug?: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    github?: string;
    githubLabel?: string;
    demo?: string;
    demoLabel?: string;
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    const [isHovered, setIsHovered] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPos = e.clientX - rect.left;
        const yPos = e.clientY - rect.top;
        e.currentTarget.style.setProperty("--mouse-x", `${xPos}px`);
        e.currentTarget.style.setProperty("--mouse-y", `${yPos}px`);
    };

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
            onMouseMove={handleMouseMove}
            className="relative w-full h-full min-h-[450px] flex flex-col bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden group perspective-1000"
        >
            {/* Mouse-responsive color pop & glowing gradient */}
            <div 
                className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                style={{
                    background: `radial-gradient(800px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 243, 255, 0.15), transparent 40%)`
                }}
            />
            <div 
                className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                style={{
                    background: `radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255, 0, 255, 0.15), transparent 40%)`
                }}
            />

            {/* Image Container */}
            <div className="relative h-48 shrink-0 w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />
                {project.image && !imageError ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-500 font-medium">
                        Project Preview
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 relative z-20 flex-1 flex flex-col justify-between">
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
                    {(!project.github || project.github === '#') ? (
                        <span className="flex items-center gap-2 text-sm font-medium text-gray-600 cursor-not-allowed" title={project.githubLabel || "Code unavailable"}>
                            <Github className="w-4 h-4" /> {project.githubLabel || "Code (Coming Soon)"}
                        </span>
                    ) : (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-white hover:text-neon-cyan transition-colors"
                        >
                            <Github className="w-4 h-4" /> Code
                        </a>
                    )}
                    
                    {(!project.demo || project.demo === '#') ? (
                        <span className="flex items-center gap-2 text-sm font-medium text-gray-600 cursor-not-allowed">
                            <ExternalLink className="w-4 h-4" /> Coming Soon
                        </span>
                    ) : (
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
                        href={`/projects/${project.slug || project.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="ml-auto text-xs text-gray-500 hover:text-white flex items-center gap-1"
                    >
                        Details <ArrowRight className="w-3 h-3" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
