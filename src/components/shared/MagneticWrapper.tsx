"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MagneticWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export default function MagneticWrapper({ children, className = "" }: MagneticWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);
    
    // Smooth motion values for ultra-premium feel
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    // 3D Parallax Tilt based on mouse position
    const rotateX = useTransform(ySpring, [-50, 50], [10, -10]);
    const rotateY = useTransform(xSpring, [-50, 50], [-10, 10]);

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        
        // Magnet strength (how far it pulls)
        x.set(middleX * 0.3);
        y.set(middleY * 0.3);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            style={{ x: xSpring, y: ySpring, rotateX, rotateY }}
            className={`inline-block perspective-1000 will-change-transform ${className}`}
        >
            {children}
        </motion.div>
    );
}
