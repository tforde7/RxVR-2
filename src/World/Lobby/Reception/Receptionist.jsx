import { Sparkles, useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useInteraction } from "@react-three/xr";

export default function Receptionist() {
  const { animations, scene } = useGLTF(
    "/models/npcs/Low Poly Women/Woman in Dress.glb"
  );

  const receptionistRef = useRef();

  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const [dialoguePlaying, setDialoguePlaying] = useState(false); // Track dialogue state

  // Hover interaction handler
  const handleHover = (hovering) => {
    setIsHovered(hovering);
    if (hovering) {
      interactionSound.play();
    }
  };

  useInteraction(receptionistRef, "onHover", () => handleHover(true));
  useInteraction(receptionistRef, "onBlur", () => handleHover(false));

  const { actions } = useAnimations(animations, receptionistRef);

  const ACTION_PREFIX = "HumanArmature|";

  const idleAnimation = actions[ACTION_PREFIX + "Female_Idle"];

  useEffect(() => {
    if (idleAnimation) {
      idleAnimation.play();
    }
  }, [idleAnimation]);

  // Define fixed values for scale, position, and rotation
  const scale = [0.3, 0.3, 0.3]; // Example scale
  const position = [34.5, 0, -5.25]; // Example position
  const rotation = [0, 0.28, 0]; // Example rotation (in radians)

  const receptionistHello = new Audio(
    "/sounds/receptionist-main/receptionist-main-hello.mp3"
  );

  const interactionSound = new Audio("/sounds/sfx/pop.mp3");
  interactionSound.volume = 0.5;

  useInteraction(receptionistRef, "onHover", (interactionEvent) => {
    if (interactionEvent.target.inputSource.handedness === "right") return;
    interactionSound.play();
  });

  useInteraction(receptionistRef, "onSelect", (interactionEvent) => {
    if (interactionEvent.target.inputSource.handedness === "right") return;
    if (dialoguePlaying) return;

    receptionistHello.play();
    setDialoguePlaying(true);

    receptionistHello.onended = () => {
      setDialoguePlaying(false);
    };
  });

  return (
    <>
      <group position={position} rotation={rotation}>
        <RigidBody colliders="hull" type="fixed">
          <primitive ref={receptionistRef} object={scene} scale={scale} />
        </RigidBody>
        {isHovered && (
          <Sparkles color={"yellow"} size={1} position={[0, 1, 0]} />
        )}
      </group>
    </>
  );
}
