"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function PublicationCarousel({ publications }: { publications: any[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % publications.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + publications.length) % publications.length);
    };

    const pub = publications[currentIndex];

    return (
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
            
            {/* Publication Card Container */}
            <div className="w-full relative min-h-[580px] sm:min-h-[520px] md:min-h-[460px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="w-full px-2 sm:px-6 md:px-12"
                    >
                        <div className="bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden group flex flex-col md:flex-row border border-slate-200/90 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.08)]">
                            {pub.image && (
                                <div className="w-full md:w-2/5 h-48 sm:h-56 md:h-auto min-h-[200px] md:min-h-[380px] relative border-b md:border-b-0 md:border-r border-slate-200/80 bg-slate-100 shrink-0">
                                    <Image src={pub.image} alt={pub.title} fill className="object-cover" />
                                </div>
                            )}
                            
                            <div className="p-5 sm:p-7 md:p-8 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                                            <pub.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] sm:text-xs text-blue-600 uppercase tracking-wider font-bold">{pub.type}</span>
                                            <div className="text-xs sm:text-sm text-slate-500 font-medium">{pub.publisher} &bull; {pub.date}</div>
                                        </div>
                                    </div>

                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors leading-snug">
                                        {pub.title}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed text-xs sm:text-sm line-clamp-4 md:line-clamp-none mb-4">
                                        {pub.description}
                                    </p>
                                </div>

                                <div className="pt-2">
                                    <a
                                        href={pub.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-blue-600 transition-all font-bold text-xs shadow-xs"
                                    >
                                        View Publication
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Desktop Left/Right Floating Arrows */}
                <button
                    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md transition-all shadow-xs z-30"
                    onClick={prevSlide}
                    aria-label="Previous Publication"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md transition-all shadow-xs z-30"
                    onClick={nextSlide}
                    aria-label="Next Publication"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Pagination Dots & Mobile Navigation Controls */}
            <div className="flex items-center gap-4 mt-6 z-30">
                <button
                    className="flex md:hidden p-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white"
                    onClick={prevSlide}
                    aria-label="Previous Publication"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                    {publications.map((_, idx) => (
                        <button
                            key={idx}
                            aria-label={`Go to publication ${idx + 1}`}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                idx === currentIndex
                                    ? "w-6 bg-blue-600 shadow-xs shadow-blue-500/40"
                                    : "w-2 bg-slate-300 hover:bg-slate-400"
                            }`}
                        />
                    ))}
                </div>

                <button
                    className="flex md:hidden p-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white"
                    onClick={nextSlide}
                    aria-label="Next Publication"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
