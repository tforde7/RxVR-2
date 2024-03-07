/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 buildings-combined.glb --transform 
Files: buildings-combined.glb [11.09MB] > /Users/cex/Desktop/projects/RxVR-2/public/models/buildings/buildings-combined-transformed.glb [188.77KB] (98%)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export function BuildingsCombined(props) {
  const { nodes, materials } = useGLTF(
    "/models/buildings/buildings-combined-transformed.glb"
  );

  const { position, rotation } = useControls("Buildings", {
    position: {
      value: {
        x: 55.6,
        y: -0.01,
        z: -14.8,
      },
      step: 0.1,
    },
    rotation: {
      value: 0.28,
      step: 0.01,
    },
  });

  return (
    <group
      {...props}
      position={[position.x, position.y, position.z]}
      rotation-y={rotation}
      dispose={null}
    >
      <mesh
        geometry={nodes.Walls.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.WindowL038.geometry}
        material={materials.PaletteMaterial002}
        position={[-15.917, 1.325, 11.763]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <instancedMesh
        args={[nodes.DoorFrane049.geometry, materials.PaletteMaterial001, 37]}
        instanceMatrix={nodes.DoorFrane049.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Door062.geometry, materials.PaletteMaterial001, 32]}
        instanceMatrix={nodes.Door062.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Handle_Back062.geometry, materials.PaletteMaterial001, 74]}
        instanceMatrix={nodes.Handle_Back062.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.DoorFrane013.geometry, materials.PaletteMaterial001, 12]}
        instanceMatrix={nodes.DoorFrane013.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Door019.geometry, materials.PaletteMaterial001, 12]}
        instanceMatrix={nodes.Door019.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Handle_Back019.geometry, materials.PaletteMaterial001, 48]}
        instanceMatrix={nodes.Handle_Back019.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Door020.geometry, materials.PaletteMaterial001, 12]}
        instanceMatrix={nodes.Door020.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.WindowFrane.geometry, materials.PaletteMaterial001, 38]}
        instanceMatrix={nodes.WindowFrane.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Handle.geometry, materials.PaletteMaterial001, 76]}
        instanceMatrix={nodes.Handle.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Windows_Sill.geometry, materials.PaletteMaterial001, 50]}
        instanceMatrix={nodes.Windows_Sill.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Handle078.geometry, materials.PaletteMaterial001, 26]}
        instanceMatrix={nodes.Handle078.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.WindowFrane041.geometry, materials.PaletteMaterial001, 11]}
        instanceMatrix={nodes.WindowFrane041.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.WindowFrane052.geometry, materials.PaletteMaterial001, 8]}
        instanceMatrix={nodes.WindowFrane052.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.DoorFrane001.geometry, nodes.DoorFrane001.material, 19]}
        instanceMatrix={nodes.DoorFrane001.instanceMatrix}
      />
      <instancedMesh
        args={[
          nodes.Handle_Front002.geometry,
          materials.PaletteMaterial001,
          37,
        ]}
        instanceMatrix={nodes.Handle_Front002.instanceMatrix}
      />
      <instancedMesh
        args={[
          nodes.Handle_Front003.geometry,
          materials.PaletteMaterial001,
          47,
        ]}
        instanceMatrix={nodes.Handle_Front003.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Door066.geometry, materials.PaletteMaterial001, 12]}
        instanceMatrix={nodes.Door066.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.DoorFrane053.geometry, materials.PaletteMaterial001, 11]}
        instanceMatrix={nodes.DoorFrane053.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Door067.geometry, materials.PaletteMaterial001, 11]}
        instanceMatrix={nodes.Door067.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Door089.geometry, materials.PaletteMaterial001, 18]}
        instanceMatrix={nodes.Door089.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.DoorFrane084.geometry, materials.PaletteMaterial001, 7]}
        instanceMatrix={nodes.DoorFrane084.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Door108.geometry, materials.PaletteMaterial001, 7]}
        instanceMatrix={nodes.Door108.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Handle_Back108.geometry, materials.PaletteMaterial001, 28]}
        instanceMatrix={nodes.Handle_Back108.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Door109.geometry, materials.PaletteMaterial001, 7]}
        instanceMatrix={nodes.Door109.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.DoorFrane085.geometry, materials.PaletteMaterial001, 9]}
        instanceMatrix={nodes.DoorFrane085.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Door110.geometry, materials.PaletteMaterial001, 9]}
        instanceMatrix={nodes.Door110.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Handle_Back109.geometry, materials.PaletteMaterial001, 18]}
        instanceMatrix={nodes.Handle_Back109.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Door063.geometry, materials.PaletteMaterial001, 9]}
        instanceMatrix={nodes.Door063.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Handle_Back063.geometry, materials.PaletteMaterial001, 17]}
        instanceMatrix={nodes.Handle_Back063.instanceMatrix}
      />
      <instancedMesh
        args={[
          nodes.Handle_Front105.geometry,
          materials.PaletteMaterial001,
          15,
        ]}
        instanceMatrix={nodes.Handle_Front105.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.DoorFrane089.geometry, materials.PaletteMaterial001, 8]}
        instanceMatrix={nodes.DoorFrane089.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Window.geometry, materials.PaletteMaterial001, 6]}
        instanceMatrix={nodes.Window.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Window_1.geometry, materials.PaletteMaterial001, 6]}
        instanceMatrix={nodes.Window_1.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.WindowL.geometry, materials.PaletteMaterial001, 37]}
        instanceMatrix={nodes.WindowL.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.WindowL_1.geometry, materials.PaletteMaterial001, 37]}
        instanceMatrix={nodes.WindowL_1.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.WindowR.geometry, materials.PaletteMaterial001, 38]}
        instanceMatrix={nodes.WindowR.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.WindowR_1.geometry, materials.PaletteMaterial001, 38]}
        instanceMatrix={nodes.WindowR_1.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.WindowR040.geometry, materials.PaletteMaterial001, 12]}
        instanceMatrix={nodes.WindowR040.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.WindowR040_1.geometry, materials.PaletteMaterial002, 12]}
        instanceMatrix={nodes.WindowR040_1.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.WindowL042.geometry, materials.PaletteMaterial001, 11]}
        instanceMatrix={nodes.WindowL042.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.WindowL042_1.geometry, materials.PaletteMaterial002, 11]}
        instanceMatrix={nodes.WindowL042_1.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.WindowL053.geometry, materials.PaletteMaterial001, 8]}
        instanceMatrix={nodes.WindowL053.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.WindowL053_1.geometry, materials.PaletteMaterial002, 8]}
        instanceMatrix={nodes.WindowL053_1.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.WindowR052.geometry, materials.PaletteMaterial001, 8]}
        instanceMatrix={nodes.WindowR052.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.WindowR052_1.geometry, materials.PaletteMaterial002, 8]}
        instanceMatrix={nodes.WindowR052_1.instanceMatrix}
      />
    </group>
  );
}

useGLTF.preload("models/buildings/buildings-combined-transformed.glb");
