
import { useTranslation } from "react-i18next";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { LanguageSwitcher, Loader } from "../tools";
import { Desk } from "../../models";

const HeroSection = () => {
    const { t } = useTranslation();

    const adjustDeskForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [0.5, 0.5, 0.5];
            screenPosition = [0, -6.5, -43.4];
        } else {
            screenScale = [0.011, 0.011, 0.011];
            screenPosition = [0, -2.5, 0];
        }

        return [screenScale, screenPosition];
    };

    const [deskScale, deskPosition] = adjustDeskForScreenSize();

    return (
        <>
            <div className='flex flex-col w-10/12 h-5/6 absolute'>
                <nav className='flex justify-end'>
                    <LanguageSwitcher/>
                </nav>
                <div className="flex flex-col relative top-4 md:top-20 items-center md:items-start">
                    <h1 className="-mb-4 md:-mb-6">{t('heroSection_title_1')}</h1>
                    <h1>{t('heroSection_title_2')}</h1>
                    <h2>{t('heroSection_legend')}</h2>
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

                    <Desk
                        position={deskPosition}
                        scale={deskScale}
                        rotation={[0, 4.1, -.1]}
                    />
                </Suspense>
            </Canvas>
        </>

    );
}

export default HeroSection;