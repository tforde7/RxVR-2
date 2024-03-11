import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";
import { useRef } from "react";
import { useInteraction } from "@react-three/xr";

export default function Receptionist() {
  const receptionist = useGLTF(
    "/models/npcs/Low Poly Women/Woman in Dress.glb"
  );

  //   function findAnimations(obj) {
  //     if (obj.animations && obj.animations.length > 0) {
  //       return obj.animations;
  //     } else {
  //       if (obj.children) {
  //         return obj.children.forEach(findAnimations);
  //       }
  //     }
  //   }

  // Call findAnimations on the root of the object tree
  //   const animationClips = findAnimations(receptionist);

  //   const animations = useAnimations(animationClips, receptionist.scene);
  //   if (animations.actions) {
  //     animations.actions["Take 001"].play();
  //   }

  // Define fixed values for scale, position, and rotation
  const scale = [0.3, 0.3, 0.3]; // Example scale
  const position = [34.5, 0, -5.25]; // Example position
  const rotation = [0, 0.28, 0]; // Example rotation (in radians)

  //   const receptionistHello = new Audio("/sounds/doctor/doctor-hello.mp3");

  //   const receptionistRef = useRef();

  //   useInteraction(receptionistRef, "onSelect", (event) => {
  //     if (event.target.inputSource.handedness === "right") {
  //       return;
  //     }
  //     receptionistHello.play();
  //   });

  return (
    <>
      <RigidBody colliders="hull" type="fixed">
        <primitive
          //ref={receptionistRef}
          object={receptionist.scene}
          scale={scale}
          position={position}
          rotation={rotation}
        />
      </RigidBody>
    </>
  );
}
