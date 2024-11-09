
import { useTranslation } from "react-i18next";
import { Canvas } from "@react-three/fiber";
import { useEffect, Suspense } from "react";
import { LanguageSwitcher, Loader } from "../../components";
import { Desk } from "../../models";

const HeroSection = () => {
    const { t } = useTranslation();

    const adjustDeskForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [0.5, 0.5, 0.5];
            screenPosition = [0, -6.5, -43.4];
        } else {
            screenScale = [1, 1, 1];
            screenPosition = [1.5, -2.5, 0];
        }

        return [screenScale, screenPosition];
    };

    const [deskScale, deskPosition] = adjustDeskForScreenSize();
    useEffect(() => {
        document.body.classList.add('fade-in');
    }, []);

    return (
        <>
            <div className='flex flex-col w-9/12 h-5/6 absolute z-10'>
                <nav className='flex justify-end items-center'>
                    <LanguageSwitcher/>
                </nav>
                <div className="flex flex-col relative top-10 md:top-40 items-center md:items-start">
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
                        rotation={[0.15, 4.2, -.10]}
                    />
                </Suspense>
            </Canvas>
        </>

    );
}

export default HeroSection;