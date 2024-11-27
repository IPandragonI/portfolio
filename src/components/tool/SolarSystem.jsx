import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

THREE.Cache.enabled = true;

const SolarSystem = ({ article, icons }) => {
    const mountRef = useRef(null);
    const [planetPositions, setPlanetPositions] = useState(icons.map(() => ({ x: 0, y: 0, z: 0 })));

    useEffect(() => {
        const mount = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(70, 1.5, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(1000, 650);
        if (window.innerWidth < 1024) {
            renderer.setSize(600, 400);
        }
        if (window.innerWidth < 768) {
            renderer.setSize(350, 250);
        }
        mount.appendChild(renderer.domElement);

        const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
        dirLight.position.set(0, 0, 1).normalize();
        scene.add(dirLight);

        const pointLight = new THREE.PointLight(0xffffff, 4.5, 0, 0);
        pointLight.color.setHSL(Math.random(), 1, 0.5);
        pointLight.position.set(0, 100, 90);
        scene.add(pointLight);

        const sunGeometry = new THREE.SphereGeometry(1, 128, 128);
        const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xE284EB, transparent: true, opacity: 0 });
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        scene.add(sun);

        const orbitRadius = 2.5;
        icons.map((icon, index) => {
            const texture = new THREE.TextureLoader().load(icon.src);
            const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
            const planet = new THREE.Sprite(spriteMaterial);
            const angle = (index / icons.length) * 2 * Math.PI;
            planet.position.set(orbitRadius * Math.cos(angle), 0, orbitRadius * Math.sin(angle));
            sun.add(planet);
            return planet;
        });

        const orbitGeometry = new THREE.RingGeometry(orbitRadius - 0.04, orbitRadius + 0.04, 128);
        const orbitMaterial = new THREE.MeshBasicMaterial({color: 0x6D8FFF, side: THREE.DoubleSide});
        const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
        orbit.rotation.x = Math.PI / 3;
        orbit.rotation.y = Math.PI / 3;
        orbit.position.set(.4,0,0)
        scene.add(orbit);

        const fontLoader = new FontLoader();
        fontLoader.load('font/helvetiker_bold.typeface.json', (font) => {
            const textGeometry = new TextGeometry(article, {
                font: font,
                size: .5,
                height: 0.2,
                curveSegments: 64,
            });
            const textMaterial = new THREE.MeshBasicMaterial({ color: 0xE284EB });
            const textMesh = new THREE.Mesh(textGeometry, textMaterial);
            textGeometry.computeBoundingBox();
            if (textGeometry.boundingBox) {
                textGeometry.translate(-textGeometry.boundingBox.max.x / 2, -.3, 0);
            }
            scene.add(textMesh);
        });

        camera.position.set(0, 0, 5);
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        const animate = () => {
            requestAnimationFrame(animate);
            sun.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            mount.removeChild(renderer.domElement);
        };
    }, [article, icons, planetPositions]);

    return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default SolarSystem;