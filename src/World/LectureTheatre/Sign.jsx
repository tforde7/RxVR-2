import { Text3D } from "@react-three/drei";
import { useControls } from "leva";

export default function Sign() {
  const textSize = 1.5;

  const { position, rotation } = useControls("Sign", {
    position: {
      value: {
        x: 4.6,
        y: 9.3,
        z: -10.4,
      },
      step: 0.1,
    },
    rotation: {
      value: 0.28,
      step: 0.01,
    },
  });

  return (
    <>
      <group
        position={[position.x, position.y, position.z]}
        rotation-y={rotation}
        scale={0.33}
      >
        <Text3D
          font="./fonts/helvetiker_regular.typeface.json"
          position={[0, 0, 0]}
          size={textSize}
        >
          <meshBasicMaterial color={"silver"} metalness={0.85} />
          CORK
        </Text3D>

        <Text3D
          font="./fonts/helvetiker_regular.typeface.json"
          position={[0, -2.5, 0]}
          size={textSize}
        >
          <meshBasicMaterial color={"silver"} metalness={0.85} />
          UNIVERSITY
        </Text3D>

        <Text3D
          font="./fonts/helvetiker_regular.typeface.json"
          position={[0, -5, 0]}
          size={textSize}
        >
          <meshBasicMaterial color={"silver"} metalness={0.85} />
          HOSPITAL
        </Text3D>
      </group>
    </>
  );
}
