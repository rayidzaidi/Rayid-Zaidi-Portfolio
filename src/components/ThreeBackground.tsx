'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Particles({ count = 500 }) {
    const mesh = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            // Initialize mx/my to 0
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;

        // Mouse interaction
        const { x, y } = state.pointer;

        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle;

            // Update time
            t = particle.t += speed / 2;

            // Basic movement
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);

            // Trail effect: Lerp towards mouse with varying "drag" based on index
            // Lower index = faster follow (head of trail), Higher index = slower (tail)
            const drag = 0.05 + (i / count) * 0.05;

            particle.mx += (x * 30 - particle.mx) * drag;
            particle.my += (y * 30 - particle.my) * drag;

            // Swarm behavior: Follow mouse but keep individual offsets
            const spread = 0.2; // How spread out the swarm is

            dummy.position.set(
                (particle.mx / 10) * a + xFactor * spread + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) * b + yFactor * spread + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                (particle.my / 10) * b + zFactor * spread + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            );

            // Scale - Pulse size
            const scale = Math.max(0.2, (Math.cos(t) * 0.5 + 0.5) * 0.8);
            dummy.scale.set(scale, scale, scale);

            // Rotation
            dummy.rotation.set(s * 5, s * 5, s * 5);

            dummy.updateMatrix();
            mesh.current!.setMatrixAt(i, dummy.matrix);
        });

        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <dodecahedronGeometry args={[0.3, 0]} />
            <meshPhongMaterial color="#ffffff" transparent opacity={0.6} emissive="#aaaaaa" emissiveIntensity={0.2} />
        </instancedMesh>
    );
}

export default function ThreeBackground() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-80">
            <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Particles count={400} />
            </Canvas>
        </div>
    );
}
