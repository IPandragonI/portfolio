import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "@phosphor-icons/react";

const ProjectsSection = ({githubProjects}) => {
    const { t } = useTranslation();
    const [hoveredProject, setHoveredProject] = useState(null);
    const [isMouseOut, setIsMouseOut] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    const handleMouseEnter = (project) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setIsMouseOut(false);
        setHoveredProject(project);
    };

    const handleMouseLeave = () => {
        setIsMouseOut(true);
        const id = setTimeout(() => setHoveredProject(null), 200);
        setTimeoutId(id);
    };

    return (
        <div className="flex flex-col md:px-0 h-full w-10/12 py-10 md:h-5/6 md:py-0 absolute z-10">
            <h1 className='text-3xl text-center md:text-end text-primary font-bold'>{t('projectSection_title')}</h1>
            <div className='h-full w-full flex'>
                <div className='h-full w-4/6 hidden md:flex justify-center items-center'>
                    {hoveredProject && (
                        <div className={`w-full h-3/4 flex items-center justify-center rounded-3xl ${isMouseOut ? 'slide-out' : 'slide-in'}`}>
                            <img src={hoveredProject.link} alt={hoveredProject.name} className={`w-3/6 ${isMouseOut ? 'smoothUnZoom' : 'smoothZoom'}`}/>
                        </div>
                    )}
                </div>
                <div className='w-full md:w-2/6 flex flex-col justify-center overflow-y-auto h-5/6 my-auto'>
                    {githubProjects.map((project, index) => (
                        <a
                            key={index}
                            className='my-6 project cursor-hover cursor-pointer'
                            onMouseEnter={() => handleMouseEnter(project)}
                            onMouseLeave={handleMouseLeave}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className='flex cursor-hover'>
                                <ArrowRight size={32} color="var(--color-secondary)" weight="bold" className='mr-4 project-arrow transform -translate-x-10 ease-cubic duration-500 opacity-0 cursor-hover' />
                                <div className='h-1/2 w-full flex justify-between items-center cursor-hover'>
                                    <h1 className='text-lg md:text-2xl text-primary font-bold project-name transform -translate-x-10 ease-cubic duration-500 cursor-hover '>{project.name}</h1>
                                    <p className='text-sm md:text-lg text-text-color cursor-hover'>{project.description}</p>
                                    <p className='text-sm md:text-lg text-text-color cursor-hover'>{project.language}</p>
                                </div>
                            </div>
                            <hr className='w-full my-2 border-2 border-primary border-opacity-60 cursor-hover' />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectsSection;