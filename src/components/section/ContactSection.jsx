import { useState } from 'react';

const ContactSection = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const email = 'mathysf84pro@gmail.com';
    const instagramLink = 'https://www.instagram.com/mathys.frn/';
    const cvLink = 'docs/Mathys_FARINEAU.pdf';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            setIsPopupVisible(true);
            setTimeout(() => setIsPopupVisible(false), 1000);
        });
    };

    return (
        <div className="flex flex-col w-9/12 py-10 h-3/6 md:py-0 absolute z-10">
            <h1>CONTACT</h1>
            <hr className="h-[2px] my-4 bg-neutral-800 border-0"/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex items-end">
                    <h1 className="font-bold text-base lg:text-xl xl:text-3xl w-20 lg:w-32 xl:w-48">EMAIL</h1>
                    <a href="#" className="text-base lg:text-xl xl:text-3xl font-light link-underline" onClick={copyToClipboard}>{email}</a>
                </div>
                {isPopupVisible && (
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-80 translate-y-28 bg-neutral-800 p-2 rounded shadow text-sm">
                        <div className="relative">
                            <p className="text-gray-100">Copié !</p>
                        </div>
                    </div>
                )}
                <div className="flex items-end">
                    <h1 className="font-bold text-base lg:text-xl xl:text-3xl w-20 lg:w-32 xl:w-48">RÉSEAUX</h1>
                    <a className="text-base lg:text-xl xl:text-3xl font-light link-underline" href={instagramLink} target="_blank" rel="noopener noreferrer">mathys.frn</a>
                </div>
                <div className="flex items-end">
                    <h1 className="font-bold text-base lg:text-xl xl:text-3xl w-20 lg:w-32 xl:w-48">CV</h1>
                    <a className="text-base lg:text-xl xl:text-3xl font-light link-underline" href={cvLink} target="_blank">Mon CV</a>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;