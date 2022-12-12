import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {receiveSuccessMessage} from '../redux/util/controller';

const Academics = () => {

    const dispatch = useDispatch();
    const courses = useSelector(state => state.course);

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  return (
    <React.Fragment>
      <div className="header">
          <div className="container">
              <div className="header-text">Your Academics</div>
              <p>Welcome to the academics page. Have a look at the different types of quizzes you might face in different modules.</p>
          </div>
      </div>
      <div className="p-60">
          <div className="container">
            <div className="breadcrumb">
                <p><i className="fa fa-arrows" aria-hidden="true"></i> <Link to="/classrooms">Our Classrooms</Link> / <Link to="/academic_staff">Our Lecturers</Link> / <Link to="/academics" className="activePage">Your Academics</Link></p>
            </div>
            <h3 className="mb-20">Online Quizzes</h3>
            <div className="grey-border"></div>
              <div className="academics">
                <div className="single_col_academics">
                  <p>Online quizzes are a very popular way of conducting assessments in universities because it lets the students take the test from anywhere and from whichever devices that suits them which makes it an easy and efficient way of conducting tests. </p>
                </div>
                <div className="single_col_academics">
                  <p>An online quiz is an excellent way to evaluate a student’s knowledge. It is very effective in the online learning process, as teachers can understand how much a student has understood the concept. With the help of online quizzes, teachers can know the knowledge gap and teach accordingly. It can also work as a revision process, as students can know how much they have learned, and then they can improve their scores by learning more. </p>
                </div>
              </div>
              <div className="mt-20">
                  <h3>Get a feel of how IT quiz looks like</h3>
                  <button type="button" className="it_quiz"><a href="https://my-uni-life-simulation-7nkut6krf-rahulkrishnagajula.vercel.app/" target="_blank" className="quiz_link">Take IT Test</a></button>
                  <h3>Get a feel of how Business quiz looks like</h3>
                  <button type="button" className="business_quiz"><a href="https://my-uni-life-simulation-business.vercel.app/" target="_blank" className="quiz_link1">Take Business Test</a></button>
                  <h3>Get a feel of how Science quiz looks like</h3>
                  <button type="button" className="science_quiz"><a href="https://my-uni-life-simulation-science.vercel.app/" target="_blank" className="quiz_link2">Take Science Test</a></button>
              </div>
          </div>
      </div>
    </React.Fragment>
  );
}

export default Academics;