import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './page9.css';
import p11f from '../Assets/p11f.png';
import p11s from '../Assets/p11s.png';

const page11 = () => {
  return (
    <div>
      <Header />
      <div className='p8-header'>
        <div>
            <h5>Academic Modules</h5>
            <p>Take a look at some sample assignments that you might get as part of your course. These are just to give you a clearer picture of what you can expect while undertaking this course.</p>
        </div>
      </div>
      <div className='container py-3'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={p11f} alt=''/>
          </div>
          <div className='col-md-6'>
            <img src={p11s} alt=''/>
          </div>
        </div>
        <div className='row pt-3'>
          <div className='col-md-6'>
            <p>The above is a sample assignment from the Secure Systems Development module.</p>
          </div>
          <div className='col-md-6'>
            <p>The above assignment is from the Scientific Research and Literature Module.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page11
