import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CaretRight } from "@phosphor-icons/react";

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
                <div className='h-full w-full md:w-2/6 flex flex-col items-center justify-center'>
                    <div className='flex flex-col justify-center overflow-auto md:h-5/6'>
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
                                <div className='flex cursor-hover justify-start items-center'>
                                    <CaretRight size={26} color="var(--color-secondary)" weight="bold" className='mr-4 project-arrow transform -translate-x-10 ease-cubic duration-500 opacity-0 cursor-hover' />
                                    <div className='h-1/2 w-full flex justify-between items-center cursor-hover'>
                                        <h1 className='text-lg md:text-2xl text-primary font-bold project-name transform -translate-x-10 ease-cubic duration-500 cursor-hover capitalize'>{project.name}</h1>
                                        <p className='text-xs md:text-sm text-text-color cursor-hover text-ellipsis overflow-hidden text-right'>{project.description}</p>
                                    </div>
                                </div>
                                <hr className='w-full my-2 border-2 border-primary border-opacity-60 cursor-hover' />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsSection;