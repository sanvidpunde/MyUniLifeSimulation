import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

import {receiveSuccessMessage, receiveFailureMessage} from '../redux/util/controller';

const AcademicStaff = () => {

  const dispatch = useDispatch();
  const selectedCourse = useSelector(state => state.course.selected_course);

  const [allProfessors, setAllProfessors] = useState([]);
  const [staffs, setStaffs] = useState({});

  useEffect(() => {
    // make API call to fetch staffs
    axios.get(`/api/professor?college=${selectedCourse.college}`)
      .then(resp => {
        // console.log("resp", resp);
        if (resp.data.success) {
          dispatch(receiveSuccessMessage({success: `Staff for college found`}));
          setAllProfessors(resp.data.professor);
        } else {
          dispatch(receiveFailureMessage({failure: resp.data.message}));
        }
        
      })
      .catch(err => {
        console.log("error", err);
      })
  }, []);

  useEffect(() => {
    console.log("allProfessors", allProfessors);
    if (allProfessors && allProfessors.length) {
      const filteredStaff = allProfessors.filter(item => item.college == selectedCourse.college);
      // console.log("filteredStaff", filteredStaff);
      if (filteredStaff && filteredStaff.length) {
        setStaffs(filteredStaff[0]);
      }
    }
  }, [allProfessors]);

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
              {staffs && staffs.staff && staffs.staff.length && staffs.staff.map(item => {
                return (
                  <div className="single_staff">
                    <img src={item.professor_thumbnail_url ? item.professor_thumbnail_url : "https://dummyimage.com/350x220/333/fff.png"} alt="" />
                    <p className="dept">{item.designation}</p>
                    <h3 className="staff_name">{item.professor_name}</h3>
                    <p>{item.email}</p>
                    <p>{item.phone}</p>
                  </div>
                )
              }) }
            </div>
          </div>
      </div>
    </React.Fragment>
  );
}

export default AcademicStaff;