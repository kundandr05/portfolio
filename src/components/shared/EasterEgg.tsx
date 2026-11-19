"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, PartyPopper } from 'lucide-react';

export default function EasterEgg() {
  const [showStamp, setShowStamp] = useState(false);

  useEffect(() => {
    let keyBuffer = '';

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing into an input or textarea
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }

      keyBuffer = (keyBuffer + e.key.toLowerCase()).slice(-4);
      if (keyBuffer === 'hire') {
        setShowStamp(true);
        const timer = setTimeout(() => {
          setShowStamp(false);
        }, 3600);
        return () => clearTimeout(timer);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {showStamp && (
        <div className="fixed inset-0 z-[10000] pointer-events-none flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 3, opacity: 0, rotate: -25 }}
            animate={{ scale: 1, opacity: 1, rotate: -8 }}
            exit={{ scale: 0.85, opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
            className="bg-[#faf7ee] border-4 border-[#ef4444] rounded-3xl p-6 sm:p-10 shadow-[12px_12px_0px_#18181b] flex flex-col items-center text-center max-w-md mx-auto pointer-events-auto"
          >
            {/* Stamp Ribbons & Details */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#ef4444] uppercase mb-2">
              <Sparkles className="w-4 h-4" />
              <span>OFFICIAL CANDIDACY MATCH</span>
              <Sparkles className="w-4 h-4" />
            </div>

            <h3 className="text-3xl sm:text-5xl font-display font-black text-[#ef4444] tracking-tight uppercase border-y-4 border-[#ef4444] py-2 px-4 my-2">
              YOU&apos;RE HIRED!
            </h3>

            <p className="text-stone-700 text-xs sm:text-sm font-handwriting text-base sm:text-lg mt-2">
              &ldquo;Great talent spotted! Let&apos;s build scalable backends &amp; autonomous AI together.&rdquo;
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-mono font-bold text-stone-600 bg-white border-2 border-[#18181b] px-3 py-1.5 rounded-xl shadow-[2px_2px_0px_#18181b]">
              <PartyPopper className="w-4 h-4 text-[#ef4444]" />
              <span>Email: kundandr05@gmail.com</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
