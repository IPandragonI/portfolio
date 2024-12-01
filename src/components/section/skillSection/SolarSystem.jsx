import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

THREE.Cache.enabled = true;
const orbitRadius = window.innerWidth < 768 ? 2 : 2.5;

const SolarSystem = ({ article, icons }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(70, 1.5, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        setRendererSize(renderer);
        mount.appendChild(renderer.domElement);

        addLights(scene);
        const sun = createSun(scene);
        createPlanets(sun, icons);
        createOrbit(scene);

        const rocketSun = createRocketSun(scene);
        createRocket(rocketSun);

        camera.position.set(0, 0, 6);
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.minDistance = 5;
        controls.maxDistance = 10;

        animate(renderer, scene, camera, sun, rocketSun, controls);

        return () => {
            mount.removeChild(renderer.domElement);
        };
    }, [article, icons]);

    return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

const setRendererSize = (renderer) => {
    if (window.innerWidth < 768) {
        renderer.setSize(350, 250);
    } else if (window.innerWidth < 1024) {
        renderer.setSize(600, 400);
    } else {
        renderer.setSize(1000, 650);
    }
};

const addLights = (scene) => {
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
    dirLight.position.set(0, 0, 1).normalize();
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xffffff, 4.5, 5, 0);
    pointLight.color.setHSL(Math.random(), 1, 0.5);
    pointLight.position.set(0, 100, 90);
    scene.add(pointLight);
};

const createSun = (scene) => {
    const sunGeometry = new THREE.SphereGeometry(1, 128, 128);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xE284EB, transparent: true, opacity: 1 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.rotation.x = Math.PI / 3;
    sun.rotation.y = Math.PI / 3;
    sun.position.set(0, 0, 0);
    scene.add(sun);
    return sun;
};

const createRocketSun = (scene) => {
    const sunGeometry = new THREE.SphereGeometry(1, 128, 128);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 'white', transparent: true, opacity: 0 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.position.set(0, 0, 0);
    scene.add(sun);
    return sun;
}

const createPlanets = (sun, icons) => {
    return icons.map((icon, index) => {
        const texture = new THREE.TextureLoader().load(icon.src);
        const planetGeometry = new THREE.SphereGeometry(0.35, 16, 16);
        const planetMaterial = new THREE.MeshStandardMaterial({ map: texture });
        const planet = new THREE.Mesh(planetGeometry, planetMaterial);
        const angle = (index / icons.length) * 2 * Math.PI;
        planet.position.set(orbitRadius * Math.cos(angle), orbitRadius * Math.sin(angle), 0);
        sun.add(planet);
        return planet;
    });
};

const createOrbit = (scene) => {
    const orbitLayers = 2;
    const layerWidth = 0.08;

    for (let i = 0; i < orbitLayers; i++) {
        const innerRadius = orbitRadius + i * layerWidth;
        const outerRadius = innerRadius + layerWidth;
        const color = i % 2 === 0 ? 0x7d57ff : 0xb5a2d7;

        const orbitGeometry = new THREE.RingGeometry(innerRadius, outerRadius, 128);
        const orbitMaterial = new THREE.MeshBasicMaterial({ color: color, side: THREE.DoubleSide });
        const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
        orbit.rotation.x = Math.PI / 3;
        orbit.rotation.y = Math.PI / 3;
        orbit.position.set(0, 0, 0);

        scene.add(orbit);
    }
};

const createRocket = (rocketSun) => {
    const rocketGeometry = new THREE.ConeGeometry(0.1, 0.3, 32);
    const rocketMaterial = new THREE.MeshBasicMaterial({ color: 0x30333c });
    const rocket = new THREE.Mesh(rocketGeometry, rocketMaterial);
    const angle = Math.PI / 2;
    rocket.position.set(orbitRadius * Math.cos(angle), 0, orbitRadius * Math.sin(angle));
    rocketSun.add(rocket);
}

const addText = (scene, article) => {
    const fontLoader = new FontLoader();
    fontLoader.load('font/helvetiker_bold.typeface.json', (font) => {
        const textGeometry = new TextGeometry(article, {
            font: font,
            size: window.innerWidth < 768 ? .8 : 0.6,
            height: 0.15,
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0x30333c });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textGeometry.computeBoundingBox();
        if (textGeometry.boundingBox) {
            textGeometry.translate(-textGeometry.boundingBox.max.x / 2, -0.3, 0);
        }
        // scene.add(textMesh);
    });
};

const animate = (renderer, scene, camera, sun, rocketSun, controls) => {
    const animateScene = () => {
        requestAnimationFrame(animateScene);
        sun.rotation.z += 0.01;
        rocketSun.rotation.y += 0.005;
        controls.update();
        renderer.render(scene, camera);
    };
    animateScene();
};

export default SolarSystem;