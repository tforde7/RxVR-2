import { Base, Geometry, Subtraction } from "@react-three/csg";
import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useControls } from "leva";
import * as THREE from "three";
import { FrontWall } from "./FrontWall";
// import CouchReception1 from "../CouchReception1";
// import Plant1 from "../Plant1";
// import Plant3 from "../Plant3";
// import CoffeeTable from "../Coffeetable";
// import Monitor from "../Monitor1";
// import ChairCouchTable1 from "../ChairCouchTable1";
// import ReceptionDesk from "../ReceptionDesk";
// import ReceptionSign from "../ReceptionSign";
// import Doctor2 from "../Doctor2";

const Lobby = () => {
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

  const [
    wallColorTexture,
    wallNormalTexture,
    floorColorTexture,
    ceilingColorTexture,
  ] = useLoader(THREE.TextureLoader, [
    "/textures/indoor/wall/color.jpg",
    "/textures/indoor/wall/normal.jpg",
    "/textures/indoor/floor/color.jpg",
    "/textures/indoor/ceiling/color.jpg",
  ]);
  const wallMaterial = new THREE.MeshPhongMaterial({
    map: wallColorTexture,
    normalMap: wallNormalTexture,
    side: THREE.DoubleSide,
  });

  const floorMaterial = new THREE.MeshStandardMaterial({
    map: floorColorTexture,
  });

  const ceilingMaterial = new THREE.MeshStandardMaterial({
    map: ceilingColorTexture,
  });

  [
    wallColorTexture,
    wallNormalTexture,
    floorColorTexture,
    ceilingColorTexture,
  ].forEach((texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 10);
  });

  return (
    <>
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
            <mesh position={[0, 0, -10.25]} material={wallMaterial}>
              <planeGeometry args={[22, 3.6]} />
            </mesh>
            {/* right */}
            <mesh
              position={[0, 0, 10.25]}
              material={wallMaterial}
              rotation-y={Math.PI}
            >
              <planeGeometry args={[22, 3.6]} />
            </mesh>
            {/* front */}
            <mesh
              rotation-y={Math.PI / 2}
              position={[-11, 0, 0]}
              material={wallMaterial}
            >
              <Geometry>
                <Base>
                  <planeGeometry args={[20.5, 3.6]} />
                </Base>
                <Subtraction
                  position={[doorPosition.x, doorPosition.y, doorPosition.z]}
                >
                  <boxGeometry
                    args={[size.width, size.height, 1]}
                  ></boxGeometry>
                </Subtraction>
              </Geometry>
            </mesh>
            {/* back */}
            <mesh
              rotation-y={Math.PI / 2}
              position={[11, 0, 0]}
              material={wallMaterial}
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
              material={ceilingMaterial}
            >
              <planeGeometry args={[22, 20.5]} />
            </mesh>
            {/* floor */}
            <mesh
              rotation-x={-Math.PI / 2}
              position={[0, -1.81, 0]}
              material={floorMaterial}
            >
              <planeGeometry args={[22, 20.5]} />
            </mesh>
          </group>
        </group>
      </RigidBody>
      <FrontWall />
      {/* Models */}
      {/* <group>
        <CouchReception1 />
        <Plant1 />
        <Plant3 />
        <CoffeeTable />
        <Monitor />
        <ChairCouchTable1 />
        <ReceptionDesk />
        <ReceptionSign />
        <Doctor2 />
      </group> */}
    </>
  );
};

export default Lobby;
