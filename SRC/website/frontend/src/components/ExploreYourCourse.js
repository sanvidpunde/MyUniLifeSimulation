import React, { useState, useEffect } from 'react';

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
                    <div className="flex_icons">
                        <div className="single_flex_icon">
                            <div className="icon_area">
                                <img src="/images/our_classrooms.png" alt="" />
                            </div>
                            <div className="single_flex_icon_title">
                                Our Classrooms
                            </div>
                            <p>Click here to get a tour of your classrooms</p>
                        </div>
                        <div className="single_flex_icon">
                            <div className="icon_area">
                                <img src="/images/our_lecturers.png" alt="" />
                            </div>
                            <div className="single_flex_icon_title">
                                Our Lecturers
                            </div>
                            <p>Click here to see video lectures of the professors from your course</p>
                        </div>
                        <div className="single_flex_icon">
                            <div className="icon_area">
                                <img src="/images/video_lectures.png" alt="" />
                            </div>
                            <div className="single_flex_icon_title">
                                Video Lectures
                            </div>
                            <p>Lets explore few lectures from our professors</p>
                        </div>
                        <div className="single_flex_icon">
                            <div className="icon_area">
                                <img src="/images/academics.png" alt="" />
                            </div>
                            <div className="single_flex_icon_title">
                                Your Academics
                            </div>
                            <p>Click here to see what kind of assignments and exams you may get</p>
                        </div>
                        <div className="single_flex_icon">
                            <div className="icon_area">
                                <img src="/images/societies.png" alt="" />
                            </div>
                            <div className="single_flex_icon_title">
                                Societies for you
                            </div>
                            <p>Clubs and societies for you</p>
                        </div>
                        <div className="single_flex_icon">
                            <div className="icon_area">
                                <img src="/images/workshops.png" alt="" />
                            </div>
                            <div className="single_flex_icon_title">
                                Workshops
                            </div>
                            <p>Lets explore all workshops which might interest you</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ExploreYourCourse;