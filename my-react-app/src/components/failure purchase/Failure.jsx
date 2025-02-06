
import { Link } from 'react-router-dom';
import img from '../../../public/images/failure.png';

import './failure.css';
const Failure = () => {


return (
    <div className='failure-content'>
        <div className='content-s-failure'>
            <div className='failure-header'>
                <img src={img} alt='success'/>
                <h1>Your purchase couldn't be completed</h1>
                <p> Please check your payment details and try again.
                    If you need assistance, contact our support team for help.
                </p>
            </div>
            <div className='bottom-failure'>
                <Link to={'/contact'}>
                    <button className='contact-failure'>Contact</button>
                </Link>
                <Link to={'/'}>
                    <button className='retour-failure'>Return</button>
                </Link>
            </div>
        </div>
    </div>
)
}

export default Failure