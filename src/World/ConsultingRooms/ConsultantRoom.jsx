import { DeskChair } from "./Deskwithchair";
import { WoodenChair } from "./WoodenChair";
import { Sink } from "./BathroomSink";
import { Bins } from "./Bins";
import { WSign } from "./WetFSign";

const ConsultantRoom = (props) => {
  return (
    <>
      <group {...props}>
        <group>
          <DeskChair
            position={[125, 0.67, -6.65]}
            rotation={[-Math.PI / 2, 0, 0.35]}
            scale={2.75}
          />
          <DeskChair
            position={[124, 0.67, -10.6]}
            rotation={[-Math.PI / 2, 0, 3.5]}
            scale={2.75}
          />
        </group>
        <group>
          <WoodenChair
            position={[124.75, 0, -8.8]}
            rotation={[-Math.PI / 2, 0, 0.28]}
            scale={70}
          />
          <WoodenChair
            position={[123.75, 0, -8.5]}
            rotation={[-Math.PI / 2, 0, 0.28]}
            scale={70}
          />
          <WoodenChair
            position={[122.5, 0, -11]}
            rotation={[-Math.PI / 2, 0, 0.28]}
            scale={70}
          />
        </group>
        <group>
          <Sink
            position={[122.95, 0, -5.5]}
            rotation={[-Math.PI / 2, 0, 1.8]}
            scale={60}
          />
        </group>
        <group>
          <Bins
            position={[118.25, 0.6, -15.5]}
            rotation={[0, -1.2, 0]}
            scale={0.5}
          />
        </group>
        <group>
          <WSign position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.75} />
        </group>
      </group>
    </>
  );
};

export default ConsultantRoom;
