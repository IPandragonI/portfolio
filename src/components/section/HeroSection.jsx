import { useTranslation } from "react-i18next";
import {DarkModeSwitcher, Hamburger, LanguageSwitcher} from "../tool";

const HeroSection = ({ sections }) => {
    const { t } = useTranslation();

    return (
        <>
            <div className='flex flex-col h-full w-10/12 py-10 md:h-5/6 absolute z-10'>
                <nav className='flex justify-between w-full items-center h-12'>
                    <div className="border border-primary rounded-3xl px-3 py-1">
                        <p className="text-xs md:text-sm text-primary">Full-Stack developper</p>
                    </div>
                    <div className='flex items-center'>
                        <DarkModeSwitcher />
                        <LanguageSwitcher />
                        <Hamburger sections={sections} />
                    </div>
                </nav>
                <div className="flex flex-col justify-center h-full items-center text-center">
                    <h1 className="text-3xl lg:text-7xl font-bold text-primary">{t('heroSection_title_1')}</h1>
                    <div className="my-4 text-center">
                        <h2 className="text-sm lg:text-lg text-tertiary">{t('heroSection_legend_1')}</h2>
                        <h2 className="text-sm lg:text-lg text-tertiary">{t('heroSection_legend_2')}</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;