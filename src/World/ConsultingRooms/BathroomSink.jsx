/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 BathroomSink.glb --transform 
Files: BathroomSink.glb [12.71KB] > C:\Users\tpf1\Desktop\projects\RxVR-2\public\models\sanitationequipment\BathroomSink-transformed.glb [3.92KB] (69%)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Sink(props) {
  const { nodes, materials } = useGLTF(
    "/models/sanitationequipment/BathroomSink-transformed.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
          geometry={nodes.Bathroom_Sink_1.geometry}
          material={materials.White}
        />
        <mesh
          geometry={nodes.Bathroom_Sink_2.geometry}
          material={materials.Grey}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/sanitationequipment/BathroomSink-transformed.glb");
