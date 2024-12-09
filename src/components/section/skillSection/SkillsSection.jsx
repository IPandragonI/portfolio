import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import Tech from "./SimpleView/Tech.jsx";
import SolarSystem from "./SolarSystem/SolarSystem.jsx";

const SkillsSection = () => {
    const [active, setActive] = useState(0);
    const [isSimpleView, setIsSimpleView] = useState(false);
    const {t} = useTranslation();
    const techTypes = [
        {
            name: 'FRONT-END', icons: [
                {src: 'images/javascript.png', title: 'JavaScript'},
                {src: 'images/pool_tailwindcss.png', title: 'Tailwind'},
                {src: 'images/pool_extjs.png', title: 'ExtJs'},
                {src: 'images/pool_react.png', title: 'React'}
            ]
        },
        {
            name: 'BACK-END', icons: [
                {src: 'images/pool_java.png', title: 'Java'},
                {src: 'images/pool_php.png', title: 'PHP'},
                {src: 'images/pool_spring.png', title: 'Spring'},
                {src: 'images/pool_symfony.png', title: 'Symfony'}
            ]
        },
        {
            name: t('skillSection_tools'), icons: [
                {src: 'images/pool_git.png', title: 'Git'},
                {src: 'images/pool_docker.png', title: 'Docker'},
                {src: 'images/pool_dart.png', title: 'Dart'},
                {src: 'images/pool_figma.png', title: 'Figma'}
            ]
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsSimpleView(true);
            } else {
                setIsSimpleView(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const currentIcons = techTypes[active].icons;

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
                <div className='w-full md:w-3/4 h-3/4 md:h-full flex items-center justify-center'>
                    <button onClick={() => setIsSimpleView(!isSimpleView)}
                            className="bg-tertiary text-white text-xs px-4 py-2 rounded-3xl absolute bottom-14 left-1/2 -translate-x-1/2 -translate-y-1/2  md:bottom-[unset] md:left-[unset] md:translate-x-[unset] md:translate-y-[unset] md:top-20 md:right-0 transition ease-in duration-300 cursor-hover">
                        {isSimpleView ? t('skillSection_solarView') : t('skillSection_simpleView')}
                    </button>
                    {isSimpleView ? (
                        <Tech icons={currentIcons}/>
                    ) : (
                        <SolarSystem icons={currentIcons}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;