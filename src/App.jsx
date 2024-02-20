import { Leva } from "leva";
import "./App.css";
import { Controllers, VRButton, XR } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import World from "./World/World";

function App() {
  return (
    <>
      <Leva />
      <VRButton />
      <Canvas>
        <XR>
          <Controllers />
          <World />
        </XR>
      </Canvas>
    </>
  );
}

export default App;
