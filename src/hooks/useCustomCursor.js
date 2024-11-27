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

        const handleMouseOver = (e) => {
            if (e.target.classList.contains('cursor-hover')) {
                cursor.classList.add('hover');
            }
        };

        const handleMouseOut = (e) => {
            if (e.target.classList.contains('cursor-hover')) {
                cursor.classList.remove('hover');
            }
        };

        const addEventListeners = () => {
            window.addEventListener('mousemove', moveCursor);
            window.addEventListener('mouseover', handleMouseOver);
            window.addEventListener('mouseout', handleMouseOut);
            requestAnimationFrame(updateCursor);
        };

        const removeEventListeners = () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
            document.body.removeChild(cursor);
        };

        addEventListeners();
        return removeEventListeners;
    }, []);
};

export default useCustomCursor;