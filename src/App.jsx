import React, { useEffect, useState } from 'react';
import { ContactSection, HeroSection, ProjectSection, SkillsSection } from "./components/section";
import { ScrollMouse, SectionIndicator } from "./components/tool";
import useCustomCursor from "./hooks/useCustomCursor.js";
import { useTranslation } from "react-i18next";
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

        const mapped = repos.map(p => ({
            name: p.name,
            description: p.description,
            link: p.html_url,
            language: p.language,
            updated_at: p.updated_at ? new Date(p.updated_at).getTime() : 0,
            created_at: p.created_at ? new Date(p.created_at).getTime() : 0,
        }));

        mapped.sort((a, b) => b.created_at - a.created_at);
        return mapped;
    } catch (error) {
        console.error('Error fetching GitLab projects:', error);
        return [];
    }
}

async function preloadResources() {
    const imageUrls = [
        'images/grainy.jpg',
    ];

    const imagePromises = imageUrls.map(url => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = url;
        });
    });

    await Promise.all(imagePromises);
}

function App() {
    useCustomCursor();
    const { t } = useTranslation();
    const [githubProjects, setGithubProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    const sectionsName = [
        t('heroSection_title'),
        t('skillSection_title'),
        t('projectSection_title'),
        t('contactSection_title')
    ];

    const sections = [
        { name: t('heroSection_title'), component: <HeroSection sections={sectionsName} /> },
        { name: t('skillSection_title'), component: <SkillsSection /> },
        { name: t('projectSection_title'), component: <ProjectSection githubProjects={githubProjects} /> },
        { name: t('contactSection_title'), component: <ContactSection /> }
    ];

    useEffect(() => {
        let mounted = true;

        const initialize = async () => {
            try {
                const [projects] = await Promise.all([
                    fetchGitLabProjects(),
                    preloadResources(),
                    new Promise(resolve => setTimeout(resolve, 1500))
                ]);

                if (!mounted) return;

                setGithubProjects(projects);
                setIsLoading(false);

                setTimeout(() => {
                    setShowContent(true);
                }, 100);
            } catch (e) {
                console.error('Failed to initialize app', e);
                if (mounted) {
                    setIsLoading(false);
                    setShowContent(true);
                }
            }
        };

        initialize();

        return () => {
            mounted = false;
        };
    }, []);

    if (isLoading) {
        return <GlobalLoader />;
    }

    return (
        <div
            className={`relative sections snap-y snap-mandatory overflow-y-scroll h-screen overflow-hidden bg-section-color transition-opacity duration-1000 ${
                showContent ? 'opacity-100' : 'opacity-0'
            }`}
        >
            {sections.map((section, index) => (
                <section
                    key={index}
                    className='section snap-start h-screen text-3xl w-full flex items-center justify-center'
                >
                    <div className="flex w-screen h-full items-center justify-center">
                        {section.component}
                    </div>
                </section>
            ))}
            <SectionIndicator sections={sections.map(section => section.component)} />
            <ScrollMouse />
            <div
                className="grainy-filter fixed top-0 left-0 w-full h-full pointer-events-none opacity-5 z-50 mix-blend-multiply"
                style={{ background: 'url(images/grainy.jpg)' }}
            />
        </div>
    );
}

export default App;