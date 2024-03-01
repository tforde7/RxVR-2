import { Base, Geometry, Subtraction } from "@react-three/csg";

const Wall = (props) => {
  const { width, height, position, material, doorProps } = props;
  const { doorWidth, doorHeight, doorPosition } = doorProps;

  return (
    <mesh position={position} material={material}>
      {doorPosition ? (
        <Geometry>
          <Base>
            <boxGeometry args={[width, height, 0.125]} />
          </Base>
          <Subtraction>
            <boxGeometry
              args={[doorWidth, doorHeight, 0.125]}
              position={[doorPosition.x, doorPosition.y, doorPosition.z]}
            />
          </Subtraction>
        </Geometry>
      ) : (
        <boxGeometry args={[width, height, 0.125]} />
      )}
    </mesh>
  );
};

export default Wall;
