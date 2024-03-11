import { Sparkles, useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useInteraction, useXR } from "@react-three/xr";

export default function RadiologistX() {
  const worker = useGLTF("/models/npcs/Low Poly Women/AnimatedWoman.glb");

  console.log(worker);

  const workerRef = useRef();

  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const [dialoguePlaying, setDialoguePlaying] = useState(false); // Track dialogue state

  // Hover interaction handler

  const interactionSound = new Audio("/sounds/sfx/pop.mp3");
  interactionSound.volume = 0.3;

  const handleHover = (hovering) => {
    setIsHovered(hovering);
    if (hovering) {
      interactionSound.play();
    }
  };

  useInteraction(workerRef, "onHover", () => handleHover(true));
  useInteraction(workerRef, "onBlur", () => handleHover(false));

  const { actions } = useAnimations(worker.animations, workerRef);

  const ACTION_PREFIX = "HumanArmature|";

  const idleAnimation = actions[ACTION_PREFIX + "Female_Idle"];

  useEffect(() => {
    if (idleAnimation) {
      idleAnimation.play();
    }
  }, [idleAnimation]);

  const audio = new Audio("/sounds/radioligist-xray/radioligist-xray.mp3");

  const { player } = useXR();

  useInteraction(workerRef, "onSelect", (interactionEvent) => {
    if (interactionEvent.target.inputSource.handedness === "right") return;
    if (dialoguePlaying) return;

    workerRef.current.lookAt(player.children[0].position);

    audio.play();
    setDialoguePlaying(true);

    audio.onended = () => {
      setDialoguePlaying(false);
    };
  });

  // Define fixed values for scale, position, and rotation
  const scale = [0.3, 0.3, 0.3]; // Example scale
  const position = [125, 0, 0]; // Example position
  const rotation = [0, 0.28, 0]; // Example rotation (in radians)

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
      <group ref={workerRef} position={position} rotation={rotation}>
        <RigidBody colliders="hull" type="fixed">
          <primitive object={worker.scene} scale={scale} />
        </RigidBody>
        {isHovered && (
          <Sparkles color={"yellow"} size={1} position={[0, 1, 0]} />
        )}
      </group>
    </>
  );
}
