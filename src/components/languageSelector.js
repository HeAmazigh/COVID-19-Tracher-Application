import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {

    const {t, i18n} = useTranslation();

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    }

    return (
        <div onChange={changeLanguage}>
            <input type="radio" value="en" name="Language" defaultChecked/> English
            <input type="radio" value="kb" name="Language" /> Kabyle
        </div>
    );

}

export default LanguageSelector;