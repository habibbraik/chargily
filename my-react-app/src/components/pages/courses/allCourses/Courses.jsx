import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import customFetch from '../../../../utils/customFetch';
import Loader from '../../../loading/Loader';
import './courses.css';

const Courses = () => {
  const tabsRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('Show All');
  const [data, setData] = useState(null);
  const [dataa, setDataa] = useState(null);
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
        setDataa([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleResizeTablet = () => setIsTablet(window.innerWidth < 1000);
    window.addEventListener('resize', handleResizeTablet);
    return () => window.removeEventListener('resize', handleResizeTablet);
  }, []);

  if (isLoading) {
    return (
      <div className='space-loader-content'>
        <Loader />
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className='nodata-available-for'>
        <div className='no-data-dup-for'>
          <h3>Aucun formation trouvé</h3>
        </div>
      </div>
    );
  }

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
    const updatedItems = category === 'Show All' ? data : data.filter(item => item.category.toLowerCase() === category.toLowerCase());
    setDataa(updatedItems);
    setActiveCategory(category);
  };

  const toggleReadMore = (id) => {
    setReadMoreState(prevState => ({ ...prevState, [id]: !prevState[id] }));
  };

  const uniqueCategories = data.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, []);

  const showArrows = (isMobile && data.length >= 3) || (isTablet && data.length >= 5) || (!isMobile && !isTablet && uniqueCategories.length >= 7);

  return (
    <main className='main-content-courses-all-page'>
      <div className='content-main-courses-all-page'>
        <div className='header-content-main-courses-all-page'>
          <h1>{t('tous_les_cours')}</h1>
        </div>

        {data && data.length > 0 && (
          <section className="category-section">
            <div className="wrapper">
              <div className={showArrows ? "icon left-icon" : "hide-icon"} onClick={handlePrevClick}>
                <IoIosArrowBack />
              </div>
              <ul className="tabs-box" ref={tabsRef}>
                <li className={activeCategory === 'Show All' ? 'activedcat' : 'tab'}>
                  <button onClick={() => filterItems('Show All')}>tous</button>
                </li>
                {uniqueCategories.map((category, index) => (
                  <li key={index} className={activeCategory === category ? 'activedcat' : 'tab'}>
                    <button onClick={() => filterItems(category)}>{category}</button>
                  </li>
                ))}
              </ul>
              <div className={showArrows ? "icon right-icon" : "hide-icon"} onClick={handleNextClick}>
                <IoIosArrowForward />
              </div>
            </div>
          </section>
        )}

        <div className="formations-ever-section">
          {dataa && dataa.length > 0 ? (
            <div className="formations-all-order">
              {dataa.map((item) => {
                const { _id, level, name, price, category, image } = item;
                const isReadMore = readMoreState[_id];
                return (
                  <div className='card-complet' key={_id}>
                    <div className='img-card-demi-complete'>
                      <img src={image} alt={name} />
                    </div>
                    <div className='demi-carte'>
                      <p className='categorie-carte'>{category}</p>
                      <h3>
                        {isReadMore || name.length <= 21 ? name : `${name.substring(0, 18)}..`}
                      </h3>
                      {name.length > 21 && (
                        <button
                          className='info-btn'
                          style={{
                            border: "none",
                            fontSize: "12px",
                            cursor: "pointer",
                            background: 'transparent',
                            textAlign: 'start',
                            color: 'rgba(75, 52, 195, 1)',
                            fontWeight: '700'
                          }}
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
      </div>
    </main>
  );
};

export default Courses;
