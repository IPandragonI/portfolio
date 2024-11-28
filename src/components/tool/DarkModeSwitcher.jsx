import React, { useEffect, useState } from 'react';
import { Moon, Sun } from "@phosphor-icons/react";

const DarkModeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const darkMode = localStorage.getItem('dark-mode') === 'true';
        setIsDarkMode(darkMode);
        if (darkMode) {
            document.querySelector('html').classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const html = document.querySelector('html');
        html.classList.toggle('dark');
        const darkMode = html.classList.contains('dark');
        setIsDarkMode(darkMode);
        localStorage.setItem('dark-mode', darkMode.toString());
    };

    return (
        <>
            {isDarkMode ? (
                <Sun size={22} color="#4263d3" className='cursor-pointer cursor-hover fade-in' onClick={toggleDarkMode} />
            ) : (
                <Moon size={22} color="#6D8FFF" className='cursor-pointer cursor-hover fade-in' onClick={toggleDarkMode} />
            )}
        </>
    );
}

export default DarkModeSwitcher;