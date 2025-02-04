import React, { useEffect, useState } from 'react';

const Moodboard = ({ imageList }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 500);
        return () => clearTimeout(timer);
    }, [imageList]);

    return (
        <div className={`grid grid-cols-2 grid-rows-2 gap-2 h-full w-2/3 ${animate ? 'fade-in' : ''}`}>
            {imageList.map((image, index) => (
                <img key={index} src={image} alt='moodboard' className='object-cover w-full h-full rounded-2xl' />
            ))}
        </div>
    );
}

export default Moodboard;