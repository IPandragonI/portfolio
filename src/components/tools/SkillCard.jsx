const SkillCard = ({ imageSrc, title, text, single }) => (
    <div
        className={`h-20 p-2 flex items-center border border-gray-100 border-opacity-50 rounded-xl hover:bg-green-500 hover:bg-opacity-40 transition ease-in delay-50 ${single ? "w-20" : ""}`}>
        <div className="w-20 h-full flex items-center justify-center bg-green-900 hover bg-opacity-40 rounded-xl">
            <img src={imageSrc} alt={text} className="w-8 h-8"/>
        </div>
        <div className={`h-full hidden md:block ${single ? "hidden" : "ml-2 p-2 w-3/4"}`}>
            <p className="text-xl">{title}</p>
            <p className="text-xs">{text}</p>
        </div>
    </div>
);

export default SkillCard;