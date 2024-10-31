import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';

const LanguageSwitcher = () => {
    const {i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then(r => console.log(r));
    };

    useEffect(() => {
        const toggleSwitch = document.getElementById('toggleSwitch');

        if (toggleSwitch) {
            toggleSwitch.addEventListener('click', function () {
                if (toggleSwitch.classList.contains('french')) {
                    changeLanguage('en');
                    toggleSwitch.classList.remove('french');
                    toggleSwitch.classList.add('english');
                } else {
                    changeLanguage('fr');
                    toggleSwitch.classList.remove('english');
                    toggleSwitch.classList.add('french');
                }
            });

            return () => {
                toggleSwitch.removeEventListener('click', function () {
                });
            };
        }
    }, []);

    return (
        <>
            <div className="toggle-switch french" id="toggleSwitch">
                <div className="switch"></div>
                <div className="french"></div>
                <div className="english"></div>
            </div>
        </>
    );
}

export default LanguageSwitcher;