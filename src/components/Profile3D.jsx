import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useVideoTexture, Float } from '@react-three/drei';
import * as THREE from 'three';

// 3D Video Mesh Component
const StandaloneVideo3D = ({ videoSrc }) => {
  const meshRef = useRef();

  // Load and play video as a Three.js Texture
  const texture = useVideoTexture(videoSrc, {
    unsuspended: true,
    muted: true, // Required for browser autoplay
    loop: true,
    start: true,
    crossOrigin: 'Anonymous',
  });

  texture.colorSpace = THREE.SRGBColorSpace;

  // Subtle floating sway animation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = Math.sin(t / 2) * 0.15;
    meshRef.current.rotation.x = Math.cos(t / 2) * 0.08;
  });

  return (
    <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef} position={[0, -0.2, 0]}>
        <planeGeometry args={[3.6, 4.8]} />
        <meshBasicMaterial
          map={texture}
          transparent={true}
          alphaTest={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
};

const Profile3DCanvas = ({ videoSrc }) => {
  return (
    <div className="w-full h-[500px] sm:h-[600px] relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={2} />

        <Suspense fallback={null}>
          <StandaloneVideo3D videoSrc={videoSrc} />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 3}
          rotateSpeed={0.8}
        />
      </Canvas>

     
    </div>
  );
};

export default Profile3DCanvas;