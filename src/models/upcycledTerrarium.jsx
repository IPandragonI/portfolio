import {useEffect, useRef} from "react";
import {useAnimations, useGLTF} from "@react-three/drei";

import deskScene from "../assets/3d/upcycledTerrarium.glb";

export function UpcycledTerrarium(props) {
    const deskRef = useRef();
    const { scene, animations } = useGLTF(deskScene);
    const { actions } = useAnimations(animations, deskRef);

    useEffect(() => {
        actions["Animation"].play();
    }, [actions]);

    return (
        <mesh {...props} ref={deskRef}>
            <primitive object={scene} />
        </mesh>
    );
}
