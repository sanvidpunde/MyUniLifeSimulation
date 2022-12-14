import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const ClubsSocieties = () => {

    const session = useSelector(state => state.session);
    const selectedCourse = useSelector(state => state.course.selected_course);

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
            <img src="/images/clubs.jpg" alt="Clubs" className="responsive-image mb-60" />
            {selectedCourse && selectedCourse.clubs_and_societies_link &&
            <>
                <p>Whether you're a recreational athlete or an elite competitor, there's a club to suit everybody. For more details please visit college's website.</p>
                <button type="button" className="take-test-button"><a href={selectedCourse.clubs_and_societies_link} target="_blank" className="take-test-button">Visit Now</a></button>
            </>
            }
            
          </div>
      </div>
      
      <div className="cta">
        <div className="container">
            {session && session.email != null ?
                <>
                    <h2>Get a summary of your simulation and your user account</h2>
                    <Link to="/profile" className="cta_link">Visit Profile</Link>
                </>
            :
                <>
                    <h2>Start your jounery again</h2>
                    <Link to="/" className="cta_link">Run Simulation Again</Link>
                </>
            }
        </div>
    </div>
    
    </React.Fragment>
  );
}

export default ClubsSocieties;