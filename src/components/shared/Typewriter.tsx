"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
    words: string[];
    loop?: boolean;
    typingSpeed?: number;
    deletingSpeed?: number;
    delayBetweenWords?: number;
}

export default function Typewriter({
    words,
    loop = true,
    typingSpeed = 100,
    deletingSpeed = 50,
    delayBetweenWords = 2000
}: TypewriterProps) {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex % words.length];
            
            if (isDeleting) {
                setText(currentWord.substring(0, text.length - 1));
                if (text.length === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => prev + 1);
                }
            } else {
                setText(currentWord.substring(0, text.length + 1));
                if (text.length === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), delayBetweenWords);
                    return;
                }
            }
        };

        const timer = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

    return (
        <span className="inline-block relative">
            {text}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[3px] h-[1em] bg-neon-cyan ml-1 align-middle"
            />
        </span>
    );
}
