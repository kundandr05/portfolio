"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, ExternalLink, ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

export default function ProjectCarousel({ projects }: { projects: any[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => prev - 1);
    };

    const handleDragEnd = (e: any, { offset, velocity }: any) => {
        const swipePower = Math.abs(offset.x) * velocity.x;
        if (swipePower < -500) {
            nextSlide();
        } else if (swipePower > 500) {
            prevSlide();
        }
    };

    // Math for the 3D cylinder
    const numCards = projects.length;
    const theta = 360 / numCards;
    // Assuming card width is roughly 350px. Adding some extra radius for spacing.
    const radius = Math.round((350 / 2) / Math.tan(Math.PI / numCards)) + 50;
    
    // The entire wheel rotates to show the current index
    const wheelRotation = -currentIndex * theta;
    const normalizedCurrentIndex = ((currentIndex % numCards) + numCards) % numCards;
    const activeProject = projects[normalizedCurrentIndex];

    return (
        <div className="relative w-full h-[700px] flex flex-col items-center justify-center overflow-hidden">
            {/* Perspective container */}
            <div className="relative w-full h-[600px] flex items-center justify-center perspective-[1500px]">
                
                {/* The Rotating Wheel */}
                <motion.div
                    className="relative w-[350px] h-[520px] transform-style-3d"
                    animate={{ rotateY: wheelRotation }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                >
                    {projects.map((project, index) => {
                        const normalizedCurrentIndex = ((currentIndex % numCards) + numCards) % numCards;
                        const isCenter = index === normalizedCurrentIndex;
                        
                        // Calculate shortest distance to center
                        let diff = index - normalizedCurrentIndex;
                        if (diff > numCards / 2) diff -= numCards;
                        if (diff < -numCards / 2) diff += numCards;

                        // Only show the center card and the immediate left/right cards
                        // This hides the back half of the cylinder so text doesn't show through backwards
                        const isVisible = Math.abs(diff) <= 1;

                        return (
                            <div
                                key={project.title}
                                className="absolute top-0 left-0 w-full h-full transform-style-3d transition-opacity duration-500"
                                style={{
                                    transform: `rotateY(${index * theta}deg) translateZ(${radius}px)`,
                                    opacity: isVisible ? 1 : 0,
                                    visibility: isVisible ? "visible" : "hidden",
                                    pointerEvents: isCenter ? "auto" : "none",
                                    zIndex: isCenter ? 50 : 10
                                }}
                            >
                                {/* We keep the inner div styling for opacity */}
                                <div className={`w-full h-full ${!isCenter ? 'opacity-50' : 'opacity-100'} transition-all duration-500`}>
                                    <ProjectCard project={project} />
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                {/* 2D Click Overlay - immune to 3D rendering bugs */}
                <div className="absolute w-[350px] h-[520px] z-[100] pointer-events-none flex flex-col justify-end p-6">
                    <div className="flex gap-4 mt-auto relative pointer-events-auto">
                        {(!activeProject.github || activeProject.github === '#') ? (
                            <span className="flex items-center gap-2 text-xs font-medium text-gray-400 cursor-not-allowed bg-black/40 px-3 py-2 rounded-lg backdrop-blur-md border border-white/5">
                                <Github className="w-3 h-3" /> {activeProject.githubLabel || "Code"}
                            </span>
                        ) : (
                            <a
                                href={activeProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs font-medium text-white hover:text-neon-cyan transition-colors bg-black/40 px-3 py-2 rounded-lg backdrop-blur-md border border-white/10 hover:border-neon-cyan/50"
                            >
                                <Github className="w-3 h-3" /> Code
                            </a>
                        )}
                        
                        {(!activeProject.demo || activeProject.demo === '#') ? (
                            <span className="flex items-center gap-2 text-xs font-medium text-gray-400 cursor-not-allowed bg-black/40 px-3 py-2 rounded-lg backdrop-blur-md border border-white/5">
                                <ExternalLink className="w-3 h-3" /> Coming Soon
                            </span>
                        ) : (
                            <a
                                href={activeProject.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs font-medium text-white hover:text-neon-magenta transition-colors bg-black/40 px-3 py-2 rounded-lg backdrop-blur-md border border-white/10 hover:border-neon-magenta/50"
                            >
                                <ExternalLink className="w-3 h-3" /> {activeProject.demoLabel || "Live Demo"}
                            </a>
                        )}
                        <a
                            href={`/projects/${activeProject.slug || activeProject.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="ml-auto text-xs text-neon-cyan hover:text-white flex items-center gap-1 bg-black/40 px-3 py-2 rounded-lg backdrop-blur-md border border-white/10 hover:border-neon-cyan/50 transition-colors"
                        >
                            Details <ArrowRight className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-6 mt-8 z-50">
                <button
                    onClick={prevSlide}
                    className="p-3 rounded-full bg-neon-cyan/10 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black hover:shadow-[0_0_15px_rgba(0,217,255,0.6)] transition-all duration-300 backdrop-blur-md"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                
                {/* Dots */}
                <div className="flex gap-2">
                    {projects.map((_, idx) => {
                        const normalizedCurrentIndex = ((currentIndex % numCards) + numCards) % numCards;
                        return (
                            <button
                                key={idx}
                                // Calculate the shortest path to the desired index for smooth rotation
                                onClick={() => {
                                    // Find shortest distance
                                    let diff = idx - normalizedCurrentIndex;
                                    if (diff > numCards / 2) diff -= numCards;
                                    if (diff < -numCards / 2) diff += numCards;
                                    setCurrentIndex(currentIndex + diff);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    idx === normalizedCurrentIndex 
                                    ? "w-6 bg-neon-cyan shadow-[0_0_10px_rgba(0,217,255,0.8)]" 
                                    : "bg-white/30 hover:bg-white/60"
                                }`}
                            />
                        );
                    })}
                </div>

                <button
                    onClick={nextSlide}
                    className="p-3 rounded-full bg-neon-cyan/10 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black hover:shadow-[0_0_15px_rgba(0,217,255,0.6)] transition-all duration-300 backdrop-blur-md"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
