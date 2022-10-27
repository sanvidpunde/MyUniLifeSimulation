import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './page3-1.css';
import { Link } from 'react-router-dom';

const page3 = () => {
  return (
    <div>
      <Header />
      <div className='section p3-section1'>
        <h4>UniLifeHunt</h4>
        <p>the test help you choose your career</p>
      </div>
      <div className='section p3-section2'>
        <p className='timer'>60 seconds from finish</p>
        <div className='bar'></div>
        <h4>Do you like scientific experiments?</h4>
        <div className='test-optios'>
            <div>
                <p className='submit-test'>Strongly Agree</p>
                <p>Agree</p>
                <p>Slightly Agree</p>
                <p>Neither Agree or Disagree</p>
            </div>
            <div>
                <p>Disagree</p>
                <p>Slightly Disagree</p>
                <p>Strongly Disagree</p>
            </div>
        </div>
        <Link to='/page4'>
          <p className='submit-test'>Continue</p>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default page3
