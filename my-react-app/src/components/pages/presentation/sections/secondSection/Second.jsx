import React from 'react'
import { useTranslation } from 'react-i18next'
import img from '../../../../../../public/images/creative.jpg'
import "./second.css"
const Second = () => {
    const {t} = useTranslation();
  return (
    <div className='main-second-presentation'>
        <div className='content-main-second-presentation'>
            <div className='para-content-second-presentation'>
                <h1>{t('presentation_generale')}</h1>
                <p>{t('presentation_generale_page_1')}<br/><br/>{t('presentation_generale_page_2')}</p>
            </div>
            <div className='img-second-presentation'>
                <img src={img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Second