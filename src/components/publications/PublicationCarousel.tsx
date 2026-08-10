"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function PublicationCarousel({ publications }: { publications: any[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % publications.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + publications.length) % publications.length);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const pub = publications[currentIndex];

    return (
        <div className="relative w-full max-w-4xl mx-auto h-[600px] flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            nextSlide();
                        } else if (swipe > swipeConfidenceThreshold) {
                            prevSlide();
                        }
                    }}
                    className="absolute w-full px-12"
                >
                    <div className="glass-panel rounded-2xl relative overflow-hidden group flex flex-col md:flex-row h-full max-h-[500px]">
                        {/* Background Glow */}
                        <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-${pub.color.replace('text-', '')}/20 to-transparent blur-3xl rounded-full`} />

                        {pub.image && (
                            <div className="w-full md:w-2/5 h-64 md:h-full min-h-[300px] relative border-b md:border-b-0 md:border-r border-white/10 group-hover:border-neon-cyan/30 transition-colors">
                                <Image src={pub.image} alt={pub.title} fill className="object-cover" />
                            </div>
                        )}
                        
                        <div className="p-8 flex-grow flex flex-col justify-center w-full md:w-3/5">
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`p-3 bg-white/5 rounded-lg ${pub.color}`}>
                                    <pub.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{pub.type}</span>
                                    <div className="text-sm text-gray-300">{pub.publisher} &bull; {pub.date}</div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">
                                {pub.title}
                            </h2>

                            <p className="text-gray-400 mb-8 flex-grow">
                                {pub.description}
                            </p>

                            <a
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 ${pub.color} hover:bg-white/10 transition-colors w-fit font-medium z-10 relative`}
                            >
                                View Publication
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <button
                className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neon-cyan/10 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black hover:shadow-[0_0_15px_rgba(0,217,255,0.6)] transition-all duration-300 backdrop-blur-md z-50"
                onClick={prevSlide}
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neon-cyan/10 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black hover:shadow-[0_0_15px_rgba(0,217,255,0.6)] transition-all duration-300 backdrop-blur-md z-50"
                onClick={nextSlide}
            >
                <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
                {publications.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === currentIndex 
                            ? "w-6 bg-neon-cyan shadow-[0_0_10px_rgba(0,217,255,0.8)]" 
                            : "bg-white/30 hover:bg-white/60"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
