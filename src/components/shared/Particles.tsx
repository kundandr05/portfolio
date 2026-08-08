"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticlesProps {
    count?: number;
}

export default function Particles({ count = 200 }: ParticlesProps) {
    const pointsRef = useRef<THREE.Points>(null);

    // Create random positions and colors for particles
    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        
        const colorPalette = [
            new THREE.Color("#00d9ff"), // Cyan
            new THREE.Color("#ff006e"), // Magenta
            new THREE.Color("#7c3aed")  // Purple
        ];

        for (let i = 0; i < count; i++) {
            // Spread particles over a large volume
            positions[i * 3] = (Math.random() - 0.5) * 100;     // x
            positions[i * 3 + 1] = (Math.random() - 0.5) * 100; // y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 50;  // z (depth)

            // Assign random color from palette
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }

        return [positions, colors];
    }, [count]);

    // Animate particles (slower, more professional)
    useFrame((state, delta) => {
        if (pointsRef.current) {
            // Very slow global rotation
            pointsRef.current.rotation.y += delta * 0.01;
            pointsRef.current.rotation.x += delta * 0.005;

            // Barely perceptible drift
            pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.5;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    args={[colors, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.15}
                vertexColors
                transparent
                opacity={0.3}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}
