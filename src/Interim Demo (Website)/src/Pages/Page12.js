import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './page9.css';
import p12 from '../Assets/p12.png';

const page11 = () => {
  return (
    <div>
      <Header />
      <div className='p8-header'>
        <div>
            <h5>TU Dublin Societies</h5>
            <p>Take a look at some sample assignments that you might get as part of your course. These are just to give you a clearer picture of what you can expect while undertaking this course.</p>
        </div>
      </div>
      <div className='container p-5'>
          <img src={p12} alt='' />
      </div>
      <Footer />
    </div>
  )
}

export default page11
