/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 WetFSign.glb --transform 
Files: WetFSign.glb [32.64KB] > C:\Users\tpf1\Desktop\projects\RxVR-2\public\models\sanitationequipment\WetFSign-transformed.glb [4.79KB] (85%)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function WSign(props) {
  const { nodes, materials } = useGLTF(
    "/models/sanitationequipment/WetFSign-transformed.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["Cube-Mesh"].geometry}
        material={materials.FloorSign}
      />
      <mesh
        geometry={nodes["Cube-Mesh_1"].geometry}
        material={materials.Sign}
      />
    </group>
  );
}

useGLTF.preload("/models/sanitationequipment/WetFSign-transformed.glb");