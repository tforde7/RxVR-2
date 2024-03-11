import React, { useEffect, useRef, useState } from "react";
import { Sparkles, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";
import { useInteraction } from "@react-three/xr";

export function XRayTV(props) {
  const { nodes, materials } = useGLTF("/models/tv/tv-transformed.glb");

  const [videoTexture, setVideoTexture] = useState(null);

  // INTERACTION

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();
  const videoMeshRef = useRef();
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

  useInteraction(tvRef, "onHover", (interactionEvent) => {
    if (interactionEvent.target.inputSource.handedness === "right") return;
    handleHover(true);
  });
  useInteraction(tvRef, "onBlur", (interactionEvent) => {
    if (interactionEvent.target.inputSource.handedness === "right") return;
    handleHover(false);
  });

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

  const { position, rotation, videoPosition, videoRotation } = useControls(
    "XRay TV",
    {
      position: {
        value: {
          x: 123,
          y: 1.7,
          z: -14.6,
        },
        step: 0.1,
      },
      rotation: {
        value: -2.86,
        step: 0.01,
      },
      videoPosition: {
        value: {
          x: -0.5,
          y: 0.4,
          z: 0.2,
        },
        step: 0.1,
      },
      videoRotation: {
        value: 0,
        step: 0.01,
      },
    }
  );

  // if (!videoTexture) return null;

  return (
    <>
      <group
        {...props}
        dispose={null}
        position={[position.x, position.y, position.z]}
        rotation-y={rotation}
        ref={tvRef}
        scale={0.25}
      >
        {isHovered && (
          <Sparkles color={"yellow"} size={1} position={[0, 0, 0]} />
        )}
        <mesh
          geometry={nodes.group1257628551.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          position={[videoPosition.x, videoPosition.y, videoPosition.z]}
          rotation-y={videoRotation}
          ref={videoMeshRef}
          scale={0.135}
        >
          <boxGeometry args={[9, 16, 0.01]} />
          <meshBasicMaterial map={videoTexture} />
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("/models/tv/tv-transformed.glb");
