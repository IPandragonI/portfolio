import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Tech from "./SimpleView/Tech.jsx";
import Constants from "../../../constants";

const SkillsSection = () => {
    const [active, setActive] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const { t } = useTranslation();
    const { techTypes } = Constants();

    const handleCategoryChange = (index) => {
        if (index === active || isTransitioning) return;

        setIsTransitioning(true);

        setTimeout(() => {
            setActive(index);
            setIsTransitioning(false);
        }, 600);
    };

    return (
        <div className="flex flex-col md:px-0 h-full w-10/12 py-10 md:h-5/6 md:py-0 absolute z-10">
            <h1 className='text-3xl text-primary text-center md:text-end font-bold'>
                {t('skillSection_title')}
            </h1>
            <div className='w-full h-full flex flex-col py-10 md:py-20 md:flex-row justify-between'>
                <div className='w-full h-1/6 md:w-1/4 md:h-full flex flex-row md:flex-col justify-center items-center'>
                    {techTypes.map((section, index) => (
                        <button
                            key={index}
                            onClick={() => handleCategoryChange(index)}
                            disabled={isTransitioning}
                            className={`text-center font-bold text-sm md:text-xl lg:text-4xl w-2/6 md:w-full h-16 md:h-24 mx-2 md:mx-0 my-5 flex flex-col justify-center items-center ${
                                index === active ? 'bg-secondary' : 'bg-primary'
                            } text-slate-50 rounded-3xl cursor-hover transition-all ease-in-out duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70 shadow-xl`}
                        >
                            {section.name}
                        </button>
                    ))}
                </div>
                <div className='w-full md:w-3/4 h-full md:h-full flex items-center justify-center'>
                    <Tech
                        icons={techTypes[active].icons}
                        isTransitioning={isTransitioning}
                    />
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;