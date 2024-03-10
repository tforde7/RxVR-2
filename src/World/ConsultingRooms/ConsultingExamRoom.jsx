import { DeskChair } from "./Deskwithchair";
import { WoodenChair } from "./WoodenChair";
import { Sink } from "./BathroomSink";
import { Bins } from "./Bins";
import { WheelChair } from "./Wheelchair";
import { ExamTable } from "./Hospital_exam_table";
import { DoctorTable } from "./Hospital_table";

const ConsultantExamRoom = (props) => {
  return (
    <>
      <group {...props}>
        <group>
          <DeskChair
            position={[126.46, 0.67, -14.65]}
            rotation={[-Math.PI / 2, 0, 1.92]}
            scale={2.75}
          />
        </group>

        <group>
          <Sink
            position={[124, 0, -14.62]}
            rotation={[-Math.PI / 2, 0, 0.3]}
            scale={60}
          />
        </group>
        <group>
          <Bins
            position={[122.25, 0.6, -14.4]}
            rotation={[0, 0.38, 0]}
            scale={0.5}
          />
        </group>
        <group>
          <WheelChair
            position={[123, 0.3, -16]}
            rotation={[0, -1.78, 0]}
            scale={0.004}
          />
        </group>
        <group>
          <ExamTable
            position={[124.5, 0.1, -12.75]}
            rotation={[0, 0.28, 0]}
            scale={0.35}
          />
        </group>
        <group>
          <DoctorTable
            position={[122.5, 0.3, -12.25]}
            rotation={[-Math.PI / 2, 0, -2.88]}
            scale={0.07}
          />
        </group>
      </group>
    </>
  );
};

export default ConsultantExamRoom;
