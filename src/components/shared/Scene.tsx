"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import Particles from "./Particles";
import * as THREE from "three";

// Camera controller that tracks window scroll
function ScrollCamera() {
    const { camera } = useThree();
    
    useFrame(() => {
        // Calculate a target Y position based on scroll.
        // As you scroll down, the camera moves down (so objects appear to move up).
        // 0.05 is a multiplier for scroll speed in 3D space.
        const scrollY = window.scrollY;
        const targetY = -(scrollY * 0.05);

        // Interpolate current camera Y towards target Y for smoothness
        camera.position.y += (targetY - camera.position.y) * 0.1;
    });

    return null;
}

export default function Scene() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-[-10]">
            <Canvas
                camera={{ position: [0, 0, 50], fov: 45 }}
                dpr={[1, 2]} // Support high-DPI screens but cap at 2 for performance
            >
                <ScrollCamera />
                
                {/* Lighting Setup */}
                <ambientLight intensity={0.5} color="#7c3aed" />
                <directionalLight position={[10, 10, 10]} intensity={1.5} color="#00d9ff" />
                
                <Suspense fallback={null}>
                    <Particles count={40} />
                </Suspense>
            </Canvas>
        </div>
    );
}
