import { RigidBody } from "@react-three/rapier";
import { useMaterials } from "../../util/materials";

const SeahorseCorridor = () => {
  const materials = useMaterials();

  if (!materials) {
    return null;
  }

  return (
    <group>
      {/* Floor */}
      <mesh material={materials.floorMaterial} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[3.08, 12.23]}></planeGeometry>
      </mesh>
      {/* Ceiling */}
      <mesh
        material={materials.ceilingMaterial}
        rotation-x={-Math.PI / 2}
        position={[0, 3.6, 0]}
      >
        <planeGeometry args={[3.08, 12.23]}></planeGeometry>
      </mesh>
      {/* Left Wall */}
      <RigidBody colliders={"cuboid"} type="fixed">
        <mesh
          material={materials.wallMaterial}
          position={[-1.54, 1.8, 0]}
          rotation-y={Math.PI / 2}
        >
          <planeGeometry args={[12.23, 3.6]}></planeGeometry>
        </mesh>
      </RigidBody>

      {/* Right Wall */}
      <RigidBody colliders={"cuboid"} type="fixed">
        <mesh
          material={materials.wallMaterial}
          position={[1.54, 1.8, 0]}
          rotation-y={Math.PI / 2}
        >
          <planeGeometry args={[12.23, 3.6]}></planeGeometry>
        </mesh>
      </RigidBody>
    </group>
  );
};

export default SeahorseCorridor;
