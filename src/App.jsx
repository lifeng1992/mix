import "./App.css";
import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

// use constructor arguments, work fine
function CaseA() {
  const { size } = useControls({
    size: {
      value: 5,
      min  : 1,
      max  : 20,
      step : 1,
    },
  });

  let g = new THREE.BoxGeometry(size, size, size);
  let m = new THREE.MeshStandardMaterial({ color: "red" });

  return <mesh args={[g, m]} />;
}

// attach, work fine
function CaseB() {
  const { size } = useControls({
    size: {
      value: 5,
      min  : 1,
      max  : 20,
      step : 1,
    },
  });

  return (
    <mesh>
      <boxGeometry args={[size, size, size]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
}

// mix constructor arguments and attach, wrong
function CaseC() {
  const { size } = useControls({
    size: {
      value: 5,
      min  : 1,
      max  : 20,
      step : 1,
    },
  });

  let g = new THREE.BoxGeometry(size, size, size);

  return (
    <mesh args={[g]}>
      <meshBasicMaterial color="red" />
    </mesh>
  );
}

function App() {
  return (
    <div className="app">
      <div className="toolbar"></div>

      <div className="canvas">
        <Canvas camera={{ position: [25, 25, 25] }}>
          <OrbitControls />
          <axesHelper args={[100]} />
          <gridHelper args={[100, 10]} />
          <directionalLight position={[5, 5, 5]} color="red" />

          {/* work fine */}
          {/* <CaseA /> */}

          {/* work fine */}
          {/* <CaseB /> */}

          {/* wrong when slider */}
          {/* Uncaught TypeError: Cannot read property 'instance' of undefined */}
          <CaseC />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
