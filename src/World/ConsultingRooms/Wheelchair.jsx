/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Wheelchair.glb --transform 
Files: Wheelchair.glb [1.21MB] > C:\Users\tpf1\Desktop\projects\RxVR-2\public\models\desks-chairs\Wheelchair-transformed.glb [84.56KB] (93%)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function WheelChair(props) {
  const { nodes, materials } = useGLTF(
    "/models/desks-chairs/Wheelchair-transformed.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry} material={materials.Cylinder} />
    </group>
  );
}

useGLTF.preload("/models/desks-chairs/Wheelchair-transformed.glb");