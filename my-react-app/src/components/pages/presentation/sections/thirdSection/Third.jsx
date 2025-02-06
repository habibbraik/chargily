import React from 'react';
import { useTranslation } from 'react-i18next';
import { getCardsData } from '../../../../../data';
import "./third.css";
const Third = () => {
    const cards = getCardsData();
    const {t} = useTranslation();
return (
    <div className='main-cards-presentation'>
        <div className='content-main-cards-presentation'>
            <h1 className='h1-title-cards-presentation'>{t('nos_domaines_excellence')}</h1>
            <div className='cards-presentation'>
                {cards.map((i) => (
                    <div key={i.id} className='single-card-presentation'>
                    <h1>{i.number}</h1>
                    <h3>{i.title}</h3>
                    <p>{i.para}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
};

export default Third;
