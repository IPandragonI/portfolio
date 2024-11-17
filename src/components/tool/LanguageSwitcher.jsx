import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then(r => null);
    };

    useEffect(() => {
        const toggleSwitch = document.getElementById('toggleSwitch');
        const languageText = document.getElementById('languageText');

        if (toggleSwitch) {
            toggleSwitch.addEventListener('click', function () {
                if (toggleSwitch.classList.contains('french')) {
                    changeLanguage('en');
                    toggleSwitch.classList.remove('french');
                    toggleSwitch.classList.add('english');
                    languageText.innerText = 'EN';
                } else {
                    changeLanguage('fr');
                    toggleSwitch.classList.remove('english');
                    toggleSwitch.classList.add('french');
                    languageText.innerText = 'FR';
                }
            });

            return () => {
                toggleSwitch.removeEventListener('click', function () {});
            };
        }
    }, []);

    return (
        <div className="flex">
            <div className="toggle-switch french cursor-pointer" id="toggleSwitch">
                <p id="languageText" className="text-lg text-indicator-focus hover:text-slate-800 transition ease-in delay-50">FR</p>
            </div>
        </div>
    );
}

export default LanguageSwitcher;