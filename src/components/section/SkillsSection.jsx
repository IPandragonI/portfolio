
import {Canvas} from "@react-three/fiber";
import {SkillCard} from "../tool/index.js";
const SkillsSection = () => {

    return (
        <div className="flex flex-col md:flex-row md:px-0 h-full md:w-10/12 py-10 md:h-5/6 md:py-0 absolute z-10">
            <div className="h-1/4 md:w-1/4 md:h-full">
                <Canvas className="hidden"/>
                <p>Canvas</p>
            </div>
            <div className="h-3/4 md:w-3/4 md:h-full grid grid-cols-1 gap-4 p-4">
                <div className="p-10 h-full w-full">
                    <h1 className="text-3xl">Mes technologies</h1>
                </div>
                <div className="h-full w-full flex flex-col justify-between p-10">
                    <div className="grid grid-cols-3 items-center gap-4">
                        <SkillCard imageSrc="images/javascript.png" title="Javascript" text="Dynamic Interactions" />
                        <SkillCard imageSrc="images/php.png" title="PHP" text="Server-Side Scripting" />
                        <SkillCard imageSrc="images/css.png" title="CSS" text="Styling & Layout" />
                        <SkillCard imageSrc="images/java.png" title="Java" text="Enterprise Solutions" />
                        <SkillCard imageSrc="images/python.png" title="Python" text="Versatile Scripting" />
                        <SkillCard imageSrc="images/dart.png" title="Dart" text="Cross-Platform Mobile" />
                    </div>
                    <hr className="w-10/12 h-px my-0 mx-auto bg-gray-200 border-0"/>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <SkillCard imageSrc="images/extjs.png" title="ExtJs" text="Rich UI Framework"/>
                        <SkillCard imageSrc="images/react.png" title="React" text="Modern Frontend"/>
                        <SkillCard imageSrc="images/symfony.png" title="Symfony" text="Robust PHP Framework"/>
                        <SkillCard imageSrc="images/spring.png" title="Spring" text="Comprehensive Java Framework"/>
                        <SkillCard imageSrc="images/tailwindcss.png" title="TailwindCSS" text="Utility-First CSS"/>
                        <SkillCard imageSrc="images/wordpress.png" title="Wordpress" text="Popular CMS"/>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center">
                    <div className="grid grid-cols-2 items-center justify-items-center gap-4 p-4">
                        <SkillCard imageSrc="images/figma.png" single={true} />
                        <SkillCard imageSrc="images/docker.png" single={true}/>
                        <SkillCard imageSrc="images/db.png" single={true}/>
                        <SkillCard imageSrc="images/git.png" single={true}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;