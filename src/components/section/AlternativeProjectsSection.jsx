import {useTranslation} from "react-i18next";
import {useState} from 'react';
import React from 'react';
import Constant from "../../constants";
import {CaretLeft, CaretRight, Code} from "@phosphor-icons/react";

const AlternativeProjectSection = () => {
    const {t} = useTranslation();
    const projects = Constant().projects;
    const [activeIndex, setActiveIndex] = useState(1);

    const handlePrevClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    const handleProjectClick = (index) => {
        setActiveIndex(index);
    }

    return (
        <div className="flex flex-col md:px-0 h-full w-10/12 py-10 md:h-5/6 md:py-0 absolute z-10">
            <h1 className='text-3xl text-center md:text-end text-primary font-bold'>{t('projectSection_title')}</h1>
            <div className='h-full w-full flex justify-center'>
                <section className='w-11/12 h-5/6 flex flex-col items-center justify-center mt-5'>
                    <div className='h-full flex flex-col items-center justify-center'>
                        <div className='flex h-full w-5/6'>
                            {projects.map((p, index) => (
                                <div className='flex transition-transform duration-200 w-1/3 h-full' style={{}} onClick={() => handleProjectClick(index)}>
                                    <ProjectDescription key={index} activeProject={p} isActive={index === activeIndex}/>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-between w-1/6 mt-10'>
                            <CaretLeft onClick={handlePrevClick} size={32} className={'cursor-hover'} />
                            <CaretRight onClick={handleNextClick} size={32} className={'cursor-hover'} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

const ProjectDescription = ({activeProject, isActive}) => {
    return (
        <div className={`h-full w-full mx-6 flex flex-col justify-between rounded-3xl bg-gradient-to-br ${activeProject.blurColor} to-white p-4 overflow-y-auto transition ease-in duration-200 ${isActive ? 'scale-110 opacity-100' : 'opacity-50'}`}>
            <div className={'flex flex-col'}>
                <div className={'w-full h-52 bg-white rounded-xl overflow-hidden mb-4'}>
                    <img src={activeProject.image} alt={activeProject.name} className="object-cover rounded-sm w-full h-full"/>
                </div>
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-secondary text-2xl">{activeProject.name}</h2>
                    <img src={activeProject.logo} alt={activeProject.name} className="w-8 mr-4"/>
                </div>
                <h3 className={`${activeProject.primaryColor} text-sm`}>{activeProject.description_title}</h3>
                <p className={`pr-2 text-xs my-2`}>{activeProject.description}</p>
            </div>

            <div className={`flex justify-center`}>
                <a href={activeProject.link} target="_blank" rel="noreferrer" className={`w-3/4 flex justify-center items-center bg-white rounded-xl p-2 cursor-hover ${isActive ?'' : 'pointer-events-none'}`}>
                    <Code size={28} className={`${activeProject.primaryColor} cursor-hover`}/>
                </a>
            </div>
        </div>
    );
}

export default AlternativeProjectSection;