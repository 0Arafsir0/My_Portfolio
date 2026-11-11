import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";

function OrbitalMesh({ reduceMotion }) {
  const group = useRef();

  useFrame((state, delta) => {
    if (!group.current || reduceMotion) return;
    group.current.rotation.y += delta * 0.16;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.12;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.12, 1]} />
        <meshStandardMaterial color="#38bdf8" metalness={0.72} roughness={0.28} wireframe />
      </mesh>
      <mesh scale={0.72}>
        <icosahedronGeometry args={[1.12, 1]} />
        <meshStandardMaterial color="#6366f1" metalness={0.65} roughness={0.2} transparent opacity={0.22} />
      </mesh>
      <mesh position={[1.55, 0.15, 0]}>
        <sphereGeometry args={[0.075, 20, 20]} />
        <meshStandardMaterial color="#a5f3fc" emissive="#38bdf8" emissiveIntensity={1.1} />
      </mesh>
      <mesh position={[-1.45, -0.65, 0]}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshStandardMaterial color="#c4b5fd" emissive="#818cf8" emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
}

function HeroScene() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="h-full w-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4.4], fov: 44 }}
        dpr={[1, 1.25]}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      >
        <ambientLight intensity={1.2} />
        <pointLight position={[3, 3, 4]} intensity={2.2} color="#7dd3fc" />
        <pointLight position={[-3, -2, 2]} intensity={1.2} color="#818cf8" />
        <OrbitalMesh reduceMotion={Boolean(reduceMotion)} />
      </Canvas>
    </div>
  );
}

export default HeroScene;
