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
            <hr className="h-[2px] my-4 rounded-3xl bg-primary border-0"/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <ContactItem title="RÉSEAUX" content="mathys.frn" link={instagramLink} />
                <ContactItem title="EMAIL" content={email} onClick={copyToClipboard} />
                {isPopupVisible && <Popup message="Copié !" />}
                <ContactItem title="CV" content="Mon CV" link={cvLink} />
            </div>
        </div>
    );
};

const ContactItem = ({ title, content, onClick, link }) => (
    <div className="flex items-end">
        <h1 className="font-bold text-base lg:text-xl xl:text-3xl w-20 lg:w-32 xl:w-48">{title}</h1>
        {link ? (
            <a className="text-sm lg:text-xl xl:text-3xl font-light link-underline cursor-hover" href={link} target="_blank" rel="noopener noreferrer">{content}</a>
        ) : (
            <a href="#" className="text-sm lg:text-xl xl:text-3xl font-light link-underline cursor-hover" onClick={onClick}>{content}</a>
        )}
    </div>
);

const Popup = ({ message }) => (
    <div className="absolute mb-2 transform translate-x-[60rem] -translate-y-20 bg-neutral-800 p-2 rounded shadow text-sm">
        <div className="relative">
            <p className="text-gray-100">{message}</p>
        </div>
    </div>
);

export default ContactSection;