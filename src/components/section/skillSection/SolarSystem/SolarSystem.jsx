import React, {useEffect, useRef} from "react";
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";

THREE.Cache.enabled = true;
const orbitRadius = window.innerWidth < 768 ? 2 : 2.5;

const SolarSystem = ({ icons }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        const scene = new THREE.Scene();
        const camera = createCamera();
        const renderer = createRenderer();
        mount.appendChild(renderer.domElement);

        addLights(scene);
        const sun = createSun(scene);
        const planets = createPlanets(scene, icons);
        createOrbits(scene, icons);
        const rocket = createRocket(scene);

        const controls = createControls(camera, renderer);
        animate(renderer, scene, camera, sun, planets, rocket, controls);

        return () => {
            mount.removeChild(renderer.domElement);
        };
    }, [icons]);

    return <div ref={mountRef} />;
};

const createCamera = () => {
    const camera = new THREE.PerspectiveCamera(70, 1.5, 0.1, 1000);
    camera.position.set(0, 0, 6);
    return camera;
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

const addLights = (scene) => {
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 5);
    dirLight1.position.set(-5, -2, 0).normalize();
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 2);
    dirLight2.position.set(10, 2, 5).normalize();
    scene.add(dirLight2);
};

const createSun = (scene) => {
    const sunGeometry = new THREE.SphereGeometry(1, 128, 128);
    const sunMaterial = new THREE.MeshBasicMaterial({color: 0xE284EB});
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);
    return sun;
};

const createPlanets = (scene, icons) => {
    return icons.map((icon, index) => {
        const texture = new THREE.TextureLoader().load(icon.src);
        const planetGeometry = new THREE.SphereGeometry(0.35, 16, 16);
        const planetMaterial = new THREE.MeshStandardMaterial({map: texture});
        const planet = new THREE.Mesh(planetGeometry, planetMaterial);

        const orbitIndex = Math.floor(index / Math.ceil(icons.length / icons.length));
        const orbitRadius = 2 + orbitIndex * 0.7;
        const angle = (index / icons.length) * 2 * Math.PI;
        planet.position.set(orbitRadius * Math.cos(angle), orbitRadius * Math.sin(angle), 0);

        const planetGroup = new THREE.Group();
        planetGroup.add(planet);
        planetGroup.rotation.set(Math.PI / 3, Math.PI / 3, 0);

        scene.add(planetGroup);
        return planetGroup;
    });
};

const createOrbits = (scene, icons) => {
    icons.map((icon, i) => {
        const orbitIndex = Math.floor(i / Math.ceil(icons.length / icons.length));
        const innerRadius = 2 + orbitIndex * 0.7 - 0.01;
        const outerRadius = 2 + orbitIndex * 0.7 + 0.01;
        const color = i % 2 === 0 ? 0x7d57ff : 0xb5a2d7;
        const orbitGeometry = new THREE.RingGeometry(innerRadius, outerRadius, 128);
        const orbitMaterial = new THREE.MeshBasicMaterial({
            color: color,
            side: THREE.DoubleSide,
            opacity: 0.5,
            transparent: true
        });
        const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);

        const orbitGroup = new THREE.Group();
        orbitGroup.add(orbit);
        orbitGroup.rotation.set(Math.PI / 3, Math.PI / 3, 0);

        scene.add(orbitGroup);
        return orbitGroup;
    });
};

const createRocket = (scene) => {
    const rocketGroup = new THREE.Group();
    const rocketGeometry = new THREE.ConeGeometry(0.1, 0.3, 32);
    const rocketMaterial = new THREE.MeshBasicMaterial({color: 0x30333c});
    const rocket = new THREE.Mesh(rocketGeometry, rocketMaterial);
    rocket.position.set(orbitRadius * Math.cos(Math.PI / 2), 0, orbitRadius * Math.sin(Math.PI / 2));
    rocketGroup.add(rocket);
    scene.add(rocketGroup);
    return rocketGroup;
};

const createControls = (camera, renderer) => {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.minDistance = 5;
    controls.maxDistance = 10;
    return controls;
};

const animate = (renderer, scene, camera, sun, planets, rocket, controls) => {
    const animateScene = () => {
        requestAnimationFrame(animateScene);
        sun.rotation.z += 0.01;
        rocket.rotation.y += 0.01;
        planets.forEach((planetGroup, index) => {
            planetGroup.rotation.z += 0.01 / (1 + index * 0.7);
            planetGroup.children[0].rotation.z += 0.01;
        });
        controls.update();
        renderer.render(scene, camera);
    };
    animateScene();
};
export default SolarSystem;