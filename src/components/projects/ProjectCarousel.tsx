"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

// Using any[] here to avoid strict type coupling, as the data structure is flexible
export default function ProjectCarousel({ projects }: { projects: any[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    // Calculate the relative index for layout
    const getRelativeIndex = (index: number) => {
        const diff = index - currentIndex;
        // Normalize the diff to handle wrapping in a circular array
        const len = projects.length;
        let relative = diff % len;
        
        // Ensure relative index is between -Math.floor(len/2) and Math.floor(len/2)
        if (relative > len / 2) relative -= len;
        if (relative < -len / 2) relative += len;
        
        return relative;
    };

    const handleDragEnd = (e: any, { offset, velocity }: any) => {
        const swipePower = Math.abs(offset.x) * velocity.x;
        if (swipePower < -500) {
            nextSlide();
        } else if (swipePower > 500) {
            prevSlide();
        }
    };

    return (
        <div className="relative w-full h-[600px] flex items-center justify-center perspective-[1200px] overflow-hidden">
            {/* Cards */}
            <motion.div 
                className="relative w-full max-w-md h-[500px] flex items-center justify-center transform-style-3d cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
            >
                <AnimatePresence initial={false}>
                    {projects.map((project, index) => {
                        const relativeIndex = getRelativeIndex(index);
                        const isCenter = relativeIndex === 0;
                        
                        // Calculate 3D transforms based on relative position
                        const xOffset = relativeIndex * 150; // Horizontal spread
                        const zOffset = Math.abs(relativeIndex) * -150; // Push back side items
                        const rotateYOffset = relativeIndex * -15; // Rotate inwards
                        const opacityOffset = 1 - Math.abs(relativeIndex) * 0.3; // Fade out side items
                        const scaleOffset = 1 - Math.abs(relativeIndex) * 0.1; // Scale down side items
                        const zIndex = 100 - Math.abs(relativeIndex); // Center item on top

                        // Don't render items that are too far away (e.g., more than 2 items away)
                        if (Math.abs(relativeIndex) > 2) return null;

                        return (
                            <motion.div
                                key={project.title}
                                className="absolute top-0 left-0 w-full h-full"
                                initial={false}
                                animate={{
                                    x: xOffset,
                                    z: zOffset,
                                    rotateY: rotateYOffset,
                                    opacity: opacityOffset,
                                    scale: scaleOffset,
                                    zIndex: zIndex,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.32, 0.72, 0, 1] // Custom cubic-bezier for smooth snappy feel
                                }}
                                onClick={() => {
                                    if (!isCenter) {
                                        setCurrentIndex(index);
                                    }
                                }}
                            >
                                {/* Disable pointer events on non-center cards so they don't trigger hover effects/links */}
                                <div className={`w-full h-full ${!isCenter ? 'pointer-events-none' : ''}`}>
                                    <ProjectCard project={project} />
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </motion.div>

            {/* Navigation Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50">
                <button
                    onClick={prevSlide}
                    className="p-3 rounded-full bg-neon-cyan/10 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black hover:shadow-[0_0_15px_rgba(0,217,255,0.6)] transition-all duration-300 backdrop-blur-md"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                
                {/* Dots */}
                <div className="flex gap-2">
                    {projects.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                idx === currentIndex 
                                ? "w-6 bg-neon-cyan shadow-[0_0_10px_rgba(0,217,255,0.8)]" 
                                : "bg-white/30 hover:bg-white/60"
                            }`}
                        />
                    ))}
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
