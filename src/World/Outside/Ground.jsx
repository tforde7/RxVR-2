import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

const Ground = () => {
  const GROUND_LENGTH = 150;
  const GROUND_WIDTH = 150;

  const textureRepeat = 60;

  const groundColorTexture = useLoader(
    THREE.TextureLoader,
    "textures/pavement/color.jpg"
  );

  groundColorTexture.wrapS = THREE.RepeatWrapping;
  groundColorTexture.wrapT = THREE.RepeatWrapping;
  groundColorTexture.repeat.set(textureRepeat, textureRepeat);

  return (
    <RigidBody type="fixed">
      <mesh
        rotation-x={-Math.PI / 2}
        position-y={-0.02}
        rotation-z={0.3}
        position-x={60}
        position-z={-20}
      >
        <planeGeometry args={[GROUND_LENGTH, GROUND_WIDTH]}></planeGeometry>
        <meshBasicMaterial map={groundColorTexture}></meshBasicMaterial>
      </mesh>
    </RigidBody>
  );
};

export default Ground;
