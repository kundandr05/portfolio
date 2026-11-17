"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';

const images = [
    { id: 1, src: "/gallery/photo1.jpg", alt: "Hackathon Win" },
    { id: 2, src: "/gallery/photo2.jpg", alt: "Conference Talk" },
    { id: 3, src: "/gallery/photo3.jpg", alt: "Team Meeting" },
    { id: 4, src: "/gallery/photo4.jpg", alt: "Workspace Setup" },
    { id: 5, src: "/gallery/photo5.jpg", alt: "Graduation Day" },
    { id: 6, src: "/gallery/photo6.jpg", alt: "Networking Event" },
];

export default function Gallery() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <PageTransition>
            <section className="py-20 min-h-screen">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
                            Life in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600">Frames</span>
                        </h1>
                        <p className="text-slate-600 text-base max-w-xl mx-auto">
                            Capturing milestones, hackathons, and moments from my journey as an engineer.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {images.map((image) => (
                            <motion.div
                                layoutId={`image-${image.id}`}
                                key={image.id}
                                onClick={() => setSelectedId(image.id)}
                                className="cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:shadow-lg transition-all duration-300 relative group h-64"
                            >
                                <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium group-hover:bg-slate-200/70 transition-colors">
                                    {image.alt}
                                </div>
                                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                    <span className="text-white font-semibold text-xs border border-white/40 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md">
                                        View Photo
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <AnimatePresence>
                        {selectedId && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4"
                                onClick={() => setSelectedId(null)}
                            >
                                <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
                                    <button
                                        onClick={() => setSelectedId(null)}
                                        className="absolute top-4 right-4 text-white hover:text-rose-400 p-2.5 bg-white/10 hover:bg-white/20 rounded-full z-50 transition-colors"
                                        aria-label="Close modal"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>

                                    <motion.div
                                        layoutId={`image-${selectedId}`}
                                        className="max-h-[80vh] w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center border border-slate-200 shadow-2xl p-8"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <span className="text-slate-800 text-lg font-medium">Full Size Image Preview</span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </PageTransition>
    );
}
