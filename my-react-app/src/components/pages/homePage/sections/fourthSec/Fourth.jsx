import React from 'react'
import { useTranslation } from 'react-i18next'
import img from '../../../../../../public/images/home3.jpg'
import './fourth.css'
const Fourth = () => {
    const {t} = useTranslation();
  return (
    <main className='main-section-four-home-page'>
        <div className='content-main-section-four-home-page'>
            <div className='cote-section-information'>
                <h2>{t('engagement')}<br/> {t('et')} <span>{t('valeur')}</span></h2>
                <div className='numero-valeur-section-four-home-page'>
                    <div className='numero-section-four-home-page number-one'>
                        <div className='number-title-each-line'>
                            <h1>01</h1>
                        </div>
                        <div className='content-numero-section'>
                            <h4>{t('excellence')}</h4>
                            <p>{t('excellence_phrase')}</p>
                        </div>
                    </div>
                    <div className='numero-section-four-home-page number-two'>
                        <div className='number-title-each-line'>
                            <h1>02</h1>
                        </div>
                            <div className='content-numero-section'>
                                <h4>{t('innovation')}</h4>
                                <p>{t('innovation_phrase')}</p>
                            </div>
                        </div>
                    <div className='numero-section-four-home-page number-three'>
                        <div className='number-title-each-line'>
                            <h1>03</h1>
                        </div>
                            <div className='content-numero-section'>
                                <h4>{t('ethique')}</h4>
                                <p>{t('ethique_phrase')}</p>
                            </div>
                        </div>
                </div>
            </div>
            <div className='second-cote-image-represent'>
                <img src={img} alt="" />
            </div>
        </div>
    </main> 
  )
}

export default Fourth