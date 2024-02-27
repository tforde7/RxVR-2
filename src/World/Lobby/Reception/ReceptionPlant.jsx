import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";

export default function ReceptionPlant() {
  const pottedPlant = useGLTF("/models/plants/fig-plant.glb");

  // Fixed values for the model's properties
  const scale = [0.3, 0.3, 0.3]; // Example scale value
  const position = [22, 0, -15]; // Example position value
  const rotation = [0, 0, 0]; // Example rotation value (in radians)

  return (
    <>
      <RigidBody colliders="hull" type="fixed">
        <primitive
          object={pottedPlant.scene}
          scale={scale}
          position={position}
          rotation={rotation}
        />
      </RigidBody>
    </>
  );
}
