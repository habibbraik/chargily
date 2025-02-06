import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosArrowDown } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../../public/images/logo-first-ifrest.png';
import ChangLanguages from '../../ChangLanguages';
import { useGlobalContext } from '../../context';
import customFetch from '../../utils/customFetch';
import Loader from '../loading/Loader';
import "./navbar.css";
import Sidebar from './sidebar/Sidebar';
const SecondNavbar = () => {
    const [click, setClick] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [navBg , setNavBg] = useState(false)
    const {t} = useTranslation();

    const logoutUser = async () => {
      try {
        await customFetch.get('/auth/logout');
        toast.success('Logged out successfully');
        navigate('/sign_in');
      } catch (error) {
        toast.error(error?.response?.data?.msg || 'Error logging out');
      }
    };


    const fetchUser = async () => {
      try {
        const response = await customFetch('/users/showMe');
        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      if (!user) fetchUser();
    }, [user]);

    useEffect(() => {
      if (loading) {
        document.body.style.overflow = 'hidden'; // Disable scroll
      } else {
        document.body.style.overflow = 'auto'; // Re-enable scroll
      }
      return () => {
        document.body.style.overflow = 'auto'; // Ensure scroll is re-enabled when the component unmounts
      };
    }, [loading]);


const { handleLevelChange } = useGlobalContext();

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    if (loading) {
        return (
          <div
            style={{
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'white',
              overflow:"hidden"
            }}
          >
            <Loader/>
          </div>
        );
      }
    return (
        <>
        <div className='header scrolled'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                {/* <div className='hamburger' onClick={handleClick}>
                    {click ? (
                        <FaTimes size={30} style={{ color: '#ffffff' }} />
                    ) : (
                        <FaBars size={30} style={{ color: '#ffffff' }} />
                    )}
                </div> */}
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to={"/"}>{t('accueil')}</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/presentation"}>{t('presentation')}</Link>
                    </li>
                    <li className='nav-item dropdown'>
                        <Link onClick={() => handleLevelChange('All')} to={'/cours'} id='dropdown-course'>
                          <div className='nav-arr-drop'>
                            {t('cours')}
                            <IoIosArrowDown/>
                          </div>
                        </Link>
                        <ul className='dropdowns-menu'>
                          <Link to="/cours/élève">  <li onClick={() => handleLevelChange('élève')}>{t('eleve')}</li></Link>
                          <Link to="/cours/étudiant">     <li onClick={() => handleLevelChange('étudient')}>{t('etudiant')}</li></Link>
                          <Link to="/cours/professionnel">     <li onClick={() => handleLevelChange('professionnel')}>{t('professionnel')}</li></Link>
                          <Link to="/cours/doctorat">     <li onClick={() => handleLevelChange('doctorat')}>{t('doctorat')}</li></Link>
                        </ul>
                    </li>
                    <li className='nav-item dropdown'>
                        <Link to={'#'}>
                          <div className='nav-arr-drop'>
                            {t('galerie')}
                            <IoIosArrowDown/>
                          </div>
                        </Link>
                        <ul className='galerie-dropdown'>
                            <li><Link to="/photo">{t('photo')}</Link></li>
                            <li><Link to="/video">{t('video')}</Link></li>
                        </ul>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/contact'}>{t('contact')}</Link>
                    </li>
                    <li className='nav-item'>
                        <ChangLanguages/>
                    </li>
                </ul>
                <div className='registration-button-navbar'>
                    {/* <Link to={'/sign_in'}>
                        <button>sign_up </button>
                    </Link> */}
                      {user ? (
          <div>
            {user?.role === 'admin' ? (
                <>
                <div style={{ display: 'flex', gap: '16px' }}>
              <div className="registration-button-navbar">
                <Link to="/ajouteformation">
                  <button>Dashboard</button>
                </Link>
                </div>
                <div className="registration-button-navbar">
                <Link >
              <button onClick={logoutUser}>{t('deconnecter')}</button>
              </Link>
              </div>
              </div>
              </>
            ) : (
                <>
                 <div style={{ display: 'flex', gap: '16px' }}>
                              <div className="registration-button-navbar">
                <Link to="#">
                  <button>{user.name}</button>
                </Link>
                </div>
                <div className="registration-button-navbar">
                <Link>
              <button onClick={logoutUser}>{t('deconnecter')}</button>
              </Link>
              </div>
              </div>
</>


            )}

          </div>
        ) : (
          <>
            <div style={{ display: 'flex', gap: '16px' }}>
            <div className="registration-button-navbar">
              <Link to="/sign_in">
                <button className="contact-nav">{t('se_connecter')}</button>
              </Link>
            </div>
            <div className="registration-button-navbar">
              <Link to="/sign_up">
                <button>{t('inscrire')}</button>
              </Link>
            </div>
            </div>
          </>
        )}
                </div>
            </nav>
        </div>

      <div className='sidebar'>
        <Sidebar/>
      </div>
    </>
    );
}

export default SecondNavbar