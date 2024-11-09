import { ContactSection, HeroSection, ProjectsSection, SkillsSection } from "./components/index.js";
import useCustomCursor from "./hooks/useCustomCursor.js";
import { SectionIndicator } from "./components/tools/index.js";

function App() {
    useCustomCursor();

    const sections = [<HeroSection />, <SkillsSection />, <ProjectsSection />, <ContactSection />];

    return (
        <div className='w-full h-screen relative sections'>
            {sections.map((Section, index) => (
                <section key={index} className={'section bg-section-color'}>
                    <div className="flex w-10/12 h-5/6">
                        {Section}
                    </div>
                </section>
            ))}
            <SectionIndicator sections={sections} />
        </div>
    );
}

export default App;