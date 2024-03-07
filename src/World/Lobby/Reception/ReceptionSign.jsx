import { Text3D } from "@react-three/drei";
import { useControls } from "leva";
import React from "react";

export default function ReceptionSign() {
  // Fixed values for the properties
  const textSize = 0.3;
  const color = "black";
  const metalness = 0.5;
  const depth = 0.05;

  const { scale, X, Y, Z, rotationX, rotationY, rotationZ } = useControls(
    "Reception Sign",
    {
      scale: { value: 0.86, step: 0.01 },
      X: { value: 32.83, step: 0.01 },
      Y: { value: 1.78, step: 0.01 },
      Z: { value: -7.3, step: 0.1 },
      rotationY: { value: 0.28, step: 0.01 },
    }
  );

  return (
    <>
      <Text3D
        font="./fonts/helvetiker_regular.typeface.json"
        position={[X, Y, Z]}
        rotation-y={rotationY}
        size={textSize}
        depth={depth}
      >
        <meshBasicMaterial color={color} metalness={metalness} />
        RECEPTION
      </Text3D>
    </>
  );
}
