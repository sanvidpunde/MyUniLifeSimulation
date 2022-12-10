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
    
    // const career = {
    //     "career": "Technical Support",
    //     "job_role": "Tech Support Engineer",
    //     "career_interests": "",
    //     "career_interests": "",
    //     "career_motivators": "",
    //     "abstract_reasoning": "",
    //     "numerical_reasoning": "",
    //     "verbal_reasoning": "",
    //     "job_description": "Technical support workers manage, maintain, and repair IT systems. Their responsibilities include diagnosing and repairing faults, resolving network issues, and installing and configuring hardware and software.",
    //     "duties": [
    //         {
    //             "duty": "Identifying hardware and software solutions.",
    //             "id": 1
    //         },
    //         {
    //             "duty": "Troubleshooting technical issues.",
    //             "id": 2
    //         },
    //         {
    //             "duty": "Diagnosing and repairing faults.",
    //             "id": 3
    //         },
    //         {
    //             "duty": "Installing and configuring hardware and software.",
    //             "id": 4
    //         },
    //         {
    //             "duty": "Replacing or repairing the necessary parts.",
    //             "id": 5
    //         },
    //         {
    //             "duty": "Conducting electrical safety checks on equipment.",
    //             "id": 6
    //         }
    //     ],
    //     "employers": [
    //         {
    //             "employer": "Software companies",
    //             "id": 1
    //         },
    //         {
    //             "employer": "Hardware companies",
    //             "id": 2
    //         },
    //         {
    //             "employer": "Technology consultancies (who offer technology consulting services)",
    //             "id": 3
    //         },
    //         {
    //             "employer": "Telecoms companies",
    //             "id": 4
    //         },
    //         {
    //             "employer": "Banks and other finance organisations",
    //             "id": 5
    //         },
    //         {
    //             "employer": "Engineering companies",
    //             "id": 6
    //         },
    //         {
    //             "employer": "The public sector (eg hospitals, central and local government, the secret intelligence service)",
    //             "id": 7
    //         }
    //     ],
    //     "skills_required": [
    //         {
    //             "skill": "Expert knowledge in how operating systems and software works",
    //             "id": 1
    //         },
    //         {
    //             "skill": "The capacity to work well within a team.",
    //             "id": 2
    //         },
    //         {
    //             "skill": "Attention to detail.",
    //             "id": 3
    //         },
    //         {
    //             "skill": "Excellent problem-solving skills.",
    //             "id": 4
    //         },
    //         {
    //             "skill": "Interpersonal skills as you will regularly be in contact with colleagues and/or customers.",
    //             "id": 5
    //         },
    //         {
    //             "skill": "Logical thinking.",
    //             "id": 6
    //         }
    //     ]
    // };

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
                        <p>Personality test / <strong>Interest Profiler</strong> / Course Recommender</p>
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