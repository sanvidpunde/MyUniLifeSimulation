import React from 'react';
import Homep from '../Assets/homep.png';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div>
      <Link to='/page2'>
       <img src={Homep} alt='hh' />
      </Link>
    </div>
  )
}

export default HomePage
