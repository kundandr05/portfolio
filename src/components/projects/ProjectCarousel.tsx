"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

export default function ProjectCarousel({ projects }: { projects: any[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => prev - 1);
    };

    // Math for the 3D cylinder
    const numCards = projects.length;
    const theta = 360 / numCards;
    // Controlled card width for responsive fit on mobile and desktop
    const cardWidth = 330;
    const radius = Math.round((cardWidth / 2) / Math.tan(Math.PI / numCards)) + 25;
    
    // The entire wheel rotates to show the current index
    const wheelRotation = -currentIndex * theta;
    const normalizedCurrentIndex = ((currentIndex % numCards) + numCards) % numCards;

    return (
        <div className="relative w-full flex flex-col items-center justify-center py-6">
            {/* Perspective container with ample vertical clearance */}
            <div className="relative w-full min-h-[560px] flex items-center justify-center perspective-[1500px]">
                
                {/* The Rotating Wheel */}
                <motion.div
                    className="relative w-[330px] max-w-[90vw] h-[510px] transform-style-3d"
                    animate={{ rotateY: wheelRotation }}
                    transition={{ type: "spring", stiffness: 90, damping: 18 }}
                >
                    {projects.map((project, index) => {
                        const isCenter = index === normalizedCurrentIndex;
                        
                        // Calculate shortest distance to center
                        let diff = index - normalizedCurrentIndex;
                        if (diff > numCards / 2) diff -= numCards;
                        if (diff < -numCards / 2) diff += numCards;

                        // Only show the center card and immediate neighbors for performance
                        const isVisible = Math.abs(diff) <= 1;

                        return (
                            <div
                                key={project.title}
                                className="absolute top-0 left-0 w-full h-full transform-style-3d transition-opacity duration-300"
                                style={{
                                    transform: `rotateY(${index * theta}deg) translateZ(${radius}px)`,
                                    opacity: isVisible ? (isCenter ? 1 : 0.45) : 0,
                                    visibility: isVisible ? "visible" : "hidden",
                                    pointerEvents: isCenter ? "auto" : "none",
                                    zIndex: isCenter ? 50 : 10
                                }}
                            >
                                <div className="w-full h-full">
                                    <ProjectCard project={project} />
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Navigation Controls (Cleanly positioned below 3D stage with zero overlap) */}
            <div className="flex items-center gap-6 mt-10 z-50">
                <button
                    onClick={prevSlide}
                    aria-label="Previous Project"
                    className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md transition-all duration-300 shadow-sm active:scale-95"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                
                {/* Dots */}
                <div className="flex items-center gap-2">
                    {projects.map((_, idx) => {
                        const isCurrent = idx === normalizedCurrentIndex;
                        return (
                            <button
                                key={idx}
                                aria-label={`Go to project ${idx + 1}`}
                                onClick={() => {
                                    let diff = idx - normalizedCurrentIndex;
                                    if (diff > numCards / 2) diff -= numCards;
                                    if (diff < -numCards / 2) diff += numCards;
                                    setCurrentIndex(currentIndex + diff);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    isCurrent 
                                    ? "w-6 bg-blue-600 shadow-sm shadow-blue-500/40" 
                                    : "w-2 bg-slate-300 hover:bg-slate-400"
                                }`}
                            />
                        );
                    })}
                </div>

                <button
                    onClick={nextSlide}
                    aria-label="Next Project"
                    className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md transition-all duration-300 shadow-sm active:scale-95"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
