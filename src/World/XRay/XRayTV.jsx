import React, { useEffect, useRef, useState } from "react";
import { Sparkles, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";
import { useInteraction } from "@react-three/xr";

export function XRayTV(props) {
  const { nodes, materials } = useGLTF("/models/tv/tv.glb");

  const [videoTexture, setVideoTexture] = useState(null);

  // INTERACTION

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();
  const tvRef = useRef();
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const interactionSound = new Audio("/sounds/sfx/pop.mp3");
  interactionSound.volume = 0.5;

  const handleHover = (hovering) => {
    setIsHovered(hovering);
    if (hovering) {
      interactionSound.play();
    }
  };

  const togglePlay = () => {
    const videoElement = videoRef.current;
    if (videoElement.paused) {
      videoElement.play();
      setIsPlaying(true);
    } else {
      videoElement.pause();
      setIsPlaying(false);
    }
  };

  useInteraction(tvRef, "onHover", () => handleHover(true));
  useInteraction(tvRef, "onBlur", () => handleHover(false));

  useInteraction(tvRef, "onSelect", (interactionEvent) => {
    if (interactionEvent.target.inputSource.handedness === "right") return;
    togglePlay();
  });

  useEffect(() => {
    const videoElement = document.createElement("video");
    videoElement.src = "/videos/xray/video.mp4";
    videoElement.crossOrigin = "anonymous";

    const texture = new THREE.VideoTexture(videoElement);
    setVideoTexture(texture);

    videoRef.current = videoElement;

    return () => {
      videoElement.pause();
      videoElement.removeAttribute("src");
      videoElement.load();
    };
  }, []);

  const { position, rotation } = useControls("XRay TV", {
    position: {
      value: {
        x: 123,
        y: 2.1,
        z: -14.6,
      },
      step: 0.1,
    },
    rotation: {
      value: -2.86,
      step: 0.01,
    },
  });

  if (!videoTexture) return null;

  return (
    <group
      ref={tvRef}
      {...props}
      dispose={null}
      position={[position.x, position.y, position.z]}
      rotation-y={rotation}
    >
      {isHovered && <Sparkles color={"yellow"} size={1} position={[0, 0, 0]} />}
      <mesh
        geometry={nodes.Tv1.geometry}
        material={materials.Tv1}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={50}
      ></mesh>
      <mesh scale={0.035} position-z={0.01}>
        <planeGeometry args={[9, 16]} />
        <meshBasicMaterial map={videoTexture} />
      </mesh>
    </group>
  );
}
