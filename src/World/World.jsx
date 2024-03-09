import { OrbitControls, Sky } from "@react-three/drei";
import { TeleportationPlane, useXR } from "@react-three/xr";
import { useControls } from "leva";
import { useEffect } from "react";
import Outside from "./Outside/Outside";
import { Physics } from "@react-three/rapier";
import LectureTheatre from "./LectureTheatre/LectureTheatre";
import Lobby from "./Lobby/Lobby";
import { Hoppy } from "./Tour/Hoppy";
import { BuildingsCombined } from "./BuildingsCombined";

const World = () => {
  const { cameraTarget, orbitControlsEnabled } = useControls({
    cameraTarget: {
      value: { x: 75, y: 0, z: -40 },
      step: 0.1,
    },
    orbitControlsEnabled: true,
  });

  const { position, rotation } = useControls("Buildings", {
    position: {
      value: {
        x: 111.5,
        y: 0,
        z: -28.5,
      },
      step: 0.01,
    },
    rotation: {
      value: -1.29,
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
        <Hoppy scale={0.5} position-z={-3} />
      </Physics>
      {isPresenting && <TeleportationPlane rightHand />}
    </>
  );
};

export default World;
