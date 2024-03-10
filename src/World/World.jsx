import { OrbitControls, Sky } from "@react-three/drei";
import { TeleportationPlane, useXR } from "@react-three/xr";
import { useControls } from "leva";
import { useEffect } from "react";
import Outside from "./Outside/Outside";
import { Physics } from "@react-three/rapier";
import LectureTheatre from "./LectureTheatre/LectureTheatre";
import Lobby from "./Lobby/Lobby";
import { BuildingsCombined } from "./BuildingsCombined";
import { Beatrizz } from "./Tour/Beatrizz";
import { MRITV } from "./MRI/MRITV";
import { XRayTV } from "./XRay/XRayTV";

const World = () => {
  const { cameraTarget, orbitControlsEnabled } = useControls({
    cameraTarget: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.1,
    },
    orbitControlsEnabled: true,
  });

  const { playerPosition, playerRotation } = useControls("Player", {
    playerPosition: {
      value: {
        x: 15,
        y: 1.6,
        z: 0,
      },
      step: 0.1,
    },
    playerRotation: {
      value: {
        x: 0,
        y: 0,
        z: 0,
      },
      step: 0.01,
    },
  });

  const { isPresenting, player } = useXR();

  useEffect(() => {
    if (!isPresenting) {
      player.position.set(0, 1.6, 0);
    } else {
      player.position.set(0, 0, 0);
    }
  }, [isPresenting]);
  return (
    <>
      <Sky />
      <OrbitControls
        enabled={orbitControlsEnabled}
        target={[cameraTarget.x, cameraTarget.y, cameraTarget.z]}
      />
      <Physics>
        <Outside />
        <LectureTheatre />
        <Lobby />
        <BuildingsCombined />
        <Beatrizz />
        <MRITV />
        <XRayTV />
        {/* <TestTV /> */}
      </Physics>
      {isPresenting && <TeleportationPlane rightHand />}
    </>
  );
};

export default World;

// const World = () => {
//   const { cameraTarget, orbitControlsEnabled } = useControls({
//     cameraTarget: {
//       value: { x: 0, y: 0, z: 0 },
//       step: 0.1,
//     },
//     orbitControlsEnabled: false,
//   });

//   const { playerPosition, playerRotation } = useControls("Player", {
//     playerPosition: {
//       value: {
//         x: 15,
//         y: 1.6,
//         z: 0,
//       },
//       step: 0.1,
//     },
//     playerRotation: {
//       value: {
//         x: 0,
//         y: 0,
//         z: 0,
//       },
//       step: 0.01,
//     },
//   });

//   const { isPresenting, player } = useXR();

//   useEffect(() => {
//     if (!isPresenting) {
//       player.position.set(playerPosition.x, 1.6, 0);
//     } else {
//       player.position.set(playerPosition.x, 0, 0);
//     }
//   }, [isPresenting]);

//   const teleportationPlane = useRef();

//   const teleportSound = new Audio("/sounds/sfx/whoosh.mp3");

//   useInteraction(teleportationPlane, "onSqueeze", () => {
//     teleportSound.play();
//   });

//   return (
//     <>
//       <Sky />
//       <OrbitControls
//         enabled={orbitControlsEnabled}
//         target={[cameraTarget.x, cameraTarget.y, cameraTarget.z]}
//       />
//       <Physics>
//         <Outside />
//         <LectureTheatre />
//         <Lobby />
//         <BuildingsCombined />
//         <Beatrizz />
//         <MRITV />
//         <XRayTV />
//         {/* <TestTV /> */}
//       </Physics>
//       {isPresenting && (
//         <TeleportationPlane ref={teleportationPlane} rightHand />
//       )}
//     </>
//   );
// };

// export default World;
