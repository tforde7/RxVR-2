import { Base, Geometry, Subtraction } from "@react-three/csg";
import { RigidBody } from "@react-three/rapier";
import { useControls } from "leva";
import { useMaterials } from "../../util/materials";

const MainConcourseWallsCeilingFloor = () => {
  const { concoursePosition, rotation } = useControls("Concourse", {
    concoursePosition: {
      value: {
        x: 62.9,
        y: 5.4,
        z: -14.2,
      },
      step: 0.1,
    },
    rotation: {
      value: 0.28,
      step: 0.01,
    },
  });

  const { wardCavitySize, wardCavityPosition } = useControls("Ward Cavity", {
    wardCavitySize: {
      value: {
        height: 3,
        width: 2,
      },
      step: 0.1,
    },
    wardCavityPosition: {
      value: {
        x: 5.7,
        y: -0.3,
        z: 0,
      },
      step: 0.1,
    },
  });

  const materials = useMaterials();

  if (!materials) {
    return null;
  }

  return (
    <>
      <RigidBody colliders="trimesh" type="fixed">
        <group
          position={[
            concoursePosition.x,
            concoursePosition.y,
            concoursePosition.z,
          ]}
          rotation-y={rotation}
        >
          <mesh position-y={3.6}>
            <boxGeometry args={[60, 3.6, 16]}></boxGeometry>
            <meshStandardMaterial></meshStandardMaterial>
          </mesh>
          <mesh>
            <boxGeometry args={[60, 3.6, 16]}></boxGeometry>
            <meshStandardMaterial></meshStandardMaterial>
          </mesh>
          <group position-y={-3.6}>
            {/* left */}
            <mesh position={[0, 0, -8]} material={materials.wallMaterial}>
              <Geometry>
                <Base>
                  <planeGeometry args={[60, 3.6]} />
                </Base>
                <Subtraction
                  position={[
                    wardCavityPosition.x,
                    wardCavityPosition.y,
                    wardCavityPosition.z,
                  ]}
                >
                  <boxGeometry
                    args={[wardCavitySize.width, wardCavitySize.height, 1]}
                  ></boxGeometry>
                </Subtraction>
              </Geometry>
            </mesh>
            {/* right */}
            <mesh position={[0, 0, 8]} material={materials.wallMaterial}>
              <planeGeometry args={[60, 3.6]} />
            </mesh>
            {/* back */}
            <mesh
              rotation-y={Math.PI / 2}
              position={[30, 0, 0]}
              material={materials.wallMaterial}
            >
              <planeGeometry args={[16, 3.6]} />
            </mesh>
            {/* ceiling */}
            <mesh
              rotation-x={Math.PI / 2}
              position={[0, 1.79, 0]}
              material={materials.ceilingMaterial}
            >
              <planeGeometry args={[60, 16]} />
            </mesh>
            {/* floor */}
            <mesh
              rotation-x={-Math.PI / 2}
              position={[0, -1.8, 0]}
              material={materials.floorMaterial}
            >
              <planeGeometry args={[60, 16]} />
            </mesh>
          </group>
        </group>
      </RigidBody>
    </>
  );
};

export default MainConcourseWallsCeilingFloor;
