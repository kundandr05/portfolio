"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function AuroraBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="fixed inset-0 bg-black -z-50" />;

    const blobVariants: Variants = {
        animate1: {
            x: ["0%", "20%", "-20%", "0%"],
            y: ["0%", "-20%", "20%", "0%"],
            scale: [1, 1.2, 0.8, 1],
            transition: { duration: 20, repeat: Infinity, ease: "linear" }
        },
        animate2: {
            x: ["0%", "-30%", "10%", "0%"],
            y: ["0%", "20%", "-20%", "0%"],
            scale: [1, 0.9, 1.3, 1],
            transition: { duration: 25, repeat: Infinity, ease: "linear" }
        },
        animate3: {
            x: ["0%", "30%", "-10%", "0%"],
            y: ["0%", "10%", "30%", "0%"],
            scale: [1, 1.1, 0.9, 1],
            transition: { duration: 22, repeat: Infinity, ease: "linear" }
        },
        animate4: {
            x: ["0%", "-15%", "25%", "0%"],
            y: ["0%", "30%", "-15%", "0%"],
            scale: [1, 1.2, 0.8, 1],
            transition: { duration: 28, repeat: Infinity, ease: "linear" }
        }
    };

    return (
        <div className="fixed inset-0 overflow-hidden bg-black -z-50 pointer-events-none">
            {/* Base gradient layers */}
            <div className="absolute inset-0 bg-black mix-blend-multiply z-10" />

            {/* Glowing Blobs Container */}
            <div className="absolute inset-0 opacity-40 mix-blend-screen filter blur-[100px] md:blur-[140px] transform-gpu">
                
                {/* Electric Blue Blob */}
                <motion.div
                    variants={blobVariants}
                    animate="animate1"
                    className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] rounded-full bg-blue-600/50"
                />
                
                {/* Neon Magenta Blob */}
                <motion.div
                    variants={blobVariants}
                    animate="animate2"
                    className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vh] rounded-full bg-fuchsia-600/40"
                />

                {/* Cyan Blob */}
                <motion.div
                    variants={blobVariants}
                    animate="animate3"
                    className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[50vh] rounded-full bg-cyan-500/40"
                />

                {/* Emerald/Neon Green Blob */}
                <motion.div
                    variants={blobVariants}
                    animate="animate4"
                    className="absolute top-[40%] left-[40%] w-[40vw] h-[40vh] rounded-full bg-emerald-500/30"
                />
            </div>

            {/* Animated Cyberpunk Grid Overlay */}
            <div 
                className="absolute inset-0 z-15 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
                }}
            />

            {/* Noise Overlay Texture (Inline SVG) */}
            <div 
                className="absolute inset-0 z-20 opacity-[0.03] mix-blend-overlay pointer-events-none" 
                style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, 
                    backgroundRepeat: 'repeat' 
                }} 
            />
        </div>
    );
}
