import Room from "../Room/Room";
import { XRayBoard } from "./XRayBoard";
const XRayRoom = ({ length, width, height, position }) => {
  return (
    <>
      <Room length={20} width={20} height={3.6} position={[200, 0, -50]}></Room>
      <group position={[206, 0, -56]}>
        <XRayBoard></XRayBoard>
      </group>
    </>
  );
};

export default XRayRoom;
