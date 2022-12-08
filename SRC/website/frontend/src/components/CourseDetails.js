import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import {receiveSuccessMessage} from '../redux/util/controller';

const CourseDetails = () => {

    const dispatch = useDispatch();
    const selectedCourse = useSelector(state => state.course.selected_course);

    // Get the code param from the URL.
    const useQuery = () => {
        const { search } = useLocation();
        return useMemo(() => new URLSearchParams(search), [search]);
    };
    let query = useQuery();

    const sample_structure = {
        course: "", code: "", title: "", course_type: "", course_starts: "", college: "Technological University Dublin", fees: "", level: "", award: "", duration: "", mode_of_study: "", method_of_delivery: "", commencement_date: "", location: "", thumbnail_image_url: "https://dummyimage.com/500x260/333/fff.jpg", website_url: "", course_description: "", course_content: "", minimum_entry_requirements: "", video: "", faculty_information: [], job_opportunities_and_salary_expectations: "", clubs_and_societies: "", course_reviews_and_testimonials: "", map_info: "", students_accomodation_link: "", clubs_and_societies_link: "", workshops: ""
    };

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    return (
        <React.Fragment>
			<div className="header">
                <div className="container">
                    <div className="header-text">{record.title}</div>
                    <p>{record.college}</p>
                </div>
            </div>
            <div className="p-60">
                <div className="container">
                    <div className="course_details_parent">
                        <div className="course_details_acc">
                            {selectedCourse.course_description && selectedCourse.course_description.length > 0 &&
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                    <Typography><div className="acc-title">Course Description</div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>{selectedCourse.course_description}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            }
                            {selectedCourse.course_content && selectedCourse.course_content.length > 0 &&
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                    <Typography><div className="acc-title">Course Content</div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>{selectedCourse.course_content}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            }
                            {selectedCourse.minimum_entry_requirements && selectedCourse.minimum_entry_requirements.length > 0 &&
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                    >
                                    <Typography><div className="acc-title">Minimum Entry Requirements</div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>{selectedCourse.minimum_entry_requirements}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            }
                            {record.fees &&
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel33a-content"
                                    id="panel33a-header"
                                    >
                                    <Typography><div className="acc-title">Course Fees</div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>{record.fees}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            }
                            {selectedCourse.video && selectedCourse.video.length > 0 &&
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4a-content"
                                    id="panel4a-header"
                                    >
                                    <Typography><div className="acc-title">Video Explaining Course</div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        <ReactPlayer 
                                            url={selectedCourse.video}
                                            width="100%"
                                            className=""
                                            controls={true}
                                            pip={true}
                                        />
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            }
                            {selectedCourse.faculty_information && selectedCourse.faculty_information.length > 0 &&
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel5a-content"
                                    id="panel5a-header"
                                    >
                                    <Typography><div className="acc-title">Faculty Information</div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        {selectedCourse.faculty_information}
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            }
                            {selectedCourse.job_opportunities_and_salary_expectations && selectedCourse.job_opportunities_and_salary_expectations.length > 0 &&
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel6a-content"
                                    id="panel6a-header"
                                    >
                                    <Typography><div className="acc-title">Job Opportunities and Salary Expectations</div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>{selectedCourse.job_opportunities_and_salary_expectations}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            }
                            {selectedCourse.clubs_and_societies && selectedCourse.clubs_and_societies.length > 0 &&
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel7a-content"
                                    id="panel7a-header"
                                    >
                                    <Typography><div className="acc-title">Clubs and Societies</div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>{selectedCourse.clubs_and_societies}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            }
                            {selectedCourse.course_reviews_and_testimonials && selectedCourse.course_reviews_and_testimonials.length > 0 &&
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel8a-content"
                                    id="panel8a-header"
                                    >
                                    <Typography><div className="acc-title">Course Reviews</div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>{selectedCourse.course_reviews_and_testimonials}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            }
                        </div>
                        <div className="course_details_helpful_resources mb-60">
                            <h3>Helpful Resources</h3>
                            <div className="highlight-border"></div>
                            <div className="single_resource">
                            <a href="#" target="_blank"><img src="/images/uniExperienceSq.jpg" alt="img" /></a>
                                <h3><Link to="/review_sentiment">Review Sentiment</Link></h3>
                                <p>Start exploring university through a game and familiarize yourself with your new campus</p>
                            </div>
                            <div className="single_resource">
                            <a href="#" target="_blank"><img src="/images/leapSq.jpg" alt="img" /></a>
                                <h3><a href="#" target="_blank">Transport (Cost & How to)</a></h3>
                                <p>Explore about transport for students in the city</p>
                            </div>
                            <div className="single_resource">
                            <a href="#" target="_blank"><img src="/images/markerSq.jpg" alt="img" /></a>
                                <h3><a href="#" target="_blank">Campus Map (wayfinder)</a></h3>
                                <p>Get a 2D map showcasing the campus</p>
                            </div>
                            <div className="single_resource">
                            <a href="#" target="_blank"><img src="/images/studentsSq.jpg" alt="img" /></a>
                                <h3><a href="#" target="_blank">Students Accomodation Helper</a></h3>
                                <p>Find all information about student accomodation here</p>
                            </div>
                        </div>
                    </div>
                    <div className="title text-left">Additional Functionalities:</div>
                    <div className="grey-border"></div>
                    <div className="additional_func">
                        <div className="single_additional_func">
                            <Link to="#"><img src="/images/1.png" alt="img" /></Link>
                            <div className="single_additional_func_title">
                                <a href="https://youtu.be/BWFqCrRhYws" target="_blank" className="additional_func_link">Brightspace</a>
                            </div>
                            <p>Learn Lot of Stuff On Brightspace, Assignments and Stuff</p>
                        </div>
                        <div className="single_additional_func">
                            <Link to="#"><img src="/images/2.png" alt="img" /></Link>
                            <div className="single_additional_func_title">
                                <a href="https://www.gov.ie/en/organisation/department-of-education/" target="_blank" className="additional_func_link">Ministry of Education</a>
                            </div>
                            <p>TU Dublin has 5 campuses across the Dublin region with our flagship campus at Grangegorman</p>
                        </div>
                        <div className="single_additional_func">
                            <Link to="#"><img src="/images/3.png" alt="img" /></Link>
                            <div className="single_additional_func_title">
                                <a href="https://www.cao.ie/handbook.php" target="_blank" className="additional_func_link">How to apply?</a>
                            </div>
                            <p>This will help you to apply in particular course</p>
                        </div>
                        <div className="single_additional_func">
                            <Link to="#"><img src="/images/4.png" alt="img" /></Link>
                            <div className="single_additional_func_title">
                                <a href="https://usi.ie/" target="_blank" className="additional_func_link">Union of Student Ireland</a>
                            </div>
                            <p>Lorem Ipsum Dolor Sit Amet</p>
                        </div>
                        <div className="single_additional_func">
                            <Link to="#"><img src="/images/5.png" alt="img" /></Link>
                            <div className="single_additional_func_title">
                                <a href="https://www.educationinireland.com/en/gdpr/" target="_blank" className="additional_func_link">Data Privacy Policy</a>
                            </div>
                            <p>Lorem Ipsum Dolor Sit Amet</p>
                        </div>
                        <div className="single_additional_func">
                            <Link to="#"><img src="/images/6.png" alt="img" /></Link>
                            <div className="single_additional_func_title">
                                <a href="https://www.librariesireland.ie/" target="_blank" className="additional_func_link">Libraries</a>
                            </div>
                            <p>Lorem Ipsum Dolor Sit Amet</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="cta">
                <div className="container">
                    <h2>Explore more about classrooms, lecturers, video lectures, academics, societies and workshops</h2>
                    <Link to="/explore_your_course" className="cta_link">Explore your course</Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CourseDetails;