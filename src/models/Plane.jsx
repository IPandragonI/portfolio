import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
export function Plane({...props }) {
    const ref = useRef();
    const { scene } = useGLTF(planeScene);

    return (
        <mesh {...props} ref={ref}>
            // use the primitive element when you want to directly embed a complex 3D
            model or scene
            <primitive object={scene} />
        </mesh>
    );
}
