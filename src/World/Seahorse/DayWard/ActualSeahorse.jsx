/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ActualSeahorse.glb --transform 
Files: ActualSeahorse.glb [36.98KB] > C:\Users\tpf1\Desktop\projects\RxVR-2\public\models\seahorse\ActualSeahorse-transformed.glb [7.58KB] (80%)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ActualSeahorse(props) {
  const { nodes, materials } = useGLTF(
    "/models/seahorse/ActualSeahorse-transformed.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["Symmetry1-Mesh"].geometry}
        material={materials["Mat.2"]}
      />
      <mesh
        geometry={nodes["Symmetry1-Mesh_1"].geometry}
        material={materials.Mat}
      />
      <mesh
        geometry={nodes["Symmetry1-Mesh_2"].geometry}
        material={materials["Mat.1"]}
      />
    </group>
  );
}

useGLTF.preload("/models/seahorse/ActualSeahorse-transformed.glb");
