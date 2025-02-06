import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import customFetch from '../../../../utils/customFetch';
import Footer from '../../../footer/Footer';
import Loader from '../../../loading/Loader'; // Import your Loader component
import SecondNavbar from '../../../navbar/SecondNavbar';
import '../allCourses/courses.css';

const Doctorat = () => {
    const tabsRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState('Show All');
    const [data, setData] = useState([]);
    const [dataa, setDataa] = useState([]);
    const [readMoreState, setReadMoreState] = useState({});
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
    const [isTablet, setIsTablet] = useState(window.innerWidth >= 600 && window.innerWidth < 1000);
    const [isLoading, setIsLoading] = useState(true);
    const { t } = useTranslation();

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await customFetch('/courses');
                setData(data.courses);
                setDataa(data.courses);
            } catch (error) {
                console.error(error);
                setData([]);
            } finally {
                setIsLoading(false); // Ensure loading state is updated
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 600);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleResizeTablet = () => setIsTablet(window.innerWidth < 1000);
        window.addEventListener('resize', handleResizeTablet);
        return () => window.removeEventListener('resize', handleResizeTablet);
    }, []);

    const handlePrevClick = () => {
        if (tabsRef.current) {
            tabsRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const handleNextClick = () => {
        if (tabsRef.current) {
            tabsRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    const filterItems = (category) => {
        const updatedItems = category === 'Show All' ? data : data.filter(item => item.category === category);
        setDataa(updatedItems);
        setActiveCategory(category);
    };

    const toggleReadMore = (id) => {
        setReadMoreState(prevState => ({ ...prevState, [id]: !prevState[id] }));
    };

    const doctorat = data.filter(item => item.level === 'doctorat');
    const uniqueCategories = Array.from(new Set(doctorat.map(item => item.category)));
    const isSliderActive = (isMobile && data.length >= 3) || (isTablet && data.length >= 5) || (!isMobile && !isTablet && uniqueCategories.length >= 7);
    const filteredData = dataa.filter(item => item.level === 'doctorat');

    return (
        <>
            <SecondNavbar />
            <main className='main-content-courses-all-page'>
                <div className='content-main-courses-all-page'>
                    <div className='header-content-main-courses-all-page'>
                        <h1>{t('doctorat')}</h1>
                    </div>
                    <section>
                        {filteredData.length > 0 && (
                            <section className="category-section">
                                <div className="wrapper">
                                    <div className={isSliderActive ? "icon left-icon" : "hide-icon"} onClick={handlePrevClick}>
                                        <IoIosArrowBack />
                                    </div>
                                    <ul className="tabs-box" ref={tabsRef}>
                                        <li className={activeCategory === 'Show All' ? 'activedcat' : 'tab'}>
                                            <button onClick={() => filterItems('Show All')}>Tous</button>
                                        </li>
                                        {uniqueCategories.map((category, index) => (
                                            <li key={index} className={activeCategory === category ? 'activedcat' : 'tab'}>
                                                <button onClick={() => filterItems(category)}>{category}</button>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className={isSliderActive ? "icon right-icon" : "hide-icon"} onClick={handleNextClick}>
                                        <IoIosArrowForward />
                                    </div>
                                </div>
                            </section>
                        )}

                        <div className="formations-ever-section">
                            {isLoading ? (
                                <div className="space-loader-content">
                                    <Loader />
                                </div>
                            ) : filteredData.length > 0 ? (
                                <div className="formations-all-order">
                                    {filteredData.map(item => {
                                        const { _id, level, name, price, category, image } = item;
                                        const isReadMore = readMoreState[_id];

                                        return (
                                            <div className='card-complet' key={_id}>
                                                <div className='img-card-demi-complete'>
                                                    <img src={image} alt={name} />
                                                </div>
                                                <div className='demi-carte'>
                                                    <p className='categorie-carte'>{category}</p>
                                                    <h3>{isReadMore || name.length <= 21 ? name : `${name.substring(0, 18)}..`}</h3>
                                                    {name.length > 21 && (
                                                        <button
                                                            style={{
                                                                border: "none",
                                                                fontSize: "12px",
                                                                cursor: "pointer",
                                                                background: 'transparent',
                                                                textAlign: 'start',
                                                                color: 'rgba(75, 52, 195, 1)',
                                                                fontWeight: '700'
                                                            }}
                                                            className='info-btn'
                                                            onClick={() => toggleReadMore(_id)}
                                                        >
                                                            {isReadMore ? 'Lire moins' : 'Lire plus'}
                                                        </button>
                                                    )}
                                                    <div className='p-items'>
                                                        <p className='nombre-inscription'>{level}</p>
                                                        <div className='bas-carte'>
                                                            <h4>{price}DA</h4>
                                                            <Link to={`/formation/course/${_id}`}><button>View</button></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className='nodata-available-for'>
                                    <div className='no-data-dup-for'>
                                        <h3>Aucun formation trouvé</h3>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Doctorat;
