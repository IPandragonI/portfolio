const SkillCard = ({ imageSrc, title, text }) => (
    <div className="h-20 p-2 flex items-center border border-gray-100 border-opacity-50 rounded-xl">
        <div className="w-16 h-full flex items-center justify-center bg-green-900 bg-opacity-40 rounded-xl">
            <img src={imageSrc} alt={text} className="w-8 h-8"/>
        </div>
        <div className="w-3/4 h-full ml-2 p-2">
            <p className="text-xl">{title}</p>
            <p className="text-xs">{text}</p>
        </div>
    </div>
);

export default SkillCard;