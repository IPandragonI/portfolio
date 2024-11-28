import { useState, useEffect, useRef } from 'react';

const Hamburger = ({ sections }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [isMovedRight, setIsMovedRight] = useState(false);
    const menuRef = useRef(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const togglePosition = () => {
        setIsMovedRight(!isMovedRight);
    };

    useEffect(() => {
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

        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && !hamburger.contains(event.target)) {
                setIsOpen(false);
                setIsMovedRight(false);
                hamburger.classList.remove('is-active');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            if (hamburger) {
                hamburger.removeEventListener('click', handleClick);
            }
            document.removeEventListener('mousedown', handleClickOutside);
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
            <div ref={menuRef} className={`panel fixed flex flex-col justify-between top-0 ${isOpen ? 'right-0 smoothOpen' : (isInitialLoad ? '-right-96' : 'smoothClose -right-96')} w-96 bg-section-color brightness-150 h-full shadow-lg py-24 px-4`}>
                <div className="w-10/12 h-5/6 flex flex-col justify-center brightness-50">
                    {sections.map((section, index) => (
                        <div key={index} className="flex items-center h-20 cursor-pointer" onClick={() => scrollToSection(index)}>
                            <p className="font-bold text-3xl text-text-color hover:text-primary transition ease-in duration-200 cursor-hover">{section}</p>
                        </div>
                    ))}
                </div>
                <div className="h-20 brightness-50">
                    <hr className="w-3/4 h-[2px] my-4 bg-primary border-0"/>
                    <p className='text-lg text-text-color'>Mathys Farineau - 2024</p>
                </div>
            </div>
            <div className="hamburger ml-4 md:ml-8 grid items-center justify-center grid-cols-3 gap-1 cursor-pointer cursor-hover transition duration-500 ease-in" id="hamburger">
                {[...Array(9)].map((_, index) => (
                    <span key={index} className="circle w-2 h-2 border-2 border-primary rounded-3xl transition duration-200 ease-in cursor-hover"></span>
                ))}
            </div>
        </div>
    );
};

export default Hamburger;