import React, { Suspense, useRef, memo, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, useGLTF, ContactShadows, Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';


const Model = memo(({ isRotating, ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/monitor.glb');

  return (
    <group ref={group} {...props} dispose={null} scale={1}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cable.geometry}
        material={materials['plastic-black']}
        position={[-0.208, -0.231, 0.012]}
        scale={0.052}>
        <group position={[0.652, 2.813, -0.919]} scale={19.214}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={materials['plastic-black']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_1.geometry}
            material={materials.metal}
          />
        </group>
        <group position={[-0.094, -1.162, 1.926]} rotation={[0, 0, -0.075]} scale={19.214}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={materials['plastic-black']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_1.geometry}
            material={materials.metal}
          />
        </group>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['cable-unplugged'].geometry}
        material={materials['plastic-black']}
        position={[-0.233, -0.085, 0.007]}
        scale={0.052}>
        <group position={[0.342, -3.964, 2.857]} rotation={[0, 0, -0.075]} scale={19.214}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007.geometry}
            material={materials['plastic-black']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007_1.geometry}
            material={materials.metal}
          />
        </group>
        <group position={[3.555, -2.161, 2.871]} rotation={[0, 1.061, -0.075]} scale={27.717}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials['plastic-black']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_1.geometry}
            material={materials.metal}
          />
        </group>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['cable-round'].geometry}
        material={materials['plastic-black']}
        position={[-0.233, -0.085, 0.002]}
        scale={0.052}>
        <group position={[4.486, 1.636, -0.038]} scale={19.214}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials['plastic-black']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_2.geometry}
            material={materials['plastic-red']}
          />
        </group>
        <group position={[0.215, -4.419, 3.053]} rotation={[0, 0, -1.658]} scale={19.214}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials['plastic-black']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_1.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_2.geometry}
            material={materials['plastic-red']}
          />
        </group>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['plastic-black']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_1.geometry}
        material={materials.metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['plastic-black']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_1.geometry}
        material={materials.metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['monitor-secondary']}
      />
      <group
        position={[0, -0.01, 0]}
        rotation-x={Math.PI / 180 * 0}
        rotation-y={Math.PI / 180 * 0}
        rotation-z={Math.PI / 180 * 5}
        scale={1.1}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.screen}
        >
          {/* Drei's HTML component can "hide behind" canvas geometry */}
          <Html
            className="content"
            rotation-x={Math.PI / 180 * 0}
            rotation-y={Math.PI / 180 * 90}
            rotation-z={Math.PI / 180 * 0}
            position={[0.135, 0, 0]}
            scale={0.011}
            transform
            occlude="blending"
          >
            <iframe
              src="https://3d-monitor-meiv.vercel.app/"
              title="OS"
            >
            </iframe>
          </Html>
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_2.geometry}
        material={materials['monitor-primary']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_3.geometry}
        material={materials.metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['mesh-patern003'].geometry}
        material={materials['mesh-patern']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['mesh-patern004'].geometry}
        material={materials['mesh-patern']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['mesh-patern005'].geometry}
        material={materials['mesh-patern']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['mesh-patern010'].geometry}
        material={materials['mesh-patern']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['monitor-stand'].geometry}
        material={nodes['monitor-stand'].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['monitor-primary']}
      />
      <mesh castShadow receiveShadow geometry={nodes.Cube_1.geometry} material={materials.metal} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_2.geometry}
        material={materials['monitor-secondary']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['mesh-patern001'].geometry}
        material={materials['mesh-patern']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['mesh-patern002'].geometry}
        material={materials['mesh-patern']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['mesh-patern'].geometry}
        material={materials['mesh-patern']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['monitor-primary']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004_1.geometry}
        material={materials.metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials['monitor-primary']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_1.geometry}
        material={materials.metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['power-decal'].geometry}
        material={materials['power-decal']}
      />
    </group>
  );
});

