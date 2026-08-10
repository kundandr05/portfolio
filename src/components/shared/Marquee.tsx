"use client";

import { motion } from "framer-motion";

const Marquee = () => {
    const text = "AVAILABLE FOR INTERNSHIPS 2026 • AI & ML ENGINEER • BACKEND ARCHITECTURE • ";
    const repeatCount = 4; // Ensure enough text to cover the screen width seamlessly

    return (
        <div className="w-full overflow-hidden bg-black/50 border-y border-neon-cyan/20 py-3 relative z-20 backdrop-blur-md">
            <motion.div
                className="flex whitespace-nowrap text-neon-cyan/80 font-mono text-sm tracking-widest font-medium"
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
