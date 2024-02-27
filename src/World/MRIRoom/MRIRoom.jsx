import Room from "../Room/Room";
import { MRIMachine } from "./MRIMachine";

const MRIRoom = () => {
  return (
    <>
      <Room length={20} width={20} height={3.6} position={[150, 0, -80]}></Room>
      <group position={[156, 0, -86]}>
        <MRIMachine></MRIMachine>
      </group>
    </>
  );
};

export default MRIRoom;
