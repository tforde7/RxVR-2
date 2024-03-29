/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Elliptical.glb --transform 
Files: Elliptical.glb [1.72MB] > C:\Users\tpf1\Desktop\projects\RxVR-2\public\models\gym\Elliptical-transformed.glb [133.43KB] (92%)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Ellipticals({
  position = [0, 0, 0],
  scale = 0.1,
  props,
  rotation = [0, 0, 0],
}) {
  const { nodes, materials } = useGLTF(
    "/models/gym/Elliptical-transformed.glb"
  );
  return (
    <group
      position={position}
      {...props}
      dispose={null}
      scale={scale}
      rotation={rotation}
    >
      <mesh
        geometry={nodes.p000039488.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.p000860432.geometry}
        material={materials.PaletteMaterial002}
      />
    </group>
  );
}

useGLTF.preload("/Elliptical-transformed.glb");
