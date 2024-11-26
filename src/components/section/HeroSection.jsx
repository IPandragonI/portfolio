import { useTranslation } from "react-i18next";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { UpcycledTerrarium } from "../../models";
import {LanguageSwitcher, Loader} from "../tool";

const HeroSection = () => {
    const { t } = useTranslation();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
                    <div className="border border-primary rounded-3xl px-3 py-1">
                        <p className="text-sm text-primary">Full-Stack developper</p>
                    </div>
                    <div className="mr-20">
                        <LanguageSwitcher />
                    </div>
                </nav>
                <div className="flex flex-col relative mx-10 xl:mx-0 top-12 md:top-40 items-center text-center">
                    <h1>{t('heroSection_title_1')}</h1>
                    <div className="my-4 text-center">
                        <h2>{t('heroSection_legend_1')}</h2>
                        <h2>{t('heroSection_legend_2')}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;