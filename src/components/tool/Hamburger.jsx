import { useState, useEffect } from 'react';

const Hamburger = ({ sections }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [isMovedRight, setIsMovedRight] = useState(false);
    const [activeSection, setActiveSection] = useState(0);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const togglePosition = () => {
        setIsMovedRight(!isMovedRight);
    };

    useEffect(() => {
        const sectionElements = document.querySelectorAll('.section');
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Array.from(sectionElements).indexOf(entry.target);
                    setActiveSection(index);
                }
            });
        };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sectionElements.forEach(section => observer.observe(section));

        const hamburger = document.getElementById('hamburger');
        const handleClick = () => {
            setIsInitialLoad(false);
            toggleSidebar();
            togglePosition();
            hamburger.classList.toggle('is-active');
        };

        if (hamburger) {
            hamburger.addEventListener('click', handleClick);
        }

        return () => {
            if (hamburger) {
                hamburger.removeEventListener('click', handleClick);
            }
            sectionElements.forEach(section => observer.unobserve(section));
        };
    }, [isOpen]);

    const scrollToSection = (index) => {
        const section = document.querySelectorAll('.section')[index];
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
            setIsMovedRight(false);
            document.getElementById('hamburger').classList.remove('is-active');
        }
    };

    return (
        <div className="hamburger-container fixed z-50 top-20 right-[8%]">
            <div className={`panel fixed flex flex-col justify-between top-0 ${isOpen ? 'right-0 smoothOpen' : (isInitialLoad ? '-right-96' : 'smoothClose -right-96')} w-96 bg-gray-50 h-full shadow-lg py-24 px-10`}>
                <div className="w-10/12 h-5/6 flex flex-col justify-center">
                    {sections.map((section, index) => (
                        <div key={index} className="flex items-center h-20 cursor-pointer" onClick={() => scrollToSection(index)}>
                            <div className={`${index === activeSection ? 'bg-indicator-focus w-4 h-4 rounded-full mr-4' : ''}`}></div>
                            <p className="font-bold text-3xl hover:text-indicator-focus transition ease-in delay-50">{section.name}</p>
                        </div>
                    ))}
                </div>
                <div className="h-20">
                    <hr className="w-3/4 h-[2px] my-4 bg-indicator-focus border-0"/>
                    <p>Mathys Farineau - 2024</p>
                </div>
            </div>
            <div className="hamburger mx-4" id="hamburger">
                {[...Array(9)].map((_, index) => (
                    <span key={index} className="circle"></span>
                ))}
            </div>
        </div>
    );
};

export default Hamburger;