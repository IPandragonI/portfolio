const ContactSection = () => {
    const email = 'mathysf84pro@gmail.com';
    const linkedinLink = 'https://www.linkedin.com/in/mathys-farineau/';
    const cvLink = 'docs/Mathys_FARINEAU.pdf';
    const githubLink = 'https://github.com/IPandragonI';

    return (
        <div className="flex flex-col w-9/12 py-10 h-3/6 md:py-0 absolute z-10">
            <h1 className="text-primary font-bold text-3xl lg:text-7xl">CONTACT</h1>
            <hr className="h-[2px] my-4 rounded-3xl bg-primary border-0"/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <ContactItem title="LIKEDIN" content="mathys-farineau" link={linkedinLink} />
                <ContactItem title="EMAIL" content={email} />
                <ContactItem title="GITHUB" content="IPandragonI" link={githubLink} />
                <ContactItem title="CV" content="Mon CV" link={cvLink} />
            </div>
        </div>
    );
};

const ContactItem = ({ title, content, onClick, link }) => (
    <div className="flex items-end justify-between md:justify-start">
        <h1 className="font-bold text-base lg:text-xl xl:text-3xl text-primary w-20 lg:w-32 xl:w-36">{title}</h1>
        {link ? (
            <a className="text-xs lg:text-xl xl:text-3xl text-text-color font-light relative inline-block link-underline decoration-0 after:absolute after:w-0 after:h-[.15rem] after:block after:mt-1 after:right-0 after:bg-primary after:transition[width-right] after:ease-in after:duration-300 hover:after:w-full hover:after:right-0 cursor-hover" href={link} target="_blank">{content}</a>
        ) : (
            <a target="_blank" href="mailto:{email}" className="text-xs lg:text-xl xl:text-3xl text-text-color font-light relative inline-block decoration-0 link-underline after:absolute after:w-0 after:h-[.15rem] after:block after:mt-1 after:right-0 after:bg-primary after:transition[width-right] after:ease-in after:duration-300 hover:after:w-full hover:after:right-0 cursor-hover" onClick={onClick}>{content}</a>
        )}
    </div>
);

export default ContactSection;