import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then(r => null);
    };

    useEffect(() => {
        const toggleSwitch = document.getElementById('toggleSwitch');
        const frFlag = document.getElementById('frFlag');
        const ukFlag = document.getElementById('ukFlag');

        if (toggleSwitch) {
            toggleSwitch.addEventListener('click', function () {
                if (toggleSwitch.classList.contains('french')) {
                    changeLanguage('en');
                    toggleSwitch.classList.remove('french');
                    toggleSwitch.classList.add('english');
                    ukFlag.classList.remove('opacity-50');
                    frFlag.classList.add('opacity-50');
                } else {
                    changeLanguage('fr');
                    toggleSwitch.classList.remove('english');
                    toggleSwitch.classList.add('french');
                    frFlag.classList.remove('opacity-50');
                    ukFlag.classList.add('opacity-50');
                }
            });

            return () => {
                toggleSwitch.removeEventListener('click', function () {});
            };
        }
    }, []);

    return (
        <div className="flex">
            <img src="images/fr.png" alt="french flag" id="frFlag" className="w-8 h-6 mx-4 rounded-md transition ease-in delay-100"/>
            <div className="toggle-switch french" id="toggleSwitch">
                <div className="switch"></div>
                <div className="french"></div>
                <div className="english"></div>
            </div>
            <img src="images/uk.png" alt="united kingdom flag" id="ukFlag" className="w-8 h-6 mx-4 rounded-md opacity-50 transition ease-in delay-100"/>
        </div>
    );
}

export default LanguageSwitcher;