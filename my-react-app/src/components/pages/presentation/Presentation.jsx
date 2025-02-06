import React from 'react';
import Footer from '../../footer/Footer';
import SecondNavbar from '../../navbar/SecondNavbar';
import First from './sections/firstSection/First';
import Second from './sections/secondSection/Second';
import Third from './sections/thirdSection/Third';

const Presentation = () => {
  return (
    <>
        <SecondNavbar/>
        <First/>
        <Second/>
        <Third/>
        <Footer/>
    </>
)
}

export default Presentation;