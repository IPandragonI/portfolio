import {useTranslation} from "react-i18next";
import {useState} from 'react';
import React from 'react';
import Constant from "../../constants";
const AlternativeProjectSection = () => {
    const {t} = useTranslation();
    const projects = Constant().projects;
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="flex flex-col md:px-0 h-full w-10/12 py-10 md:h-5/6 md:py-0 absolute z-10">
            <h1 className='text-3xl text-center md:text-end text-primary font-bold'>{t('projectSection_title')}</h1>
            <div className='h-full w-full flex justify-center'>
                <section className='w-11/12 h-5/6 flex flex-col items-center justify-center mt-5'>
                    <div className='caroussel flex flex-col items-center'>
                        <div className={'flex items-center justify-center'}>
                            {projects.map((p, index) => (
                                <ProjectDescription key={index} activeProject={p}/>
                            ))}
                        </div>
                        {/*<div>*/}
                        {/*    <button onClick={handlePrevClick} className='mr-4'>&#9664;</button>*/}
                        {/*    <button onClick={handleNextClick} className='ml-4'>&#9654;</button>*/}
                        {/*</div>*/}
                    </div>
                    <div className='w-1/4 items-center justify-center'>
                    </div>
                </section>
            </div>
        </div>
    );
}

const ProjectDescription = ({activeProject}) => {
    return (
        <div className={`h-full w-[20rem] mx-8 rounded-3xl bg-gradient-to-br ${activeProject.blurColor} to-purple-200 p-6 overflow-y-auto`}>
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-secondary">{activeProject.name}</h2>
                <img src={activeProject.logo} alt={activeProject.name} className="w-16"/>
            </div>
            <h3 className={`${activeProject.primaryColor} text-lg mb-2`}>{activeProject.description_title}</h3>
            <p className={`m-auto pr-2 text-sm whitespace-pre-line`}>{activeProject.description}</p>
            <p className={`mt-4 text-sm text-secondary`}><strong className="mr-2">Technologies : </strong>{activeProject.tech}</p>
        </div>
    );
}

export default AlternativeProjectSection;