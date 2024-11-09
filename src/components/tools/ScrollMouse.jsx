
function SrollMouse() {
    return (
        <div>
            <div className="mouse fixed left-1/2 bottom-4 transform -translate-x-1/2 flex flex-col space-y-2"></div>
            <div className="scrollOnMouse animate-scrollAnimation fixed left-1/2 bottom-4 transform -translate-x-1/2 flex flex-col space-y-2"></div>
        </div>
    );
}

export default SrollMouse;