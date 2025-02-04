import { ContactSection, HeroSection, ProjectsSection, SkillsSection } from "./components/section";
import { SectionIndicator, ScrollMouse } from "./components/tool";
import useCustomCursor from "./hooks/useCustomCursor.js";
import { useTranslation } from "react-i18next";
import AlternativeProjectsSection from "./components/section/AlternativeProjectsSection.jsx";

function App() {
    useCustomCursor();
    const { t } = useTranslation();
    const sectionsName = [t('heroSection_title'), t('skillSection_title'), t('projectSection_title'), t('contactSection_title')];
    const sections = [
        { name: t('heroSection_title'), component: <HeroSection sections={sectionsName} /> },
        { name: t('skillSection_title'), component: <SkillsSection /> },
        { name: t('projectSection_title'), component: <AlternativeProjectsSection /> },
        { name: t('contactSection_title'), component: <ContactSection /> }
    ];

    return (
        <div className='relative sections snap-y snap-mandatory overflow-y-scroll h-screen overflow-hidden bg-section-color '>
            {sections.map((section, index) => (
                <section key={index} className={'section snap-start h-screen text-3xl w-full flex items-center justify-center'}>
                    <div className="flex w-screen h-full items-center justify-center">
                        {section.component}
                    </div>
                </section>
            ))}
            <SectionIndicator sections={sections.map(section => section.component)} />
            <ScrollMouse />
            <div className="grainy-filter fixed top-0 left-0 w-full h-full pointer-events-none opacity-5 z-50 mix-blend-multiply" style={{background: 'url(images/grainy.jpg)'}}></div>
        </div>
    );
}

export default App;