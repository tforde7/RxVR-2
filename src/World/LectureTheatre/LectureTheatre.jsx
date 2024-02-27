import { useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import * as THREE from "three";

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
      value: { x: 12.4, y: 5.4, z: -19.1 },
      step: 0.1,
    },
    rotation: { value: 0.28, step: 0.01 },
  });

  return (
    <mesh position={[position.x, position.y, position.z]} rotation-y={rotation}>
      <boxGeometry args={[26.27, 10.8, 12]}></boxGeometry>
      <meshBasicMaterial map={colorTexture} />
    </mesh>
  );
};

export default LectureTheatre;
