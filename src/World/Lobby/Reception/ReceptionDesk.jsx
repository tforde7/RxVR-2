import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";
import { useControls } from "leva";
import ReceptionSign from "./ReceptionSign";

export default function ReceptionDesk() {
  const reception = useGLTF("/models/reception/reception1-draco.glb");

  const { scale, X, Y, Z, rotationX, rotationY, rotationZ } = useControls(
    "Reception Controls",
    {
      scale: { value: 0.86, step: 0.01 },
      X: { value: 25.87, step: 0.01 },
      Y: { value: 0, step: 0.01 },
      Z: { value: -14.5, step: 0.1 },
      rotationY: { value: -1.29, step: 0.01 },
    }
  );

  return (
    <>
      <RigidBody colliders="hull" type="fixed">
        <primitive
          object={reception.scene}
          scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
          position={[X, Y, Z]}
          rotation-y={rotationY}
        />
      </RigidBody>
    </>
  );
}
