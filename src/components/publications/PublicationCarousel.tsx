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
                    <div className="glass-panel rounded-2xl relative overflow-hidden group flex flex-col md:flex-row h-full max-h-[500px] border border-slate-200/80 shadow-md">
                        {pub.image && (
                            <div className="w-full md:w-2/5 h-64 md:h-full min-h-[300px] relative border-b md:border-b-0 md:border-r border-slate-200 bg-slate-100">
                                <Image src={pub.image} alt={pub.title} fill className="object-cover" />
                            </div>
                        )}
                        
                        <div className="p-8 flex-grow flex flex-col justify-center w-full md:w-3/5">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                    <pub.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-xs text-blue-600 uppercase tracking-wider font-bold">{pub.type}</span>
                                    <div className="text-sm text-slate-500 font-medium">{pub.publisher} &bull; {pub.date}</div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                {pub.title}
                            </h2>

                            <p className="text-slate-600 mb-8 flex-grow leading-relaxed text-sm">
                                {pub.description}
                            </p>

                            <a
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-all w-fit font-medium z-10 relative shadow-sm"
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
                className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md transition-all duration-300 shadow-sm z-50"
                onClick={prevSlide}
                aria-label="Previous Publication"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md transition-all duration-300 shadow-sm z-50"
                onClick={nextSlide}
                aria-label="Next Publication"
            >
                <ChevronRight className="w-5 h-5" />
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
                        className={`h-2 rounded-full transition-all duration-300 ${
                            idx === currentIndex 
                            ? "w-6 bg-blue-600 shadow-sm shadow-blue-500/40" 
                            : "w-2 bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
