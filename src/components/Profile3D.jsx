import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useVideoTexture, Float } from '@react-three/drei';
import * as THREE from 'three';

// 3D Video Mesh Component with automatic floating sway
const StandaloneVideo3D = ({ videoSrc }) => {
  const meshRef = useRef();

  const texture = useVideoTexture(videoSrc, {
    unsuspended: true,
    muted: true,
    loop: true,
    start: true,
    crossOrigin: 'Anonymous',
  });

  texture.colorSpace = THREE.SRGBColorSpace;

  // Gentle autonomous sway (no touch/drag required)
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = Math.sin(t / 2) * 0.1;
    meshRef.current.rotation.x = Math.cos(t / 2) * 0.05;
  });

  return (
    <Float speed={2} rotationIntensity={0.15} floatIntensity={0.4}>
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
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[580px] relative pointer-events-none select-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight intensity={2} />

        <Suspense fallback={null}>
          <StandaloneVideo3D videoSrc={videoSrc} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Profile3DCanvas;