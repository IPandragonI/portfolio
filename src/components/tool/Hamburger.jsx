import { useState, useEffect } from 'react';

const Hamburger = ({ sections }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [isMovedRight, setIsMovedRight] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const togglePosition = () => {
        setIsMovedRight(!isMovedRight);
    };

    useEffect(() => {
        const sectionElements = document.querySelectorAll('.section');

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
        <div className="hamburger-container z-50">
            <div className={`panel fixed flex flex-col justify-between top-0 ${isOpen ? 'right-0 smoothOpen' : (isInitialLoad ? '-right-96' : 'smoothClose -right-96')} w-96 bg-gray-50 h-full shadow-lg py-24 px-4`}>
                <div className="w-10/12 h-5/6 flex flex-col justify-center">
                    {sections.map((section, index) => (
                        <div key={index} className="flex items-center h-20 cursor-pointer" onClick={() => scrollToSection(index)}>
                            <p className="font-bold text-3xl hover:text-primary transition ease-in delay-50">{section}</p>
                        </div>
                    ))}
                </div>
                <div className="h-20">
                    <hr className="w-3/4 h-[2px] my-4 bg-primary border-0"/>
                    <p className='text-lg'>Mathys Farineau - 2024</p>
                </div>
            </div>
            <div className="hamburger ml-4 md:ml-8 cursor-hover" id="hamburger">
                {[...Array(9)].map((_, index) => (
                    <span key={index} className="circle cursor-hover"></span>
                ))}
            </div>
        </div>
    );
};

export default Hamburger;