import React, { useState,useEffect } from 'react';
import TopBar from '../../../ECOM.WEB.APP/Shell/Parts/TopBar.tsx';
import { useTranslation } from 'react-i18next';


const TopBarViewModel = () =>{

    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const changeLanguage = (e) => {
        e.preventDefault();
        const newLanguage = currentLanguage === "en" ? "ar" : "en";
        i18n.changeLanguage(newLanguage);
        setCurrentLanguage(newLanguage);
    };

    useEffect(() => {
        setCurrentLanguage(i18n.language);
    }, [i18n.language]);
    
    return(
        <TopBar changeLanguage={changeLanguage} currentLanguage={currentLanguage}/>
    )
}

export default TopBarViewModel;