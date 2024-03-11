import { useControls } from "leva";
import WaitingArea1 from "../WaitingArea1/WaitingArea1";
import WaitingArea2 from "../WaitingArea2/WaitingArea2";
import Doctor from "./Doctor";
import ReceptionDesk from "./ReceptionDesk";
import ReceptionPlant from "./ReceptionPlant";
import ReceptionSign from "./ReceptionSign";
import Receptionist from "./Receptionist";
import Gym from "../../Seahorse/GymF/Gym";
import ConsultantRoom from "../../ConsultingRooms/ConsultantRoom";
import ConsultantExamRoom from "../../ConsultingRooms/ConsultingExamRoom";
import XRayRooms from "../../XRay/XRayRooms";
import DayWardRoom from "../../Seahorse/DayWard/DayWardRoom";
import MRIRoom from "../../MRI/MRIRooms";
import RadiologistX from "./RadiologistX";
import RadiographerX from "./RadiographerX";
import RadiographerM from "./RadiographerM";
import RadiologistM from "./RadiologistM";
import RadiologistM1 from "./RadiologistM1";
import RadiographerM1 from "./RadiographerM1";
import ReceptionistM1 from "./ReceptionistM1";
import ReceptionistX from "./ReceptionistX";
import Worker1 from "./SeahorseWorker1";
import Worker2 from "./SeahorseWorker2";

const Reception = () => {
  const { waitingArea1Position, waitingArea1Rotation } = useControls(
    "Waiting Area 1",
    {
      waitingArea1Position: {
        value: {
          x: 28.7,
          y: 0,
          z: 4.3,
        },
        step: 0.1,
      },
      waitingArea1Rotation: {
        value: -2.85,
        step: 0.01,
      },
    }
  );

  const { waitingArea2Position, waitingArea2Rotation } = useControls(
    "Waiting Area 2",
    {
      waitingArea2Position: {
        value: {
          x: 48.4,
          y: 0,
          z: -1.1,
        },
        step: 0.1,
      },
      waitingArea2Rotation: {
        value: -2.85,
        step: 0.01,
      },
    }
  );

  return (
    <>
      <ReceptionDesk />
      <ReceptionSign />
      <ReceptionPlant />
      <Doctor />
      <Receptionist />
      <Gym />
      <ConsultantRoom />
      <ConsultantExamRoom />
      <XRayRooms />
      <DayWardRoom />
      <MRIRoom />
      <RadiologistX />
      <RadiographerX />
      <RadiographerM />
      <RadiologistM />
      <RadiologistM1 />
      <RadiographerM1 />
      <ReceptionistM1 />
      <ReceptionistX />
      <Worker1 />
      <Worker2 />

      <WaitingArea1
        position={[
          waitingArea1Position.x,
          waitingArea1Position.y,
          waitingArea1Position.z,
        ]}
        rotation-y={waitingArea1Rotation}
      />
      <WaitingArea2
        position={[
          waitingArea2Position.x,
          waitingArea2Position.y,
          waitingArea2Position.z,
        ]}
        rotation-y={waitingArea2Rotation}
      />
    </>
  );
};

export default Reception;
