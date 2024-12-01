import {useState} from "react";
import SkillPlanet from "../tool/SkillPlanet.jsx";
import {useTranslation} from "react-i18next";

const SkillsSection = () => {
    const [active, setActive] = useState(0);
    const { t } = useTranslation();
    const articles = [
        {name: 'FRONT-END'},
        {name: 'BACK-END'},
        {name: t('skillSection_tools')}
    ];

    return (
        <div className="flex flex-col md:px-0 h-full w-10/12 py-10 md:h-5/6 md:py-0 absolute z-10">
            <h1 className='text-3xl text-primary text-center md:text-end font-bold'>{t('skillSection_title')}</h1>
            <div className='w-full h-full flex flex-col py-10 md:flex-row'>
                <div className='w-full h-1/6 md:w-1/4 md:h-full flex flex-row md:flex-col justify-evenly'>
                    {articles.map((section, index) => (
                        <div
                            key={index}
                            onClick={() => setActive(index)}
                            className={`text-sm md:text-xl lg:text-4xl w-1/4 md:w-auto h-16 md:h-[unset] py-4 px-2 text-center font-bold md:py-8 md:px-2 ${index === active ? 'bg-secondary' : 'bg-primary hover:bg-primary-hover'} text-slate-50 rounded-3xl cursor-hover transition ease-in duration-300`}
                        >
                            {section.name}
                        </div>
                    ))}
                </div>
                <div className='w-full md:w-3/4 h-3/4 md:h-full flex items-center justify-center'>
                    <SkillPlanet article={articles[active].name} articlesNames={articles.map(article => article.name)} />
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;