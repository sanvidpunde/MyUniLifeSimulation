import React, { useState, useEffect } from 'react';
import {Slider} from "@mui/material";
import Select from 'react-select';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

import {receiveSuccessMessage} from '../redux/util/controller';

const Profiler = () => {

    const dispatch = useDispatch();

    const [logical, setLogical] = useState(3);
    const [coding, setCoding] = useState(3);
    const [hackathons, setHackathons] = useState(3);
    const [publicSpeaking, setPublicSpeaking] = useState(3);

    const [selfLearningCapability, setSelfLearningCapability] = useState(null);
    const [extraCourses, setExtraCourses] = useState(null);
    const [tookAdvice, setTookAdvice] = useState(null);
    const [teamCo, setTeamCo] = useState(null);
    const [introvert, setIntrovert] = useState(null);
    const [readingWriting, setReadingWriting] = useState(null);
    const [memoryCapability, setMemoryCapability] = useState(null);
    const [work, setWork] = useState(null);
    const [managementTechnical, setManagementTechnical] = useState(null);
    const [interestedSubjects, setInterestedSubjects] = useState(null);
    const [interestedBooks, setInterestedBooks] = useState(null);
    const [interestedTypeOfBooks, setInterestedTypeOfBooks] = useState(null);
    const [workshopsAttended, setWorkshopsAttended] = useState(null);
    const [typeOfCompanyYouWantToSettleIn, setTypeOfCompanyYouWantToSettleIn] = useState(null);
    const [interestedCareerArea, setInterestedCareerArea] = useState(null);

    const [selfLearningCapabilityError, setSelfLearningCapabilityError] = useState('');
    const [extraCoursesError, setExtraCoursesError] = useState('');
    const [tookAdviceError, setTookAdviceError] = useState('');
    const [teamCoError, setTeamCoError] = useState('');
    const [introvertError, setIntrovertError] = useState('');
    const [readingWritingError, setReadingWritingError] = useState('');
    const [memoryCapabilityError, setMemoryCapabilityError] = useState('');
    const [workError, setWorkError] = useState('');
    const [managementTechnicalError, setManagementTechnicalError] = useState('');
    const [interestedSubjectsError, setInterestedSubjectsError] = useState('');
    const [interestedBooksError, setInterestedBooksError] = useState('');
    const [interestedTypeOfBooksError, setInterestedTypeOfBooksError] = useState('');
    const [workshopsAttendedError, setWorkshopsAttendedError] = useState('');
    const [typeOfCompanyYouWantToSettleInError, setTypeOfCompanyYouWantToSettleInError] = useState('');
    const [interestedCareerAreaError, setInterestedCareerAreaError] = useState('');

    const yesNoOptions = [{value: "yes", label: "yes"}, {value: "no", label: "no"}];
    const ordinalOptions = [{value: "poor", label: "poor"}, {value: "medium", label: "medium"}, {value: "excellent", label: "excellent"}];

    // Scroll Top
    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    // Clear Errors on Change
    useEffect(() => {
        setSelfLearningCapabilityError('');
    }, [selfLearningCapability]);
    useEffect(() => {
        setExtraCoursesError('');
    }, [extraCourses]);
    useEffect(() => {
        setTookAdviceError('');
    }, [tookAdvice]);
    useEffect(() => {
        setTeamCoError('');
    }, [teamCo]);
    useEffect(() => {
        setIntrovertError('');
    }, [introvert]);
    useEffect(() => {
        setReadingWritingError('');
    }, [readingWriting]);
    useEffect(() => {
        setMemoryCapabilityError('');
    }, [memoryCapability]);
    useEffect(() => {
        setWorkError('');
    }, [work]);
    useEffect(() => {
        setManagementTechnicalError('');
    }, [managementTechnical]);
    useEffect(() => {
        setInterestedSubjectsError('');
    }, [interestedSubjects]);
    useEffect(() => {
        setInterestedBooksError('');
    }, [interestedBooks]);
    useEffect(() => {
        setInterestedTypeOfBooksError('');
    }, [interestedTypeOfBooks]);
    useEffect(() => {
        setWorkshopsAttendedError('');
    }, [workshopsAttended]);
    useEffect(() => {
        setTypeOfCompanyYouWantToSettleInError('');
    }, [typeOfCompanyYouWantToSettleIn]);
    useEffect(() => {
        setInterestedCareerAreaError('');
    }, [interestedCareerArea]);

    // Validation
	const validate = () => {
        if (!selfLearningCapability) {
            setSelfLearningCapabilityError('Please select');
        }
        if (!extraCourses) {
            setExtraCoursesError('Please select');
        }
        if (!tookAdvice) {
            setTookAdviceError('Please select');
        }
        if (!teamCo) {
            setTeamCoError('Please select');
        }
        if (!introvert) {
            setIntrovertError('Please select');
        }
        if (!readingWriting) {
            setReadingWritingError('Please select');
        }
        if (!memoryCapability) {
            setMemoryCapabilityError('Please select');
        }
        if (!work) {
            setWorkError('Please select');
        }
        if (!managementTechnical) {
            setManagementTechnicalError('Please select');
        }
        if (!interestedSubjects) {
            setInterestedSubjectsError('Please select');
        }
        if (!interestedBooks) {
            setInterestedBooksError('Please select');
        }
        if (!interestedTypeOfBooks) {
            setInterestedTypeOfBooksError('Please select');
        }
        if (!workshopsAttended) {
            setWorkshopsAttendedError('Please select');
        }
        if (!typeOfCompanyYouWantToSettleIn) {
            setTypeOfCompanyYouWantToSettleInError('Please select');
        }
        if (!interestedCareerArea) {
            setInterestedCareerAreaError('Please select');
        }
		if (!selfLearningCapability || !extraCourses || !tookAdvice || !teamCo || !introvert || !readingWriting || !memoryCapability || !work || !managementTechnical || !interestedSubjects || !interestedBooks || !interestedTypeOfBooks || !workshopsAttended || !typeOfCompanyYouWantToSettleIn || !interestedCareerArea) {
			return false;
		}
		return true;
	};

    // Run Prediction
    const submitHandler = (e) => {
        e.preventDefault();
        const isValid = validate();
		if (isValid) {
            // call API
            const profilerData = {
                logical,
                coding,
                hackathons,
                publicSpeaking,
                selfLearningCapability,
                extraCourses,
                tookAdvice,
                teamCo,
                introvert,
                readingWriting,
                memoryCapability,
                work,
                managementTechnical,
                interestedSubjects,
                interestedBooks,
                interestedTypeOfBooks,
                workshopsAttended,
                typeOfCompanyYouWantToSettleIn,
                interestedCareerArea
            };
            console.log("Profiler inputs are", profilerData);
            // API call
            axios.post('http://localhost:8080/api/profiler', profilerData)
                .then(resp => {
                    console.log("resp is:", resp);
                    dispatch(receiveSuccessMessage({success: "Profiler request sent successfully"}));
                });
        }
    }
	
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
                    <h3 className="mb-20">This test will determine your career, Lets gooooooo!</h3>
                    <div className="range_selection">
                        <div className="single_range_selection">
                            <label htmlFor="logical">Rate your Logical quotient skills</label>
                            <Slider
                                aria-label="logical"
                                value={logical}
                                onChange={(e) => setLogical(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={0}
                                max={10}
                            />
                        </div>
                        <div className="single_range_selection">
                            <label htmlFor="coding">Rate your Coding skills</label>
                            <Slider
                                aria-label="coding"
                                value={coding}
                                onChange={(e) => setCoding(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={0}
                                max={10}
                            />
                        </div>
                        <div className="single_range_selection">
                            <label htmlFor="hackathons">Enter number of Hackathons participated</label>
                            <Slider
                                aria-label="hackathons"
                                value={hackathons}
                                onChange={(e) => setHackathons(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={0}
                                max={10}
                            />
                        </div>
                        <div className="single_range_selection">
                            <label htmlFor="publicSpeaking">Rate Your Public Speaking</label>
                            <Slider
                                aria-label="publicSpeaking"
                                value={publicSpeaking}
                                onChange={(e) => setPublicSpeaking(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={0}
                                max={10}
                            />
                        </div>
                    </div>
                    <div className="selection_container">
                        <div className="single_selection_container">
                            <label>Self Learning Capability
                                <Select 
                                    defaultValue={selfLearningCapability}
                                    onChange={setSelfLearningCapability}
                                    options={yesNoOptions}
                                    className="mt-6"
                                />
                            </label>
                            {selfLearningCapabilityError !== "" && <p className="error_text"><i>!</i> &nbsp;{selfLearningCapabilityError}</p>}
                        </div>
                        <div className="single_selection_container">
                            <label>Extra courses
                                <Select 
                                    defaultValue={extraCourses}
                                    onChange={setExtraCourses}
                                    options={yesNoOptions}
                                    className="mt-6"
                                />
                            </label>
                            {extraCoursesError !== "" && <p className="error_text"><i>!</i> &nbsp;{extraCoursesError}</p>}
                        </div>
                        <div className="single_selection_container">
                            <label>Took advice from seniors or elders
                                <Select 
                                    defaultValue={tookAdvice}
                                    onChange={setTookAdvice}
                                    options={yesNoOptions}
                                    className="mt-6"
                                />
                            </label>
                            {tookAdviceError !== "" && <p className="error_text"><i>!</i> &nbsp;{tookAdviceError}</p>}
                        </div>
                        <div className="single_selection_container">
                            <label>Team co-ordination skill
                                <Select 
                                    defaultValue={teamCo}
                                    onChange={setTeamCo}
                                    options={yesNoOptions}
                                    className="mt-6"
                                />
                            </label>
                            {teamCoError !== "" && <p className="error_text"><i>!</i> &nbsp;{teamCoError}</p>}
                        </div>
                        <div className="single_selection_container">
                            <label>Introvert
                                <Select 
                                    defaultValue={introvert}
                                    onChange={setIntrovert}
                                    options={yesNoOptions}
                                    className="mt-6"
                                />
                            </label>
                            {introvertError !== "" && <p className="error_text"><i>!</i> &nbsp;{introvertError}</p>}
                        </div>
                        <div className="single_selection_container">
                            <label>Reading and writing skills
                                <Select 
                                    defaultValue={readingWriting}
                                    onChange={setReadingWriting}
                                    options={ordinalOptions}
                                    className="mt-6"
                                />
                            </label>
                            {readingWritingError !== "" && <p className="error_text"><i>!</i> &nbsp;{readingWritingError}</p>}
                        </div>
                        <div className="single_selection_container">
                            <label>Memory capability score
                                <Select 
                                    defaultValue={memoryCapability}
                                    onChange={setMemoryCapability}
                                    options={ordinalOptions}
                                    className="mt-6"
                                />
                            </label>
                            {memoryCapabilityError !== "" && <p className="error_text"><i>!</i> &nbsp;{memoryCapabilityError}</p>}
                        </div>
                        <div className="single_selection_container">
                            <label>Smart or Hard Work
                                <Select 
                                    defaultValue={work}
                                    onChange={setWork}
                                    options={[{value: "Smart worker", label: "Smart worker"}, {value: "Hard worker", label: "Hard worker"}]}
                                    className="mt-6"
                                />
                            </label>
                            {workError !== "" && <p className="error_text"><i>!</i> &nbsp;{workError}</p>}
                        </div>
                        <div className="single_selection_container">
                            <label>Management or Technical
                                <Select 
                                    defaultValue={managementTechnical}
                                    onChange={setManagementTechnical}
                                    options={[{value: "Management", label: "Management"}, {value: "Technical", label: "Technical"}]}
                                    className="mt-6"
                                />
                            </label>
                            {managementTechnicalError !== "" && <p className="error_text"><i>!</i> &nbsp;{managementTechnicalError}</p>}
                        </div>

                        <div className="single_selection_container">
                            <label>Interested Subjects
                                <Select 
                                    defaultValue={interestedSubjects}
                                    onChange={setInterestedSubjects}
                                    options={[{value: "Programming", label: "Programming"}, {value: "Management", label: "Management"}, {value: "Data Engineering", label: "Data Engineering"}, {value: "Networks", label: "Networks"}, {value: "Software Engineering", label: "Software Engineering"}, {value: "Cloud Computing", label: "Cloud Computing"}, {value: "Parallel Computing", label: "Parallel Computing"}, {value: "IOT", label: "IOT"}, {value: "Computer Architecture", label: "Computer Architecture"}, {value: "Hacking", label: "Hacking"}]}
                                    className="mt-6"
                                />
                            </label>
                            {interestedSubjectsError !== "" && <p className="error_text"><i>!</i> &nbsp;{interestedSubjectsError}</p>}
                        </div>
                        <div className="single_selection_container">
                            <label>Interested Books Category
                                <Select 
                                    defaultValue={interestedBooks}
                                    onChange={setInterestedBooks}
                                    options={[{value: "Series", label: "Series"}, {value: "Autobiographies", label: "Autobiographies"}, {value: "Travel", label: "Travel"}, {value: "Guide", label: "Guide"}, {value: "Health", label: "Health"}, {value: "Journals", label: "Journals"}, {value: "Anthology", label: "Anthology"}, {value: "Dictionaries", label: "Dictionaries"}, {value: "Prayer Books", label: "Prayer Books"}, {value: "Art", label: "Art"}, {value: "Encyclopedias", label: "Encyclopedias"}, {value: "Religion-spirituality", label: "Religion-spirituality"}, {value: "Action and Adventure", label: "Action and Adventure"}, {value: "Comics", label: "Comics"}, {value: "Horror", label: "Horror"}, {value: "Satire", label: "Satire"}, {value: "Self Help", label: "Self Help"}, {value: "History", label: "History"}, {value: "Cookbooks", label: "Cookbooks"}, {value: "Math", label: "Math"}, {value: "Art", label: "Art"}, {value: "Biographies", label: "Biographies"}, {value: "Drama", label: "Drama"}, {value: "Diaries", label: "Diaries"}, {value: "Science Fiction", label: "Science Fiction"}, {value: "Poetry", label: "Poetry"}, {value: "Romance", label: "Romance"}, {value: "Science", label: "Science"}, {value: "Triology", label: "Triology"}, {value: "Fantasy", label: "Fantasy"}, {value: "Childrens", label: "Childrens"}, {value: "Mystery", label: "Mystery"}]}
                                    className="mt-6"
                                />
                            </label>
                            {interestedBooksError !== "" && <p className="error_text"><i>!</i> &nbsp;{interestedBooksError}</p>}
                        </div>
                        <div className="single_selection_container">
                            <label>Interested Type Of Books
                                <Select 
                                    defaultValue={interestedTypeOfBooks}
                                    onChange={setInterestedTypeOfBooks}
                                    options={[{value: "Information Security", label: "Information Security"}, {value: "Shell Programming", label: "Shell Programming"}, {value: "R Programming", label: "R Programming"}, {value: "Distro Making", label: "Distro Making"}, {value: "Machine Learning", label: "Machine Learning"}, {value: "Full stack", label: "Full stack"}, {value: "Hadoop", label: "Hadoop"}, {value: "App Development", label: "App Development"}, {value: "Python", label: "Python"}]}
                                    className="mt-6"
                                />
                            </label>
                            {interestedTypeOfBooksError !== "" && <p className="error_text"><i>!</i> &nbsp;{interestedTypeOfBooksError}</p>}
                        </div>
                        <div className="single_selection_container">
                            <label>Workshops Attended
                                <Select 
                                    defaultValue={workshopsAttended}
                                    onChange={setWorkshopsAttended}
                                    options={[{value: "Testing/Database Security", label: "Testing/Database Security"}, {value: "Game Development", label: "Game Development"}, {value: "Data Science", label: "Data Science"}, {value: "System Designing", label: "System Designing"}, {value: "Hacking", label: "Hacking"}, {value: "Cloud Computing", label: "Cloud Computing"}, {value: "Web Technologies", label: "Web Technologies"}]}
                                    className="mt-6"
                                />
                            </label>
                            {workshopsAttendedError !== "" && <p className="error_text"><i>!</i> &nbsp;{workshopsAttendedError}</p>}
                        </div>
                        <div className="single_selection_container">
                            <label>Type of company you want to settle in
                                <Select 
                                    defaultValue={typeOfCompanyYouWantToSettleIn}
                                    onChange={setTypeOfCompanyYouWantToSettleIn}
                                    options={[{value: "BPA", label: "BPA"}, {value: "Cloud Services", label: "Cloud Services"}, {value: "Product Development", label: "Product Development"}, {value: "Testing and Maintaining Services", label: "Testing and Maintaining Services"}, {value: "SAAS services", label: "SAAS services"}, {value: "Web services", label: "Web services"}, {value: "Finance", label: "Finance"}, {value: "Sales and Marketing", label: "Sales and Marketing"}, {value: "Product based", label: "Product based"}, {value: "Service based", label: "Service based"}]}
                                    className="mt-6"
                                />
                            </label>
                            {typeOfCompanyYouWantToSettleInError !== "" && <p className="error_text"><i>!</i> &nbsp;{typeOfCompanyYouWantToSettleInError}</p>}
                        </div>
                        <div className="single_selection_container">
                            <label>Interested Career Area
                                <Select 
                                    defaultValue={interestedCareerArea}
                                    onChange={setInterestedCareerArea}
                                    options={[{value: "Testing", label: "Testing"}, {value: "System Developer", label: "System Developer"}, {value: "Business Process Analyst", label: "Business Process Analyst"}, {value: "Security", label: "Security"}, {value: "Developer", label: "Developer"}, {value: "Cloud Computing", label: "Cloud Computing"}]}
                                    className="mt-6"
                                />
                            </label>
                            {interestedCareerAreaError !== "" && <p className="error_text"><i>!</i> &nbsp;{interestedCareerAreaError}</p>}
                        </div>
                    </div>
                    <div className="mt-20">
                        <button type="button" className="take-test-button" onClick={submitHandler} >Run Prediction</button>
                    </div>
                </div>
            </div>			
		</React.Fragment>
	)
}

export default Profiler;