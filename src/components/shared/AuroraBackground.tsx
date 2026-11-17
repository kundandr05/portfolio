"use client";

import { useEffect, useState } from "react";

export default function AuroraBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="fixed inset-0 bg-[#f8fafc] -z-50" />;

    return (
        <div className="fixed inset-0 overflow-hidden bg-[#f8fafc] -z-50 pointer-events-none">
            {/* Luminous Stripe Prism Pastel Gradient Mesh */}
            <div 
                className="absolute inset-0 opacity-80"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 12% 15%, rgba(59, 130, 246, 0.20) 0%, transparent 45%),
                        radial-gradient(circle at 88% 20%, rgba(244, 63, 94, 0.16) 0%, transparent 48%),
                        radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.14) 0%, transparent 52%),
                        radial-gradient(circle at 20% 85%, rgba(245, 158, 11, 0.14) 0%, transparent 46%),
                        radial-gradient(circle at 82% 82%, rgba(37, 99, 235, 0.16) 0%, transparent 50%)
                    `,
                }}
            />

            {/* Ambient Breathing Layer for dynamic, radiant glow */}
            <div 
                className="absolute inset-0 opacity-50 animate-pulse duration-[8000ms]"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 35% 30%, rgba(37, 99, 235, 0.12) 0%, transparent 45%),
                        radial-gradient(circle at 65% 70%, rgba(236, 72, 153, 0.12) 0%, transparent 48%)
                    `,
                }}
            />

            {/* Modern Clean Architectural Grid */}
            <div 
                className="absolute inset-0 z-10 pointer-events-none opacity-35"
                style={{
                    backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.04) 1px, transparent 1px)`,
                    backgroundSize: '48px 48px',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 88%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 88%)'
                }}
            />
        </div>
    );
}
