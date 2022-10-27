import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './page6.css';
import cimg from '../Assets/c-details.png';
import card1 from '../Assets/card/c1.png';
import tri from '../Assets/card/tri.png';
import gal from '../Assets/card/gal.png';
import lim from '../Assets/card/lim.png';
import { Link } from 'react-router-dom';

const page6 = () => {
  return (
    <div>
      <Header />
      <div className='p6-header container p-5'>
        <h6>Recomended For You</h6>
        <p>On the basis of your choices, we recommend you joining the following course.</p>
      </div>
      <div className='c-details'>
        <div className='left'>
            <div className='content'>
                <Link to='/page7'>
                <h6>Technological University Dublin</h6>
                </Link>
                <h6>€ 7000 </h6>
                <p>Course ID : TU 059<br />
                Course Name : MSc Computer Science(Data Science)<br />
                Classes Start : Fall 2023</p>
                <p>Grangegorman, Dublin 7</p>
                <p>4 Campuses | www.tudublin.ie</p>
            </div>
        </div>
        <div className='right'>
            <img src={cimg} alt='' />
        </div>
      </div>
      <div className='p6-header container p-5'>
        <h6>You Might Also Like Some Of These Universities</h6>
      </div>
      <div className='container'>
        <div className='row mb-4'>
            <div className='col-md-6'>
                <div className='colCard'>
                    <div className='img'>
                        <img src={card1} alt='' />
                        <p className='price'>€ 8000</p>
                    </div>
                    <div className='content'>
                        <a className="dropdown-item" href="https://www.ucd.ie/" target="_blank" rel="noopener noreferrer">University College Dublin</a>
                        <p>
                        Course ID : TU 059<br />
                        Course Name : MSc Computer Science(Data Science)<br />
                        Classes Start : Fall 2023
                        </p>
                        <p className='cl-loc'>Dublin, Ireland</p>
                    </div>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='colCard'>
                    <div className='img'>
                        <img src={tri} alt='' />
                        <p className='price'>€ 9000</p>
                    </div>
                    <div className='content'>
                        <a className="dropdown-item" href="https://www.tcd.ie/" target="_blank" rel="noopener noreferrer">Trinity College Dublin</a>
                        <p>
                        Course ID : TU 059<br />
                        Course Name : MSc Computer Science(Data Science)<br />
                        Classes Start : Fall 2023
                        </p>
                        <p className='cl-loc'>Dublin, Ireland</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='row mb-3'>
            <div className='col-md-6'>
                <div className='colCard'>
                    <div className='img'>
                        <img src={gal} alt='' />
                        <p className='price'>€ 10000</p>
                    </div>
                    <div className='content'>
                        <a className="dropdown-item" href="https://www.universityofgalway.ie/" target="_blank" rel="noopener noreferrer">National University Ireland Galway</a>
                        <p>
                        Course ID : TU 059<br />
                        Course Name : MSc Computer Science(Data Science)<br />
                        Classes Start : Fall 2023
                        </p>
                        <p className='cl-loc'>Galway, Ireland</p>
                    </div>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='colCard'>
                    <div className='img'>
                        <img src={lim} alt='' />
                        <p className='price'>€ 12000</p>
                    </div>
                    <div className='content'>
                    <a className="dropdown-item" href="https://www.ul.ie/" target="_blank" rel="noopener noreferrer">University of Limerick</a>
                        <p>
                        Course ID : TU 059<br />
                        Course Name : MSc Computer Science(Data Science)<br />
                        Classes Start : Fall 2023
                        </p>
                        <p className='cl-loc'>Limerick, Ireland</p>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default page6
