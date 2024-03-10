/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 CoatRackStanding.glb --transform 
Files: CoatRackStanding.glb [24.16KB] > C:\Users\tpf1\Desktop\projects\RxVR-2\public\models\xray\CoatRackStanding-transformed.glb [2.24KB] (91%)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CoatRack(props) {
  const { nodes, materials } = useGLTF(
    "/models/xray/CoatRackStanding-transformed.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.coatRackStanding.geometry}
        material={materials.wood}
      />
    </group>
  );
}

useGLTF.preload("/models/xray/CoatRackStanding-transformed.glb");
