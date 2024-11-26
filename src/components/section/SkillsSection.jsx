import {useState} from "react";
import SkillPlanet from "../tool/SkillPlanet.jsx";

const SkillsSection = () => {
    const [active, setActive] = useState(0);
    const articles = [
        {name: 'FRONT-END'},
        {name: 'BACK-END'},
        {name: 'TOOLS'}
    ];

    return (
        <div className="flex flex-col md:px-0 h-full w-10/12 py-10 md:h-5/6 md:py-0 absolute z-10">
            <h1 className='text-3xl'>Mes technologies</h1>
            <div className='w-full h-full flex flex-col py-10 md:flex-row'>
                <div className='w-full h-1/4 md:w-1/4 md:h-full flex flex-row md:flex-col justify-evenly'>
                    {articles.map((section, index) => (
                        <div
                            key={index}
                            onClick={() => setActive(index)}
                            className={`text-sm md:text-xl lg:text-4xl w-1/4 md:w-auto mt-auto md:mt-[unset] py-4 px-2 text-center font-bold md:py-8 md:px-2 ${index === active ? 'bg-secondary' : 'bg-primary hover:bg-primary-hover'} text-white rounded-2xl transition ease-in delay-50`}
                        >
                            {section.name}
                        </div>
                    ))}
                </div>
                <SkillPlanet article={active} />
            </div>
        </div>
    );
};

export default SkillsSection;