import React, {useEffect, useState} from 'react';
import {ContactSection, HeroSection, ProjectSection, SkillsSection} from "./components/section";
import {ScrollMouse, SectionIndicator} from "./components/tool";
import useCustomCursor from "./hooks/useCustomCursor.js";
import {useTranslation} from "react-i18next";
import GlobalLoader from './components/tool/GlobalLoader';

async function fetchGitLabProjects() {
    try {
        const GITLAB_USERNAME = 'ipandragoni';
        const repos = [];
        const userResp = await fetch('https://api.github.com/users/' + GITLAB_USERNAME + '/starred');
        if (!userResp.ok) {
            console.error('GitLab user lookup failed', userResp.status);
            return [];
        }
        const users = await userResp.json();
        if (!Array.isArray(users) || users.length === 0) {
            return []
        } else {
            repos.push(...users);
        }

        console.log(repos)

        const mapped = repos.map(p => ({
            name: p.name,
            description: p.description,
            link: p.html_url,
            language: p.language,
            updated_at: p.updated_at ? new Date(p.updated_at).getTime() : 0,
        }));

        const scored = mapped.map(p => {
            let score = 0;
            const now = Date.now();
            const ageInDays = (now - p.updated_at) / (1000 * 60 * 60 * 24);
            score += Math.max(0, 365 - ageInDays);
            if (p.language) {
                score += 10;
            }
            return {...p, score};
        });

        scored.sort((a, b) => b.score - a.score);

        return scored.slice(0, 4);
    } catch (error) {
        console.error('Error fetching GitLab projects:', error);
        return [];
    }
}

function App() {
    useCustomCursor();
    const { t } = useTranslation();
    const [githubProjects, setGithubProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const sectionsName = [t('heroSection_title'), t('skillSection_title'), t('projectSection_title'), t('contactSection_title')];
    const sections = [
        { name: t('heroSection_title'), component: <HeroSection sections={sectionsName} /> },
        { name: t('skillSection_title'), component: <SkillsSection /> },
        { name: t('projectSection_title'), component: <ProjectSection githubProjects={githubProjects}/> },
        { name: t('contactSection_title'), component: <ContactSection /> }
    ];

    useEffect(() => {
        let mounted = true;
        const loadProjects = async () => {
            try {
                setIsLoading(true);
                const projects = await fetchGitLabProjects();
                if (!mounted) return;
                setGithubProjects(projects);
            } catch (e) {
                console.error('Failed to load projects in App effect', e);
            } finally {
                if (mounted) setIsLoading(false);
            }
        };

        loadProjects();

        return () => {
            mounted = false;
        };
    }, []);

    if (isLoading) {
        return <GlobalLoader />;
    }

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