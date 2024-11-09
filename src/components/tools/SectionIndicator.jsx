import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function SectionIndicator({ sections }) {
    const [activeSection, setActiveSection] = useState(0);

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

        return () => {
            sectionElements.forEach(section => observer.unobserve(section));
        };
    }, []);

    return (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 section-indicator">
            {sections.map((_, index) => (
                <div
                    key={index}
                    className={`w-2 h-2 md:w-4 md:h-4 rounded-full ${index === activeSection ? 'bg-secondary' : 'bg-gray-200'}`}
                ></div>
            ))}
        </div>
    );
}

SectionIndicator.propTypes = {
    sections: PropTypes.array.isRequired
};

export default SectionIndicator;