import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

const CourseDetails = ({ loggedIn }) => {

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    return (
        <React.Fragment>
			<div className="header">
                <div className="container">
                    <div className="header-text">Course Title</div>
                    <p>Lorem Ipsum Dolor Sit Amet</p>
                </div>
            </div>
            <div className="p-60">
                <div className="container">
                    <div className="course_details_parent">
                        <div className="course_details_acc">
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography><div className="acc-title">Course Description</div></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                >
                                <Typography><div className="acc-title">Course Content</div></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                                >
                                <Typography><div className="acc-title">Minimum Entry Requirements</div></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel6a-content"
                                id="panel6a-header"
                                >
                                <Typography><div className="acc-title">Job Opportunities and Salary Expectations</div></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel7a-content"
                                id="panel7a-header"
                                >
                                <Typography><div className="acc-title">Clubs and Societies</div></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel8a-content"
                                id="panel8a-header"
                                >
                                <Typography><div className="acc-title">Course Reviews</div></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className="course_details_helpful_resources">
                            <h3>Helpful Resources</h3>
                            <div className="highlight-border"></div>
                            <div className="single_resource">
                            <a href="#" target="_blank"><img src="/images/uniExperienceSq.jpg" alt="img" /></a>
                                <h3><a href="#" target="_blank">Uni Game Experience</a></h3>
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
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails);