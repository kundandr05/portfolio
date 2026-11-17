"use client";

import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react';
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
    const isFlagship = project.slug === 'dispatchgrid' || project.slug === 'zeno-ai';

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full h-[510px] flex flex-col bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/90 overflow-hidden group shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_-4px_rgba(37,99,235,0.18)] hover:border-blue-400/80 transition-all duration-300"
        >
            {/* Subtle glow highlight on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Image Container */}
            <div className="relative h-44 shrink-0 w-full overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent z-10 pointer-events-none" />
                
                {/* Flagship Badge */}
                {isFlagship && (
                    <span className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-amber-300 text-[10px] font-bold tracking-wider uppercase border border-amber-400/30 flex items-center gap-1 shadow-md">
                        <Sparkles className="w-3 h-3 text-amber-300" /> Flagship
                    </span>
                )}

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
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400 font-medium text-xs">
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
                    <h3 className="text-base font-extrabold font-display text-slate-900 mb-1.5 line-clamp-2 group-hover:text-blue-600 transition-colors" title={project.title}>
                        {project.title}
                    </h3>
                    <p className="text-slate-600 text-xs line-clamp-3 mb-3 leading-relaxed">
                        {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                        {displayTags.map(tag => (
                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/70 font-semibold">
                                {tag}
                            </span>
                        ))}
                        {remainingCount > 0 && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 font-medium" title={project.tags.slice(4).join(', ')}>
                                +{remainingCount}
                            </span>
                        )}
                    </div>
                </div>

                {/* Direct Action Links (Clean flex bottom row, never overlaps) */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100 mt-auto pointer-events-auto">
                    {(!project.github || project.github === '#') ? (
                        <span className="flex items-center gap-1.5 text-xs font-medium text-slate-400 cursor-not-allowed" title={project.githubLabel || "Code unavailable"}>
                            <Github className="w-3.5 h-3.5" /> {project.githubLabel || "Code"}
                        </span>
                    ) : (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                        >
                            <Github className="w-3.5 h-3.5" /> Code
                        </a>
                    )}
                    
                    {(!project.demo || project.demo === '#') ? (
                        <span className="flex items-center gap-1.5 text-xs font-medium text-slate-400 cursor-not-allowed">
                            <ExternalLink className="w-3.5 h-3.5" /> Coming Soon
                        </span>
                    ) : (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-rose-600 transition-colors"
                        >
                            <ExternalLink className="w-3.5 h-3.5" /> {project.demoLabel || "Live Demo"}
                        </a>
                    )}

                    <Link
                        href={`/projects/${projectSlug}`}
                        className="ml-auto text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                    >
                        Details <ArrowRight className="w-3 h-3" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
