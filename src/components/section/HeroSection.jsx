import { useTranslation } from "react-i18next";
import { Canvas } from "@react-three/fiber";
import {Suspense, useEffect} from "react";
import { LanguageSwitcher, Loader } from "../../components";
import { UpcycledTerrarium } from "../../models";

const HeroSection = () => {
    const { t } = useTranslation();

    const adjustTerrariumForScreenSize = () => {
        let screenScale, screenPosition;
        screenPosition = [2, -1.7, 0];
        screenScale = [1.5, 1.5, 1.5];

        return [screenScale, screenPosition];
    };

    const [terrariumScale, terrariumPosition] = adjustTerrariumForScreenSize();
    useEffect(() => {
        document.body.classList.add('fade-in');
    }, []);

    return (
        <>
            <div className='flex flex-col w-10/12 h-5/6 absolute z-10'>
                <nav className='flex justify-end items-center'>
                    <LanguageSwitcher/>
                </nav>
                <div className="flex flex-col relative top-10 md:top-40 items-center md:items-start">
                    <h1 className="-mb-4 md:-mb-6">{t('heroSection_title_1')}</h1>
                    <h1>{t('heroSection_title_2')}</h1>
                    <div className="my-4">
                        <h2 className="text-center md:text-left">{t('heroSection_legend_1')}</h2>
                        <h2 className="text-center md:text-left">{t('heroSection_legend_2')}</h2>
                    </div>
                </div>
            </div>
            <Canvas
                className={`w-full h-screen bg-transparent`}
                camera={{near: 0.1, far: 1000}}
            >
                <Suspense fallback={<Loader/>}>
                    <directionalLight position={[1, 1, 1]} intensity={2}/>
                    <ambientLight intensity={0.5}/>
                    <pointLight position={[10, 5, 10]} intensity={2}/>
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