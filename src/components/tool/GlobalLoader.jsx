import React from "react";

const GlobalLoader = () => {
    return (
        <main className="global-loader fixed inset-0 flex flex-col items-center justify-center bg-section-color z-50">
            <div className="loader-container">
                <div className="loader"></div>
                <p className="mt-8 text-primary text-lg font-semibold animate-pulse">
                    Chargement...
                </p>
            </div>
            <footer className="absolute bottom-8">
                <p className="text-text-color text-sm">
                    Developed by Mathys Farineau © 2025
                </p>
            </footer>
        </main>
    );
};

export default GlobalLoader;