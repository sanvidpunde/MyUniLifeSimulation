import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {receiveSuccessMessage} from '../redux/util/controller';

const mapStateToProps = ({ session }) => ({
	loggedIn: Boolean(session.email),
	email: session.email,
	name: session.name
});

const mapDispatchToProps = dispatch => {
  return {
  	receiveSuccessMessage: message => dispatch(receiveSuccessMessage(message))
  }
};

const RecommendedCourses = ({ loggedIn }) => {

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
                        <Link to="/course_details">
                            <img src="https://dummyimage.com/500x260/333/fff.jpg" alt="" className="responsive-image mb-30" />
                        </Link>
                        <div className="recommended_course_description mb-60">
                            <h2><Link to="/course_details">Technological University Dublin</Link></h2>
                            <p><strong>Fees</strong>: €7000</p>
                            <p><strong>Course ID</strong>: TU059</p>
                            <p><strong>Course Name</strong>: MSc Computer Science (Data Science)</p>
                            <p><strong>Course Starts</strong>: Fall 2023</p>
                            <p><strong>Link</strong>: <a href="https://www.tudublin.ie/" target="_blank">https://www.tudublin.ie/</a></p>
                            <p className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> Grangegorman</p>
                        </div>
                    </div>
                    <div className="title text-left">Similar Universities you might like:</div>
                    <div className="grey-border"></div>
                    <div className="other_universities">
                        <div className="single_course">
                            <Link to="/course_details">
                                <img src="https://dummyimage.com/500x260/333/fff.jpg" alt="" className="responsive-image mb-30" />
                            </Link>
                            <div className="recommended_course_description mb-60">
                                <h2><Link to="/course_details">University College Dublin</Link></h2>
                                <p><strong>Fees</strong>: €9000</p>
                                <p><strong>Course ID</strong>: TU059</p>
                                <p><strong>Course Name</strong>: MSc Computer Science (Data Science)</p>
                                <p><strong>Course Starts</strong>: Fall 2023</p>
                                <p><strong>Link</strong>: <a href="https://www.ucd.ie/" target="_blank">https://www.ucd.ie/</a></p>
                                <p className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> Dublin</p>
                            </div>
                        </div>
                        <div className="single_course">
                            <Link to="/course_details">
                                <img src="https://dummyimage.com/500x260/333/fff.jpg" alt="" className="responsive-image mb-30" />
                            </Link>
                            <div className="recommended_course_description mb-60">
                                <h2><Link to="/course_details">University College Dublin</Link></h2>
                                <p><strong>Fees</strong>: €9000</p>
                                <p><strong>Course ID</strong>: TU059</p>
                                <p><strong>Course Name</strong>: MSc Computer Science (Data Science)</p>
                                <p><strong>Course Starts</strong>: Fall 2023</p>
                                <p><strong>Link</strong>: <a href="https://www.ucd.ie/" target="_blank">https://www.ucd.ie/</a></p>
                                <p className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> Dublin</p>
                            </div>
                        </div>
                        <div className="single_course">
                            <Link to="/course_details">
                                <img src="https://dummyimage.com/500x260/333/fff.jpg" alt="" className="responsive-image mb-30" />
                            </Link>
                            <div className="recommended_course_description mb-60">
                                <h2><Link to="/course_details">University College Dublin</Link></h2>
                                <p><strong>Fees</strong>: €9000</p>
                                <p><strong>Course ID</strong>: TU059</p>
                                <p><strong>Course Name</strong>: MSc Computer Science (Data Science)</p>
                                <p><strong>Course Starts</strong>: Fall 2023</p>
                                <p><strong>Link</strong>: <a href="https://www.ucd.ie/" target="_blank">https://www.ucd.ie/</a></p>
                                <p className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> Dublin</p>
                            </div>
                        </div>
                        <div className="single_course">
                            <Link to="/course_details">
                                <img src="https://dummyimage.com/500x260/333/fff.jpg" alt="" className="responsive-image mb-30" />
                            </Link>
                            <div className="recommended_course_description mb-60">
                                <h2><Link to="/course_details">University College Dublin</Link></h2>
                                <p><strong>Fees</strong>: €9000</p>
                                <p><strong>Course ID</strong>: TU059</p>
                                <p><strong>Course Name</strong>: MSc Computer Science (Data Science)</p>
                                <p><strong>Course Starts</strong>: Fall 2023</p>
                                <p><strong>Link</strong>: <a href="https://www.ucd.ie/" target="_blank">https://www.ucd.ie/</a></p>
                                <p className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> Dublin</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedCourses);