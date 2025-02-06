import { useTranslation } from 'react-i18next';
import img from '../../../../../../public/images/why.jpg';
import "./first.css";

const First = () => {
    const {t} = useTranslation();
  return (
    <div className="main-class-first-presentation">
        <div className="content-main-class-presentation">
            <div className="content-para-presentation-first">
                <h1>{t('pourquoi_first')}</h1>
                <p>{t('pourquoi_first_paragraph')}</p>
            </div>
            <div className="img-first-presentation">
                <img src={img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default First