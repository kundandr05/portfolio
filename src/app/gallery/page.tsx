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
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                            Life in <span className="text-neon-green">Frames</span>
                        </h1>
                        <p className="text-gray-400">Capturing moments from my professional and personal journey.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {images.map((image) => (
                            <motion.div
                                layoutId={`image-${image.id}`}
                                key={image.id}
                                onClick={() => setSelectedId(image.id)}
                                className="cursor-pointer overflow-hidden rounded-xl border border-white/10 relative group h-64"
                            >
                                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500 group-hover:bg-gray-700 transition-colors">
                                    {image.alt}
                                </div>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-medium border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">View</span>
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
                                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                                onClick={() => setSelectedId(null)}
                            >
                                <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
                                    <button
                                        onClick={() => setSelectedId(null)}
                                        className="absolute top-4 right-4 text-white hover:text-neon-cyan p-2 bg-white/10 rounded-full z-50"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>

                                    <motion.div
                                        layoutId={`image-${selectedId}`}
                                        className="max-h-[80vh] w-full bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {/* Placeholder for actual full-size image */}
                                        <span className="text-white text-xl">Full Size Image Preview</span>
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
