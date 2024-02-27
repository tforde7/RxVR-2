import { useControls } from "leva";
import { RigidBody } from "@react-three/rapier";
import { Base, Geometry, Subtraction } from "@react-three/csg";
import { useMaterials } from "../../util/materials";

const LobbyWallsCeilingFloor = () => {
  const { lobbyPosition, rotation } = useControls("Lobby", {
    lobbyPosition: {
      value: {
        x: 22.9,
        y: 5.4,
        z: -5.1,
      },
      step: 0.1,
    },
    rotation: {
      value: 0.28,
      step: 0.01,
    },
  });

  const { size, doorPosition } = useControls("Front Door Cavity", {
    size: {
      value: {
        height: 3,
        width: 6,
      },
      step: 0.1,
    },
    doorPosition: {
      value: {
        x: -0.6,
        y: -0.3,
        z: 0,
      },
      step: 0.1,
    },
  });

  const { lobbyCavitySize, lobbyCavityPosition } = useControls("Lobby Cavity", {
    lobbyCavitySize: {
      value: {
        height: 3,
        width: 15.7,
      },
      step: 0.1,
    },
    lobbyCavityPosition: {
      value: {
        x: -2.4,
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
    <RigidBody colliders="trimesh" type="fixed">
      <group
        position={[lobbyPosition.x, lobbyPosition.y, lobbyPosition.z]}
        rotation-y={rotation}
      >
        {/* Upper floors */}
        <mesh position-y={3.6}>
          <boxGeometry args={[22, 3.6, 20.5]}></boxGeometry>
          <meshStandardMaterial></meshStandardMaterial>
        </mesh>
        <mesh>
          <boxGeometry args={[22, 3.6, 20.5]}></boxGeometry>
          <meshStandardMaterial></meshStandardMaterial>
        </mesh>
        {/* Ground floor */}
        <group position-y={-3.6}>
          {/* left */}
          <mesh position={[0, 0, -10.25]} material={materials.wallMaterial}>
            <planeGeometry args={[22, 3.6]} />
          </mesh>
          {/* right */}
          <mesh
            position={[0, 0, 10.25]}
            material={materials.wallMaterial}
            rotation-y={Math.PI}
          >
            <planeGeometry args={[22, 3.6]} />
          </mesh>
          {/* front */}
          <mesh
            rotation-y={Math.PI / 2}
            position={[-11, 0, 0]}
            material={materials.wallMaterial}
          >
            <Geometry>
              <Base>
                <planeGeometry args={[20.5, 3.6]} />
              </Base>
              <Subtraction
                position={[doorPosition.x, doorPosition.y, doorPosition.z]}
              >
                <boxGeometry args={[size.width, size.height, 1]}></boxGeometry>
              </Subtraction>
            </Geometry>
          </mesh>
          {/* back */}
          <mesh
            rotation-y={Math.PI / 2}
            position={[11, 0, 0]}
            material={materials.wallMaterial}
          >
            <Geometry>
              <Base>
                <planeGeometry args={[20.5, 3.6]} />
              </Base>
              <Subtraction
                position={[
                  lobbyCavityPosition.x,
                  lobbyCavityPosition.y,
                  lobbyCavityPosition.z,
                ]}
              >
                <boxGeometry
                  args={[lobbyCavitySize.width, lobbyCavitySize.height, 1]}
                ></boxGeometry>
              </Subtraction>
            </Geometry>
          </mesh>
          {/* ceiling */}
          <mesh
            rotation-x={Math.PI / 2}
            position={[0, 1.79, 0]}
            material={materials.ceilingMaterial}
          >
            <planeGeometry args={[22, 20.5]} />
          </mesh>
          {/* floor */}
          <mesh
            rotation-x={-Math.PI / 2}
            position={[0, -1.81, 0]}
            material={materials.floorMaterial}
          >
            <planeGeometry args={[22, 20.5]} />
          </mesh>
        </group>
      </group>
    </RigidBody>
  );
};

export default LobbyWallsCeilingFloor;