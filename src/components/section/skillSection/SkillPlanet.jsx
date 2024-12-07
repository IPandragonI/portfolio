import React, { useState, useEffect } from 'react';
import SolarSystem from "./SolarSystem.jsx";
import SimpleSkillView from "./SimpleSkillView.jsx";

const SkillPlanet = ({ article, articlesNames }) => {
    const [isSimpleView, setIsSimpleView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsSimpleView(true);
            } else {
                setIsSimpleView(false);
            }
        };

        handleResize(); // Set initial state based on current window size
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const icons = [
        {
            name: articlesNames[0], icons: [
                { src: 'images/javascript.png', title: 'JavaScript' },
                { src: 'images/tailwindcss.png', title: 'Tailwind' },
                { src: 'images/extjs.png', title: 'ExtJs' },
                { src: 'images/pool_react.png', title: 'React' }
            ]
        },
        {
            name: articlesNames[1], icons: [
                { src: 'images/java.png', title: 'Java' },
                { src: 'images/php.png', title: 'PHP' },
                { src: 'images/spring.png', title: 'Spring' },
                { src: 'images/symfony.png', title: 'Symfony' }
            ]
        },
        {
            name: articlesNames[2], icons: [
                { src: 'images/git.png', title: 'Git' },
                { src: 'images/docker.png', title: 'Docker' },
                { src: 'images/dart.png', title: 'Dart' },
                { src: 'images/figma.png', title: 'Figma' },
                { src: 'images/db.png', title: 'Database' },
            ]
        }
    ];

    const currentIcons = icons.find(iconSet => iconSet.name === article)?.icons || [];

    return (
        <div>
            <button onClick={() => setIsSimpleView(!isSimpleView)} className="bg-tertiary text-white text-xs px-4 py-2 rounded-3xl absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2  md:bottom-[unset] md:left-[unset] md:translate-x-[unset] md:translate-y-[unset] md:top-20 md:right-0 transition ease-in duration-300 cursor-hover">
                {isSimpleView ? 'Afficher le mode Système Solaire' : 'Afficher le mode Simplifié'}
            </button>
            {isSimpleView ? (
                <SimpleSkillView article={article} icons={currentIcons} />
            ) : (
                <SolarSystem article={article} icons={currentIcons} />
            )}
        </div>
    );
}

export default SkillPlanet;