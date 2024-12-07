import React, {useEffect, useRef} from 'react';
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";

THREE.Cache.enabled = true;

const SimpleSkillView = ({ article, icons }) => {
    const mountRef = useRef(null);
    useEffect(() => {
        const mount = mountRef.current;
        const scene = new THREE.Scene();
        const camera = createCamera();
        const renderer = createRenderer();
        mount.appendChild(renderer.domElement);

        addLights(scene);
        const planets = createPlanets(scene, icons);
        const controls = createControls(camera, renderer);
        animate(renderer, scene, camera, controls);
        return () => {
            mount.removeChild(renderer.domElement);
        };
    }, [article, icons]);

    return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

const createRenderer = () => {
    const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    setRendererSize(renderer);
    return renderer;
};

const setRendererSize = (renderer) => {
    if (window.innerWidth < 1024) {
        renderer.setSize(700, 466);
    } else {
        renderer.setSize(900, 600);
    }
};

const createCamera = () => {
    const camera = new THREE.PerspectiveCamera(70, 1.5, 0.1, 1000);
    camera.position.set(0, 0, 6);
    return camera;
};

const addLights = (scene) => {
    const dirLight = new THREE.DirectionalLight(0xffffff, 4);
    dirLight.position.set(0, 0, 5).normalize();
    scene.add(dirLight);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 3);
    dirLight2.position.set(0, 2, -5).normalize();
    scene.add(dirLight2);
};

const createPlanets = (scene, icons) => {
    const isMobile = window.innerWidth <= 768;
    return icons.map((icon, index) => {
        const planet = createPlanet(icon.src, index);
        if (isMobile) {
            planet.position.x = (index % 2) * 2 - 1;
            planet.position.y = Math.floor(index / 2) * 2;
        }
        scene.add(planet);
        return planet;
    });
};

const createPlanet = (src, index) => {
    const geometry = new THREE.SphereGeometry(.8, 16, 16);
    const texture = new THREE.TextureLoader().load(src);
    const material = new THREE.MeshPhongMaterial({map: texture});
    const planet = new THREE.Mesh(geometry, material);
    planet.position.x = index * 2 - 2;
    planet.rotation.y = -Math.PI / 2;
    return planet;
}

const createControls = (planets, renderer) => {
    const controls = new OrbitControls(planets, renderer.domElement);
    controls.enableDamping = true;
    controls.minDistance = 5;
    controls.maxDistance = 10;
    return controls;
};

const animate = (renderer, scene, camera, controls) => {
    const animateScene = () => {
        requestAnimationFrame(animateScene);
        controls.update();
        renderer.render(scene, camera);
    };
    animateScene();
};

export default SimpleSkillView;