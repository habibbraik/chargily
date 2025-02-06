import React from 'react';
import { useTranslation } from 'react-i18next';
import './second.css';

const Second = ({ description }) => {
  const{t} = useTranslation()
  return (
    <main className='main-content-second-single-course'>
        <div className='content-section-description-single-course'>
            <h1>{t('description')}</h1>
            <p>{description}</p> {/* Dynamically display the course description */}
        </div>
    </main>
  );
};

export default Second;
