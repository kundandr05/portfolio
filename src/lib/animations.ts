export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.5 }
};

export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const glowHover = {
    hover: {
        scale: 1.05,
        boxShadow: "0 0 20px rgba(0, 243, 255, 0.5)",
        transition: { duration: 0.3 }
    }
};
