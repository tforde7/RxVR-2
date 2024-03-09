import { useControls } from "leva";
import WaitingArea1 from "../WaitingArea1/WaitingArea1";
import WaitingArea2 from "../WaitingArea2/WaitingArea2";
import Doctor from "./Doctor";
import ReceptionDesk from "./ReceptionDesk";
import ReceptionPlant from "./ReceptionPlant";
import ReceptionSign from "./ReceptionSign";
import Receptionist from "./Receptionist";
import Gym from "../../Seahorse/GymF/Gym";

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
