import {useTranslation} from "react-i18next";
import {useState} from 'react';
import React from 'react';
import Constant from "../../constants";
import Typical from 'react-typical';
import {Moodboard} from "../tool/index.js";

const AlternativeProjectSection = () => {
    const {t} = useTranslation();
    const projects = Constant().projects;
    const [activeIndex, setActiveIndex] = useState(0);

    const handleCardClick = (index) => {
        setActiveIndex(index);
        setKey(prevKey => prevKey + 1);
    };

    const activeProject = projects[activeIndex];

    return (
        <div className="flex flex-col md:px-0 h-full w-10/12 py-10 md:h-5/6 md:py-0 absolute z-10">
            <h1 className='text-3xl text-center md:text-end text-primary font-bold'>{t('projectSection_title')}</h1>
            <div className='h-full w-full flex justify-center'>
                <section className='w-11/12 h-5/6 flex items-center justify-center mt-5'>
                    {projects.map((p, index) => (
                        <ProjectDescription key={index} activeProject={p} activeIndex={activeIndex}/>
                    ))}
                </section>
            </div>
        </div>
    );
}

{/*<Moodboard imageList={activeProject.imageList} blurColors={activeProject.blurColors}*/}
{/*           className={`object-cover w-full h-full rounded-2xl ${activeIndex !== null ? 'block' : 'hidden'}`}/>*/}

{/*<section className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>*/}
{/*    <div className='flex scale-50 translate-y-10 hover:scale-75 hover:translate-y-0 transition ease-in-out duration-300'>*/}
{/*        {projects.map((p, index) => (*/}
{/*            <Card*/}
{/*                key={index}*/}
{/*                project={p}*/}
{/*                isActive={index === activeIndex}*/}
{/*                onClick={() => handleCardClick(index)}*/}
{/*            />*/}
{/*        ))}*/}
{/*    </div>*/}
{/*</section>*/}

const ProjectDescription = ({activeProject, activeIndex}) => {
    return (
        <div className={`h-full w-3/4 rounded-3xl bg-gradient-to-br ${activeProject.blurColor} to-purple-200 p-6 overflow-y-auto`}>
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-secondary">{activeProject.name}</h2>
                <img src={activeProject.logo} alt={activeProject.name} className="w-16"/>
            </div>
            <h3 className={`${activeProject.primaryColor} text-lg mb-2`}>{activeProject.description_title}</h3>
            {activeIndex != null && (
                <Typical
                    steps={[activeProject.description, 100]}
                    className={`m-auto pr-2 text-sm whitespace-pre-line`}
                />
            )}
            <div>
                <p className={`mt-2 text-sm text-secondary ${activeIndex !== null ? "block" : "hidden"}`}>
                    <strong className="mr-2">Technologies : </strong>{activeProject.tech}
                </p>
            </div>
        </div>
    );
}

const Card = ({project, isActive, onClick}) => {
    return (
        <div className={`card-holder ${isActive ? 'active' : ''} cursor-pointer`} onClick={onClick}>
            <a href="#"
               className="card flex flex-col w-24 h-36 p-2 my-10 bg-white rounded-2xl shadow-2xl transition ease-out duration-300 delay-100 hover:-translate-y-10"
               title={project.name}>
                <div className='flex justify-between'>
                    <h2 className="uppercase text-xs first-letter:font-bold first-letter:text-lg first-letter:mr-1 first-letter:align-middle">{project.name}</h2>
                </div>
                <span className="card-image flex-auto w-full -skew-x-12 overflow-hidden relative">
                    <span className='absolute -top-2 -bottom-2 block skew-x-12'
                          style={{background: `url(${project.logo}) center / cover`, width: '100%'}}></span>
                </span>
                <span
                    className="uppercase text-xs first-letter:font-bold first-letter:text-lg first-letter:mr-1 first-letter:align-middle rotate-180">{project.name}</span>
            </a>
        </div>
    );
};

export default AlternativeProjectSection;