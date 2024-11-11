import { ContactSection, HeroSection, ProjectsSection, SkillsSection } from "./components/section";
import {SectionIndicator, ScrollMouse, Hamburger} from "./components/tool";
import useCustomCursor from "./hooks/useCustomCursor.js";
import {useTranslation} from "react-i18next";


function App() {
    useCustomCursor();
    const { t } = useTranslation();
    const sections = [
        { name: t('heroSection_title'), component: <HeroSection /> },
        { name: t('skillSection_title'), component: <SkillsSection /> },
        { name: t('projectSection_title'), component: <ProjectsSection /> },
        { name: t('contactSection_title'), component: <ContactSection /> }
    ];

    return (
        <div className='relative sections'>
            {sections.map((section, index) => (
                <section key={index} className={'section bg-section-color'}>
                    <div className="flex w-screen h-full items-center justify-center">
                        {section.component}
                    </div>
                </section>
            ))}
            <SectionIndicator sections={sections.map(section => section.component)} />
            <ScrollMouse />
            <Hamburger sections={sections} />
        </div>
    );
}

export default App;