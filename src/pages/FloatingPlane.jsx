import { Canvas, extend, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import { shaderMaterial } from "@react-three/drei"; // Use shaderMaterial from @react-three/drei

// Define and register the custom shader material
const WaveShaderMaterial = shaderMaterial(
  {
    time: 0,
    color1: new THREE.Color(0xff0000),
    color2: new THREE.Color(0x0000ff),
    waveHeight: 0.2,
    waveSpeed: 2,
  },
  // Vertex Shader
  `
    uniform float time;
    uniform float waveHeight;
    uniform float waveSpeed;
    
    void main() {
      vec3 newPosition = position;
      
      // Apply wave effect based on x and z position, animated over time
      newPosition.y += sin(position.x * 2.0 + time * waveSpeed) * waveHeight;
      newPosition.y += sin(position.z * 2.0 + time * waveSpeed) * waveHeight;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform vec3 color1;
    uniform vec3 color2;
    uniform float time;
    
    void main() {
      vec3 color = mix(color1, color2, sin(time * 0.5) * 0.5 + 0.5);
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

// Register the material with React Three Fiber
extend({ WaveShaderMaterial });

function Home() {
  const [hovered, setHovered] = useState(false);
  const shaderRef = useRef();

  useEffect(() => {
    // This ensures that the shader time is updated every frame
    const interval = setInterval(() => {
      if (shaderRef.current) {
        shaderRef.current.time = performance.now() / 1000;
      }
    }, 1000 / 60); // 60 FPS

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: "50vh", width: "50vh" }}>
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <Stars />
        <pointLight position={[10, 10, 10]} />
        {/* Create a mesh with the custom wave shader material */}
        <mesh
          position={[0, 0, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <boxGeometry args={[100, 2, 100]} />
          <waveShaderMaterial
            ref={shaderRef}
            color1={
              hovered ? new THREE.Color(0x00ff00) : new THREE.Color(0xff0000)
            }
            color2={new THREE.Color(0x0000ff)}
            waveHeight={2.1} // Adjust wave height here
            waveSpeed={1} // Adjust wave speed here
            transparent
          />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Home;
