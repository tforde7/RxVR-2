import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useState } from "react";

export function useMaterials() {
  const [materials, setMaterials] = useState(null);

  const textures = useLoader(THREE.TextureLoader, [
    "/textures/indoor/wall/color.jpg",
    "/textures/indoor/wall/normal.jpg",
    "/textures/indoor/floor/color.jpg",
    "/textures/indoor/ceiling/color.jpg",
  ]);

  useEffect(() => {
    if (textures.every(Boolean)) {
      const [
        wallColorTexture,
        wallNormalTexture,
        floorColorTexture,
        ceilingColorTexture,
      ] = textures;

      [
        wallColorTexture,
        wallNormalTexture,
        floorColorTexture,
        ceilingColorTexture,
      ].forEach((texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(10, 10);
      });

      const wallMaterial = new THREE.MeshPhongMaterial({
        map: wallColorTexture,
        normalMap: wallNormalTexture,
        side: THREE.DoubleSide,
      });

      const floorMaterial = new THREE.MeshBasicMaterial({
        map: floorColorTexture,
      });

      const ceilingMaterial = new THREE.MeshBasicMaterial({
        map: ceilingColorTexture,
      });

      setMaterials({ wallMaterial, floorMaterial, ceilingMaterial });
    }
  }, [textures]);

  return materials;
}
