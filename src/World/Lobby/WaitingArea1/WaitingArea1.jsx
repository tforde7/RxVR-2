import { WaitingChairs } from "../Reception/WaitingChairs";

const WaitingArea1 = (props) => {
  return (
    <>
      <group {...props}>
        <group>
          <WaitingChairs />
          <WaitingChairs position={[0, 0, 2]} />
          <WaitingChairs position={[0, 0, 4]} />
        </group>
        <group position={[3, 0, 0]}>
          <WaitingChairs />
          <WaitingChairs position={[0, 0, 2]} />
          <WaitingChairs position={[0, 0, 4]} />
        </group>
      </group>
    </>
  );
};

export default WaitingArea1;
