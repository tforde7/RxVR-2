import { DeskChair } from "./Deskwithchair";
import { WoodenChair } from "./WoodenChair";
import { Sink } from "./BathroomSink";
import { Bins } from "./Bins";
import { WSign } from "./WetFSign";
import { DoctorTable } from "./Hospital_table";

const ConsultantRoom = (props) => {
  return (
    <>
      <group {...props}>
        <group>
          <DeskChair
            position={[95, 0.67, -15.4]}
            rotation={[-Math.PI / 2, 0, 0.35]}
            scale={2.75}
          />
          <DeskChair
            position={[97, 0.67, -28.5]}
            rotation={[-Math.PI / 2, 0, 3.5]}
            scale={2.75}
          />
        </group>
        <group>
          <WoodenChair
            position={[96.5, 0, -18]}
            rotation={[-Math.PI / 2, 0, -1.28]}
            scale={70}
          />
          <WoodenChair
            position={[96.2, 0, -19]}
            rotation={[-Math.PI / 2, 0, -1.28]}
            scale={70}
          />
          <WoodenChair
            position={[95.9, 0, -20]}
            rotation={[-Math.PI / 2, 0, -1.28]}
            scale={70}
          />
          <WoodenChair
            position={[99, 0, -28]}
            rotation={[-Math.PI / 2, 0, -1.28]}
            scale={70}
          />
        </group>
        <group>
          <Sink
            position={[93, 0, -19]}
            rotation={[-Math.PI / 2, 0, 1.8]}
            scale={60}
          />
          <Sink
            position={[95, 0, -28]}
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
          <WSign
            position={[78, 0, -23]}
            rotation={[0, 0.28, 0.0]}
            scale={0.75}
          />
          <WSign
            position={[65, 0, -10]}
            rotation={[0, 0.28, 0.0]}
            scale={0.75}
          />
          <WSign
            position={[45, 0, -7]}
            rotation={[0, 0.28, 0.0]}
            scale={0.75}
          />
        </group>
        <group>
          <DoctorTable
            position={[93.75, 0.55, -17.5]}
            rotation={[-Math.PI / 2, 0, 1.88]}
            scale={0.07}
          />
        </group>
      </group>
    </>
  );
};

export default ConsultantRoom;
