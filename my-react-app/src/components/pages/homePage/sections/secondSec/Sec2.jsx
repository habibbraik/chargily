import React from 'react';
import { useTranslation } from 'react-i18next';
import { GrCubes, GrUserExpert } from "react-icons/gr";
import { HiLightBulb } from "react-icons/hi";
import img from '../../../../../../public/images/home1.jpg';
import './sec2.css';

const Sec2 = () => {
    const {t} = useTranslation();
  return (
    <main className='main-second-section-content-home'>
        <div className='content-second-section-home'>
            <div className='img-second-section-content'>
                <div id='con-con-img-second-section-content'>
                    <img src={img} alt="" />
                </div>
            </div>
            <div className='content-text-second-section-home'>
                <h1>{t('pourquoi_nous')}</h1>
                <div className='img-second-section-content-small-size'>
                    <div id='con-con-img-second-section-content-small-size'>
                        <img src={img} alt="" />
                    </div>
                </div>
                <p>{t('pourquoi_paragraph')}</p>
                <div className='benifits-second-section-text-home'>
                    <div id='benifit-text-content-second-home'>
                        <span><HiLightBulb/></span>
                        <div id='con-text-cont-beni-sec-home'>
                            <h3>{t('approche_innovante')}</h3>
                            <p>{t('pourquoi_1')}</p>
                        </div>
                    </div>
                    <div id='benifit-text-content-second-home'>
                        <span><GrUserExpert/></span>
                            <div id='con-text-cont-beni-sec-home'>
                                <h3>{t('formateurs_experts')}</h3>
                                <p>{t('pourquoi_2')}</p>
                            </div>
                    </div>
                    <div id='benifit-text-content-second-home'>
                        <span><GrCubes/></span>
                            <div id='con-text-cont-beni-sec-home'>
                                <h3>{t('solutions_sur_mesure')}</h3>
                                <p>{t('pourquoi_3')}</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Sec2