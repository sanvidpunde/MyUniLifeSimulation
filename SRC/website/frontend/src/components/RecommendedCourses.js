import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {receiveSuccessMessage} from '../redux/util/controller';

const RecommendedCourses = () => {

    const dispatch = useDispatch();
    const courses = useSelector(state => state.course);

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
                    <div className="recommended_course">
                        <Link to={`/course_details?code${courses.course_suggested.code}`}>
                            <img src={courses.course_suggested.thumbnail_image_url} alt="" className="responsive-image mb-30" />
                        </Link>
                        <div className="recommended_course_description mb-60">
                            <h2><Link to={`/course_details?code${courses.course_suggested.code}`}>{courses.course_suggested.college}</Link></h2>
                            <p><strong>Fees</strong>: {`€${courses.course_suggested.fees}`}</p>
                            <p><strong>Course ID</strong>: {courses.course_suggested.code}</p>
                            <p><strong>Course Name</strong>: {courses.course_suggested.course}</p>
                            <p><strong>Course Starts</strong>: {courses.course_suggested.course_starts}</p>
                            <p><strong>Link</strong>: <a href={courses.course_suggested.website_url} target="_blank">{courses.course_suggested.website_url}</a></p>
                            <p className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> {courses.course_suggested.location}</p>
                        </div>
                    </div>
                    <div className="title text-left">Similar Universities you might like:</div>
                    <div className="grey-border"></div>
                    <div className="other_universities">
                        {courses.other_courses.length && courses.other_courses.map((course) => {
                            return (
                                <div className="single_course">
                                    <Link to={`/course_details?code${course.code}`}>
                                        <img src={course.thumbnail_image_url} alt="" className="responsive-image mb-30" />
                                    </Link>
                                    <div className="recommended_course_description mb-60">
                                        <h2><Link to={`/course_details?code${course.code}`}>{course.college}</Link></h2>
                                        <p><strong>Fees</strong>: {`€${course.fees}`}</p>
                                        <p><strong>Course ID</strong>: {course.code}</p>
                                        <p><strong>Course Name</strong>: {course.course}</p>
                                        <p><strong>Course Starts</strong>: {course.course_starts}</p>
                                        <p><strong>Link</strong>: <a href={course.website_url} target="_blank">{course.website_url}</a></p>
                                        <p className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> {course.location}</p>
                                    </div>
                                </div>
                            );
                        })
                        }
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default RecommendedCourses;