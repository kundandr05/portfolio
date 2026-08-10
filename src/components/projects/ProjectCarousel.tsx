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

    return (
        <div className="relative w-full h-[650px] flex flex-col items-center justify-center overflow-hidden">
            {/* Perspective container */}
            <div className="relative w-full h-[500px] flex items-center justify-center perspective-[1500px]">
                
                {/* The Rotating Wheel */}
                <motion.div
                    className="relative w-[350px] h-[450px] transform-style-3d"
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
                                    visibility: isVisible ? "visible" : "hidden"
                                }}
                            >
                                {/* Enforce pointer events ONLY on the front card so it's clickable */}
                                <div className={`w-full h-full ${!isCenter ? 'pointer-events-none opacity-50' : 'pointer-events-auto opacity-100'} transition-all duration-500`}>
                                    <ProjectCard project={project} />
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
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
