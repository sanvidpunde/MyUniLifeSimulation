import React, { useState, useEffect } from 'react';

const Privacy = () => {

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  return (
    <React.Fragment>
      <div className="header">
          <div className="container">
              <div className="header-text">Privacy Policy</div>
              <p>Lorem Ipsum Dolor Sit Amet</p>
          </div>
      </div>
      <div className="p-60">
          <div className="container">
            
          </div>
      </div>
    </React.Fragment>
  );
}

export default Privacy;