function Camera({ isRotating, orbitEnabled }) {
  const { camera } = useThree();
  const clock = useRef(new THREE.Clock());
  const lastElapsedTime = useRef(0);

  const initialRadius = 1.5; // Initial radius of circular path
  const targetRadius = 0.55; // Target radius of circular path
  const rotationSpeed = 5; // Rotation speed
  const transitionSpeed = 0.06; // Transition speed for rotation and radius
  const initialCenter = useMemo(() => [0, 0, 0], []); // Initial center point of rotation
  const targetCenter = useMemo(() => [0, .016, 0], []); // Target center point of rotation
  const targetRotation = Math.PI; // Target rotation angle when not rotating

  const [state, setState] = useState({
    rotation: targetRotation,
    radius: initialRadius,
    center: initialCenter
  });

  useFrame(() => {
    if (orbitEnabled) return;

    const elapsedTime = clock.current.getElapsedTime();
    const deltaTime = elapsedTime - lastElapsedTime.current;
    lastElapsedTime.current = elapsedTime;

    // Calculate rotation
    const targetRotationValue = isRotating ? state.rotation + deltaTime * rotationSpeed : targetRotation;
    const newRotation = state.rotation + (targetRotationValue - state.rotation) * transitionSpeed;

    // Calculate radius
    const targetRadiusValue = isRotating ? initialRadius : targetRadius;
    const newRadius = state.radius + (targetRadiusValue - state.radius) * transitionSpeed;

    // Calculate center
    const targetCenterValue = isRotating ? initialCenter : targetCenter;
    const newCenter = targetCenterValue.map((coord, idx) => state.center[idx] + (coord - state.center[idx]) * transitionSpeed);

    setState({ rotation: newRotation, radius: newRadius, center: newCenter });
  });

  const { rotation, radius, center } = state;

  // Calculate position
  const x = center[0] + radius * Math.cos(rotation);
  const z = center[2] + radius * Math.sin(rotation);

  camera.position.set(x, center[1], z);
  camera.lookAt(center[0], center[1], center[2]);

  return null;
}

function App() {
  const [isRotating, setIsRotating] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [orbitEnabled, setOrbitEnabled] = useState(false); // Add state to manage OrbitControls
  const [expandBtnImage, setExpandBtnImage] = useState('/maximize.png');
  const [orbitBtnState, setOrbitBtnState] = useState('');

  const handleCanvasClick = () => {
    if (!orbitEnabled) {
      setIsZoomed(!isZoomed)
      setIsRotating(!isRotating); // Toggle rotation
      setHasStarted(true); // Set hasStarted to true on canvas click
      setExpandBtnImage(isRotating ? '/minimize.png' : '/maximize.png');
    }
  };

  const handleOrbitClick = () => {
    setHasStarted(true); // Set hasStarted to true on canvas click
    if (!isZoomed) {
      setOrbitEnabled(!orbitEnabled);
      setOrbitBtnState(orbitBtnState ? '' : 'active');
      if (!orbitEnabled) {
        setIsRotating(false); // Stop automatic rotation when enabling OrbitControls
      } else {
        setIsRotating(true)
      }
    }
  };

  return (
    <>
      <div className="canvas-container">
        <Canvas camera={{ fov: 50 }} onClick={handleCanvasClick}>
          <pointLight position={[0, 0, 0]} intensity={1.5} />
          <Suspense fallback={null}>
            <group rotation-y={Math.PI} position={[0, 0.02, 0]}>
              <Model isRotating={isRotating} />
            </group>
            <Environment preset="city" />
          </Suspense>
          <ContactShadows position={[0, -0.317, 0]} scale={5} blur={4} />
          <Camera isRotating={isRotating} orbitEnabled={orbitEnabled} />
          {orbitEnabled && <OrbitControls minPolarAngle={1.57} maxPolarAngle={1.57} />}
        </Canvas>
      </div>
      <div className='controls'>
        <a href="https://3d-monitor-meiv.vercel.app/">
          <button className='alt-version'>Go to <span className='bold'>OS</span> only version</button>
        </a>
        <div className='interactions'>
          <button id='expandBtn' onClick={handleCanvasClick}><img src={expandBtnImage} alt="expand" /></button>
          <button id='orbitBtn' className={orbitBtnState} onClick={handleOrbitClick}><img src="/orbit.png" alt="orbit" /></button>
        </div>
      </div>
      {!hasStarted && (
        <button id='startBtn'>CLICK <span className='bold'>ANYWHERE</span> TO START</button>
      )}
    </>
  );
}

export default App; 