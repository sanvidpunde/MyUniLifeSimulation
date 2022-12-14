import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {receiveSuccessMessage, updateCurrentCourse} from '../redux/util/controller';

const RecommendedCourses = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const courses = useSelector(state => state.course);

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    const courseClickHandler = (course) => {
        console.log("course", course);
        dispatch(updateCurrentCourse({ ...courses, selected_course: course }));
        history.push('/course_details');
    }

    return (
        <React.Fragment>
			<div className="header">
                <div className="container">
                    <div className="header-text">Recommended Courses</div>
                    <p>On the basis of your choices, we recommend you the following courses</p>
                </div>
            </div>
            <div className="p-60">
                <div className="container">
                    <div className="breadcrumb">
                        <p><i className="fa fa-arrows" aria-hidden="true"></i> Personality test / Interest Profiler / <strong>Course Recommender</strong></p>
                    </div>
                    {courses && courses.course_suggested.length > 0 && courses.course_suggested.map(course => {
                        return (
                            <div className="recommended_course" key={course.code}>
                                <Link to="#" onClick={() => courseClickHandler(course)}>
                                    <img src={course.college == "Technological University Dublin" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/tud.jpg" ||
                                    course.college == "Dublin Business School" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/dbs.jpg" ||
                                    course.college == "Dublin City University" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/dcu.jpg" ||
                                    course.college == "Griffith College" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/griffith.jpg" ||
                                    course.college == "National College of Ireland" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/nci.jpg" ||
                                    course.college == "Trinity College Dublin" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/tcd.jpg" ||
                                    course.college == "University College Dublin" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/ucd.jpg" ||
                                    course.college == "Technological University Dublin" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/tud.jpg" ||
                                    course.college == "Dundalk Institute of Technology" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/Dundak.jpg" ||
                                    course.college == "Technological University of the Shannon" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/ait.jpg" ||
                                    course.college == "University of Limerick" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/ul.jpg" ||
                                    course.college == "Atlantic Technological University - Donegal Letterkenny Campus" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/ATU.jpeg" ||
                                    course.college == "Munster Technological University" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/mtu.jpg" ||
                                    course.college == "University College Cork" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/Ucc_Cork.jpg" ||
                                    course.college == "South East Technological University" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/setu.jpg" ||
                                    course.college == "Carlow College, St Patrick's" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/Patrics.jpg" ||
                                    course.college == "NUI Galway" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/NUIG.jpg" ||
                                    "https://dummyimage.com/500x260/ccc/fff.jpg"} alt="" className="responsive-image mb-30" />
                                </Link>
                                <div className="recommended_course_description mb-60">
                                    <h2><Link to="#" onClick={() => courseClickHandler(course)}>{course.course}</Link></h2>
                                    <p><strong>Fees</strong>: {`€${course.fees}`}</p>
                                    <p><strong>Course ID</strong>: {course.code}</p>
                                    <p><strong>College</strong>: {course.college}</p>
                                    <p><strong>Course Starts</strong>: {course.course_starts}</p>
                                    <p><strong>Link</strong>: <a href={course.website_url} target="_blank">{course.website_url}</a></p>
                                    <p className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> {course.location}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default RecommendedCourses;