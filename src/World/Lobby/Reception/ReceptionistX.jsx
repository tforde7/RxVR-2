import { Sparkles, useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useInteraction, useXR } from "@react-three/xr";

export default function ReceptionistX() {
  const worker = useGLTF("/models/npcs/Low Poly Men/Casual Character.glb");

  console.log(worker);

  const workerRef = useRef();

  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const [dialoguePlaying, setDialoguePlaying] = useState(false); // Track dialogue state

  // Hover interaction handler

  const interactionSound = new Audio("/sounds/sfx/pop.mp3");
  interactionSound.volume = 0.5;

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

  const idleAnimation = actions[ACTION_PREFIX + "Man_Idle"];

  useEffect(() => {
    if (idleAnimation) {
      idleAnimation.play();
    }
  }, [idleAnimation]);

  const audio = new Audio("/sounds/receptionist-xray/receptionist-xray.mp3");

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
  const scale = [0.9, 0.9, 0.9]; // Example scale
  const position = [122.5, 0, -19.5]; // Example position
  const rotation = [0, 0, 0]; // Example rotation (in radians)

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
          object={worker.scene}
          scale={scale}
          position={position}
          rotation={rotation}
        />
        {isHovered && <Sparkles color={"yellow"} />}
      </RigidBody>
    </>
  );
}
