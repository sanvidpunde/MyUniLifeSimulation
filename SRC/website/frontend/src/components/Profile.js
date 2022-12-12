import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {receiveSuccessMessage} from '../redux/util/controller';

const Profile = () => {

    const dispatch = useDispatch();
    const session = useSelector(state => state.session);
    const personality = useSelector(state => state.personality);
    const career = useSelector(state => state.career);
    const course = useSelector(state => state.course);

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  return (
    <React.Fragment>
      <div className="header">
          <div className="container">
              <div className="header-text">Your Profile</div>
              <p>Lorem Ipsum Dolor Sit Amet</p>
          </div>
      </div>
      <div className="p-60">
          <div className="container">
            <div className="title text-left">Your profile at a glance:</div>
            <div className="grey-border"></div>
            <p><strong>Name</strong>: {session.name}</p>
            <p><strong>Username</strong>: {session.username}</p>
            <p><strong>Email</strong>: {session.email}</p>
            <div className="mt-60"></div>
            <div className="title text-left">Results:</div>
            <div className="grey-border"></div>
            {/* {personality && personality.personality.length < 0 && career && !career.career.length < 0 && course && Array.isArray(course.course_suggested) &&
                <React.Fragment>
                    <p>Try taking personality test, Interest profiler test and Course Recommender and results will show here.</p>
                </React.Fragment>
            } */}
            {personality && personality.personality &&
                <React.Fragment>
                    <p><strong>Predicted Personality</strong>: {personality.personality}</p>
                </React.Fragment>
            }
            {career && career.career &&
                <React.Fragment>
                    <p><strong>Predicted Interest</strong>: {career.career}</p>
                </React.Fragment>
            }
            {course && course.course_suggested &&
                <React.Fragment>
                    {/* <p><strong>Predicted Courses</strong>: {course.}</p> */}
                </React.Fragment>
                
            }
            
          </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;