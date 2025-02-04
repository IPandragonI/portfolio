import React from 'react';
import {useTranslation} from "react-i18next";

const Constants = () => {
    const {t} = useTranslation();

    const techTypes = [
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
                {src: 'images/figma.png', title: 'Figma'}
            ]
        }
    ];

    const techTypesPlanet = [
        {
            name: 'FRONT-END', icons: [
                {src: 'images/pool_js.png', title: 'JavaScript'},
                {src: 'images/pool_tailwindcss.png', title: 'Tailwind'},
                {src: 'images/pool_extjs.png', title: 'ExtJs'},
                {src: 'images/pool_react.png', title: 'React'}
            ]
        },
        {
            name: 'BACK-END', icons: [
                {src: 'images/pool_java.png', title: 'Java'},
                {src: 'images/pool_php.png', title: 'PHP'},
                {src: 'images/pool_spring.png', title: 'Spring'},
                {src: 'images/pool_symfony.png', title: 'Symfony'}
            ]
        },
        {
            name: 'TOOLS', icons: [
                {src: 'images/pool_git.png', title: 'Git'},
                {src: 'images/pool_docker.png', title: 'Docker'},
                {src: 'images/pool_dart.png', title: 'Dart'},
                {src: 'images/pool_figma.png', title: 'Figma'}
            ]
        }
    ];

    const projects = [
        {
            name: 'HBGG',
            image: 'images/hbggCover.png',
            description_title: t('projectSection_project_1_desc_title'),
            description: t('projectSection_project_1_desc'),
            logo: 'images/hbgg.png',
            techLogos: ["images/symfony.png", "images/db.png"],
            blurColor: "from-emerald-300",
            primaryColor: "text-emerald-600",
            link: "https://github.com/ipandragoni"
        },
        {
            name: 'Voyo',
            image: 'images/voyoCover.png',
            description_title: t('projectSection_project_2_desc_title'),
            description: t('projectSection_project_2_desc'),
            logo: 'images/voyo.png',
            techLogos: ["images/flutter.png", "images/firebase.png"],
            blurColor: "from-orange-300",
            primaryColor: "text-orange-600",
            link: "https://github.com/ipandragoni"
        },
        {
            name: 'Tindoo',
            image: 'images/tindooCover.png',
            description_title: t('projectSection_project_3_desc_title'),
            description: t('projectSection_project_3_desc'),
            logo: 'images/tindoo.png',
            techLogos: ["images/symfony.png", "images/db.png"],
            blurColor: "from-red-300",
            primaryColor: "text-red-600",
            link: "https://github.com/achedon12/esgi-symfony"
        },
    ];

    return {techTypes, techTypesPlanet, projects};
};

export default Constants;