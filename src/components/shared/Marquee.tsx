"use client";

import { motion } from "framer-motion";

const Marquee = () => {
    const text = "AVAILABLE FOR INTERNSHIPS 2026 • AI & ML ENGINEER • BACKEND ARCHITECTURE • ";
    const repeatCount = 4; // Ensure enough text to cover the screen width seamlessly

    return (
        <div className="w-full overflow-hidden bg-white/70 border-y border-slate-200/80 py-3.5 relative z-20 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <motion.div
                className="flex whitespace-nowrap text-blue-600 font-mono text-xs md:text-sm tracking-widest font-semibold"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20, // Adjust speed here
                }}
            >
                {/* We render two identical blocks to allow a seamless infinite loop */}
                <span className="flex-shrink-0 px-4">
                    {text.repeat(repeatCount)}
                </span>
                <span className="flex-shrink-0 px-4">
                    {text.repeat(repeatCount)}
                </span>
            </motion.div>
        </div>
    );
};

export default Marquee;
