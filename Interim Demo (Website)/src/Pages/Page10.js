import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './page9.css';
import p10 from '../Assets/p10.png';

const page9 = () => {
  return (
    <div>
      <Header />
      <div className='p8-header'>
        <div>
            <h5>Video Lectures by our professors</h5>
            <p>TU059 | <span>Msc Data Science</span></p>
        </div>
      </div>
      <div className='container'>
        <div className='devider0'></div>
      </div>
      <div className='container'>
        <img className='ft-img' src={p10} alt='' />
      </div>
      <div className='container'>
        <div className='devider0'></div>
      </div>
      <Footer />
    </div>
  )
}

export default page9
