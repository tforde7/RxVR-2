import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";
import { useRef } from "react";
import { useInteraction } from "@react-three/xr";

export default function Worker1() {
  const worker = useGLTF("/models/npcs/Low Poly Women/Woman in Tank Top.glb");

  //     function findAnimations(obj) {
  //       if (obj.animations && obj.animations.length > 0) {
  //         return obj.animations;
  //       } else {
  //         if (obj.children) {
  //           return obj.children.forEach(findAnimations);
  //         }
  //       }
  //     }

  //   Call findAnimations on the root of the object tree
  //     const animationClips = findAnimations(worker);

  //     const animations = useAnimations(animationClips, worker.scene);
  //     if (animations.actions) {
  //       animations.actions["Take 001"].play();
  //     }

  // Define fixed values for scale, position, and rotation
  const scale = [0.3, 0.3, 0.3]; // Example scale
  const position = [53, 0, -60]; // Example position
  const rotation = [0, 0.88, 0]; // Example rotation (in radians)

  //   const workerHello = new Audio("/sounds/doctor/doctor-hello.mp3");

  //   const workerRef = useRef();

  //   useInteraction(workerRef, "onSelect", (event) => {
  //     if (event.target.inputSource.handedness === "right") {
  //       return;
  //     }
  //     workerHello.play();
  //   });

  return (
    <>
      <RigidBody colliders="hull" type="fixed">
        <primitive
          //ref={workerRef}
          object={worker.scene}
          scale={scale}
          position={position}
          rotation={rotation}
        />
      </RigidBody>
    </>
  );
}
