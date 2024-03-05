import { useControls } from "leva";
import SeahorseCorridor from "./SeahorseCorridor";
import SeahorseWallsCeilingFloor from "./SeahorseWallsCeilingFloor";
import BedRow from "./BedRow";
import { SeahorseOuter } from "./SeahorseOuter";

const SeahorseContainer = () => {
  const { seahorsePosition, seahorseRotation } = useControls("Seahorse", {
    seahorsePosition: {
      value: {
        x: 55.9,
        y: -0.01,
        z: -14.94,
      },
      step: 0.01,
    },
    seahorseRotation: {
      value: 0.27,
      step: 0.01,
    },
  });

  const { wardPosition } = useControls("Ward", {
    wardPosition: {
      value: {
        x: -10.2,
        y: 0,
        z: -26.6,
      },
      step: 0.1,
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
        {/* <Seahorse /> */}
        <SeahorseOuter />
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
