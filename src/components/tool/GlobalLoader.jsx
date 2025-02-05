import React, { useState, useEffect } from "react";
const GlobalLoader = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setIsLoaded(true);
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <main className={`global-loader ${isLoaded ? 'loaded' : ''}`}>
            <div className={'loader'}></div>
            <footer>
                <p>Developed by Mathys Farineau © 2025</p>
            </footer>
        </main>
    );
};

export default GlobalLoader;