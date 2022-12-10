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
              <p>Lorem Ipsum Dolor Sit Amet</p>
          </div>
      </div>
      <div className="p-60">
          <div className="container">
            <div className="breadcrumb">
                <p><Link to="/classrooms" className="activePage">Our Classrooms</Link> / <Link to="/academic_staff">Our Lecturers</Link> / <Link to="/academics">Your Academics</Link></p>
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
          </div>
      </div>
    </React.Fragment>
  );
}

export default Classrooms;