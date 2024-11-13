const SkillCard = ({ imageSrc, title, text, single }) => (
    <div
        className={`h-10 lg:h-20 p-2 flex items-center hover:bg-orange-500 hover:bg-opacity-40 transition ease-in delay-50`}>
        <div className="w-10 xl:w-20 h-full flex items-center justify-center">
            <img src={imageSrc} alt={text} className="w-4 h-4 lg:w-8 lg:h-8"/>
        </div>
        <div className={`hidden xl:block ${single ? "hidden" : "ml-2 p-2 w-3/4"}`}>
            <p className="text-xl">{title}</p>
        </div>
    </div>
);

export default SkillCard;