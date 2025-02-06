import axios from 'axios'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import '../../../../../../I18next'
import './form.css'
const FormContact = () => {
    const {t} = useTranslation();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [subject, setSubject] = useState();
    const [fullName, setFullName] = useState()
    const [message, setMessage] = useState();
    const sendMail = () => {
        axios.get("http://localhost:5000/sendEmail", {
            params: {
              email,
              subject,
              phoneNumber,
              fullName,
              message,
            },
          })
          .then(() => {
            //success
            toast.success("success send email");
          })
          .catch((error) => {
            console.log(error)
            toast.error("failure to send email ");
          });
      };
      const handleSubmit=(e)=>{
        e.preventDefault()
      }
  return (
    <main className='form-contact-con'>
        <div className='content-form-contact-con'>
            <div className='header-content-contact-form'>
                <h1>{t('contactez_nous')}</h1>
                <p>{t('form_paragraph')}</p>
            </div>
            <div className='form-contact-page'>
            <form onSubmit={handleSubmit} className='form-form-contact'>

                    <label htmlFor="">{t('nom')}</label><br/>
                    <input type='text' name='username' onChange={(e)=>setFullName(e.target.value)} /><br/>
                    <label htmlFor="">{t('email')}</label><br/>
                    <input type='email' name='email' onChange={(e) => setEmail(e.target.value)}/><br/>
                    <label htmlFor="">{t('telephone')}</label><br/>
                    <input type='tel' name='phone-number' onChange={(e) => setPhoneNumber(e.target.value)} /><br/>
                    <label htmlFor="">{t('sujet')}</label><br/>
                    <input
                      type='text'
                      onChange={(e) => setSubject(e.target.value)}
                    /><br/>
                    <label htmlFor="">{t('message')}</label><br/>
                    <textarea name='message' onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button
                     style={{
                        backgroundColor: '#6d8def', // Green background
                        color: 'white',            // White text
                        padding: '10px 20px',      // Padding inside the button
                        border: 'none',            // Remove border
                        borderRadius: '5px',       // Rounded corners
                        cursor: 'pointer',         // Pointer cursor on hover
                        fontSize: '16px',          // Font size
                      }}
                    type='submit' onClick={sendMail}>{t('envoyer')}</button>
                </form>
            </div>
        </div>
    </main>
  )
}

export default FormContact