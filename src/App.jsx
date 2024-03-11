import { Leva } from "leva";
import "./App.css";
import { Controllers, VRButton, XR } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import World from "./World/World";
import { Perf } from "r3f-perf";
import { Environment, Loader } from "@react-three/drei";

function App() {
  return (
    <>
      <VRButton />
      <Canvas camera={{ fov: 65, near: 0.1, far: 300 }}>
        <Environment preset="city" />
        <XR>
          <ambientLight />
          {/* <Perf position="top-left" /> */}
          <Controllers />
          <World />
        </XR>
      </Canvas>
      <Loader />
      <Leva hidden />
    </>
  );
}

export default App;
