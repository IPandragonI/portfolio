import BallCanvas from "./Ball.jsx";

const Tech = (icons) => {
    return (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
            {icons.icons.map((technology) => (
                <div className='w-24 h-24 md:w-36 md:h-36' key={technology.title}>
                    <BallCanvas icon={technology.src} />
                </div>
            ))}
        </div>
    );
};

export default Tech;
