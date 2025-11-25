import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, useGLTF, Stage } from "@react-three/drei";
import deskModel from "../assets/models/Desk.glb";

function DeskModel() {
  const { scene } = useGLTF(deskModel);
  return <primitive object={scene} scale={1.2} />;
}

export default function ThreeDesk() {
  return (
    <div className="w-full h-[350px] sm:h-[450px]">
      <Canvas shadows camera={{ position: [4, 3, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />

        <Float speed={1.5} floatIntensity={1.3} rotationIntensity={1.2}>
          <Stage environment="city" intensity={1.2}>
            <DeskModel />
          </Stage>
        </Float>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
