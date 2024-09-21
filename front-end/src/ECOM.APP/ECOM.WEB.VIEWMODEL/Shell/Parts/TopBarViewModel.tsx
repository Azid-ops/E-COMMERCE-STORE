import React, { useState, useEffect } from 'react';
import TopBar from '../../../ECOM.WEB.APP/Shell/Parts/TopBar.tsx';
import { useTranslation } from 'react-i18next';

const TopBarViewModel = () => {
    const { i18n } = useTranslation();

    const [languages] = useState([
        { name: 'English', code: 'en' },
        { name: 'Arabic', code: 'ar' },
        { name: 'French', code: 'fr' }
    ]);

    const [dropDownLanguage, setDropDownLanguage] = useState({ name: 'English', code: 'en' }); 
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const changeLanguage = (e) => {
        const newLanguageCode = e.value.code; 
        i18n.changeLanguage(newLanguageCode);
        setCurrentLanguage(newLanguageCode);
        setDropDownLanguage(e.value);
    };

    useEffect(() => {
        const selectedLanguage = languages.find(lang => lang.code === i18n.language);
        setDropDownLanguage(selectedLanguage);
    }, [i18n.language, languages]);

    return (
        <TopBar
            changeLanguage={changeLanguage} 
            currentLanguage={currentLanguage}
            dropDownLanguage={dropDownLanguage}
            languages={languages}
        />
    );
};

export default TopBarViewModel;
