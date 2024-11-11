import {Canvas} from "@react-three/fiber";
import {SkillCard} from "../../../tool/index.js";

const MobileFactory = () => (
    <div className="flex flex-col h-full w-full py-10 absolute z-10">
        <div className="h-1/4 w-full flex p-10">
            <Canvas className="hidden"/>
            <p>Canvas</p>
            <div className="p-10 h-full w-full bg-blue-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 border-opacity-50">
                <h1 className="text-2xl">Mathys Farineau</h1>
            </div>
        </div>
        <div className="h-3/4 w-full grid grid-cols-3 gap-4 px-10 pb-10">
            <div className="h-full w-full bg-green-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 border-opacity-50 col-span-3">
                aaa
            </div>
            <div className="h-full w-full flex flex-col justify-between p-4 bg-green-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 border-opacity-50 col-span-3">
                <div className="grid grid-cols-6 items-center gap-4">
                    <SkillCard imageSrc="images/javascript.png" title="Javascript" text="Dynamic Interactions" single={true}/>
                    <SkillCard imageSrc="images/php.png" title="PHP" text="Server-Side Scripting" single={true}/>
                    <SkillCard imageSrc="images/css.png" title="CSS" text="Styling & Layout" single={true}/>
                    <SkillCard imageSrc="images/java.png" title="Java" text="Enterprise Solutions" single={true}/>
                    <SkillCard imageSrc="images/python.png" title="Python" text="Versatile Scripting" single={true}/>
                    <SkillCard imageSrc="images/dart.png" title="Dart" text="Cross-Platform Mobile" single={true}/>
                </div>
                <hr className="w-10/12 h-px my-0 mx-auto bg-gray-200 border-0"/>
                <div className="grid grid-cols-6 items-center gap-4">
                    <SkillCard imageSrc="images/extjs.png" title="ExtJs" text="Rich UI Framework" single={true}/>
                    <SkillCard imageSrc="images/react.png" title="React" text="Modern Frontend" single={true}/>
                    <SkillCard imageSrc="images/symfony.png" title="Symfony" text="Robust PHP Framework" single={true}/>
                    <SkillCard imageSrc="images/spring.png" title="Spring" text="Comprehensive Java Framework" single={true}/>
                    <SkillCard imageSrc="images/tailwindcss.png" title="TailwindCSS" text="Utility-First CSS" single={true}/>
                    <SkillCard imageSrc="images/wordpress.png" title="Wordpress" text="Popular CMS" single={true}/>
                </div>
            </div>
            <div className="h-full w-full flex flex-col justify-center bg-blue-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 border-opacity-50 col-span-2">
                <div className="flex w-full h-full">
                    <hr className="w-px h-5/6 my-auto mx-10 bg-gray-200 border-0"/>
                    <div className="flex flex-col justify-evenly">
                        <div className="relative">
                            <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-200 rounded-full"></div>
                            <p className="text-xl">Mastère Ingénierie du Web</p>
                            <div className="flex">
                                <p className="text-xs font-bold">2024-2026</p>
                                <p className="text-xs ml-2">ESGI Lyon</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-200 rounded-full"></div>
                            <p className="text-xl">BUT Informatique</p>
                            <div className="flex">
                                <p className="text-xs font-bold">2021-2024</p>
                                <p className="text-xs ml-2">IUT de Valence</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-200 rounded-full"></div>
                            <p className="text-xl">Baccalauréat Général</p>
                            <div className="flex">
                                <p className="text-xs font-bold">2021</p>
                                <p className="text-xs ml-2">Carpentras</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center bg-green-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 border-opacity-50 col-span-1">
                <div className="grid grid-cols-2 items-center justify-items-center gap-4 p-4">
                    <SkillCard imageSrc="images/figma.png" single={true}/>
                    <SkillCard imageSrc="images/docker.png" single={true}/>
                    <SkillCard imageSrc="images/db.png" single={true}/>
                    <SkillCard imageSrc="images/git.png" single={true}/>
                </div>
            </div>
        </div>
    </div>
);

export default MobileFactory;