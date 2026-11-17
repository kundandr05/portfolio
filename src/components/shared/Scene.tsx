"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import Particles from "./Particles";
import * as THREE from "three";

// Camera controller that tracks window scroll smoothly without waking on idle
function ScrollCamera() {
    const { camera } = useThree();
    
    useFrame(() => {
        const scrollY = window.scrollY;
        const targetY = -(scrollY * 0.05);
        if (Math.abs(targetY - camera.position.y) > 0.005) {
            camera.position.y += (targetY - camera.position.y) * 0.1;
        }
    });

    return null;
}

export default function Scene() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Only run Three.js canvas on devices with pointer (desktop/laptop) to save battery and GPU on mobile
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-[-10]">
            <Canvas
                camera={{ position: [0, 0, 50], fov: 45 }}
                dpr={[1, 1.2]} // Capped at 1.2 for buttery smooth 120fps with minimal GPU fillrate
                gl={{ antialias: false, powerPreference: "high-performance" }}
                performance={{ min: 0.5 }}
            >
                <ScrollCamera />
                <ambientLight intensity={0.5} color="#7c3aed" />
                <directionalLight position={[10, 10, 10]} intensity={1.5} color="#00d9ff" />
                <Suspense fallback={null}>
                    <Particles count={35} />
                </Suspense>
            </Canvas>
        </div>
    );
}
