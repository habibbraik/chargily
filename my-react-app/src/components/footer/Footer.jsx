import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import facebook from '../../../public/images/facebook (1).png';
import instagram from '../../../public/images/instagram.png';
import linkedin from '../../../public/images/linkedin (1).png';
import twitter from '../../../public/images/twitter.png';
import './footer.css';
export const Footer = () => {
    const{t} = useTranslation()
  return (
    <div className="footer">
        <div className="s-footer section-footer">
            <div className="section-links">
                <div className="footer-links">
                    <h4>{t('instutut')}</h4>
                    <Link to={'/'}>
                        <p>{t('accueil')}</p>
                    </Link>
                    <Link to={'/presentation'}>
                        <p>{t('presentation')}</p>
                    </Link>
                    <Link to={'/formations'}>
                        <p>{t('cours')}</p>
                    </Link>
                    <Link to={'/photo'}>
                        <p>{t('galerie')}</p>
                    </Link>
                    <Link to={'/contact'}>
                        <p>{t('contact')}</p>
                    </Link>
                </div>
                <div className="footer-links">
                    <h4>{t('cours')}</h4>
                    <Link to={'/cours/élève'}>
                        <p>{t('eleve')}</p>
                    </Link>
                    <Link to={'/cours/étudiant'}>
                        <p>{t('etudiant')}</p>
                    </Link>
                    <Link to={'/cours/professionnel'}>
                        <p>{t('professionnel')}</p>
                    </Link>
                    <Link to={'/cours/doctorat'}>
                        <p>{t('doctorat')}</p>
                    </Link>
                </div>
                <div className="footer-links">
                    <h4>{t('galerie')}</h4>
                    <Link to={'/photo'}>
                        <p>{t('photo')}</p>
                    </Link>
                    <Link to={'/video'}>
                        <p>{t('video')}</p>
                    </Link>
                </div>
                <div className="footer-links">
                    <h4>{t('contact')}</h4>
                    <p>first.ifrst@gmail.com</p>
                    <p>+2137-79-83-03-27</p>
                </div>
                <div className="footer-links">
                    <h4>{t('bientot')}</h4>
                    <div className="socialmedia">
                        <p><img src={facebook} alt=""/></p>
                        <p><img src={instagram} alt=""/></p>
                        <p><img src={twitter} alt=""/></p>
                        <p><img src={linkedin} alt=""/></p>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='footer-below'>
                <div className='footer-copyright'>
                    <p>
                        @{new Date().getFullYear()} FIRST IFRST. {t('droits')}.
                    </p>
                </div>
                {/* <div className='footer-below-links'>
                    <a href="#"><div><p>Termes & Conditions</p></div></a>
                    <a href="#"><div><p>Privacy</p></div></a>
                    <a href="#"><div><p>Security</p></div></a>
                    <a href="#"><div><p>Cookie Declaration</p></div></a>
                </div> */}
            </div>
        </div>
    </div>
  )
}
export default Footer;