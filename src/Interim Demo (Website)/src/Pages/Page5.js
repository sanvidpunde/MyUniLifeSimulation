import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './page5.css';
import p5Img from '../Assets/aboutHeader.png';
import { Link } from 'react-router-dom';

const page5 = () => {
  return (
    <div>
      <Header />
      <div className='p5-section'>
        <img src={p5Img} alt='' />
      </div>  
      <div className='p5-section2 container pt-4 pb-4'>
        <h6>Complete the details below</h6>
        <div className='row'>
            <div className='col-md-4'>
                <p>CAO Points</p>
                <form>
                    <div class="form-group">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter CAO Points"/>
            </div>
            </form>
            </div>
            <div className='col-md-4'>
                <p>Field of Interests</p>
                <div class="dropdown">
                <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Information Technology
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item">Information Technology</a>
                    <a className="dropdown-item">Finance</a>
                    <a className="dropdown-item">Law</a>
                    <a className="dropdown-item">Management</a>
                </div>
                </div>
            </div>
            <div className='col-md-4'>
                <p>City</p>
                <div class="dropdown">
                <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dublin
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item">Cork</a>
                    <a className="dropdown-item">Galway</a>
                    <a className="dropdown-item">Limerick</a>
                </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-4'>
                <p>Prefereed Job Domain</p>
                <div class="dropdown">
                <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Data Science
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item">Project Management</a>
                    <a className="dropdown-item" >Data Science</a>
                    <a className="dropdown-item" >Hospitality</a>
                    <a className="dropdown-item" >Police</a>
                    <a className="dropdown-item" >Criminal</a>
                </div>
                </div>
            </div>
            <div className='col-md-4'>
                <p>Hobbies</p>
                <div class="dropdown">
                <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Gaming
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item">Gaming</a>
                    <a className="dropdown-item" >Football</a>
                    <a className="dropdown-item" >Chess</a>
                    <a className="dropdown-item" >Arts</a>
                    <a className="dropdown-item" >Magic</a>
                    <a className="dropdown-item" >Music</a>
                </div>
                </div>
            </div>
            <div className='col-md-4'>
                <p>Spending Limit</p>
                <div class="dropdown">
                <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                5000€  - 10000€
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" >2000€  - 5000€</a>
                    <a className="dropdown-item" >5000€  - 10000€</a>
                    <a className="dropdown-item" >10000€  - 15000€</a>
                    <a className="dropdown-item" >15000€  and above</a>
                </div>
                </div>
            </div>
        </div>
        <div className='btn-wrapper'>
            <Link to='/page6'>
                <p>Proceed</p>
            </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page5
