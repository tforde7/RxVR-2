import { XRayMachine } from "./C_arm_xray_device";
import { XRayBoard } from "./XRayBoard";
import { DoctorTable } from "../ConsultingRooms/Hospital_table";
import { DeskChair } from "../ConsultingRooms/Deskwithchair";
import { CoatRack } from "./CoatRackStanding";
import { GreenChair } from "./GreenWChair";
import { Cabinet } from "./MedicalCabinet";
import { Mirror } from "./Mirror";
import { WoodenRoundTable } from "./WoodenRoundTable";
import { DeskCorner } from "./DeskCorner";
import { SingleBin } from "./SingleBin";
import { WoodenChair } from "../ConsultingRooms/WoodenChair";

const XRayRooms = (props) => {
  return (
    <>
      <group {...props}>
        <group>
          <XRayMachine
            position={[126, 0.1, -2]}
            rotation={[0, 1.88, 0]}
            scale={0.01}
          />
        </group>
        <group>
          <XRayBoard
            position={[126.75, 0.67, -3]}
            rotation={[-Math.PI / 2, 0, -1.28]}
            scale={0.05}
          />
          <XRayBoard
            position={[125.5, 0.67, 0.6]}
            rotation={[-Math.PI / 2, 0, -2.88]}
            scale={0.05}
          />
        </group>
        <group>
          <DeskChair
            position={[130, 0.67, -8.3]}
            rotation={[-Math.PI / 2, 0, 0.35]}
            scale={2.75}
          />
        </group>
        <group>
          <DoctorTable
            position={[128, 0.65, -7.7]}
            rotation={[-Math.PI / 2, 0, 0.28]}
            scale={0.07}
          />
        </group>
        <group>
          <CoatRack position={[125, 0.1, -6]} rotation={[0, 0, 0]} scale={2} />
          <CoatRack position={[123, 0.1, -10]} rotation={[0, 0, 0]} scale={2} />
        </group>
        <group>
          <Mirror
            position={[125, 0, -8.5]}
            rotation={[0, -0.28, 0]}
            scale={0.025}
          />
          <Mirror
            position={[124, 0, -11.5]}
            rotation={[0, -0.28, 0]}
            scale={0.025}
          />
        </group>
        <group>
          <DeskCorner
            position={[122.5, 0, -20]}
            rotation={[0, 0.28, 0]}
            scale={2}
          />
        </group>
        <group>
          <SingleBin
            position={[127.8, 0, -14]}
            rotation={[0, 0.28, 0]}
            scale={3}
          />
        </group>
        <group>
          <WoodenRoundTable
            position={[124, 0, -14]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={40}
          />
        </group>
        <group>
          <WoodenChair
            position={[125, 0, -14.5]}
            rotation={[-Math.PI / 2, 0, 0.28]}
            scale={70}
          />
          <WoodenChair
            position={[126, 0, -14.75]}
            rotation={[-Math.PI / 2, 0, 0.28]}
            scale={70}
          />
          <WoodenChair
            position={[127, 0, -15]}
            rotation={[-Math.PI / 2, 0, 0.28]}
            scale={70}
          />
        </group>
        <group>
          <Cabinet
            position={[123.4, 1.5, -18]}
            rotation={[-Math.PI / 2, 0, -1.28]}
            scale={0.8}
          />
          <Cabinet
            position={[125, 1.5, -12.35]}
            rotation={[-Math.PI / 2, 0, -2.88]}
            scale={0.8}
          />
          <Cabinet
            position={[60, 1.5, -15.25]}
            rotation={[-Math.PI / 2, 0, 0.28]}
            scale={0.8}
          />
          <Cabinet
            position={[68, 1.5, -17.5]}
            rotation={[-Math.PI / 2, 0, 0.28]}
            scale={0.8}
          />
          <Cabinet
            position={[76, 1.5, -19.8]}
            rotation={[-Math.PI / 2, 0, 0.28]}
            scale={0.8}
          />
          <Cabinet
            position={[84, 1.5, -22.15]}
            rotation={[-Math.PI / 2, 0, 0.28]}
            scale={0.8}
          />
          <Cabinet
            position={[92, 1.5, -24.45]}
            rotation={[-Math.PI / 2, 0, 0.28]}
            scale={0.8}
          />
        </group>
        <group>
          <GreenChair
            position={[122, 0.21, -19.25]}
            rotation={[0, 0, 0]}
            scale={0.6}
          />
        </group>
      </group>
    </>
  );
};

export default XRayRooms;
