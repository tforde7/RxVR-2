import { MRIMachine } from "./MRIMachine";
import { DeskCorner } from "../XRay/DeskCorner";
import { GreenChair } from "../XRay/GreenWChair";
import { Cabinet } from "../XRay/MedicalCabinet";
import { WoodenChair } from "../ConsultingRooms/WoodenChair";
import { WoodenRoundTable } from "../XRay/WoodenRoundTable";
import { CoatRack } from "../XRay/CoatRackStanding";
import { DoctorTable } from "../ConsultingRooms/Hospital_table";
import { MRIControlPanel } from "./MRIControlPanel";
import { MRICounter } from "./MRICounter";

const MRIRoom = (props) => {
  return (
    <>
      <group {...props}>
        <group>
          <MRIMachine
            position={[133.5, 0.09, 21.5]}
            rotation={[-Math.PI / 2, 0, 0.28]}
            scale={1.2}
          />
          {/* <MRIMachine
            position={[113, 0.09, 17]}
            rotation={[-Math.PI / 2, 0, -1.28]}
            scale={1.2}
          /> */}
        </group>
        <group>
          <DeskCorner
            position={[123.3, 0.1, 15]}
            rotation={[0, 1.85, 0]}
            scale={1.3}
          />
        </group>
        <group>
          <Cabinet
            position={[124, 1.4, 17.7]}
            rotation={[-Math.PI / 2, 0, 1.88]}
            scale={1}
          />
        </group>
        <group>
          <GreenChair
            position={[123.6, 0.28, 15.2]}
            rotation={[0, 0.88, 0]}
            scale={0.6}
          />
        </group>
        <group>
          <WoodenChair
            position={[128.8, 0.1, 13.7]}
            rotation={[-Math.PI / 2, 0, 0.28]}
            scale={70}
          />
          <WoodenChair
            position={[126.5, 0.1, 14.4]}
            rotation={[-Math.PI / 2, 0, 0.28]}
            scale={70}
          />
          <WoodenChair
            position={[131, 0.1, 21.4]}
            rotation={[-Math.PI / 2, 0, -0.58]}
            scale={70}
          />
          <WoodenChair
            position={[131.4, 0.1, 23]}
            rotation={[-Math.PI / 2, 0, -1.88]}
            scale={70}
          />
        </group>
        <group>
          <WoodenRoundTable
            position={[127.5, 0.1, 14]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={40}
          />
          <WoodenRoundTable
            position={[130.5, 0.1, 22.25]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={40}
          />
        </group>
        <group>
          <CoatRack
            position={[116.5, 0.1, 20.4]}
            rotation={[0, 0, 0]}
            scale={2}
          />
          <CoatRack
            position={[116.25, 0.1, 19.5]}
            rotation={[0, 0, 0]}
            scale={2}
          />
        </group>
        <group>
          <MRICounter
            position={[134.3, 0.1, 17.3]}
            rotation={[0, -1.3, 0]}
            scale={0.2}
          />
          <MRICounter
            position={[115, 0.1, 14.8]}
            rotation={[0, 0.28, 0]}
            scale={0.2}
          />
        </group>
        <group>
          <MRIControlPanel
            position={[133, 0.9, 15.9]}
            rotation={[0, 1.88, 0]}
            scale={0.25}
          />
          <MRIControlPanel
            position={[118.5, 0.9, 14.8]}
            rotation={[0, 0.28, 0]}
            scale={0.25}
          />
        </group>
      </group>
    </>
  );
};

export default MRIRoom;
