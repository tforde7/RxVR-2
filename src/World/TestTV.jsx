// import React, { useEffect, useRef, useState } from "react";
// import { useGLTF } from "@react-three/drei";
// import * as THREE from "three";

// export function TestTV(props) {
//   const { nodes, materials } = useGLTF("/models/tv/tv.glb");

//   const [videoTexture, setVideoTexture] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef();

//   useEffect(() => {
//     const videoElement = document.createElement("video");
//     videoElement.src = "/videos/mri/video.mp4";
//     videoElement.crossOrigin = "anonymous";

//     const texture = new THREE.VideoTexture(videoElement);
//     setVideoTexture(texture);

//     videoRef.current = videoElement;

//     return () => {
//       videoElement.pause();
//       videoElement.removeAttribute("src");
//       videoElement.load();
//     };
//   }, []);

//   const togglePlay = () => {
//     const videoElement = videoRef.current;
//     if (videoElement.paused) {
//       videoElement.play();
//       setIsPlaying(true);
//     } else {
//       videoElement.pause();
//       setIsPlaying(false);
//     }
//   };

//   if (!videoTexture) return null;

//   return (
//     <group {...props} dispose={null} position={[15, 1.5, -3]} rotation-y={0}>
//       <mesh
//         geometry={nodes.Tv1.geometry}
//         material={materials.Tv1}
//         rotation={[-Math.PI / 2, 0, 0]}
//         scale={50}
//       ></mesh>
//       <mesh onClick={togglePlay} scale={0.035} position-z={0.01}>
//         <planeGeometry args={[9, 16]} />
//         <meshBasicMaterial map={videoTexture} />
//       </mesh>
//     </group>
//   );
// }
