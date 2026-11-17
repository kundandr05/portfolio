"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

export default function ProjectCarousel({ projects }: { projects: any[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const numCards = projects.length;
    if (numCards === 0) {
        return (
            <div className="text-center py-12 text-slate-400 font-medium text-sm">
                No projects found in this category.
            </div>
        );
    }

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % numCards);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + numCards) % numCards);
    };

    const currentProject = projects[currentIndex];

    // Math for Desktop 3D cylinder when we have at least 4 projects
    const canUse3D = numCards >= 4;
    const theta = canUse3D ? 360 / numCards : 0;
    const cardWidth = 330;
    const radius = canUse3D ? Math.round((cardWidth / 2) / Math.tan(Math.PI / numCards)) + 25 : 0;
    const wheelRotation = -currentIndex * theta;
    const normalizedCurrentIndex = ((currentIndex % numCards) + numCards) % numCards;

    return (
        <div className="relative w-full flex flex-col items-center justify-center py-4">
            
            {/* MOBILE VIEW (Flat, swipeable single-card stage with ZERO 3D clipping or overlap) */}
            <div className="w-full max-w-[340px] sm:max-w-[380px] min-h-[530px] flex items-center justify-center md:hidden px-2 relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="w-full"
                    >
                        <ProjectCard project={currentProject} />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* DESKTOP VIEW (Silky 3D Cylinder Stage) */}
            <div className="hidden md:flex relative w-full min-h-[560px] items-center justify-center perspective-[1500px]">
                {canUse3D ? (
                    <motion.div
                        className="relative w-[330px] h-[510px] transform-style-3d"
                        animate={{ rotateY: wheelRotation }}
                        transition={{ type: "spring", stiffness: 90, damping: 18 }}
                    >
                        {projects.map((project, index) => {
                            const isCenter = index === normalizedCurrentIndex;
                            let diff = index - normalizedCurrentIndex;
                            if (diff > numCards / 2) diff -= numCards;
                            if (diff < -numCards / 2) diff += numCards;
                            const isVisible = Math.abs(diff) <= 1;

                            return (
                                <div
                                    key={project.slug || project.title}
                                    className="absolute top-0 left-0 w-full h-full transform-style-3d transition-opacity duration-300"
                                    style={{
                                        transform: `rotateY(${index * theta}deg) translateZ(${radius}px)`,
                                        opacity: isVisible ? (isCenter ? 1 : 0.4) : 0,
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
                ) : (
                    /* Fallback for filtered results with fewer than 4 cards on desktop */
                    <div className="flex flex-wrap items-center justify-center gap-6 max-w-5xl">
                        {projects.map((project) => (
                            <div key={project.slug || project.title} className="w-[330px]">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Navigation Controls (Visible whenever there are multiple cards) */}
            {numCards > 1 && (
                <div className="flex items-center gap-4 sm:gap-6 mt-6 md:mt-10 z-30">
                    <button
                        onClick={prevSlide}
                        aria-label="Previous Project"
                        className="p-2.5 sm:p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md transition-all duration-200 shadow-xs active:scale-95"
                    >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    
                    {/* Dots */}
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        {projects.map((_, idx) => {
                            const isCurrent = idx === currentIndex;
                            return (
                                <button
                                    key={idx}
                                    aria-label={`Go to project ${idx + 1}`}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        isCurrent 
                                        ? "w-6 bg-blue-600 shadow-xs shadow-blue-500/40" 
                                        : "w-2 bg-slate-300 hover:bg-slate-400"
                                    }`}
                                />
                            );
                        })}
                    </div>

                    <button
                        onClick={nextSlide}
                        aria-label="Next Project"
                        className="p-2.5 sm:p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md transition-all duration-200 shadow-xs active:scale-95"
                    >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                </div>
            )}
        </div>
    );
}
