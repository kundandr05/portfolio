"use client";

import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function CyberCore() {
    const groupRef = useRef<THREE.Group>(null);
    const icosahedronRef = useRef<THREE.Mesh>(null);
    const torusRef = useRef<THREE.Mesh>(null);

    // Track mouse position for subtle camera parallax/rotation
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useFrame((state) => {
        // Continuous rotation
        if (icosahedronRef.current) {
            icosahedronRef.current.rotation.x += 0.005;
            icosahedronRef.current.rotation.y += 0.008;
        }
        if (torusRef.current) {
            torusRef.current.rotation.x -= 0.003;
            torusRef.current.rotation.y -= 0.005;
            torusRef.current.rotation.z += 0.002;
        }

        // Smoothly interpolate group rotation towards mouse position
        if (groupRef.current) {
            const targetX = (state.pointer.x * Math.PI) / 4;
            const targetY = (state.pointer.y * Math.PI) / 4;
            
            groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05;
            groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
        }
    });

    const { viewport } = useThree();
    const isMobile = viewport.width < 15; // Rough heuristic for mobile given fov 45 and z 50
    const positionX = isMobile ? 0 : viewport.width / 5;

    return (
        <Float
            speed={2} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
            <group ref={groupRef} position={[positionX, isMobile ? 5 : 0, 0]}>
                {/* Glowing Core (Icosahedron) */}
                <mesh ref={icosahedronRef} scale={1.5}>
                    <icosahedronGeometry args={[2, 0]} />
                    <meshPhysicalMaterial 
                        color="#00d9ff" 
                        emissive="#00d9ff"
                        emissiveIntensity={1.5}
                        wireframe 
                        transparent 
                        opacity={0.8}
                    />
                </mesh>

                {/* Outer Energy Field (Torus Knot) */}
                <mesh ref={torusRef} scale={2}>
                    <torusKnotGeometry args={[1.5, 0.4, 128, 16]} />
                    <MeshDistortMaterial
                        color="#ff006e"
                        emissive="#7c3aed"
                        emissiveIntensity={0.5}
                        distort={0.4}
                        speed={2}
                        roughness={0.2}
                        metalness={0.8}
                        transparent
                        opacity={0.6}
                        wireframe
                    />
                </mesh>
            </group>
        </Float>
    );
}
