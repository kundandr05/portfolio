"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#18181b]/55 backdrop-blur-xs"
          />

          {/* Modal Card - Styled like a Manila Folder / Clip Document */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15, rotate: -1 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15, rotate: 1 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-[90vh] flex flex-col bg-[#fdfbf7] border-2 border-[#18181b] rounded-2xl overflow-hidden shadow-[8px_8px_0px_#18181b]"
          >
            {/* Washi tape on top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#fde047]/90 border border-[#18181b]/30 rotate-1 z-20 pointer-events-none shadow-xs" />

            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b-2 border-[#18181b] bg-[#faf7ee] shrink-0">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="p-1.5 bg-[#fde047] border border-[#18181b] rounded-md shadow-[1px_1px_0px_#18181b]">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#18181b]" />
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-display font-black text-[#18181b]">
                    Kundan_Resume.pdf
                  </h2>
                  <p className="text-[11px] sm:text-xs text-stone-500 font-mono">B.E. CSE (AI &amp; ML) · Graduating 2027</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <a
                  href="/Kundan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#18181b] bg-white border-2 border-[#18181b] rounded-lg shadow-[2px_2px_0px_#18181b] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full PDF</span>
                </a>
                <a
                  href="/Kundan_Resume.pdf"
                  download="Kundan_DR_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#18181b] bg-[#22c55e] border-2 border-[#18181b] rounded-lg shadow-[2px_2px_0px_#18181b] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 text-[#18181b] bg-white border-2 border-[#18181b] rounded-lg shadow-[2px_2px_0px_#18181b] hover:bg-[#ef4444] hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* PDF Viewer with Fallback */}
            <div className="flex-grow w-full bg-stone-100 p-2 sm:p-4 overflow-hidden relative">
              <object
                data="/Kundan_Resume.pdf#view=FitH"
                type="application/pdf"
                className="w-full h-full rounded-xl border border-stone-300 shadow-inner bg-white"
              >
                <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-white rounded-xl">
                  <FileText className="w-12 h-12 text-[#ef4444] mb-3" />
                  <h3 className="font-display font-black text-lg text-[#18181b] mb-1">
                    Kundan_Resume.pdf
                  </h3>
                  <p className="text-xs text-stone-600 mb-4 max-w-sm">
                    Inline PDF preview is not supported directly inside this browser. You can view or download the full document below:
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="/Kundan_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-scrapbook-primary py-2 px-4 text-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open PDF in Tab</span>
                    </a>
                    <a
                      href="/Kundan_Resume.pdf"
                      download="Kundan_DR_Resume.pdf"
                      className="btn-scrapbook-secondary py-2 px-4 text-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              </object>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
