import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

const ProfilerDetails = () => {

    const dispatch = useDispatch();
    const career = useSelector(state => state.career);

    // scroll to top of page
    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    return (
        <React.Fragment>
			<div className="header">
                <div className="container">
                    <div className="header-text">Predicted Interest</div>
                    <p>Our Interest Profiler test is designed for students who are unsure of what career they want to pursue and guide them in making informed decision</p>
                </div>
            </div>
            <div className="p-60">
                <div className="container">
                    <div className="breadcrumb">
                        <p><i className="fa fa-arrows" aria-hidden="true"></i> Personality test / <strong>Interest Profiler</strong> / Course Recommender</p>
                    </div>
                    <div className="profiler_details">
                        <h3 className="">Recommended Career:</h3>
                        <div className="career_title">{career.career}</div>
                        <p className="similar_career_titles">{career.job_role}</p>

                        <div className="mb-60"></div>

                        <div className="mb-30">
                            <h3 className="">Job Description:</h3>
                            <p className="jobDescriptionText">{career.job_description}</p>
                        </div>
                        
                        <div className="mb-30">
                            <h3 className="">Duties:</h3>
                            <div className="ul-map">
                                <ul>
                                    {career.duties && career.duties.map(item => {
                                        return (
                                            <li key={item.id}>{item.duty}</li>
                                        )
                                    })}
                                    
                                </ul>
                            </div>
                        </div>
                        
                        <div className="mb-30">
                            <h3 className="">Typical Employers:</h3>
                            <div className="ul-map">
                                <ul>
                                    {career.employers && career.employers.map(item => {
                                        return (
                                            <li key={item.id}>{item.employer}</li>
                                        )
                                    })}
                                    
                                </ul>
                            </div>
                        </div>
                        
                        <h3 className="">Skills Required:</h3>
                        <div className="career_skills">
                            <ul>
                                {career.skills_required && career.skills_required.map(item => {
                                    return (
                                        <li key={item.id}>{item.skill}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cta">
                <div className="container">
                    <h2>Run our course recommender and find out which course is ideal for you</h2>
                    <Link to="/course_recommender" className="cta_link">Run Course Recommender</Link>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ProfilerDetails;