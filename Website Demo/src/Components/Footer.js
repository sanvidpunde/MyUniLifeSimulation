import React from 'react';
import './footer.css';

const footer = () => {
  return (
    <div className='footer'>
      <div className='topft'>
        <div className='left'> 
            <h2>UniLifeSimulation</h2>
            <p>This is a sample demo. Please donot look into it in detail</p>
            <h5>Business Hour</h5>
            <h6>Monday - Friday 10:00am - 06:00pm</h6>
        </div>
        <div className='right'>
            <h4>Important Links</h4>
            <div className='imp-link'>
              <div>
                <p>our</p>
                <p>our</p>
                <p>our</p>
                <p>our</p>
                <p>our</p>
              </div>
              <div>
                <p>our</p>
                <p>our</p>
                <p>our</p>
                <p>our</p>
                <p>our</p>
              </div>
            </div>
        </div>
      </div>
      <div className='bottom-ft'>
          <p>All Right Reserve By Fork The Data</p>
      </div>
    </div> 
  )
}

export default footer
