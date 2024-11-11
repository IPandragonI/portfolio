import {useState, useEffect} from 'react';
import LanguageSwitcher from "./LanguageSwitcher.jsx";

const Hamburger = () => {
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

    return (
        <div className="hamburger-container z-50">
            <div
                className={`panel fixed flex flex-col justify-between top-0 ${isOpen ? 'right-0 smoothOpen' : (isInitialLoad ? '-right-96' : 'smoothClose -right-96')} w-96 bg-gray-50 h-full shadow-lg p-4`}>
                <LanguageSwitcher/>
                <div className="w-10/12 h-5/6 bg-red-50">
                </div>
            </div>
            <div className="hamburger mx-4" id="hamburger">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </div>
    );
};

export default Hamburger;