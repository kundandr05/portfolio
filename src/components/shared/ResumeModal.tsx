"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6 py-6 sm:py-12">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                        className="relative w-full max-w-5xl h-full flex flex-col bg-[#0a0a0f] border border-neon-cyan/20 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,217,255,0.15)]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5 backdrop-blur-md shrink-0">
                            <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                                Resume Preview
                            </h2>
                            <div className="flex items-center gap-3">
                                <a 
                                    href="/Kundan_Resume.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2 text-gray-400 hover:text-neon-cyan transition-colors hidden sm:block"
                                    title="Open in new tab"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                                <a 
                                    href="/Kundan_Resume.pdf" 
                                    download="Kundan_Resume.pdf"
                                    className="p-2 text-gray-400 hover:text-neon-magenta transition-colors"
                                    title="Download PDF"
                                >
                                    <Download className="w-5 h-5" />
                                </a>
                                <button 
                                    onClick={onClose}
                                    className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all"
                                    title="Close"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer */}
                        <div className="flex-1 bg-white/5 p-2 sm:p-4 overflow-hidden">
                            <iframe 
                                src="/Kundan_Resume.pdf#toolbar=0" 
                                className="w-full h-full rounded-lg border border-white/10 bg-white"
                                title="Resume PDF Preview"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
