import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {receiveSuccessMessage} from '../redux/util/controller';

const AcademicStaff = () => {

    const dispatch = useDispatch();
    const courses = useSelector(state => state.course);

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  return (
    <React.Fragment>
      <div className="header">
          <div className="container">
              <div className="header-text">Academic Staff</div>
              <p>Lorem Ipsum Dolor Sit Amet</p>
          </div>
      </div>
      <div className="p-60">
          <div className="container">
            <div className="staff_container">
                <div className="single_staff">
                    <img src="/images/s1.png" alt="" />
                    <p className="dept">Head of Research</p>
                    <h3 className="staff_name">Dr Dympna O'Sullivan</h3>
                    <p>dympna.osullivan@tudublin.ie</p>
                    <p>+353-1-220-5634</p>
                </div>
                <div className="single_staff">
                    <img src="/images/s2.png" alt="" />
                    <p className="dept">Head of Research</p>
                    <h3 className="staff_name">Dr Dympna O'Sullivan</h3>
                    <p>dympna.osullivan@tudublin.ie</p>
                    <p>+353-1-220-5634</p>
                </div>
                <div className="single_staff">
                    <img src="/images/s3.png" alt="" />
                    <p className="dept">Head of Research</p>
                    <h3 className="staff_name">Dr Dympna O'Sullivan</h3>
                    <p>dympna.osullivan@tudublin.ie</p>
                    <p>+353-1-220-5634</p>
                </div>
            </div>
          </div>
      </div>
    </React.Fragment>
  );
}

export default AcademicStaff;