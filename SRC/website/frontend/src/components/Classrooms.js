import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {receiveSuccessMessage} from '../redux/util/controller';

const Classrooms = () => {

    const dispatch = useDispatch();
    const courses = useSelector(state => state.course);

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  return (
    <React.Fragment>
      <div className="header">
          <div className="container">
              <div className="header-text">Your Classrooms</div>
              <p>Have a look at the different types of classrooms that you will be learning in. Most have built-in projectors and screens. 
                Some classrooms may be designed like a movie theatre while others are like normal rooms with benches and tables.
                Universities also have laboratories for differnet majors like Sciences and IT.  
              </p>
          </div>
      </div>
      <div className="p-60">
          <div className="container">
            <div className="breadcrumb">
                <p><i className="fa fa-arrows" aria-hidden="true"></i> <Link to="/classrooms" className="activePage">Our Classrooms</Link> / <Link to="/academic_staff">Our Lecturers</Link> / <Link to="/academics">Your Academics</Link> / <Link to="/clubs_and_societies">Clubs and Societies</Link></p>
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
            <div className="control-buttons">
              <Link to="/academic_staff" className="control-button-continue">
                  NEXT
              </Link>
            </div>
          </div>
      </div>
    </React.Fragment>
  );
}

export default Classrooms;