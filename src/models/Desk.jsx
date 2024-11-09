
import {useRef} from "react";
import {useGLTF} from "@react-three/drei";

import deskScene from "../assets/3d/new_desk.glb";

export function Desk(props) {
    const deskRef = useRef();
    const { scene } = useGLTF(deskScene);

    return (
        <mesh {...props} ref={deskRef}>
            <primitive object={scene} />
        </mesh>
    );
}
