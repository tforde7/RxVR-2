import { Treadmills } from "./Treadmill";
import { Ellipticals } from "./Elliptical";

const Gym = (props) => {
  return (
    <>
      <group {...props}>
        <group>
          <Treadmills position={[68.5, 0, -35.7]} rotation={[0, 1.85, 0]} />
          <Treadmills position={[67, 0, -35.25]} rotation={[0, 1.85, 0]} />
          <Treadmills position={[70, 0, -36]} rotation={[0, 1.85, 0]} />
        </group>
        <group>
          <Ellipticals
            scale={0.1}
            position={[75, 0, -38]}
            rotation={[0, 0.28, 0]}
          />
          <Ellipticals
            scale={0.1}
            position={[73.5, 0, -37.5]}
            rotation={[0, 0.28, 0]}
          />
          <Ellipticals
            scale={0.1}
            position={[72, 0, -37]}
            rotation={[0, 0.28, 0]}
          />
        </group>
      </group>
    </>
  );
};

export default Gym;
