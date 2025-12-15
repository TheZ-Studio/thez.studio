import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Icosahedron, Float, Stars, Text, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

const TechCore = () => {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);

  // Interaction State
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    // Smooth animation speed based on hover state
    const speedMultiplier = hovered ? 2.5 : 1;

    if (outerRef.current) {
      outerRef.current.rotation.x += delta * 0.15 * speedMultiplier;
      outerRef.current.rotation.y += delta * 0.20 * speedMultiplier;

      // Breathing effect on scale when hovered
      const scaleTarget = hovered ? 2.6 : 2.4;
      outerRef.current.scale.lerp(new THREE.Vector3(scaleTarget, scaleTarget, scaleTarget), 0.1);
    }

    if (innerRef.current) {
      innerRef.current.rotation.x -= delta * 0.1 * speedMultiplier;
      innerRef.current.rotation.y -= delta * 0.1 * speedMultiplier;

      // Color shift intensity
      const material = innerRef.current.material as THREE.MeshStandardMaterial;
      const targetEmissive = hovered ? new THREE.Color("#00ffff") : new THREE.Color("#00e676");
      material.emissive.lerp(targetEmissive, 0.1);
    }
  });

  return (
    <group
      onPointerOver={() => { document.body.style.cursor = 'pointer'; setHover(true); }}
      onPointerOut={() => { document.body.style.cursor = 'auto'; setHover(false); }}
    >
      {/* The "Z" Brand Hologram 
          Using renderOrder and depthTest={false} to prevent clipping/flickering (Z-fighting) 
          with the surrounding spheres. It acts like a true UI overlay in 3D space.
      */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        <Text
          ref={textRef}
          font="https://fonts.gstatic.com/s/ibmplexsans/v19/zYX9KVElMYYaJe8bpLHnCwDKjQ7A8R8.woff"
          fontSize={1.5}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#00251f"
          characters="Z"
          renderOrder={10} // Forces text to render on top of the core
        >
          Z
          <meshBasicMaterial
            color={hovered ? "#e0f2f1" : "#00e676"}
            toneMapped={false}
            depthTest={false} // CRITICAL: Prevents the text from disappearing inside the mesh
          />
        </Text>
      </Float>

      {/* Outer Wireframe Shield - Reacts to Hover */}
      <Float speed={hovered ? 5 : 2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Icosahedron ref={outerRef} args={[1, 1]} scale={2.4}>
          <meshBasicMaterial
            color={hovered ? "#00ffff" : "#00e676"}
            wireframe
            transparent
            opacity={hovered ? 0.3 : 0.15}
            depthWrite={false} // Helps with transparency sorting
          />
        </Icosahedron>
      </Float>

      {/* Inner Dense Core */}
      <Float speed={4} rotationIntensity={1} floatIntensity={1}>
        <Icosahedron ref={innerRef} args={[1, 2]} scale={1.6}>
          <meshStandardMaterial
            color="#00382e"
            emissive="#00e676"
            emissiveIntensity={hovered ? 0.8 : 0.4}
            roughness={0.2}
            metalness={0.8}
            wireframe
          />
        </Icosahedron>
      </Float>

      {/* Glowing Energy Field */}
      <Sphere args={[1, 32, 32]} scale={0.8}>
        <meshBasicMaterial color={hovered ? "#00ffff" : "#00e676"} transparent opacity={0.05} depthWrite={false} />
      </Sphere>

      {/* Invisible Hit Box for easier hovering */}
      <Sphere args={[1, 8, 8]} scale={2.8} visible={false}>
        <meshBasicMaterial />
      </Sphere>
    </group>
  );
};

const TechScene: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[400px] touch-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00e676" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4db6ac" />

        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <TechCore />
        </PresentationControls>

        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <fog attach="fog" args={['#00251f', 5, 20]} />
      </Canvas>
    </div>
  );
};

export default TechScene;