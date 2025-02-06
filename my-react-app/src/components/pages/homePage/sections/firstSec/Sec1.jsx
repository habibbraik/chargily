import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import img1 from '../../../../../../public/images/home1.jpg';
import img3 from '../../../../../../public/images/home6.png';
import img4 from '../../../../../../public/images/home7.png';
import img2 from '../../../../../../public/images/home_n.jpg';
import customFetch from '../../../../../utils/customFetch';
import './sec1.css';

const Sec1 = () => {
    const {t} = useTranslation();
    const [user , setUser] = useState(null)

    const fetchUser = async () => {
        try{
            const response = await customFetch.get('/users/showMe')
            setUser(response.data.user)
        } catch(error){
            console.log(err)
        }
    }

    useEffect(() => {
        if(!user) fetchUser();
    }, [user])
  return (
    <main className='home-first-sec-main'>
        <div id='blue-shadow-screen1'></div>
        <div id='blue-shadow-screen2'></div>
        <div className='home-first-sec-main-content'>
            <div className='home-f-sec-content-fr'>
                <div className='content-sec-one-sec'>
                    <h1>first ifrst</h1>
                    <div className='mobile-images-first-section'>
                        <div id='first-point'></div>
                        <div id='second-point'></div>
                        <div id='third-point'></div>
                        <div id='fourth-point'></div>
                        <div id='home-f-sec-content-sc-ig-first-mobile'>
                            <div id='img1_home_first_sec_mobile'>
                                <img src={img4} alt="" />
                            </div>
                            <div id='img1_home_first_sec_mobile'>
                                <img src={img2} alt="" />
                            </div>
                        </div>
                        <div id='home-f-sec-content-sc-ig-second-mobile'>
                            <div id='img1_home_first_sec_mobile'>
                                <img src={img3} alt="" />
                            </div>
                            <div id='img1_home_first_sec_mobile'>
                                <img src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                    <p>{t('hero_section')}</p>
                </div>
                <div className='content-sec-one-sec-btn'>
                    {user?.role === 'admin' && (
                        <>
                            <Link to="/ajouteformation">
                                <button id='content-sec-one-sec-btn-one'>Dashboard</button>
                            </Link>
                            <Link to={'/presentation'}>
                                <button id='content-sec-one-sec-btn-two'>{t('presentation')}</button>
                            </Link>
                        </>
                    )}
                    {user && user.role !== 'admin' && (
                        <>
                            <Link to="/contact">
                                <button id='content-sec-one-sec-btn-one'>{t('contact')}</button>
                            </Link>
                            <Link to={'/presentation'}>
                                <button id='content-sec-one-sec-btn-two'>{t('presentation')}</button>
                            </Link>
                        </>
                    )}
                    {!user && (
                        <>
                            <Link to="/sign_in">
                                <button id='content-sec-one-sec-btn-one'>{t('inscription')}</button>
                            </Link>
                            <Link to={'/presentation'}>
                                <button id='content-sec-one-sec-btn-two'>{t('presentation')}</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <div className='home-f-sec-content-sc-ig'>
                <div className='home-f-sec-content-sc-ig-content'>
                    <div id='first-point'></div>
                    <div id='second-point'></div>
                    <div id='third-point'></div>
                    <div id='fourth-point'></div>
                    <div id='fifth-point'></div>
                    <div id='sixth-point'></div>
                    <div id='seven-point'></div>
                    <div id='eight-point'></div>
                    <div id='home-f-sec-content-sc-ig-first'>
                        <div id='img1_home_first_sec'>
                            <img src={img1} alt="" />
                        </div>
                        <div id='img1_home_first_sec'>
                            <img src={img3} alt="" />
                        </div>
                    </div>
                    <div id='home-f-sec-content-sc-ig-second'>
                        <div id='img1_home_first_sec'>
                            <img src={img4} alt="" />
                        </div>
                        <div id='img1_home_first_sec'>
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Sec1