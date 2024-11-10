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
                <div className="skills-section-bg h-3/4 md:w-3/4 md:h-full grid grid-cols-3 gap-4 p-4">
                    <div className="p-10 h-full w-full bg-blue-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 border-opacity-50">
                        <h1 className="text-2xl">Mathys Farineau</h1>
                    </div>
                    <div className="h-full w-full bg-green-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 border-opacity-50 col-span-2"></div>
                    <div className="h-full w-full grid grid-cols-2 items-center gap-4 p-10 bg-green-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 border-opacity-50 row-span-2 col-span-2">
                        <SkillCard imageSrc="images/javascript.png" title="Javascript" text="Intéractions" />
                        <SkillCard imageSrc="images/javascript.png" title="Javascript" text="Intéractions" />
                        <SkillCard imageSrc="images/javascript.png" title="Javascript" text="Intéractions" />
                        <SkillCard imageSrc="images/javascript.png" title="Javascript" text="Intéractions" />
                        <SkillCard imageSrc="images/javascript.png" title="Javascript" text="Intéractions" />
                        <SkillCard imageSrc="images/javascript.png" title="Javascript" text="Intéractions" />
                    </div>
                    <div className="h-full w-full bg-blue-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 border-opacity-50"></div>
                    <div className="h-full w-full bg-green-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 border-opacity-50"></div>
                </div>
            </div>
        </>
    );
}

export default SkillsSection;