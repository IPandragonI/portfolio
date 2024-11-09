import { ContactSection, HeroSection, ProjectsSection, SkillsSection, SectionIndicator, ScrollMouse } from "./components/";
import useCustomCursor from "./hooks/useCustomCursor.js";

function App() {
    useCustomCursor();

    const sections = [<HeroSection />, <SkillsSection />, <ProjectsSection />, <ContactSection />];

    return (
        <div className='relative sections'>
            {sections.map((Section, index) => (
                <section key={index} className={'section bg-section-color'}>
                    <div className="flex w-screen h-full items-center justify-center">
                        {Section}
                    </div>
                </section>
            ))}
            <SectionIndicator sections={sections}/>
            <ScrollMouse/>
        </div>
    );
}

export default App;