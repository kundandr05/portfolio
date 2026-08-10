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
            videoRef.current.play().catch(e => console.log("Video auto-play prevented:", e));
        } else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [isHovered]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPos = e.clientX - rect.left;
        const yPos = e.clientY - rect.top;
        
        // Update CSS variables for glow
        e.currentTarget.style.setProperty("--mouse-x", `${xPos}px`);
        e.currentTarget.style.setProperty("--mouse-y", `${yPos}px`);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            className="relative w-full h-full min-h-[520px] flex flex-col bg-surface/60 backdrop-blur-xl rounded-2xl border border-neon-cyan/20 overflow-hidden group shadow-[0_8px_32px_rgba(0,217,255,0.1)] hover:shadow-[0_12px_40px_rgba(0,217,255,0.3)] hover:border-neon-cyan/40 transition-all duration-300 hover:scale-[1.02]"
        >
            {/* Mouse-responsive color pop & glowing gradient */}
            <div 
                className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                style={{
                    background: `radial-gradient(800px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 217, 255, 0.15), transparent 40%)`
                }}
            />
            <div 
                className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                style={{
                    background: `radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255, 0, 110, 0.15), transparent 40%)`
                }}
            />

            {/* Image Container */}
            <div className="relative h-48 shrink-0 w-full overflow-hidden bg-gray-900 z-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />
                {project.image && !imageError ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className={`object-cover transition-transform duration-700 group-hover:scale-110 ${isHovered && project.videoUrl ? 'opacity-0' : 'opacity-100'}`}
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
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    />
                )}
            </div>

            {/* Content */}
            <div className="p-6 relative z-20 flex-1 flex flex-col justify-between">
                <div className="pointer-events-none">
                    <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-neon-cyan transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs line-clamp-4 mb-4">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-[10px] px-2 py-1 rounded bg-white/5 text-neon-cyan border border-neon-cyan/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Clickable links wrapper - HIDDEN because 3D blocks clicks. We overlay them in 2D in Carousel */}
                <div className="flex gap-4 mt-auto relative z-30 opacity-0 pointer-events-none">
                    {(!project.github || project.github === '#') ? (
                        <span className="flex items-center gap-2 text-xs font-medium text-gray-600 cursor-not-allowed" title={project.githubLabel || "Code unavailable"}>
                            <Github className="w-3 h-3" /> {project.githubLabel || "Code"}
                        </span>
                    ) : (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs font-medium text-white hover:text-neon-cyan transition-colors"
                        >
                            <Github className="w-3 h-3" /> Code
                        </a>
                    )}
                    
                    {(!project.demo || project.demo === '#') ? (
                        <span className="flex items-center gap-2 text-xs font-medium text-gray-600 cursor-not-allowed">
                            <ExternalLink className="w-3 h-3" /> Coming Soon
                        </span>
                    ) : (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs font-medium text-white hover:text-neon-magenta transition-colors"
                        >
                            <ExternalLink className="w-3 h-3" /> {project.demoLabel || "Live Demo"}
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
        </div>
    );
}
