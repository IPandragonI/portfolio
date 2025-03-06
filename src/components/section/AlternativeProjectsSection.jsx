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
            <div className='h-full w-full flex justify-center items-center'>
                <section className='w-11/12 h-5/6 flex flex-col items-center justify-center mt-5'>
                    <div className='relative flex md:h-[34rem] md:w-64 h-96 w-52'>
                        {projects.map((p, index) => {
                            return (
                                <ProjectDescription
                                    key={index}
                                    activeProject={p}
                                    isActive={index === activeIndex}
                                    style={{
                                        transform: `translateX(${(index - activeIndex) * 120}%) ${index === activeIndex ? 'scale(1.1)' : ''}`
                                    }}
                                    onClick={() => handleProjectClick(index)}
                                />
                            )
                        })}
                    </div>
                    <div className='flex justify-between mt-10'>
                        <div className={'flex justify-center items-center cursor-hover rounded-full p-2 mx-4 bg-gray-200 hover:bg-slate-100 transition ease-in-out duration-200'}>
                            <CaretLeft onClick={handlePrevClick} size={32} className={'cursor-hover text-primary'} />
                        </div>
                        <div className={'flex justify-center items-center cursor-hover rounded-full p-2 mx-4 bg-gray-200 hover:bg-slate-100 transition ease-in-out duration-200'}>
                            <CaretRight onClick={handleNextClick} size={32} className={'cursor-hover text-primary'} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

const ProjectDescription = ({activeProject, isActive, style, onClick}) => {
    return (
        <div className={`absolute p-4 h-full w-full flex flex-col justify-between rounded-2xl bg-white border ${activeProject.borderColor} overflow-y-auto transition ease-in duration-300 ${isActive ? 'opacity-100' : 'opacity-50'}`} style={style} onClick={onClick}>
            <div className={'flex w-full h-52  rounded-lg overflow-hidden mb-4'}>
                <img src={activeProject.image} alt={activeProject.name} className="object-cover w-full h-full"/>
            </div>
            <div className={'flex flex-col'}>
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-secondary text-xl">{activeProject.name}</h2>
                    <img src={activeProject.logo} alt={activeProject.name} className="w-8 mx-4"/>
                </div>
                <h3 className={`${activeProject.primaryColor} text-sm`}>{activeProject.description_title}</h3>
                <p className={`pr-2 text-xs my-1`}>{activeProject.description}</p>
            </div>

            <div className={`flex justify-center my-2`}>
                <a href={activeProject.link} target="_blank" rel="noreferrer" className={`w-1/3 flex justify-center items-center ${activeProject.bgColor} rounded-xl p-2 cursor-hover ${isActive ?'' : 'pointer-events-none'}`}>
                    <Code size={28} className={`text-white cursor-hover`}/>
                </a>
            </div>
        </div>
    );
}

export default AlternativeProjectSection;