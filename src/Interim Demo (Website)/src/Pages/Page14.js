import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './page9.css';
import p14 from '../Assets/p14.png';

const page13 = () => {
  return (
    <div>
      <Header />
      <div className='container p-5'>
          <img src={p14} alt='' />
      </div>
      <Footer />
    </div>
  )
}

export default page13
