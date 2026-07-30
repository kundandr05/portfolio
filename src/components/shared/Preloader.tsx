"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate minimum loading time for the premium entrance effect
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1800); // 1.8 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Premium custom cubic-bezier
                    className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center pointer-events-none"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <Terminal className="w-12 h-12 text-neon-cyan animate-pulse" />
                            <span className="text-3xl font-bold font-display tracking-wider text-white">
                                KUNDAN DR
                            </span>
                        </div>
                        
                        {/* Loading Progress Bar */}
                        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="h-full bg-neon-cyan"
                            />
                        </div>
                        <motion.span 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-gray-400 text-sm mt-4 tracking-widest font-mono"
                        >
                            INITIALIZING SYSTEM...
                        </motion.span>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
