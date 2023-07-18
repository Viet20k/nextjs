"use client";

import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";

function Box(props: ThreeElements["mesh"]) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default function Render() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[1, 1, 1]} />
      <Box position={[0, 0, 0]} />
      <Box position={[3, 0, 0]} />
    </Canvas>
  );
}
