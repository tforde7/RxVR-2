import { OrbitControls, Sky } from "@react-three/drei";
import { TeleportationPlane, useXR } from "@react-three/xr";
import { useControls } from "leva";
import { useEffect } from "react";
import Outside from "./Outside/Outside";
import { Physics } from "@react-three/rapier";
import { BuildingsTemplate } from "../BuildingsTemplate/BuildingsTemplate";
import LectureTheatre from "./LectureTheatre/LectureTheatre";
import Lobby from "./Lobby/Lobby";

const World = () => {
  const { cameraTarget, orbitControlsEnabled } = useControls({
    cameraTarget: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.1,
    },
    orbitControlsEnabled: true,
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
        <BuildingsTemplate />
        <LectureTheatre />
        <Lobby />
      </Physics>
      {isPresenting && <TeleportationPlane rightHand />}
    </>
  );
};

export default World;
