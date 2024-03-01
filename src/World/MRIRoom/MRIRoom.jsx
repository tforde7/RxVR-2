import { useControls } from "leva";
import Room from "../Primitives/Room";
import { MRIMachine } from "./MRIMachine";

const MRIRoom = () => {
  const { position, rotation } = useControls("MRIRoom", {
    position: {
      value: {
        x: 101.52,
        y: 0,
        z: -24.61,
      },
      step: 0.01,
    },
    rotation: {
      value: -1.29,
      step: 0.01,
    },
  });

  return (
    <>
      <group
        position={[position.x, position.y, position.z]}
        rotation-y={rotation}
      >
        <Room length={20} width={20} height={3.6}></Room>
        <MRIMachine></MRIMachine>
      </group>
    </>
  );
};

export default MRIRoom;
