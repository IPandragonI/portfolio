import {Canvas} from "@react-three/fiber";
import {SkillCard} from "../index.js";

const SkillsSection = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row md:px-0 h-full md:w-10/12 py-10 md:h-5/6 md:py-0 absolute z-10">
                <div className="h-1/4 md:w-1/4 md:h-full">
                    <Canvas className="hidden"/>
                    <p>Canvas</p>
                </div>
                <div className="skills-section-bg h-3/4 md:w-3/4 md:h-full grid grid-cols-3 grid-rows-3 gap-4 p-4">
                    <div className="p-10 h-full w-full bg-blue-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 border-opacity-50">
                        <h1 className="text-2xl">Mathys Farineau</h1>
                    </div>
                    <div className="h-full w-full bg-green-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 border-opacity-50 col-span-2"></div>
                    <div className="h-full w-full flex flex-col justify-between p-10 bg-green-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 border-opacity-50 row-span-3 col-span-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <SkillCard imageSrc="images/javascript.png" title="Javascript" text="Intéractions" />
                            <SkillCard imageSrc="images/php.png" title="PHP" text="Backend" />
                            <SkillCard imageSrc="images/css.png" title="CSS" text="UI/UX" />
                            <SkillCard imageSrc="images/java.png" title="Java" text="Backend" />
                            <SkillCard imageSrc="images/python.png" title="Python" text="Script" />
                            <SkillCard imageSrc="images/dart.png" title="Dart" text="Mobile" />
                        </div>
                        <hr className="w-10/12 h-px my-0 mx-auto bg-gray-200 border-0"/>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <SkillCard imageSrc="images/extjs.png" title="ExtJs" text="Framework JS"/>
                            <SkillCard imageSrc="images/react.png" title="React" text="Framework JS"/>
                            <SkillCard imageSrc="images/symfony.png" title="Symfony" text="Framework PHP"/>
                            <SkillCard imageSrc="images/spring.png" title="Spring" text="Framework Java"/>
                            <SkillCard imageSrc="images/tailwindcss.png" title="TailwindCSS" text="Framework CSS"/>
                            <SkillCard imageSrc="images/wordpress.png" title="Wordpress" text="CMS"/>
                        </div>
                    </div>
                    <div className="h-full w-full flex flex-col justify-center bg-blue-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 border-opacity-50 row-span-2">
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
                    <div className="w-full flex flex-col justify-center bg-green-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 border-opacity-50">
                        <div className="grid grid-cols-2 items-center justify-items-center gap-4 p-4">
                            <SkillCard imageSrc="images/figma.png" single={true} />
                            <SkillCard imageSrc="images/docker.png" single={true}/>
                            <SkillCard imageSrc="images/db.png" single={true}/>
                            <SkillCard imageSrc="images/git.png" single={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SkillsSection;