import React from 'react';
import { useTranslation } from 'react-i18next';
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import img from '../../../../../../public/images/classroom.jpg';
import './sec1.css';
const Sec1 = () => {
    const {t} = useTranslation()
  return (
    <main className='main-content-contact-page'>
        <div className='content-con-contact'>
            <div className='content-full-text-first-contact'>
                <div className='con-text-contact-first-sec'>
                    <h1>{t('contactez_nous')}</h1>
                    <p>{t('contact_paragraph')}</p>
                </div>
            </div>
            <div className='contect-addr-con-contact-sec-section'>
                <div className='netw-con-sec-contact'>
                    <div className='netw-con-sec-contact-content'>
                        <div id='con-contact-net'>
                            <span><BiLogoGmail/></span>
                        </div>
                    </div>
                        <p>first.ifrst@gmail.com</p>
                </div>
                <div className='netw-con-sec-contact'>
                    <div className='netw-con-sec-contact-content'>
                        <div id='con-contact-net'>
                            <span><FaWhatsapp/></span>
                        </div>
                    </div>
                        <p>+2137-79-83-03-27</p>
                </div>
                <div className='netw-con-sec-contact'>
                    <div className='netw-con-sec-contact-content'>
                        <div id='con-contact-net'>
                            <span><MdPhoneInTalk/></span>
                        </div>
                    </div>
                        <p>07-79-83-03-27</p>
                </div>
            </div>
            <div className='content-img-con-contact-os-section'>
                <img src={img} alt="" />
            </div>
        </div>
    </main>
  )
}

export default Sec1