import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './page9.css';
import p9ft from '../Assets/p9-ft.png';

const page9 = () => {
  return (
    <div>
      <Header />
      <div className='p8-header'>
        <div>
            <h5>Your Classrooms</h5>
            <p>TU059 | <span>Msc Data Science</span></p>
        </div>
      </div>
      <div className='p9-section1 container py-4'>
        <h6>Modern state-of-the-art classrooms </h6>
        <p>At TU Dublin we offer a wide range of classroom technology services from Interactive Booths, Solstice Pods, Touch Screen Controls and Blended Learning solutions.</p>
      </div>
      <div className='p9-section2 container'>
        <h5>Are you looking forward for our college, look below to <br />see what classrooms the campus has to offer</h5>
      </div>
      <div className='container'>
      <div className='devider0'></div>
      </div>
      <div className='container'>
        <img className='ft-img' src={p9ft} alt='' />
      </div>

      <Footer />
    </div>
  )
}

export default page9
