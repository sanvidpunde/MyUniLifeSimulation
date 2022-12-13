import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const ClubsSocieties = () => {

    const session = useSelector(state => state.session);

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  return (
    <React.Fragment>
      <div className="header">
          <div className="container">
              <div className="header-text">Clubs and Societies</div>
              <p>Take a look at the different clubs and societies that you can join and meet people with similar interests!</p>
          </div>
      </div>
      <div className="p-60">
          <div className="container">
            <div className="breadcrumb">
                <p><i className="fa fa-arrows" aria-hidden="true"></i> <Link to="/classrooms">Our Classrooms</Link> / <Link to="/academic_staff">Our Lecturers</Link> / <Link to="/academics">Your Academics</Link> / <Link to="/clubs_and_societies" className="activePage">Clubs and Societies</Link></p>
            </div>
            <h3 className="mb-20">Modern state of the art classrooms:</h3>
            <div className="grey-border"></div>
            <div className="classroom_container">
                <div className="single_classroom">
                    <img src="/images/classroom1.jpg" alt="img" />
                </div>
                <div className="single_classroom">
                    <img src="/images/classroom1.jpg" alt="img" />
                </div>
            </div>
            {session && session.email != null ?
                <div className="control-buttons">
                    <Link to="/profile" className="control-button-continue">
                        NEXT
                    </Link>
                </div>
            :
                <>
                    <div className="control-buttons">
                        <Link to="/" className="control-button-continue">
                            Run Simulation Again
                        </Link>
                    </div>
                </>
            }            
          </div>
      </div>
      {session && session.email != null &&
      <div className="cta">
        <div className="container">
            <h2>Get a summary of your simulation and your user account</h2>
            <Link to="/profile" className="cta_link">Visit Profile</Link>
        </div>
    </div>
    }
    </React.Fragment>
  );
}

export default ClubsSocieties;