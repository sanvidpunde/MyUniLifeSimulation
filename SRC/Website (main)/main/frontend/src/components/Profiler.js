import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {Slider} from "@mui/material";
import Select from 'react-select';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

import {receiveSuccessMessage, receiveFailureMessage, receiveCurrentCareer, updateCurrentCareer} from '../redux/util/controller';

const Profiler = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [logical, setLogical] = useState(3);
    const [stressedEasily, setStressedEasily] = useState(3);
    const [alwaysPrepared, setAlwaysPrepared] = useState(3);
    const [followSchedule, setFollowSchedule] = useState(3);
    const [quickToUnderstandThings, setQuickToUnderstandThings] = useState(3);
    const [fullOfIdeas, setFullOfIdeas] = useState(3);
    const [iStartConversation, setIStartConversation] = useState(3);
    const [coding, setCoding] = useState(3);
    const [publicSpeaking, setPublicSpeaking] = useState(3);

    const [likeSports, setLikeSports] = useState(null);
    const [entrepreneurialMindset, setEntrepreneurialMindset] = useState(null);
    const [tendencyToWorry, setTendencyToWorry] = useState(null);
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

    const [likeSportsError, setLikeSportsError] = useState('');
    const [entrepreneurialMindsetError, setEntrepreneurialMindsetError] = useState('');
    const [tendencyToWorryError, setTendencyToWorryError] = useState('');
    const [selfLearningCapabilityError, setSelfLearningCapabilityError] = useState('');
    const [extraCoursesError, setExtraCoursesError] = useState('');
    const [tookAdviceError, setTookAdviceError] = useState('');
    const [teamCoError, setTeamCoError] = useState('');
    const [introvertError, setIntrovertError] = useState('');
    const [readingWritingError, setReadingWritingError] = useState('');
    const [memoryCapabilityError, setMemoryCapabilityError] = useState('');
    const [workError, setWorkError] = useState('');

    const yesNoOptions = [{value: 1, label: "yes"}, {value: 0, label: "no"}];
    const ordinalOptions = [{value: 0, label: "poor"}, {value: 1, label: "medium"}, {value: 2, label: "excellent"}];

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
        setLikeSportsError('');
    }, [likeSports]);
    useEffect(() => {
        setEntrepreneurialMindsetError('');
    }, [entrepreneurialMindset]);
    useEffect(() => {
        setTendencyToWorryError('');
    }, [tendencyToWorry]);


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
        if (!likeSports) {
            setLikeSportsError('Please select');
        }
        if (!entrepreneurialMindset) {
            setEntrepreneurialMindsetError('Please select');
        }
        if (!tendencyToWorry) {
            setTendencyToWorryError('Please select');
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
		if (!selfLearningCapability || !extraCourses || !tookAdvice || !likeSports || !entrepreneurialMindset || !tendencyToWorry || !teamCo || !introvert || !readingWriting || !memoryCapability || !work) {
            console.log('false returned');
			return false;
		}
        console.log('true returned');
		return true;
	};

    // Run Prediction
    const submitHandler = (e) => {
        e.preventDefault();
        const isValid = validate();
		if (isValid) {
            // call API
            const profilerData = {
                Logical_quotient_rating: logical,
                i_get_stressed_out_easily: stressedEasily,
                coding_skills_rating: coding,
                public_speaking_points: publicSpeaking,
                i_am_always_prepared: alwaysPrepared,
                i_follow_a_schedule: followSchedule,
                i_am_quick_to_understand_things: quickToUnderstandThings,
                i_am_full_of_ideas: fullOfIdeas,
                i_start_conversations: iStartConversation,
                do_you_like_sports: likeSports.value,
                entrepreneurial_mindset: entrepreneurialMindset.value,
                tendency_to_worry: tendencyToWorry.value,
                self_learning_capability: selfLearningCapability.value,
                Extra_courses_did: extraCourses.value,
                Taken_inputs_from_seniors_or_elders: tookAdvice.value,
                worked_in_teams_ever: teamCo.value,
                Introvert: introvert.value,
                reading_and_writing_skills: readingWriting.value,
                memory_capability_score: memoryCapability.value,
                B_hard_worker: work.value === "Hard worker" ? 1 : 0,
                B_smart_worker: work.value === "Hard worker" ? 0 : 1
            };
            console.log("Profiler inputs are", profilerData);
            dispatch(receiveSuccessMessage({success: "Interest Profiler request sent"}));
            // API call
            axios.post('/api/profiler', profilerData)
                .then(resp => {
                    console.log("resp is:", resp);
                    if (resp.data.success === false) {
                        return dispatch(receiveFailureMessage({failure: resp.data.message}));
                    }
                    // update redux with interest profiler details
                    dispatch(updateCurrentCareer(resp.data.career));
                    dispatch(receiveSuccessMessage({success: `Predicted career is ${resp.data.career.career}`}));
                    history.push('/interest_profiler_details');
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
                    <div className="breadcrumb">
                        <p><i className="fa fa-arrows" aria-hidden="true"></i> Personality test / <strong>Interest Profiler</strong> / Course Recommender</p>
                    </div>
                    <div className="profiler_bg profiler_bg_overlay pb-60">
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
                                    max={9}
                                />
                            </div>
                            <div className="single_range_selection">
                                <label htmlFor="stressedEasily">I get stressed out easily</label>
                                <Slider
                                    aria-label="stressedEasily"
                                    value={stressedEasily}
                                    onChange={(e) => setStressedEasily(e.target.value)}
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks
                                    min={0}
                                    max={9}
                                />
                            </div>

                            <div className="single_range_selection">
                                <label htmlFor="alwaysPrepared">I am always prepared</label>
                                <Slider
                                    aria-label="alwaysPrepared"
                                    value={alwaysPrepared}
                                    onChange={(e) => setAlwaysPrepared(e.target.value)}
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks
                                    min={0}
                                    max={9}
                                />
                            </div>
                            <div className="single_range_selection">
                                <label htmlFor="followSchedule">I follow schedule</label>
                                <Slider
                                    aria-label="followSchedule"
                                    value={followSchedule}
                                    onChange={(e) => setFollowSchedule(e.target.value)}
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks
                                    min={0}
                                    max={9}
                                />
                            </div>

                            <div className="single_range_selection">
                                <label htmlFor="quickToUnderstandThings">I am quick to understand things</label>
                                <Slider
                                    aria-label="quickToUnderstandThings"
                                    value={quickToUnderstandThings}
                                    onChange={(e) => setQuickToUnderstandThings(e.target.value)}
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks
                                    min={0}
                                    max={9}
                                />
                            </div>
                            <div className="single_range_selection">
                                <label htmlFor="fullOfIdeas">I am full of ideas</label>
                                <Slider
                                    aria-label="fullOfIdeas"
                                    value={fullOfIdeas}
                                    onChange={(e) => setFullOfIdeas(e.target.value)}
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks
                                    min={0}
                                    max={9}
                                />
                            </div>
                            <div className="single_range_selection">
                                <label htmlFor="iStartConversation">I start conversations</label>
                                <Slider
                                    aria-label="iStartConversation"
                                    value={iStartConversation}
                                    onChange={(e) => setIStartConversation(e.target.value)}
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks
                                    min={0}
                                    max={9}
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
                                    max={9}
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
                                    max={9}
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
                                <label>Do you like sports
                                    <Select 
                                        defaultValue={likeSports}
                                        onChange={setLikeSports}
                                        options={yesNoOptions}
                                        className="mt-6"
                                    />
                                </label>
                                {likeSportsError !== "" && <p className="error_text"><i>!</i> &nbsp;{likeSportsError}</p>}
                            </div>
                            <div className="single_selection_container">
                                <label>Entrepreneurial Mindset
                                    <Select 
                                        defaultValue={entrepreneurialMindset}
                                        onChange={setEntrepreneurialMindset}
                                        options={yesNoOptions}
                                        className="mt-6"
                                    />
                                </label>
                                {entrepreneurialMindsetError !== "" && <p className="error_text"><i>!</i> &nbsp;{entrepreneurialMindsetError}</p>}
                            </div>
                            <div className="single_selection_container">
                                <label>Tendency to worry
                                    <Select 
                                        defaultValue={tendencyToWorry}
                                        onChange={setTendencyToWorry}
                                        options={yesNoOptions}
                                        className="mt-6"
                                    />
                                </label>
                                {tendencyToWorryError !== "" && <p className="error_text"><i>!</i> &nbsp;{tendencyToWorryError}</p>}
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
                        </div>
                        <div className="mt-20">
                            <button type="button" className="take-test-button" onClick={submitHandler} >Run Prediction</button>
                        </div>
                    </div>
                    
                    
                </div>
            </div>			
		</React.Fragment>
	)
}

export default Profiler;