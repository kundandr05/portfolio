'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function subscribeTouch(callback: () => void) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

function getSnapshotTouch() {
  return window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
}

function getServerSnapshotTouch() {
  return true;
}

export default function CustomCursor() {
  const isTouchDevice = useSyncExternalStore(subscribeTouch, getSnapshotTouch, getServerSnapshotTouch);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectTarget = target.closest('[data-cursor="view"], .project-card, a[href*="/projects/"]');
      if (projectTarget) {
        setIsHovered(true);
        setCursorText('VIEW ↗');
        return;
      }

      const buttonTarget = target.closest('button, a, input, [role="button"]');
      if (buttonTarget) {
        setIsHovered(true);
        setCursorText('');
        return;
      }

      setIsHovered(false);
      setCursorText('');
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center font-bold text-xs"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        animate={{
          width: cursorText ? 64 : isHovered ? 36 : 18,
          height: cursorText ? 64 : isHovered ? 36 : 18,
          backgroundColor: cursorText ? '#fde047' : isHovered ? '#ef4444' : '#18181b',
          borderColor: '#18181b',
          rotate: cursorText ? -6 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="rounded-full border-2 border-[#18181b] shadow-[2px_2px_0px_#18181b] flex items-center justify-center text-center overflow-hidden"
      >
        {cursorText && (
          <span className="text-[#18181b] font-black text-[11px] tracking-tight leading-none">
            {cursorText}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
