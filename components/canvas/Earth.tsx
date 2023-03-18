'use client';

// Dependencies
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

// Component
import CanvasLoader from './Loader';

// Variants
import { slideIn } from '@/lib/motion';

// HOC
import { SectionWrapper } from '@/hoc';

function Earth() {
  const earth = useGLTF('./planet/scene.gltf');
  return (
    <primitive object={earth.scene} scale={3} position-y={0} rotation-y={0} />
  );
}

function EarthCanvas() {
  return (
    <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className="h-[350px]"
    >
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}

export default SectionWrapper(EarthCanvas, 'earthCanvas');
