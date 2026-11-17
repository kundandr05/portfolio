"use client";

import { useEffect, useState } from "react";

export default function AuroraBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="fixed inset-0 bg-background -z-50" />;

    return (
        <div className="fixed inset-0 overflow-hidden bg-[#06070d] -z-50 pointer-events-none">
            {/* GPU-Accelerated Static & Pulsing Radial Aurora Orbs (Zero blur-lag, 120fps) */}
            <div 
                className="absolute inset-0 opacity-60"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 10% 15%, rgba(124, 58, 237, 0.35) 0%, transparent 50%),
                        radial-gradient(circle at 85% 25%, rgba(255, 0, 110, 0.25) 0%, transparent 55%),
                        radial-gradient(circle at 45% 80%, rgba(0, 217, 255, 0.25) 0%, transparent 60%),
                        radial-gradient(circle at 75% 85%, rgba(124, 58, 237, 0.2) 0%, transparent 50%)
                    `,
                }}
            />

            {/* Slow Ambient Breathing Layer (Opacity only = 0ms repaint) */}
            <div 
                className="absolute inset-0 opacity-40 animate-pulse duration-[10000ms]"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 35% 45%, rgba(0, 217, 255, 0.2) 0%, transparent 45%),
                        radial-gradient(circle at 65% 60%, rgba(255, 0, 110, 0.15) 0%, transparent 50%)
                    `,
                }}
            />

            {/* Subtle Cyberpunk Grid Overlay */}
            <div 
                className="absolute inset-0 z-10 pointer-events-none opacity-15"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '48px 48px',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)'
                }}
            />
        </div>
    );
}
