import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilerDetails = () => {
    const career = {
        career: "Business Management",
        job_role: "Business Analyst, HR Rep, Corporate Auditing",
        career_interests: "",
        work_personality: "",
        career_motivators: "",
        abstract_reasoning: "",
        numerical_reasoning: "",
        verbal_reasoning: "",
        job_description: "Business Management is a profession for leading and supervising employees to ensure productivity efficiency of operations and providing direction on how best to handle different tasks while maintaining customer satisfaction. Business Managers help implement strategies that will help generate revenue or profitability.",
        duties: [
            {
                duty: "Developing business management goals and objectives that tend to growth and prosperity",
                id: 1
            },
            {
                duty: "Designing and implementing business plans and strategies to promote the attainment of goals",
                id: 2
            },
            {
                duty: "Ensuring that the company has the adequate and suitable resources to complete its activities",
                id: 3
            },
            {
                duty: "Supervise the work of employees and provide feedback and counsel to improve efficiency and effectiveness",
                id: 4
            },
            {
                duty: "Maintain relationships with partners/vendors/suppliers",
                id: 5
            },
            {
                duty: "Gather, analyze and interpret external and internal data and write reports",
                id: 6
            },
            {
                duty: "Assess overall company performance against objectives",
                id: 7
            },
            {
                duty: "Represent the company in events, conferences etc.",
                id: 8
            }
        ],
        employers:	[
            {
                employer: "Financial Consulting Firms",
                id: 1
            },
            {
                employer: "Technology Intergration Firms",
                id: 2
            },
            {
                employer: "Corporate Risk Auditors",
                id: 3
            },
            {
                employer: "Tax Advisory firms", 
                id: 4
            },
            {
                employer: "Investment Banking",
                id: 5
            },
            {
                employer: "Corporate Law",
                id: 6
            }
        ],
        skills_required: [
            {
                skill: "Excellent Interpersonal Skills",
                id: 1
            },
            {
                skill: "Problem Solving",
                id: 2
            },
            {
                skill: "Excellent Communication",
                id: 3
            },
            {
                skill: "Task Delegation",
                id: 4
            },
            {
                skill: "Organisational and Leadership Skills",
                id: 5
            },
            {
                skill: "Understanding of Business Processes",
                id: 6
            }
        ]
    };

    return (
        <React.Fragment>
			<div className="header">
                <div className="container">
                    <div className="header-text">Interest Profiler</div>
                    <p>Our Interest Profiler test is designed for students who are unsure of what career they want to pursue and guide them in making informed decision</p>
                </div>
            </div>
            <div className="p-60">
                <div className="container">
                    <div className="profiler_details">
                        <h3 className="">Recommended Career:</h3>
                        <div className="career_title">Full stack Developer</div>
                        <p className="similar_career_titles">(Software Engineer, Software Developer)</p>

                        <div className="mb-60"></div>

                        <div className="mb-30">
                            <h3 className="">Job Description:</h3>
                            <p className="jobDescriptionText">Business Management is a profession for leading and supervising employees to ensure productivity efficiency of operations and providing direction on how best to handle different tasks while maintaining customer satisfaction. Business Managers help implement strategies that will help generate revenue or profitability.</p>
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
        </React.Fragment>
    )
};

export default ProfilerDetails;