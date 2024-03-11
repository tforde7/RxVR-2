/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 HouseplantPink.glb --transform 
Files: HouseplantPink.glb [32.04KB] > C:\Users\tpf1\Desktop\projects\RxVR-2\public\models\plants\HouseplantPink-transformed.glb [7.2KB] (78%)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function PlantPink(props) {
  const { nodes, materials } = useGLTF(
    "/models/plants/HouseplantPink-transformed.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["plant_01_Cube006-Mesh"].geometry}
        material={materials["795548"]}
      />
      <mesh
        geometry={nodes["plant_01_Cube006-Mesh_1"].geometry}
        material={materials["8BC34A"]}
      />
      <mesh
        geometry={nodes["plant_01_Cube006-Mesh_2"].geometry}
        material={materials.F8BBD0}
      />
      <mesh
        geometry={nodes["plant_01_Cube006-Mesh_3"].geometry}
        material={materials["455A64"]}
      />
    </group>
  );
}

useGLTF.preload("/HouseplantPink-transformed.glb");