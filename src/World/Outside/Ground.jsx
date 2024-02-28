import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

const Ground = () => {
  const GROUND_LENGTH = 500;
  const GROUND_WIDTH = 500;

  const textureRepeat = 200;

  const groundColorTexture = useLoader(
    THREE.TextureLoader,
    "textures/pavement/color.jpg"
  );

  groundColorTexture.wrapS = THREE.RepeatWrapping;
  groundColorTexture.wrapT = THREE.RepeatWrapping;
  groundColorTexture.repeat.set(textureRepeat, textureRepeat);

  return (
    <RigidBody type="fixed">
      <mesh rotation-x={-Math.PI / 2} position-y={-0.03}>
        <planeGeometry args={[500, 500]}></planeGeometry>
        <meshBasicMaterial map={groundColorTexture}></meshBasicMaterial>
      </mesh>
    </RigidBody>
  );
};

export default Ground;
