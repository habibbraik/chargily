import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosArrowDown } from "react-icons/io";
import './ChangLanguages.css';
import { useGlobalContext } from './context';


const ChangLanguages = ({isBlack}) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('fr'); // Default language
  const { nav } = useGlobalContext();

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
    <div className="dropdown">
      {isBlack ?(
        <div className=' dropbtn dropbtn-color'>
        {getLanguageName(currentLanguage)}<IoIosArrowDown className='iconT'/>
      </div>
      ):(
        <div className= {nav? ' dropbtn dropbtn-color' : 'dropbtn outbd'}>
        {getLanguageName(currentLanguage)}<IoIosArrowDown className='iconT'/>
      </div>
      )}
      
      <div className="dropdown-content-lan">
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
  );
};

export default ChangLanguages;
