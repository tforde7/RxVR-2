/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 beatrizz.glb 
*/

import React, { useEffect, useRef } from "react";
import {
  useGLTF,
  useAnimations,
  Float,
  Trail,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { Pathfinding, PathfindingHelper } from "three-pathfinding";
import { useInteraction, useXR } from "@react-three/xr";
import { useControls } from "leva";

const POSITIONS = {
  outside: new THREE.Vector3(18, 0.2, -3),
  reception: new THREE.Vector3(39.9, 0.2, -1),
  seahorse_1: new THREE.Vector3(71.4, 0.2, -60.5),
  seahorse_2: new THREE.Vector3(49.2, 0.2, -59.3),
  seahorse_3: new THREE.Vector3(67.4, 0.2, -36.2),
  xray: new THREE.Vector3(122, 0.2, -15.3),
  mri: new THREE.Vector3(125.7, 0.2, 16.7),
};

const DIALOGUE = [
  { intro_1: new Audio("/sounds/beatrizz/beatrizz-intro-1.mp3") },
  { intro_2: new Audio("/sounds/beatrizz/beatrizz-intro-2.mp3") },
  { reception_1: new Audio("/sounds/beatrizz/beatrizz-reception-1.mp3") },
  { reception_2: new Audio("/sounds/beatrizz/beatrizz-reception-2.mp3") },
  { seahorse_1: new Audio("/sounds/beatrizz/beatrizz-seahorse-1.mp3") },
  { seahorse_2: new Audio("/sounds/beatrizz/beatrizz-seahorse-2.mp3") },
  { seahorse_3: new Audio("/sounds/beatrizz/beatrizz-seahorse-3.mp3") },
  { xray: new Audio("/sounds/beatrizz/beatrizz-xray.mp3") },
  { mri: new Audio("/sounds/beatrizz/beatrizz-mri.mp3") },
];

const pathfinding = new Pathfinding();
const pathfindingHelper = new PathfindingHelper();
const raycaster = new THREE.Raycaster();

const ZONE = "level1";

let groupId;
let navPath;

let navmesh;

export function Beatrizz(props) {
  const { gl, camera } = useThree();

  const beatrizz = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/npcs/beatrizz/beatrizz.glb"
  );
  const { actions } = useAnimations(animations, beatrizz);

  const ACTION_PREFIX = "CharacterArmature|";

  const idleAnimation = actions[ACTION_PREFIX + "Flying_Idle"];
  const movingAnimation = actions[ACTION_PREFIX + "Fast_Flying"];
  const headbuttAnimation = actions[ACTION_PREFIX + "Headbutt"];

  useEffect(() => {
    if (idleAnimation) {
      idleAnimation.play();
    }
  }, [idleAnimation]);

  const navmeshModel = useGLTF("/models/navmesh/navmesh.glb");

  useEffect(() => {
    // PATHFINDING
    if (navmeshModel && !navmesh) {
      navmeshModel.scene.traverse((node) => {
        if (node.isObject3D && node.children && node.children.length > 0) {
          navmesh = node.children[0];
          pathfinding.setZoneData(
            ZONE,
            Pathfinding.createZone(navmesh.geometry)
          );
        }
      });
    }

    gl.domElement.addEventListener("click", (event) => {
      // const mouse = new THREE.Vector2();
      // mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      // mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      // raycaster.setFromCamera(mouse, camera);
      // const intersects = raycaster.intersectObject(navmesh);
      // if (intersects.length > 0) {
      //   console.log("raycaster", intersects[0].point);
      //   const point = intersects[0].point;
      //   createNavpath(point);
      // }
      // createNavpath(POSITIONS.mri);
    });
  }, []);

  const createNavpath = (target) => {
    groupId = pathfinding.getGroup("level1", beatrizz.current.position);
    const closestNode = pathfinding.getClosestNode(
      beatrizz.current.position,
      ZONE,
      groupId
    );
    navPath = pathfinding.findPath(closestNode.centroid, target, ZONE, groupId);
    if (navPath) {
      pathfindingHelper.reset();
      pathfindingHelper.setPlayerPosition(beatrizz.current.position);
      pathfindingHelper.setTargetPosition(target);
      pathfindingHelper.setPath(navPath);
    }
  };

  const move = (deltaTime) => {
    if (!navPath || navPath.length <= 0) return;

    let targetPosition = navPath[0];
    const distance = targetPosition.clone().sub(beatrizz.current.position);

    // Check if the distance is greater than a very small value before normalization
    if (distance.lengthSq() > 0.05 * 0.5) {
      distance.normalize();

      // Smooth rotation to face the direction of movement
      const targetQuaternion = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 0, 1),
        distance
      );

      // Check if deltaTime is valid (greater than zero)
      if (deltaTime > 0) {
        const moveDistance = distance.multiplyScalar(deltaTime * 5);

        // Apply slerp rotation
        beatrizz.current.quaternion.slerp(targetQuaternion, 0.1); // Adjust the interpolation factor for smoother or faster rotation

        // Add moveDistance to the current position
        beatrizz.current.position.add(moveDistance);
      }
    } else {
      navPath.shift();
    }
  };

  useFrame((state, delta) => {
    move(delta);
  });

  const { player } = useXR();

  const hoverSound = new Audio("/sounds/sfx/pop.mp3");

  useInteraction(beatrizz, "onHover", () => {
    hoverSound.play();
  });

  useInteraction(beatrizz, "onSelect", (interactionEvent) => {
    if (interactionEvent.target.inputSource.handedness === "right") return;
    // beatrizz.current.lookAt(player.position);

    // Play the next dialogue
    const currentDialogueObject = DIALOGUE.shift();
    if (currentDialogueObject) {
      const currentDialogue = Object.values(currentDialogueObject)[0];

      currentDialogue.play();

      // Determine movement based on dialogue played
      const dialogueKey = Object.keys(currentDialogueObject)[0];
      switch (dialogueKey) {
        case "intro_2":
          // Move Beatrizz to "reception" position
          createNavpath(POSITIONS.reception);
          break;
        case "reception_2":
          createNavpath(POSITIONS.seahorse_1);
          break;
        case "seahorse_1":
          createNavpath(POSITIONS.seahorse_2);
          break;
        case "seahorse_2":
          createNavpath(POSITIONS.seahorse_3);
          break;
        case "seahorse_3":
          createNavpath(POSITIONS.xray);
          break;
        case "xray":
          createNavpath(POSITIONS.mri);
          break;
        default:
          // end of tour audio
          break;
      }
    }
  });

  // const { p } = useControls("pointere", {
  //   p: { value: { x: 0, y: 0.2, z: 0 }, step: 0.1 },
  // });

  return (
    <>
      {/* <primitive object={navmeshModel.scene} /> */}
      {/* <mesh position={[p.x, p.y, p.z]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh> */}
      <Trail>
        <group ref={beatrizz} position={[18, 0, -3]} rotation-y={-2}>
          {/* <Sparkles color={"yellow"} size={3} /> */}
          <Float
            speed={3} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            // floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            // floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <group {...props} dispose={null} scale={0.5}>
              <group name="Root_Scene">
                <group name="RootNode">
                  <group
                    name="CharacterArmature"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  >
                    <primitive object={nodes.Root} />
                  </group>
                  <group
                    name="Armabee"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  >
                    <skinnedMesh
                      name="Armabee_1"
                      geometry={nodes.Armabee_1.geometry}
                      material={materials.Armabee_Main}
                      skeleton={nodes.Armabee_1.skeleton}
                    ></skinnedMesh>
                    <skinnedMesh
                      name="Armabee_2"
                      geometry={nodes.Armabee_2.geometry}
                      material={materials.Armabee_Secondary}
                      skeleton={nodes.Armabee_2.skeleton}
                    />
                    <skinnedMesh
                      name="Armabee_3"
                      geometry={nodes.Armabee_3.geometry}
                      material={materials.Eye_White}
                      skeleton={nodes.Armabee_3.skeleton}
                    />
                    <skinnedMesh
                      name="Armabee_4"
                      geometry={nodes.Armabee_4.geometry}
                      material={materials.Eye_Black}
                      skeleton={nodes.Armabee_4.skeleton}
                    />
                    <skinnedMesh
                      name="Armabee_5"
                      geometry={nodes.Armabee_5.geometry}
                      material={materials.Wings}
                      skeleton={nodes.Armabee_5.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </Float>
        </group>
      </Trail>
    </>
  );
}

useGLTF.preload("/models/npcs/beatrizz/beatrizz.glb");
