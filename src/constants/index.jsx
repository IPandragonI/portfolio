import {useTranslation} from "react-i18next";

const Constants = () => {
    const techTypes = [
        {
            name: 'FRONT-END', icons: [
                {src: 'images/react.png', title: 'React'},
                {src: 'images/nextjs.png', title: 'Next JS'},
                {src: 'images/angular.png', title: 'Angular'},
            ]
        },
        {
            name: 'BACK-END', icons: [
                {src: 'images/spring.png', title: 'Spring'},
                {src: 'images/symfony.png', title: 'Symfony'},
                {src: 'images/nestjs.png', title: 'Nest JS'}
            ]
        },
        {
            name: 'TOOLS', icons: [
                {src: 'images/git.png', title: 'Git'},
                {src: 'images/docker.png', title: 'Docker'},
                {src: 'images/figma.png', title: 'Figma'}
            ]
        }
    ];

    return {techTypes};
};

export default Constants;