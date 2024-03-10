import { XRayMachine } from "./C_arm_xray_device";
import { XRayBoard } from "./XRayBoard";
import { DoctorTable } from "../ConsultingRooms/Hospital_table";
import { DeskChair } from "../ConsultingRooms/Deskwithchair";
import { CoatRack } from "./CoatRackStanding";

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
            position={[128, 0.55, -7.7]}
            rotation={[-Math.PI / 2, 0, 0.28]}
            scale={0.07}
          />
        </group>
        <group>
          <CoatRack position={[125, 0, -6]} rotation={[0, 0, 0]} scale={2} />
          <CoatRack position={[123, 0, -10]} rotation={[0, 0, 0]} scale={2} />
        </group>
      </group>
    </>
  );
};

export default XRayRooms;
