import React from 'react';
import './header.css';
import Logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <div className='header'>
      <div className='topHeader'>
        <div className='left'>
          <p><i class="fa fa-solid fa-envelope"></i> forkthedata@gmail.com</p>
          <p><i class="fa fa-solid fa-phone"></i> 987654321</p>
        </div>
        <div className='right'>
          <p><i class="fa fa-solid fa-user"></i> Login/Sign</p>
        </div>
      </div>
      <div className='BottomHeader'>
         <div className='Logo'>
            <Link to='/'>
              <img src={Logo} alt=''/>
            </Link>
         </div>
         <div className='Menu'>
            <Link to='/'>
              <p>Home</p>
            </Link>
            <p>About us</p>
            <p>Accomodations</p>
            <p>Contact us</p>
         </div>
      </div>
    </div> 
  )
}

export default header
