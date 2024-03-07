import { useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import * as THREE from "three";
import Sign from "./Sign";

const LectureTheatre = () => {
  const colorTexture = useLoader(
    THREE.TextureLoader,
    "/textures/bricks/color.jpg"
  );

  colorTexture.repeat.set(6, 6);
  colorTexture.wrapS = THREE.RepeatWrapping;
  colorTexture.wrapT = THREE.RepeatWrapping;

  const { position, rotation } = useControls("Lecture Theatre", {
    position: {
      value: { x: 16.4, y: 5.4, z: -20.2 },
      step: 0.1,
    },
    rotation: { value: 0.28, step: 0.01 },
  });

  return (
    <>
      <mesh
        position={[position.x, position.y, position.z]}
        rotation-y={rotation}
      >
        <boxGeometry args={[18, 10.8, 12]}></boxGeometry>
        <meshBasicMaterial map={colorTexture} />
      </mesh>
      <Sign />
    </>
  );
};

export default LectureTheatre;
