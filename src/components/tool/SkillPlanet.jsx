import React from 'react';
import {SolarSystem} from "./index.js";

const SkillPlanet = ({article}) => {
    const icons = [
        {
            name: 'FRONT-END', icons: [
                {src: 'images/javascript.png', title: 'JavaScript'},
                {src: 'images/tailwindcss.png', title: 'Tailwind'},
                {src: 'images/extjs.png', title: 'ExtJs'},
                {src: 'images/react.png', title: 'React'}
            ]
        },
        {
            name: 'BACK-END', icons: [
                {src: 'images/java.png', title: 'Java'},
                {src: 'images/php.png', title: 'PHP'},
                {src: 'images/spring.png', title: 'Spring'},
                {src: 'images/symfony.png', title: 'Symfony'}
            ]
        },
        {
            name: 'TOOLS', icons: [
                {src: 'images/git.png', title: 'Git'},
                {src: 'images/docker.png', title: 'Docker'},
                {src: 'images/dart.png', title: 'Dart'},
                {src: 'images/figma.png', title: 'Figma'},
                {src: 'images/db.png', title: 'Database'},
            ]
        }
    ];

    const currentIcons = icons.find(iconSet => iconSet.name === article)?.icons || [];

    return (
        <div className="flex items-center justify-center">
            <SolarSystem article={article} icons={currentIcons}/>
        </div>
    );
}

export default SkillPlanet;