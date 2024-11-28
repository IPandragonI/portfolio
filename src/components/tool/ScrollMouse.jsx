
function SrollMouse() {
    return (
        <>
            <div className="fixed left-1/2 bottom-4 transform -translate-x-1/2 hidden md:flex flex-col space-y-2 w-6 h-9 rounded-3xl border-[0.2rem] border-tertiary overflow-hidden"></div>
            <div className="scrollOnMouse animate-scrollAnimation fixed left-1/2 transform -translate-x-1/2 flex-col space-y-2 rounded-3xl w-1 h-2 bg-tertiary overflow-hidden bottom-8 hidden md:flex"></div>
        </>
    );
}

export default SrollMouse;