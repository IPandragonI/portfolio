import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import Tech from "./SimpleView/Tech.jsx";
import SolarSystem from "./SolarSystem/SolarSystem.jsx";
import Constants from "../../../constants";
import {CircleDashed, Planet} from "@phosphor-icons/react";

const SkillsSection = () => {
    const [active, setActive] = useState(0);
    const [isSimpleView, setIsSimpleView] = useState(true);
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);
    const {t} = useTranslation();
    const { techTypes, techTypesPlanet } = Constants();

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col md:px-0 h-full w-10/12 py-10 md:h-5/6 md:py-0 absolute z-10">
            <h1 className='text-3xl text-primary text-center md:text-end font-bold'>{t('skillSection_title')}</h1>
            <div className='w-full h-full flex flex-col py-10 md:py-20 md:flex-row justify-between'>
                <div className='w-full h-1/6 md:w-1/4 md:h-full flex flex-row md:flex-col justify-between items-center'>
                    {techTypes.map((section, index) => (
                        <div
                            key={index}
                            onClick={() => setActive(index)}
                            className={`text-center font-bold text-sm md:text-xl lg:text-4xl w-2/6 md:w-full h-16 md:h-24 mx-2 md:mx-0 flex flex-col justify-center items-center ${index === active ? 'bg-secondary' : 'bg-primary hover:bg-primary-hover'} text-slate-50 rounded-3xl cursor-hover transition ease-in duration-300`}
                        >
                            {section.name}
                        </div>
                    ))}
                </div>
                <div className='w-full md:w-3/4 h-full md:h-full flex items-center justify-center'>
                    {isWideScreen && (
                        <div className='absolute right-2 top-20'>
                            {isSimpleView ? (
                                <Planet size={22} color="var(--color-primary)" className='cursor-pointer cursor-hover' onClick={() => setIsSimpleView(!isSimpleView)} />
                            ) : (
                                <CircleDashed  size={22} color="var(--color-primary)" className='cursor-pointer cursor-hover' onClick={() => setIsSimpleView(!isSimpleView)} />
                            )}
                        </div>
                    )}
                    {isSimpleView ? (
                        <Tech icons={techTypes[active].icons} />
                    ) : (
                        <SolarSystem icons={techTypesPlanet[active].icons} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;