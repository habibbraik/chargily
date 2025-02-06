import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiOutlineMenu } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../../../public/images/logo-first-ifrest.png';
import ChangeLangSm from '../../../ChangeLangSm';
import { useGlobalContext } from '../../../context';
import customFetch from '../../../utils/customFetch';
import './sidebar.css';

const Sidebar = () => {
    const navigate = useNavigate();
    const { handleLevelChange } = useGlobalContext();
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const{t} = useTranslation()
    const [dropdownOpen, setDropdownOpen] = useState({
        cours: false,
        galerie: false
    });

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

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (dropdown) => {
        setDropdownOpen(prevState => ({
            ...prevState,
            [dropdown]: !prevState[dropdown]
        }));
    };

    if (loading) {
      return (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
          }}
        >
          <div>Loading...</div>
        </div>
      );
    }


    document.addEventListener('DOMContentLoaded', function () {
      const dropdowns = document.querySelectorAll('.dropdown');
    
      dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function (e) {
          const menu = this.querySelector('.dropdown-menu');
          // Toggle the visibility of the dropdown menu
          menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
          // Prevent the click event from propagating further
          e.stopPropagation();
        });
      });
    
      // Close all dropdowns if the user clicks anywhere outside
      document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {
          const openMenus = document.querySelectorAll('.dropdown-menu');
          openMenus.forEach(menu => {
            menu.style.display = 'none';
          });
        }
      });
    });
    

    return (
        <>
        <div className='par-button-toggle-sidebar'>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
              <HiOutlineMenu/>
          </button>
        </div>

        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
          <main className='sidebar-content'>
            <div className="sidebar-header">
            <img src={logo} alt="Logo" className="sidebar-logo" />
            <button className="close-btn" onClick={toggleSidebar}>
                <ImCross/>
            </button>
            </div>

            <ul className="sidebar-menu">
            <li>
                <Link to="/" onClick={toggleSidebar}>{t('accueil')}</Link>
            </li>
            <li>
                <Link to="/presentation" onClick={toggleSidebar}>{t('presentation')}</Link>
            </li>
            <li>
                <div className="dropdown">
                {/* Prevent navigation and toggle dropdown */}
                <Link 
                    to="#" 
                    className="dropdown-toggle" 
                    onClick={(e) => {
                        e.preventDefault();  // Prevent link navigation
                        toggleDropdown('cours');
                    }}>
                  <div className='child-dropdown-toggle'>
                    {t('cours')} <IoIosArrowDown/>
                  </div>
                </Link>
                  {dropdownOpen.cours && (
                    <ul className="dropdown-menu">
                      <Link to="/cours/élève" onClick={() => handleLevelChange('élève')} >
                        <li>{t('eleve')}</li>
                      </Link>
                      <Link to="/cours/étudiant"  onClick={() => handleLevelChange('étudiant')}>
                        <li >{t('etudiant')}</li>
                      </Link>
                      <Link to="/cours/professionnel" >
                        <li onClick={() => handleLevelChange('Professionnel')}>{t('professionnel')}</li>
                      </Link>
                      <Link to="/cours/doctorat" >
                        <li onClick={() => handleLevelChange('Doctorat')}>{t('doctorat')}</li>
                      </Link>
                    </ul>
                  )}
                </div>
            </li>
            <li>
                <div className="dropdown">
                {/* Prevent navigation and toggle dropdown */}
                <Link 
                    to="#" 
                    className="dropdown-toggle" 
                    onClick={(e) => {
                        e.preventDefault();  // Prevent link navigation
                        toggleDropdown('galerie');
                    }}>
                <div className='child-dropdown-toggle'>
                    {t('galerie')} <IoIosArrowDown/>
                  </div>
                </Link>
                {dropdownOpen.galerie && (
                  <ul className="dropdown-menu">
                    <li><Link to="/photo" onClick={toggleSidebar}>{t('photo')}</Link></li>
                    <li><Link to="/video" onClick={toggleSidebar}>{t('video')}</Link></li>
                  </ul>
                )}
                </div>
            </li>
            <li>
                <Link to="/contact" onClick={toggleSidebar}>{t('contact')}</Link>
            </li>
            <li>
              <ChangeLangSm/>
            </li>
            </ul>
            {user ? (
                <div>
                    {user?.role === 'admin' ? (
                        <div className='buttons-side'>
                            <Link to="/ajouteformation" className="register-btn">
                                Dashboard
                            </Link>
                            <Link to="/sign_in" className="register-btn" onClick={logoutUser}>
                                {t('deconnecter')}
                            </Link>
                        </div>
                    ) : (
                        <div className='buttons-side'>
                            <Link to="#" className="register-btn">
                                {user.name}
                            </Link>
                            <Link to='/sign_in' className="register-btn" onClick={logoutUser}>
                                {t('deconnecter')}
                            </Link>
                        </div>
                    )}
                </div>
            ) : (
                <div className='buttons-side'>
                    <Link to="/sign_in" className="register-btn">
                        {t('se_connecter')}
                    </Link>
                    <Link to="/sign_up" className="register-btn">
                        {t('inscrire')}
                    </Link>
                </div>
            )}
        </main>
        </aside>
        </>
    );
};

export default Sidebar;
