import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Form, Link, redirect, useActionData } from 'react-router-dom'
import { toast } from 'react-toastify'
import FormRow from '../../../FormRow'
import '../../../I18next'
import customFetch from '../../../utils/customFetch'
import SubmitBtn from "../../SubmitBtn"
import './login.css'
export const action=async({request})=>{
    
    const formData=await request.formData()
    const data=Object.fromEntries(formData)
    const errors={msg:''}
    if(data.password.length < 3){
      errors.msg='passowrd too short'
      return errors;
    }
    try {
      const response = await customFetch.post('/auth/login', data);
      const { data: responseData } = response;
      const { user } = responseData;

      toast.success('Login successful');
      if (user.role === 'admin') {
        return redirect('/');
      } else if (user.role === 'user') {
        return redirect('/');
      }
    } catch (error) {
      const errorMsg = error?.response?.data?.msg || 'An unexpected error occurred';
      toast.error(errorMsg);
      return error;
    }


  }

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
    const {t} = useTranslation()
    const errors=useActionData()
  return (
    <main className='main-login-content'>
        <div className='content-main-login-content'>
            <div className='signin-login-content'>
                <div className='content-signin-login-content'>
                    <div className='header-content-signin-login-content'>
                        <h1>{t('se_connecter')}</h1>
                        <p>{t('information_compte')}</p>
                    </div>
                    <div className='form-content-signin-login-content'>
                        <Form action="" method='POST' className='form-form-form-content-signin-login-content'>
                            <FormRow type="email" name='email' placeholder={t('email')}/> <br/>
                            <div id='sign-visible-password'>
                              <FormRow type={passwordVisible? 'text' : 'password'} name='password' placeholder={t('mot_pass')} id='password-visible-signin'/>
                              <span type='button' className='eye-visibility-pwd' onClick={togglePasswordVisibility} >
                                {passwordVisible? <FaEyeSlash/> : <FaEye/>}
                              </span>
                            </div>
                            {errors?.msg && <p style={{color:'red'}}>{errors.msg}</p>}
                            {/* <button type='submit'>sign in</button> */}

                            <SubmitBtn text={t('se_connecter')} request="login" />
                        </Form>
                        <Link to={'/sign_up'} id='inscrire-phone'>
                          <button>{t('inscrire')}</button><br/>
                        </Link>
                        <Link to={'/'}>
                            <button>{t('retour')}</button>
                        </Link>
                        <div className='password-forget-signin'>
                          <p>{t('mot_pass_oub')} <Link to={'/forgot-password'}>{t('ici')}</Link> {t('initialiser')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='signup-login-content'>
                <div className='content-signup-login-content'>
                    <h1>{t('salut')}</h1>
                    <p>{t('avez_compte')}</p>
                    <Link to={'/sign_up'}>
                        <button>{t('inscrire')}</button>
                    </Link>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Login