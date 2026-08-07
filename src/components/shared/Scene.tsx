"use client";

import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom, DepthOfField, ChromaticAberration, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Suspense, useEffect, useState } from "react";
import CyberCore from "./CyberCore";
import Particles from "./Particles";
import { usePathname } from "next/navigation";

export default function Scene() {
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // We only want the heavy cyber-core on the home page for now to save performance,
    // but particles can persist globally.
    const isHome = pathname === "/";

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-[-10]">
            <Canvas
                camera={{ position: [0, 0, 50], fov: 45 }}
                dpr={[1, 2]} // Support high-DPI screens but cap at 2 for performance
                gl={{ antialias: false, alpha: true }} // Disable antialias since we use postprocessing
            >
                {/* Lighting Setup */}
                <ambientLight intensity={0.2} color="#7c3aed" />
                <directionalLight position={[10, 10, 10]} intensity={1.5} color="#00d9ff" />
                <pointLight position={[-10, -10, -10]} intensity={2} color="#ff006e" />
                
                <Suspense fallback={null}>
                    {isHome && <CyberCore />}
                    <Particles count={200} />
                </Suspense>

                {/* Post Processing Effects */}
                <EffectComposer>
                    <Bloom 
                        luminanceThreshold={0.5} 
                        mipmapBlur 
                        intensity={1.5} 
                    />
                    <DepthOfField 
                        focusDistance={0} 
                        focalLength={0.02} 
                        bokehScale={2} 
                        height={480} 
                    />
                    <ChromaticAberration 
                        blendFunction={BlendFunction.NORMAL} 
                        offset={[0.001, 0.001] as any}
                    />
                    <Noise 
                        premultiply 
                        blendFunction={BlendFunction.OVERLAY} 
                        opacity={0.15} 
                    />
                </EffectComposer>
            </Canvas>
        </div>
    );
}
