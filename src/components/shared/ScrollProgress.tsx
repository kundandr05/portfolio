'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-2 z-50 pointer-events-none bg-stone-200/50">
      <motion.div
        className="h-full bg-[#fde047] origin-left border-b-2 border-r-2 border-[#18181b] relative"
        style={{ scaleX }}
      >
        {/* Tiny pencil/marker tip */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-3 bg-[#ef4444] border-l border-[#18181b]" />
      </motion.div>
    </div>
  );
}
