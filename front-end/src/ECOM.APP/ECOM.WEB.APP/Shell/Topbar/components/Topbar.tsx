import React, { useState, useEffect, useRef } from "react";
import TopBar from "../pages/TopBar.tsx";
import { useTranslation } from 'react-i18next';

const Topbar = () => {
    const { i18n } = useTranslation();

    const dropdownWrapperRef = useRef<HTMLDivElement>(null);

    const [inputPadding, setInputPadding] = useState("75px");

    const [languages] = useState([
        { name: 'English', code: 'en' },
        { name: 'Arabic', code: 'ar' },
        { name: 'French', code: 'fr' }
    ]);

    const [items] = useState([
        { name: 'All', code: 'all' },
        { name: 'All Categories', code: 'ac' },
        { name: 'ECOM Devices', code: 'ed' },
        { name: 'Health, Household and Baby Care', code: 'hbc' },
    ]);

    const [dropDownLanguage, setDropDownLanguage] = useState({ name: 'English', code: 'en' }); 
    const [dropDownItems, setDropDownItems] = useState({ name: 'All', code: 'all' }); 

    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const changeLanguage = (e) => {
        const newLanguageCode = e.value.code; 
        i18n.changeLanguage(newLanguageCode);
        setCurrentLanguage(newLanguageCode);
        setDropDownLanguage(e.value);
    };

    const changeItem = (e) => {
        setDropDownItems(e.value);
        console.log(dropDownItems);
    }

    useEffect(() => {
        const selectedLanguage = languages.find(lang => lang.code === i18n.language);
        if (selectedLanguage) {
            setDropDownLanguage(selectedLanguage);
        } else {
            setDropDownLanguage({ name: 'English', code: 'en' });
        }
    }, [i18n.language, languages]);

    useEffect(() => {
        if (dropdownWrapperRef.current) {
            const dropdownWrapperWidth = dropdownWrapperRef.current.offsetWidth; 
            setInputPadding(`${dropdownWrapperWidth + 10}px`);
        }
    }, [dropDownItems]);

    return (
        <TopBar
            changeLanguage={changeLanguage}
            currentLanguage={currentLanguage}
            dropDownLanguage={dropDownLanguage}
            languages={languages}
            items={items}
            dropDownItems={dropDownItems}
            changeItem={changeItem}
            dropdownWrapperRef={dropdownWrapperRef}
            inputPadding={inputPadding}
        />
    );
};

export default Topbar;
