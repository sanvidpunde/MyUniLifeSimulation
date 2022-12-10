import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ExploreYourCourse = () => {

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    return (
        <React.Fragment>
			<div className="header">
				<div className="container">
					<div className="header-text">Explore your Course</div>
                    <p>Lorem Ipsum Dolor Sit Amet</p>
				</div>
			</div>
            <div className="p-60">
                <div className="container">
                    <div className="breadcrumb">
                        <p><Link to="/classrooms" className="activePage">Our Classrooms</Link> / <Link to="/academic_staff">Our Lecturers</Link> / <Link to="/academics">Your Academics</Link></p>
                    </div>
                    <div className="flex_icons">
                        <div className="single_flex_icon">
                            <div className="icon_area">
                                <img src="/images/our_classrooms.png" alt="" />
                            </div>
                            <div className="single_flex_icon_title">
                                <Link to="/classrooms">Our Classrooms</Link>
                            </div>
                            <p>Click here to get a tour of your classrooms</p>
                        </div>
                        <div className="single_flex_icon">
                            <div className="icon_area">
                                <img src="/images/our_lecturers.png" alt="" />
                            </div>
                            <div className="single_flex_icon_title">
                                <Link to="/academic_staff">Our Lecturers</Link>
                            </div>
                            <p>Click here to see video lectures of the professors from your course</p>
                        </div>
                        <div className="single_flex_icon">
                            <div className="icon_area">
                                <img src="/images/academics.png" alt="" />
                            </div>
                            <div className="single_flex_icon_title">
                                <Link to="academics">Your Academics</Link>
                            </div>
                            <p>Click here to see what kind of assignments and exams you may get</p>
                        </div>
                        <div className="single_flex_icon">
                            <div className="icon_area">
                                <img src="/images/societies.png" alt="" />
                            </div>
                            <div className="single_flex_icon_title">
                                <a href="#" target="_blank">Societies for you</a>
                            </div>
                            <p>Clubs and societies for you</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ExploreYourCourse;