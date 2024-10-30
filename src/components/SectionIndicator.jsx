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
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
            {sections.map((_, index) => (
                <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${index === activeSection ? 'bg-orange-400' : 'bg-gray-200'}`}
                ></div>
            ))}
        </div>
    );
}

export default SectionIndicator;