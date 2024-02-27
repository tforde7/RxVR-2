import { Base, Geometry, Subtraction } from "@react-three/csg";
import { RigidBody } from "@react-three/rapier";
import { useMaterials } from "../../util/materials";

const Room = ({
  length,
  width,
  height,
  position,
  doorPosition = [0, 0, 0],
}) => {
  const materials = useMaterials();

  if (!materials) {
    return null;
  }

  return (
    <>
      <group position={position}>
        {/* Floor */}
        <mesh
          material={materials.floorMaterial}
          position={[0, -0.01, 0]}
          rotation-x={-Math.PI / 2}
        >
          <planeGeometry args={[length, width]}></planeGeometry>
        </mesh>
        {/* Ceiling */}
        <mesh
          material={materials.ceilingMaterial}
          rotation-x={Math.PI / 2}
          position={[0, height, 0]}
        >
          <planeGeometry args={[length, width]}></planeGeometry>
        </mesh>
        {/* Left Wall */}
        <RigidBody colliders={"cuboid"} type="fixed">
          <mesh
            material={materials.wallMaterial}
            rotation-y={Math.PI / 2}
            position={[width / 2, height / 2, 0]}
          >
            <planeGeometry args={[length, height]}></planeGeometry>
          </mesh>
        </RigidBody>
        {/* Right Wall */}
        <RigidBody colliders={"cuboid"} type="fixed">
          <mesh
            material={materials.wallMaterial}
            rotation-y={Math.PI / 2}
            position={[-(width / 2), height / 2, 0]}
          >
            <planeGeometry args={[length, height]}></planeGeometry>
          </mesh>
        </RigidBody>
        {/* Front wall */}
        <RigidBody colliders={"cuboid"} type="fixed">
          <mesh
            material={materials.wallMaterial}
            position={[0, height / 2, width / 2]}
          >
            <Geometry>
              <Base>
                <planeGeometry args={[width, height]}></planeGeometry>
              </Base>
              <Subtraction position={[0, -0.7, 0]}>
                <planeGeometry args={[1, 2.2]}></planeGeometry>
              </Subtraction>
            </Geometry>
          </mesh>
        </RigidBody>
        {/* Back wall */}
        <RigidBody colliders={"cuboid"} type="fixed">
          <mesh
            material={materials.wallMaterial}
            position={[0, height / 2, -(width / 2)]}
          >
            <planeGeometry args={[width, height]}></planeGeometry>
          </mesh>
        </RigidBody>
      </group>
    </>
  );
};

export default Room;
