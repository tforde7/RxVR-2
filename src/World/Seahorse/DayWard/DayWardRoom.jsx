import { Bed } from "./Bed";
import { ActualSeahorse } from "./ActualSeahorse";
import { Curtains } from "./Curtains";
import { GreenChair } from "../../XRay/GreenWChair";
import { Cabinet } from "../../XRay/MedicalCabinet";
import { DeskCorner } from "../../XRay/DeskCorner";
import { DoctorTable } from "../../ConsultingRooms/Hospital_table";
import { SingleBin } from "../../XRay/SingleBin";
import { DeskChair } from "../../ConsultingRooms/Deskwithchair";
import { Sink } from "../../ConsultingRooms/BathroomSink";

const DayWardRoom = (props) => {
  return (
    <>
      <group {...props}>
        <group>
          <Bed
            position={[54.2, -0.01, -62.25]}
            rotation={[0, -2.88, 0]}
            scale={3.5}
          />
          <Bed
            position={[54.9, -0.01, -60.1]}
            rotation={[0, -2.88, 0]}
            scale={3.5}
          />
          <Bed
            position={[55.6, -0.01, -57.7]}
            rotation={[0, -2.88, 0]}
            scale={3.5}
          />
          <Bed
            position={[56.3, -0.01, -55.5]}
            rotation={[0, -2.88, 0]}
            scale={3.5}
          />
          <Bed
            position={[57, -0.01, -53.2]}
            rotation={[0, -2.88, 0]}
            scale={3.5}
          />
          <Bed
            position={[57.7, -0.01, -50.8]}
            rotation={[0, -2.88, 0]}
            scale={3.5}
          />
          <Bed
            position={[58.4, -0.01, -48.6]}
            rotation={[0, -2.88, 0]}
            scale={3.5}
          />
          <Bed
            position={[59.1, -0.01, -46.4]}
            rotation={[0, -2.88, 0]}
            scale={3.5}
          />
        </group>
        <group>
          <ActualSeahorse
            position={[49.5, 0.7, -58]}
            rotation={[0, 1.88, 0]}
            scale={0.002}
          />
          <ActualSeahorse
            position={[47.55, 1.4, -61]}
            rotation={[0, -2.88, 0]}
            scale={0.0008}
          />
          <ActualSeahorse
            position={[67, 1.4, -69.25]}
            rotation={[0, -1.28, 0]}
            scale={0.0015}
          />
          <ActualSeahorse
            position={[80.8, 2.3, -25.5]}
            rotation={[0, -1.28, 0]}
            scale={0.0005}
          />
        </group>
        <group>
          <Curtains
            position={[54.5, 0, -57.42]}
            rotation={[0, 0.26, 0]}
            scale={0.25}
          />
          <Curtains
            position={[53.9, 0, -59.8]}
            rotation={[0, 0.3, 0]}
            scale={0.25}
          />
          <Curtains
            position={[57.8, 0, -46]}
            rotation={[0, 0.28, 0]}
            scale={0.25}
          />
        </group>
        <group>
          <DeskCorner
            position={[49.5, 0, -56.2]}
            rotation={[0, -2.8, 0]}
            scale={1.5}
          />
          <DeskCorner
            position={[66.4, 0, -66]}
            rotation={[0, 1.88, 0]}
            scale={1.5}
          />
        </group>
        <group>
          <Cabinet
            position={[49.7, 1.4, -53]}
            rotation={[-Math.PI / 2, 0, 1.88]}
            scale={1}
          />
          <Cabinet
            position={[51.3, 0.7, -55.2]}
            rotation={[-Math.PI / 2, 0, 1.88]}
            scale={1}
          />
        </group>
        <group>
          <GreenChair
            position={[49.5, 0.21, -56.2]}
            rotation={[0, -2.8, 0]}
            scale={0.6}
          />
          <GreenChair
            position={[67, 0.21, -65.8]}
            rotation={[0, 0, 0]}
            scale={0.6}
          />
        </group>
        <group>
          <DoctorTable
            position={[50.75, 0.5, -55]}
            rotation={[-Math.PI / 2, 0, -1.28]}
            scale={0.06}
          />
        </group>
        <group>
          <SingleBin
            position={[66, 0.15, -64.5]}
            rotation={[0, -1.28, 0]}
            scale={2}
          />

          <group>
            <DeskChair
              position={[65, 0.43, -65.42]}
              rotation={[-Math.PI / 2, 0, 3.5]}
              scale={2}
            />
          </group>
        </group>
      </group>
    </>
  );
};

export default DayWardRoom;
