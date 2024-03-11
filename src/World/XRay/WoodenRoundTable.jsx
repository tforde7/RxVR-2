/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 WoodenRoundTable.glb --transform 
Files: WoodenRoundTable.glb [25.24KB] > C:\Users\tpf1\Desktop\projects\RxVR-2\public\models\xray\WoodenRoundTable-transformed.glb [4.57KB] (82%)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function WoodenRoundTable(props) {
  const { nodes, materials } = useGLTF(
    "/models/xray/WoodenRoundTable-transformed.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Table_RoundSmall2.geometry}
        material={materials.Wood}
      />
    </group>
  );
}

useGLTF.preload("/models/xray/WoodenRoundTable-transformed.glb");
