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
        const userResp = await fetch('https://api.github.com/users/' + GITLAB_USERNAME + '/repos');
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

        const projectsResp = await fetch('https://api.github.com/users/' + GITLAB_USERNAME + '/repos?type=member')
        if (!projectsResp.ok) {
            console.error('GitLab projects fetch failed', projectsResp.status);
            return [];
        }
        const projects = await projectsResp.json();
        if (!Array.isArray(projects) || projects.length === 0) {
            return []
        } else {
            repos.push(...projects);
        }

        const mapped = repos.map(p => ({
            name: p.name,
            description: p.description,
            link: p.html_url,
            language: p.language,
            stars: typeof p.star_count === 'number' ? p.star_count : 0,
            lastActivity: p.last_activity_at ? new Date(p.last_activity_at).getTime() : 0
        }));

        const maxStars = Math.max(...mapped.map(p => p.stars), 1);
        const minActivity = Math.min(...mapped.map(p => p.lastActivity));
        const maxActivity = Math.max(...mapped.map(p => p.lastActivity), minActivity + 1);

        const scored = mapped.map(p => {
            const normalizedStars = p.stars / maxStars;
            const normalizedRecency = (p.lastActivity - minActivity) / (maxActivity - minActivity);
            const score = 0.6 * normalizedStars + 0.4 * normalizedRecency;
            return { ...p, score };
        });

        scored.sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score;
            return b.lastActivity - a.lastActivity;
        });

        return scored.slice(0, 6).map(p => ({
            name: p.name,
            description: p.description,
            link: p.link,
            language: p.language,
            stars: p.stars,
            lastActivity: p.lastActivity
        }));
    } catch (error) {
        console.error('Error fetching GitLab projects:', error);
        return [];
    }
}

function App() {
    useCustomCursor();
    const { t } = useTranslation();
    const [githubProjects, setGithubProjects] = useState([]);
    const sectionsName = [t('heroSection_title'), t('skillSection_title'), t('projectSection_title'), t('contactSection_title')];
    const sections = [
        { name: t('heroSection_title'), component: <HeroSection sections={sectionsName} /> },
        { name: t('skillSection_title'), component: <SkillsSection /> },
        { name: t('projectSection_title'), component: <ProjectSection githubProjects={githubProjects}/> },
        { name: t('contactSection_title'), component: <ContactSection /> }
    ];
    console.log(githubProjects);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => setIsLoading(false), 1000);
        };

        window.addEventListener('load', handleLoad);
        fetchGitLabProjects().then(projects => setGithubProjects(projects));
        return () => {
            window.removeEventListener('load', handleLoad);
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