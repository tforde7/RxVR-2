import { useControls } from "leva";
import Room from "../Primitives/Room";
import { XRayBoard } from "./XRayBoard";
const XRayRoom = () => {
  const { roomPosition, roomRotation } = useControls("XRayRoom", {
    roomPosition: {
      value: {
        x: 84.05,
        y: 0,
        z: -1.57,
      },
      step: 0.01,
    },
    roomRotation: {
      value: -2.86,
      step: 0.01,
    },
  });

  return (
    <>
      <group
        position={[roomPosition.x, roomPosition.y, roomPosition.z]}
        rotation-y={roomRotation}
      >
        <Room length={20} width={20} height={3.6}></Room>
        <XRayBoard></XRayBoard>
      </group>
    </>
  );
};

export default XRayRoom;
