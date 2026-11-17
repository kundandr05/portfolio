"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
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
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-stone-950/70 backdrop-blur-xs"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 15 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="relative w-full max-w-4xl h-full max-h-[85vh] flex flex-col bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-stone-200 dark:border-stone-800 bg-[#faf8f5] dark:bg-stone-900 shrink-0">
                            <div>
                                <h3 className="font-serif-editorial text-lg font-semibold text-stone-900 dark:text-stone-100">
                                    Kundan DR &mdash; Resume
                                </h3>
                                <p className="text-xs font-mono text-stone-500">
                                    Updated November 2026 &bull; PDF Preview
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <a 
                                    href="/kundan_resume.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors hidden sm:inline-flex"
                                    title="Open in new tab"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                                <a 
                                    href="/kundan_resume.pdf" 
                                    download="Kundan_DR_Resume.pdf"
                                    className="btn-editorial-primary text-xs !py-1.5 !px-3"
                                >
                                    <Download className="w-3.5 h-3.5" />
                                    Download PDF
                                </a>
                                <button
                                    onClick={onClose}
                                    className="p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
                                    aria-label="Close modal"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer Frame */}
                        <div className="flex-1 w-full h-full bg-stone-100 dark:bg-stone-800 relative">
                            <iframe 
                                src="/kundan_resume.pdf#toolbar=0" 
                                className="w-full h-full border-none"
                                title="Resume PDF Preview"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
