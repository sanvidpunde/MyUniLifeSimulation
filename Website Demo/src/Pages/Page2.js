import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import sec1Img from '../Assets/page2.png';
import './page.css';
import { Link } from 'react-router-dom';

const page2 = () => {
  return (
    <div>
      <Header />
      <div className='section p2-section1'>
        <img src={sec1Img} alt='' />
        <p>Welcome to UniLifeSimulation. We aim to provide a one-stop portal for you to explore your dream course using our State-of-the-art AI Recommender System. At the end of this journey, you will have a variety of course choices and information about your suitable courses</p>
      </div>
      <div className='section p2-section2'>
          <Link to='/page3'>
            <h3>Let’s start with a Interest Profiler Test <i class="fa  fa-sharp fa-solid fa-arrow-right"></i></h3>
          </Link>
          <p>Our Interest Profiler test is designed for students who are unsure of what kind of career they want in the future, and guide them into choosing a particular career.</p>
      </div>
      <Footer />
    </div>
  )
}

export default page2
