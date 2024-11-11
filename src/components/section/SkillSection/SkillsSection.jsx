import { useState, useEffect } from 'react';
import DesktopFactory from './factory/DesktopFactory.jsx';
import MobileFactory from './factory/MobileFactory.jsx';
const SkillsSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1300);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile ? <MobileFactory /> : <DesktopFactory />;
};

export default SkillsSection;