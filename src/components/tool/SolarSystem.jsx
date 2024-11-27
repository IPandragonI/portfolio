import React, {useRef, useEffect} from 'react';
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";

const SolarSystem = ({article, icons}) => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(70, 1.5, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({alpha: true});
        renderer.setSize(1000, 650);
        if(window.innerWidth < 768) {
            renderer.setSize(350, 250)
        }
        mount.appendChild(renderer.domElement);

        const sunGeometry = new THREE.SphereGeometry(1, 128, 128);
        const sunMaterial = new THREE.MeshBasicMaterial({color: 0xE284EB, transparent: true, opacity: .7});
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        scene.add(sun);

        const orbitRadius = 3;
        icons.forEach((icon, index) => {
            const texture = new THREE.TextureLoader().load(icon.src);
            const spriteMaterial = new THREE.SpriteMaterial({map: texture});
            const planet = new THREE.Sprite(spriteMaterial);
            const angle = (index / icons.length) * 2 * Math.PI;
            planet.position.set(orbitRadius * Math.cos(angle), 0, orbitRadius * Math.sin(angle));
            sun.add(planet);
        });

        camera.position.set(-4.8, 1.5, 2.7);

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
    }, [article, icons]);

    return <div ref={mountRef} style={{width: '100%', height: '100%'}}/>;
};

export default SolarSystem;