'use client';

import React, { useRef, useState, useEffect, useMemo, useSyncExternalStore } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Ring, Stars } from '@react-three/drei';
import * as THREE from 'three';
import WebGLFallback from './WebGLFallback';

// 3D Core Sphere with Optimized Geometry & Material Distortion
function DigitalCoreSphere({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerRingRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mousePosition.x * 0.5, 0.04);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mousePosition.y * 0.5, 0.04);
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z -= delta * 0.25;
    }
  });

  return (
    <group>
      {/* Primary Central Core Sphere - 32x32 Geometry for 75% GPU Load Reduction */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1}>
        <Sphere ref={meshRef} args={[1.5, 32, 32]} scale={1.15}>
          <MeshDistortMaterial
            color="#2563EB"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.2}
            metalness={0.7}
            emissive="#1E40AF"
            emissiveIntensity={0.4}
          />
        </Sphere>
      </Float>

      {/* Wireframe Gyroscope Rings */}
      <Ring ref={outerRingRef} args={[2.2, 2.24, 32]} rotation={[Math.PI / 3, 0, 0]}>
        <meshStandardMaterial color="#06B6D4" wireframe emissive="#06B6D4" emissiveIntensity={0.7} />
      </Ring>

      <Ring args={[2.7, 2.72, 32]} rotation={[0, Math.PI / 4, 0]}>
        <meshStandardMaterial color="#8B5CF6" wireframe emissive="#8B5CF6" emissiveIntensity={0.5} />
      </Ring>
    </group>
  );
}

// Connected Satellite Nodes
function SatelliteNodes() {
  const groupRef = useRef<THREE.Group>(null!);

  const nodes = useMemo(() => [
    { pos: [2.3, 1.1, 0] as [number, number, number], color: '#3B82F6' },
    { pos: [-2.2, -0.9, 0.4] as [number, number, number], color: '#06B6D4' },
    { pos: [1.6, -1.8, -0.4] as [number, number, number], color: '#8B5CF6' },
    { pos: [-1.8, 1.6, -0.6] as [number, number, number], color: '#38BDF8' },
  ], []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <group key={i} position={node.pos}>
          <Sphere args={[0.18, 16, 16]}>
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={1}
              roughness={0.2}
            />
          </Sphere>
        </group>
      ))}
    </group>
  );
}

function subscribeToEnvironment(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('resize', callback);
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', callback);
  return () => {
    window.removeEventListener('resize', callback);
    mediaQuery.removeEventListener('change', callback);
  };
}

function checkWebGLSupport(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    const hasWebGL = !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    return hasWebGL && !isReducedMotion && !isMobile;
  } catch {
    return false;
  }
}

export default function HeroCoreCanvas() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isWebGLSupported = useSyncExternalStore(
    subscribeToEnvironment,
    checkWebGLSupport,
    () => false
  );

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const x = (e.clientX / window.innerWidth) * 2 - 1;
          const y = -(e.clientY / window.innerHeight) * 2 + 1;
          setMousePosition({ x, y });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isWebGLSupported) {
    return <WebGLFallback />;
  }

  return (
    <div className="relative w-full h-95 sm:h-115 lg:h-130 rounded-3xl overflow-hidden border border-white/10 bg-linear-to-b from-[#0B0B14] via-[#08080C] to-[#050508] shadow-2xl">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/20 blur-[90px] rounded-full pointer-events-none" />

      {/* Hardware Accelerated Canvas with DPR Capping */}
      {isWebGLSupported && (
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} color="#93C5FD" />
          <pointLight position={[-10, -10, -5]} intensity={0.8} color="#8B5CF6" />
          
          <Stars radius={80} depth={40} count={400} factor={3} saturation={0} fade speed={0.8} />
          <DigitalCoreSphere mousePosition={mousePosition} />
          <SatelliteNodes />
        </Canvas>
      )}

      {/* Subtle Overlay Badge */}
      <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[10px] font-mono text-slate-400">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>NAVYORA DIGITAL CORE</span>
      </div>
    </div>
  );
}
