import LanguageSwitcher from "../tools/LanguageSwitcher.jsx";
import {useTranslation} from "react-i18next";

const HeroSection = () => {
    const {t} = useTranslation();

    return (
        <div className='flex flex-col w-full'>
            <nav className='flex justify-between'>
                <div className='w-10 h-10 rounded-lg bg-section-3 items-center justify-center flex font-bold shadow-md'>
                    <img src="public/code.svg" alt='code icon'/>
                </div>
                <LanguageSwitcher/>
            </nav>
            <div className="flex flex-col relative top-4 md:top-20 items-center md:items-start">
                <h1 className="-mb-4 md:-mb-6">{t('heroSection_title_1')}</h1>
                <h1>{t('heroSection_title_2')}</h1>
                <h2>{t('heroSection_legend')}</h2>
            </div>
        </div>
    );
}

export default HeroSection;