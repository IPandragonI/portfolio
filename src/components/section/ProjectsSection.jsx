import {useState, useEffect} from "react";
import {useTranslation} from "react-i18next";
import {CaretRight, CaretLeft} from "@phosphor-icons/react";

const ProjectsSection = ({githubProjects}) => {
    const {t} = useTranslation();
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageError, setImageError] = useState({});

    useEffect(() => {
        if (githubProjects.length > 0 && !selectedProject) {
            setSelectedProject(githubProjects[0]);
        }
    }, [githubProjects, selectedProject]);

    const handleProjectHover = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const handleImageError = (projectName) => {
        setImageError(prev => ({...prev, [projectName]: true}));
    };

    const getFallbackGradient = (projectName) => {
        const colors = [
            'from-purple-500 to-blue-500',
            'from-pink-500 to-orange-500',
            'from-green-500 to-teal-500',
            'from-red-500 to-yellow-500',
            'from-indigo-500 to-purple-500',
        ];
        const hash = projectName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return colors[hash % colors.length];
    };

    const nextImage = () => {
        if (selectedProject?.screenshots?.length > 1) {
            setCurrentImageIndex((prev) =>
                (prev + 1) % selectedProject.screenshots.length
            );
        }
    };

    const previousImage = () => {
        if (selectedProject?.screenshots?.length > 1) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
            );
        }
    };

    const hasScreenshots = selectedProject?.screenshots && selectedProject.screenshots.length > 0;
    const hasMultipleScreenshots = selectedProject?.screenshots && selectedProject.screenshots.length > 1;

    return (
        <div className="flex flex-col md:px-0 h-full w-10/12 py-10 md:h-5/6 md:py-0 absolute z-10">
            <h1 className='text-3xl text-center md:text-end text-primary font-bold'>
                {t('projectSection_title')}
            </h1>
            <div className='h-full w-full flex'>
                <div className='h-full w-4/6 hidden md:flex justify-center items-center'>
                    {selectedProject && (
                        <div className="w-full h-full flex flex-col items-center justify-center rounded-3xl">
                            {hasScreenshots && !imageError[selectedProject.name] ? (
                                <div className="relative w-4/5 h-full flex items-center justify-center group">
                                    <img
                                        src={selectedProject.screenshots[currentImageIndex].url}
                                        alt={`Capture ${currentImageIndex + 1} de ${selectedProject.name}`}
                                        className="w-full h-auto max-h-full object-contain rounded-2xl shadow-2xl border-2 border-primary/30 transition-all duration-300"
                                        onError={() => handleImageError(selectedProject.name)}
                                    />

                                    {hasMultipleScreenshots && (
                                        <>
                                            <button
                                                onClick={previousImage}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                aria-label="Image précédente"
                                            >
                                                <CaretLeft size={24} color="white" weight="bold"/>
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                aria-label="Image suivante"
                                            >
                                                <CaretRight size={24} color="white" weight="bold"/>
                                            </button>
                                        </>
                                    )}

                                    {hasMultipleScreenshots && (
                                        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2">
                                            {selectedProject.screenshots.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentImageIndex(index)}
                                                    className={`h-2 rounded-full transition-all duration-300 ${
                                                        index === currentImageIndex
                                                            ? 'w-8 bg-primary'
                                                            : 'w-2 bg-secondary hover:bg-white/75'
                                                    }`}
                                                    aria-label={`Image ${index + 1}`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className={`w-4/5 h-3/4 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br ${getFallbackGradient(selectedProject.name)} shadow-2xl`}>
                                    <div className="text-white text-center p-8">
                                        <div className="text-6xl mb-4">📦</div>
                                        <h3 className="font-bold text-2xl capitalize mb-2">
                                            {selectedProject.name}
                                        </h3>
                                        <p className="text-sm opacity-90">
                                            Pas de capture disponible
                                        </p>
                                        {selectedProject.language && (
                                            <span className="inline-block mt-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                                                {selectedProject.language}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className='h-full w-full md:w-2/6 flex flex-col items-center justify-center'>
                    <div className='flex flex-col justify-center overflow-auto md:h-5/6'>
                        {githubProjects.map((project, index) => (
                            <a
                                key={index}
                                className={`my-6 project cursor-hover cursor-pointer transition-all duration-300`}
                                onMouseEnter={() => handleProjectHover(project)}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className='flex cursor-hover justify-start items-center'>
                                    <CaretRight size={26} color="var(--color-secondary)" weight="bold" className='mr-4 project-arrow transform -translate-x-10 ease-cubic duration-500 opacity-0 cursor-hover'/>
                                    <div className='h-1/2 w-full flex justify-between items-center cursor-hover'>
                                        <div className="project-name transform -translate-x-10 ease-cubic duration-500 w-4/5">
                                            <h1 className='text-lg md:text-2xl text-primary font-bold cursor-hover capitalize'>{project.name}</h1>
                                            <p className='text-xs md:text-sm text-text-color cursor-hover text-ellipsis overflow-hidden'>{project.description}</p>
                                        </div>
                                        <div className='flex items-center justify-end w-1/5 cursor-hover'>
                                            {project.topics && project.topics.map((topic, idx) => (
                                                <img
                                                    key={idx}
                                                    src={`images/${topic.toLowerCase()}.png`}
                                                    alt={topic}
                                                    className='w-6 h-6 md:w-8 md:h-8 mx-1 cursor-hover'
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <hr className='h-[2px] my-4 rounded-3xl bg-primary border-0 cursor-hover'/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsSection;