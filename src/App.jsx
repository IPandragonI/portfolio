import { ContactSection, HeroSection, ProjectsSection, SkillsSection } from "./components/section";
import { SectionIndicator, ScrollMouse } from "./components/tool";
import useCustomCursor from "./hooks/useCustomCursor.js";
import { useTranslation } from "react-i18next";

function App() {
    useCustomCursor();
    const { t } = useTranslation();
    const sectionsName = [t('heroSection_title'), t('skillSection_title'), t('projectSection_title'), t('contactSection_title')];
    const sections = [
        { name: t('heroSection_title'), component: <HeroSection sections={sectionsName} /> },
        { name: t('skillSection_title'), component: <SkillsSection /> },
        { name: t('projectSection_title'), component: <ProjectsSection /> },
        { name: t('contactSection_title'), component: <ContactSection /> }
    ];

    return (
        <div className='relative sections'>
            {sections.map((section, index) => (
                <section key={index} className={'section'}>
                    <div className="flex w-screen h-full items-center justify-center">
                        {section.component}
                    </div>
                </section>
            ))}
            <SectionIndicator sections={sections.map(section => section.component)} />
            <ScrollMouse />
            <div className="grainy-filter"></div>
        </div>
    );
}

export default App;