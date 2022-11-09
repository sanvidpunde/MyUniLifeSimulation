import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './page8.css';
import corRab1 from '../Assets/cor-tab1.png';
import vidr from '../Assets/vidr.png';
import ass from '../Assets/ass.png';
import work from '../Assets/work.png';
import lec from '../Assets/lec.png';
import soc from '../Assets/soc.png';
import { Link } from 'react-router-dom';

const page8 = () => {
  return (
    <div>
      <Header />
      <div className='p8-header'>
        <div>
            <h5>Explore Your Course</h5>
            <p>TU059 | <span>Msc Data Science</span></p>
        </div>
      </div>
      <div className='container p-5'>
        <div className='row'>
            <div className='col-md-4'>
               <div className='cor-card'>
                    <div className='img-wrapper'>
                        <img src={corRab1} alt='' />
                    </div>
                    <Link to='/page9'>
                      <h6>Our Classrooms</h6>
                    </Link>
                    <p>Click here to get a tour of your classrooms.</p>
               </div>
            </div>
            <div className='col-md-4'>
               <div className='cor-card'>
                    <div className='img-wrapper'>
                        <img src={lec} alt='' />
                    </div>
                    <Link to='/page14'>
                      <h6>Our Lecturers</h6>
                    </Link>
                    <p>Click here to get a tour of your classrooms.</p>
               </div>
            </div>
            <div className='col-md-4'>
               <div className='cor-card'>
                    <div className='img-wrapper'>
                        <img src={vidr} alt='' />
                    </div>
                    <Link to='/page10'>
                      <h6>Video Lectures</h6>
                    </Link>
                    <p>Click here to get a tour of your classrooms.</p>
               </div>
            </div>
            <div className='col-md-4'>
               <div className='cor-card'>
                    <div className='img-wrapper'>
                        <img src={ass} alt='' />
                    </div>
                    <Link to='/page11'>
                      <h6>Your Academics</h6>
                    </Link>
                    <p>Click here to get a tour of your classrooms.</p>
               </div>
            </div>
            <div className='col-md-4'>
               <div className='cor-card'>
                    <div className='img-wrapper'>
                        <img src={soc} alt='' />
                    </div>
                    <Link to='/page12'>
                      <h6>Societies for you</h6>
                    </Link>
                    <p>Click here to get a tour of your classrooms.</p>
               </div>
            </div>
            <div className='col-md-4'>
               <div className='cor-card'>
                    <div className='img-wrapper'>
                        <img src={work} alt='' />
                    </div>
                    <Link to='/page13'>
                      <h6>Workshops for you</h6>
                    </Link>
                    <p>Click here to get a tour of your classrooms.</p>
               </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page8
