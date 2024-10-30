import { ContactSection, HeroSection, ProjectsSection, SkillsSection } from "./components/index.js";
import useCustomCursor from "./hooks/useCustomCursor.js";
import SectionIndicator from "./components/SectionIndicator.jsx";

function App() {
    useCustomCursor();

    const sections = [<HeroSection />, <SkillsSection />, <ProjectsSection />, <ContactSection />];

    const getSectionColor = (index) => {
        switch (index) {
            case 0:
                return "#da3030";
            case 1:
                return "#25ae50";
            case 2:
                return "#61c5a7";
            default:
                return "#a41eff";
        }
    };

    return (
        <div className='w-full h-screen relative sections'>
            {sections.map((Section, index) => (
                <section key={index} className="section" style={{ backgroundColor: getSectionColor(index) }}>
                    {Section}
                </section>
            ))}
            <SectionIndicator sections={sections} />
        </div>
    );
}

export default App;