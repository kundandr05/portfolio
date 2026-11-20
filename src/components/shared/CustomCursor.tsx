'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function subscribeFinePointer(callback: () => void) {
  const mql = window.matchMedia('(pointer: fine)');
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

function getSnapshotFinePointer() {
  return window.matchMedia('(pointer: fine)').matches;
}

function getServerSnapshotFinePointer() {
  return false;
}

export default function CustomCursor() {
  const router = useRouter();
  const isDesktop = useSyncExternalStore(
    subscribeFinePointer,
    getSnapshotFinePointer,
    getServerSnapshotFinePointer
  );
  const [cursorText, setCursorText] = useState('');
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 24, stiffness: 450, mass: 0.35 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (!isDesktop) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectTarget = target.closest('[data-cursor="view"], [data-slug], .project-card, a[href*="/projects/"]') as HTMLElement | null;
      if (projectTarget) {
        setIsHovered(true);
        setCursorText('VIEW ↗');
        
        // Extract project slug
        let slug = projectTarget.getAttribute('data-slug');
        if (!slug) {
          const link = projectTarget.closest('a[href*="/projects/"]') || projectTarget.querySelector('a[href*="/projects/"]');
          const href = link?.getAttribute('href');
          if (href) {
            const match = href.match(/\/projects\/([^/?#]+)/);
            if (match) slug = match[1];
          }
        }
        if (slug) setActiveSlug(slug);
        return;
      }

      const buttonTarget = target.closest('button, a, input, [role="button"]');
      if (buttonTarget) {
        setIsHovered(true);
        setCursorText('');
        setActiveSlug(null);
        return;
      }

      setIsHovered(false);
      setCursorText('');
      setActiveSlug(null);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleGlobalClick = (e: MouseEvent) => {
      if (!activeSlug) return;
      const target = e.target as HTMLElement | null;
      // Do not intercept if user specifically clicked an external link like Live Demo or GitHub
      if (target?.closest('a[target="_blank"]') || target?.closest('button')) {
        return;
      }
      router.push(`/projects/${activeSlug}`);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleGlobalClick);
    };
  }, [cursorX, cursorY, isDesktop, activeSlug, router]);

  if (!isDesktop || !isVisible) return null;

  return (
    <motion.div
      onClick={() => {
        if (activeSlug) {
          router.push(`/projects/${activeSlug}`);
        }
      }}
      className={`fixed top-0 left-0 z-50 flex items-center justify-center font-bold text-xs ${
        cursorText ? 'pointer-events-auto cursor-pointer' : 'pointer-events-none'
      }`}
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      title={activeSlug ? 'Click to view case study' : undefined}
    >
      <motion.div
        animate={{
          width: cursorText ? 68 : isHovered ? 40 : 18,
          height: cursorText ? 68 : isHovered ? 40 : 18,
          backgroundColor: cursorText ? '#fde047' : isHovered ? '#ef4444' : '#18181b',
          borderColor: '#18181b',
          rotate: cursorText ? -6 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: 'spring', damping: 18, stiffness: 350 }}
        className="rounded-full border-2 border-[#18181b] shadow-[3px_3px_0px_#18181b] flex items-center justify-center text-center overflow-hidden select-none hover:scale-110 active:scale-95 transition-transform"
      >
        {cursorText && (
          <span className="text-[#18181b] font-black text-[12px] tracking-tight leading-none select-none">
            {cursorText}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
