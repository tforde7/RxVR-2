import { Sparkles, useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useInteraction, useXR } from "@react-three/xr";

export default function RadiologistM1() {
  const { animations, scene } = useGLTF(
    "/models/npcs/Low Poly Women/Woman.glb"
  );

  const radiologistRef = useRef();

  // const [isHovered, setIsHovered] = useState(false); // Track hover state
  // const [dialoguePlaying, setDialoguePlaying] = useState(false); // Track dialogue state

  // Hover interaction handler

  // const interactionSound = new Audio("/sounds/sfx/pop.mp3");
  // interactionSound.volume = 0.5;

  // const handleHover = (hovering) => {
  //   setIsHovered(hovering);
  //   if (hovering) {
  //     interactionSound.play();
  //   }
  // };

  // useInteraction(radiologistRef, "onHover", () => handleHover(true));
  // useInteraction(radiologistRef, "onBlur", () => handleHover(false));

  const { actions } = useAnimations(animations, radiologistRef);

  const ACTION_PREFIX = "HumanArmature|";

  const idleAnimation = actions[ACTION_PREFIX + "Female_Idle"];

  useEffect(() => {
    if (idleAnimation) {
      idleAnimation.play();
    }
  }, [idleAnimation]);

  // Define fixed values for scale, position, and rotation
  const scale = [0.3, 0.3, 0.3]; // Example scale
  const position = [133, 0.1, 15]; // Example position
  const rotation = [0, 0, 0]; // Example rotation (in radians)

  // const radiologistHello = new Audio(
  //   "/sounds/receptionist-main/receptionist-main-hello.mp3"
  // );

  // useInteraction(radiologistRef, "onHover", (interactionEvent) => {
  //   if (interactionEvent.target.inputSource.handedness === "right") return;
  //   interactionSound.play();
  // });

  // const { player } = useXR();

  // useInteraction(radiologistRef, "onSelect", (interactionEvent) => {
  //   if (interactionEvent.target.inputSource.handedness === "right") return;
  //   if (dialoguePlaying) return;

  //   radiologistRef.current.lookAt(player.children[0].position);

  //   radiologistHello.play();
  //   setDialoguePlaying(true);

  //   radiologistHello.onended = () => {
  //     setDialoguePlaying(false);
  //   };
  // });

  return (
    <>
      <group position={position} rotation={rotation}>
        <RigidBody colliders="hull" type="fixed">
          <primitive ref={radiologistRef} object={scene} scale={scale} />
        </RigidBody>
        {/* {isHovered && (
          <Sparkles color={"yellow"} size={1} position={[0, 1, 0]} />
        )} */}
      </group>
    </>
  );
}
