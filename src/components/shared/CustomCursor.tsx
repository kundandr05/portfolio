"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);

    // Motion values for ultra-smooth tracking
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring physics configuration
    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            if (!target) return;
            const isClickable = Boolean(
                target.closest('a, button, [role="button"], input, select, textarea, [data-clickable]')
            );
            setIsHovering(isClickable);
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
        return null;
    }

    return (
        <motion.div
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: "-50%",
                translateY: "-50%"
            }}
            className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center will-change-transform"
            animate={{
                height: isHovering ? 56 : 32,
                width: isHovering ? 56 : 32,
                backgroundColor: isHovering ? "rgba(37, 99, 235, 0.12)" : "transparent",
                border: isHovering ? "1.5px solid rgba(37, 99, 235, 0.8)" : "1.5px solid rgba(37, 99, 235, 0.35)",
                boxShadow: isHovering 
                    ? "0 0 25px rgba(37, 99, 235, 0.35), inset 0 0 15px rgba(37, 99, 235, 0.15)" 
                    : "0 0 8px rgba(37, 99, 235, 0.15)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Inner tiny dot */}
            <motion.div 
                animate={{ opacity: isHovering ? 0 : 1, scale: isHovering ? 0 : 1 }}
                className="w-1.5 h-1.5 bg-blue-600 rounded-full shadow-[0_0_6px_rgba(37,99,235,0.8)]"
            />
        </motion.div>
    );
}
