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
        if (course.code == courses.course_suggested.code) {
            dispatch(updateCurrentCourse({ ...courses, selected_course: course }));
        } else {
            courses.other_courses.length && courses.other_courses.map(item => {
                if (item.code == course.code) {
                    const temp_courses = courses;
                    return dispatch(updateCurrentCourse({ ...temp_courses, selected_course: course }));
                }
            });
        }
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
                    <div className="recommended_course">
                        <Link to="#" onClick={() => courseClickHandler(courses.course_suggested)}>
                            <img src={courses.course_suggested.college == "Technological University Dublin" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/tud.jpg" ||
                            courses.course_suggested.college == "Dublin Business School" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/dbs.jpg" ||
                            courses.course_suggested.college == "Dublin City University" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/dcu.jpg" ||
                            courses.course_suggested.college == "Griffith College" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/griffith.jpg" ||
                            courses.course_suggested.college == "National College of Ireland" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/nci.jpg" ||
                            courses.course_suggested.college == "Trinity College Dublin" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/tcd.jpg" ||
                            courses.course_suggested.college == "University College Dublin" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/ucd.jpg" ||
                            courses.course_suggested.college == "Technological University Dublin" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/tud.jpg"} alt="" className="responsive-image mb-30" />
                        </Link>
                        <div className="recommended_course_description mb-60">
                            <h2><Link to="#" onClick={() => courseClickHandler(courses.course_suggested)}>{courses.course_suggested.college}</Link></h2>
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
                                    <Link to="#" onClick={() => courseClickHandler(course)}>
                                        <img src={course.college == "Technological University Dublin" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/tud.jpg" ||
                            course.college == "Dublin Business School" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/dbs.jpg" ||
                            course.college == "Dublin City University" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/dcu.jpg" ||
                            course.college == "Griffith College" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/griffith.jpg" ||
                            course.college == "National College of Ireland" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/nci.jpg" ||
                            course.college == "Trinity College Dublin" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/tcd.jpg" ||
                            course.college == "University College Dublin" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/ucd.jpg" ||
                            course.college == "Technological University Dublin" && "https://unilifethumbnails.s3.eu-west-1.amazonaws.com/images/thumbnail/tud.jpg"} alt="" className="responsive-image mb-30" />
                                    </Link>
                                    <div className="recommended_course_description mb-60">
                                        <h2><Link to="#" onClick={() => courseClickHandler(course)}>{course.college}</Link></h2>
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