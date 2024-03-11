/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Bins.glb --transform 
Files: Bins.glb [19.49KB] > C:\Users\tpf1\Desktop\projects\RxVR-2\public\models\sanitationequipment\Bins-transformed.glb [2.84KB] (85%)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bins(props) {
  const { nodes, materials } = useGLTF(
    "/models/sanitationequipment/Bins-transformed.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.group529117512.geometry}
        material={materials.PaletteMaterial001}
      />
    </group>
  );
}

useGLTF.preload("/models/sanitationequipment/Bins-transformed.glb");