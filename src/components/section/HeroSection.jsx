import { useTranslation } from "react-i18next";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { UpcycledTerrarium } from "../../models";
import {LanguageSwitcher, Loader} from "../tool";

const HeroSection = ({ onCanvasLoaded }) => {
    const { t } = useTranslation();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const adjustTerrariumForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [1.2, 1.2, 1.2];
            screenPosition = [0, -2.1, 0];
        } else {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [2, -1.7, 0];
        }
        screenPosition[0] += mousePosition.x / 50;
        screenPosition[1] -= mousePosition.y / 50;
        return [screenScale, screenPosition];
    };

    const [terrariumScale, terrariumPosition] = adjustTerrariumForScreenSize();

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: (event.clientY / window.innerHeight) * 2 - 1,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className='flex flex-col md:px-0 h-full md:w-10/12 py-10 md:h-5/6 md:py-0 absolute z-10'>
                <nav className='flex justify-between w-full items-center h-12'>
                    <div className="border border-indicator-focus rounded-3xl px-3 py-1">
                        <p className="text-sm text-indicator-focus">Mathys Farineau</p>
                    </div>
                    <div className="mr-20">
                        <LanguageSwitcher />
                    </div>
                </nav>
                <div className="flex flex-col relative mx-10 xl:mx-0 top-12 md:top-40 items-start">
                    <h1 className="-mb-4 md:-mb-6">{t('heroSection_title_1')}</h1>
                    <h1>{t('heroSection_title_2')}</h1>
                    <div className="my-4">
                        <h2>{t('heroSection_legend_1')}</h2>
                        <h2>{t('heroSection_legend_2')}</h2>
                    </div>
                </div>
            </div>
            <Canvas
                className={`w-full h-screen bg-transparent`}
                camera={{near: 0.1, far: 1000}}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 5, 10]} intensity={2} />
                    <spotLight
                        position={[0, 50, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={2}
                    />
                    <hemisphereLight
                        skyColor='#b1e1ff'
                        groundColor='#000000'
                        intensity={1}
                    />

                    <UpcycledTerrarium
                        position={terrariumPosition}
                        scale={terrariumScale}
                        rotation={[0.08, -.6, 0]}
                    />
                </Suspense>
            </Canvas>
        </>
    );
}

export default HeroSection;