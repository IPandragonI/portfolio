import { useEffect } from "react";

const useCustomCursor = () => {
    useEffect(() => {
        const cursor = document.createElement('div');
        cursor.classList.add('cursor');
        document.body.appendChild(cursor);

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        const moveCursor = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const updateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.25;
            cursorY += (mouseY - cursorY) * 0.25;

            const maxX = window.innerWidth - cursor.offsetWidth;
            const maxY = window.innerHeight - cursor.offsetHeight;
            cursorX = Math.max(0, Math.min(cursorX, maxX));
            cursorY = Math.max(0, Math.min(cursorY, maxY));

            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            requestAnimationFrame(updateCursor);
        };

        const addEventListeners = () => {
            window.addEventListener('mousemove', moveCursor);
            requestAnimationFrame(updateCursor);
        };

        const removeEventListeners = () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeChild(cursor);
        };

        addEventListeners();
        return removeEventListeners;
    }, []);
};

export default useCustomCursor;