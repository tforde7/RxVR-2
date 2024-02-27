import { Base, Geometry, Subtraction } from "@react-three/csg";
import { RigidBody } from "@react-three/rapier";
import { useControls } from "leva";
import { useMaterials } from "../../util/materials";

const SeahorseWallsCeilingFloor = () => {
  const { wardPosition } = useControls("Ward", {
    wardPosition: {
      value: {
        x: -10.24,
        y: 0,
        z: -26.6,
      },
      step: 0.01,
    },
  });

  const { corridorCavityPosition } = useControls("Corridor Cavity", {
    corridorCavityPosition: {
      value: {
        x: 10.24,
        y: 0,
        z: 0,
      },
      step: 0.01,
    },
  });

  const materials = useMaterials();

  if (!materials) {
    return null;
  }

  return (
    <>
      {/* Ward  41 x 35 */}
      <group position={[wardPosition.x, wardPosition.y, wardPosition.z]}>
        {/* Floor */}
        <mesh
          material={materials.floorMaterial}
          position={[0, 0.01, 0]}
          rotation-x={-Math.PI / 2}
        >
          <planeGeometry args={[35, 41]}></planeGeometry>
        </mesh>
        {/* Ceiling */}
        <mesh
          material={materials.ceilingMaterial}
          rotation-x={Math.PI / 2}
          position={[0, 3.6, 0]}
        >
          <planeGeometry args={[35, 41]}></planeGeometry>
        </mesh>
        {/* Left Wall */}
        <RigidBody colliders={"cuboid"} type="fixed">
          <mesh
            material={materials.wallMaterial}
            rotation-y={Math.PI / 2}
            position={[17.5, 1.8, 0]}
          >
            <planeGeometry args={[41, 3.6]}></planeGeometry>
          </mesh>
        </RigidBody>
        {/* Right Wall */}
        <RigidBody colliders={"cuboid"} type="fixed">
          <mesh
            material={materials.wallMaterial}
            rotation-y={Math.PI / 2}
            position={[-17.5, 1.8, 0]}
          >
            <planeGeometry args={[41, 3.6]}></planeGeometry>
          </mesh>
        </RigidBody>
        {/* Front wall */}
        <RigidBody colliders={"cuboid"} type="fixed">
          <mesh material={materials.wallMaterial} position={[0, 1.8, 20.5]}>
            <Geometry>
              <Base>
                <planeGeometry args={[35, 3.6]}></planeGeometry>
              </Base>
              <Subtraction
                position={[
                  corridorCavityPosition.x,
                  corridorCavityPosition.y,
                  corridorCavityPosition.z,
                ]}
              >
                <planeGeometry args={[3.08, 3.6]}></planeGeometry>
              </Subtraction>
            </Geometry>
          </mesh>
        </RigidBody>
        {/* Back wall */}
        <RigidBody colliders={"cuboid"} type="fixed">
          <mesh material={materials.wallMaterial} position={[0, 1.8, -20.5]}>
            <planeGeometry args={[35, 3.6]}></planeGeometry>
          </mesh>
        </RigidBody>
      </group>
    </>
  );
};

export default SeahorseWallsCeilingFloor;
