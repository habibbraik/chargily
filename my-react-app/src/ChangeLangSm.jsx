import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdArrowDropdown } from 'react-icons/io';
import './changelansm.css';

const ChangeLangSm = () => {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('fr'); // Default language
    const [clickedlan , setClickedlan] = useState(false);

    const languages = [
    { code: 'en', name: 'English' , app: 'En' },
    { code: 'ar', name: 'العربية' , app: 'ع' },
    { code: 'fr', name: 'Français' , app: 'Fr' },
    ];

    const handleLanguageChange = (language) => {
    i18n.changeLanguage(language.code);
    setCurrentLanguage(language.code);
    };

    const getLanguageName = (code) => {
    const language = languages.find(lang => lang.code === code);
    return language ? language.app : 'Language';
    };

return (
<div className="dropdown-sm">
    
    <button onClick={()=>setClickedlan(!clickedlan)} className='dropbtn-color-sm'>
    {getLanguageName(currentLanguage)}<IoMdArrowDropdown className='iconT-drop'/>
    </button>
    
    <div className={clickedlan? 'dropdown-content-lan-sm' : 'hideit'}>
    {languages.map((language) => (
        <button
        key={language.code}
        onClick={() => handleLanguageChange(language)}
        >
        {language.name}
        </button>
    ))}
    </div>
</div>
)
}

export default ChangeLangSm