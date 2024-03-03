import { useControls } from "leva";
import SeahorseCorridor from "./SeahorseCorridor";
import SeahorseWallsCeilingFloor from "./SeahorseWallsCeilingFloor";
import BedRow from "./BedRow";
import { Seahorse } from "./Seahorse";

const SeahorseContainer = () => {
  const { seahorsePosition, seahorseRotation } = useControls("Seahorse", {
    seahorsePosition: {
      value: {
        x: 64.06,
        y: -0.01,
        z: -28.67,
      },
      step: 0.01,
    },
    seahorseRotation: {
      value: 0.37,
      step: 0.01,
    },
  });

  const { wardPosition } = useControls("Ward", {
    wardPosition: {
      value: {
        x: -10.24,
        y: 0,
        z: -26.6,
      },
      step: 0.01,
    },
  });

  return (
    <>
      <group
        position={[seahorsePosition.x, seahorsePosition.y, seahorsePosition.z]}
        rotation-y={seahorseRotation}
      >
        {/* <SeahorseCorridor /> */}
        {/* <SeahorseWallsCeilingFloor /> */}
        <Seahorse />
      </group>
      {/* WEST */}
      {/* <BedRow
        position={[40.27, 0, -37.62]}
        rotation={[0, -2.78, 0]}
        scale={5}
        numberOfBeds={8}
      ></BedRow> */}
      {/* EAST */}
      {/* <BedRow
        position={[61.94, 0, -52.73]}
        rotation={[0, -2.78, 0]}
        scale={5}
        numberOfBeds={8}
      ></BedRow> */}
      {/* NORTH */}
      {/* <BedRow
        position={[29.56, 0, -58.09]}
        rotation={[0, -4.49, 0]}
        scale={5}
        numberOfBeds={7}
      ></BedRow> */}
    </>
  );
};

export default SeahorseContainer;
