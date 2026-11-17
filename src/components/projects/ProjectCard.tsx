"use client";

import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

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
    videoUrl?: string;
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
    const [isHovered, setIsHovered] = useState(false);
    const [imageError, setImageError] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (!videoRef.current) return;
        
        if (isHovered) {
            videoRef.current.play().catch(() => {});
        } else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [isHovered]);

    const projectSlug = project.slug || project.title.toLowerCase().replace(/\s+/g, '-');
    const displayTags = project.tags.slice(0, 4);
    const remainingCount = project.tags.length - displayTags.length;

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full h-[510px] flex flex-col bg-[#0b0c16]/90 backdrop-blur-md rounded-2xl border border-neon-cyan/20 overflow-hidden group shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_32px_rgba(0,217,255,0.25)] hover:border-neon-cyan/50 transition-all duration-300"
        >
            {/* Subtle glow highlight on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Image Container */}
            <div className="relative h-44 shrink-0 w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c16] via-transparent to-transparent z-10 pointer-events-none" />
                {project.image && !imageError ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 350px"
                        className={`object-cover transition-transform duration-500 group-hover:scale-105 ${isHovered && project.videoUrl ? 'opacity-0' : 'opacity-100'}`}
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-500 font-medium">
                        Project Preview
                    </div>
                )}
                {project.videoUrl && (
                    <video
                        ref={videoRef}
                        src={project.videoUrl}
                        muted
                        loop
                        playsInline
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    />
                )}
            </div>

            {/* Content Container */}
            <div className="p-5 flex-1 flex flex-col justify-between overflow-hidden">
                <div>
                    <h3 className="text-lg font-bold font-display text-white mb-1.5 line-clamp-2 group-hover:text-neon-cyan transition-colors" title={project.title}>
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs line-clamp-3 mb-3 leading-relaxed">
                        {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                        {displayTags.map(tag => (
                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-neon-cyan border border-neon-cyan/20">
                                {tag}
                            </span>
                        ))}
                        {remainingCount > 0 && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/10" title={project.tags.slice(4).join(', ')}>
                                +{remainingCount}
                            </span>
                        )}
                    </div>
                </div>

                {/* Direct Action Links (Clean flex bottom row, never overlaps) */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/10 mt-auto pointer-events-auto">
                    {(!project.github || project.github === '#') ? (
                        <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500 cursor-not-allowed" title={project.githubLabel || "Code unavailable"}>
                            <Github className="w-3.5 h-3.5" /> {project.githubLabel || "Code"}
                        </span>
                    ) : (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-medium text-gray-300 hover:text-neon-cyan transition-colors"
                        >
                            <Github className="w-3.5 h-3.5" /> Code
                        </a>
                    )}
                    
                    {(!project.demo || project.demo === '#') ? (
                        <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500 cursor-not-allowed">
                            <ExternalLink className="w-3.5 h-3.5" /> Coming Soon
                        </span>
                    ) : (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-medium text-gray-300 hover:text-neon-magenta transition-colors"
                        >
                            <ExternalLink className="w-3.5 h-3.5" /> {project.demoLabel || "Live Demo"}
                        </a>
                    )}

                    <Link
                        href={`/projects/${projectSlug}`}
                        className="ml-auto text-xs text-neon-cyan hover:text-white flex items-center gap-1 transition-colors"
                    >
                        Details <ArrowRight className="w-3 h-3" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
