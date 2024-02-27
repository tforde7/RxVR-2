import { Text3D } from "@react-three/drei";
import React from "react";

export default function ReceptionSign() {
  // Fixed values for the properties
  const textSize = 0.3;
  const position = [30, 2.5, -16];
  const rotationY = -1.3;
  const color = "black";
  const metalness = 0.5;
  const depth = 0.05;

  return (
    <>
      <Text3D
        font="./fonts/helvetiker_regular.typeface.json"
        position={position}
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
