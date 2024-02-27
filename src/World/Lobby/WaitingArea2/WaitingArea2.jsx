import WaitingArea1 from "../WaitingArea1/WaitingArea1";

const WaitingArea2 = (props) => {
  return (
    <>
      <group {...props}>
        <WaitingArea1></WaitingArea1>
      </group>
    </>
  );
};

export default WaitingArea2;
