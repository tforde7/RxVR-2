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
            position={[101.5, 0.67, -20]}
            rotation={[-Math.PI / 2, 0, 1.92]}
            scale={2.75}
          />
        </group>

        <group>
          <Sink
            position={[100, 0, -23]}
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
          <WheelChair
            position={[98.5, 0.3, -22.5]}
            rotation={[0, 0.28, 0]}
            scale={0.004}
          />
        </group>
        <group>
          <ExamTable
            position={[100, 0.1, -16]}
            rotation={[0, 0.28, 0]}
            scale={0.35}
          />
        </group>
        <group>
          <DoctorTable
            position={[102.5, 0.55, -17]}
            rotation={[-Math.PI / 2, 0, -2.88]}
            scale={0.07}
          />
        </group>
        <group>
          <WoodenChair
            position={[97.5, 0, -18]}
            rotation={[-Math.PI / 2, 0, 1.88]}
            scale={70}
          />
          <WoodenChair
            position={[97.25, 0, -19]}
            rotation={[-Math.PI / 2, 0, 1.88]}
            scale={70}
          />
          <WoodenChair
            position={[97, 0, -20]}
            rotation={[-Math.PI / 2, 0, 1.88]}
            scale={70}
          />
        </group>
      </group>
    </>
  );
};

export default ConsultantExamRoom;
