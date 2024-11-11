const ContactSection = () => {
    return (
        <div className="flex h-full flex-col md:w-9/12 py-10 md:h-3/6 md:py-0 absolute z-10">
            <h1>CONTACT</h1>
            <hr className="w-10/12 h-[2px] my-4 bg-white border-0"/>
            <div className="grid grid-cols-2">
                <div className="flex items-end">
                    <h1 className="font-bold text-3xl">EMAIL</h1>
                    <h1 className="text-3xl font-light ml-10">mathysf84pro@gmail.com</h1>
                </div>
                <div className="flex items-end">
                    <h1 className="font-bold text-3xl">Réseaux</h1>
                    <h1 className="text-3xl font-light ml-10">mathys.frn</h1>
                </div>
                <div className="flex items-end">
                    <h1 className="font-bold text-3xl">CV</h1>
                    <h1 className="text-3xl font-light ml-10">lien_vers_cv</h1>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;