import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {Slider} from "@mui/material";
import Select from 'react-select';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

import {receiveSuccessMessage, receiveFailureMessage, updateCurrentCourse} from '../redux/util/controller';

const Simulation = () => {

    const history = useHistory();

    const dispatch = useDispatch();
    // const step = useSelector(state => state.step);
    const course = useSelector(state => state.course);
    const personality = useSelector(state => state.personality);
    const career = useSelector(state => state.career);

    const [cao, setCao] = useState(null);
    const [city, setCity] = useState(null);
    const [jobDomain, setJobDomain] = useState("");
    const [spendingLimit, setSpendingLimit] = useState(6000);
    const [caoError, setCaoError] = useState('');
    const [cityError, setCityError] = useState('');
    const [jobDomainError, setJobDomainError] = useState('');
    const [spendingLimitError, setSpendingLimitError] = useState('');

    // Remove errors on change
    useEffect(() => {
        setCityError('');
    }, [city]);
    useEffect(() => {
        console.log("jobDomain is ", jobDomain);
        setJobDomainError('');
    }, [jobDomain]);
    useEffect(() => {
        setSpendingLimitError('');
    }, [spendingLimit]);

    const cityOptions = [{value: "Dublin", label: "Dublin"}, {value: "Cork", label: "Cork"}, {value: "Galway", label: "Galway"}, {value: "Limerick", label: "Limerick"}, {value: "Athlone", label: "Athlone"}, {value: "Carlow", label: "Carlow"}];
    const jobDomainOptions = ["IT", "Non_IT", "Management", "Support"];

    // scroll to top of page
    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    const handleNumberValidation = (e) => {
        const min = 0;
        const max = 625;
        const value = Math.max(min, Math.min(max, Number(e.target.value)));
        setCao(value);
        setCaoError('');
    };

    // Validation
	const validate = () => {
        if (!cao) {
            setCaoError('Please enter your CAO point');
        }
        if (cao > 625 || cao < 0) {
            setCaoError('Invalid CAO point entered')
        }
        if (!city) {
            setCityError("Please select your preferred city");
        }
        if (!jobDomain) {
            setJobDomainError("Please select your preferred job domain");
        }
        if (!spendingLimit) {
            setSpendingLimitError("Please select your preferred spending limit");
        }
		if (!cao || 0 < cao > 625 || !city || !jobDomain || !spendingLimit) {
			return false;
		}
		return true;
	};

    // Run Simulation
    const submitHandler = (e) => {
        e.preventDefault();
		const isValid = validate();
		if (isValid) {
            // call API
            console.log("No errors");
            const simulationData = {
                CAO: cao,
                location: city.value,
                job_domain: jobDomain,
                interest: career.career || "Applications Developer",
                personality: personality.personality.toLowerCase() || "serious",
                Budget: spendingLimit
            }
            console.log("simulation inputs are", simulationData);
            dispatch(receiveSuccessMessage({success: "Course Prediction request sent"}));
            // API call
            axios.post('/api/simulation', simulationData)
                .then(resp => {
                    console.log("resp is:", resp);
                    if (resp.data.success === false) {
                        return dispatch(receiveFailureMessage({failure: resp.data.message}));
                    }
                    if (resp.data.success) {
                        dispatch(receiveSuccessMessage({success: `Predicted Course ID is ${resp.data.course_suggested.code}`}));
                        // update redux
                        const updatedCourse = {...course, course_suggested: resp.data.course_suggested, other_courses: resp.data.other_courses}
                        dispatch(updateCurrentCourse(updatedCourse));
                        // redirect
                        history.push('/recommended_courses');
                    }
                });
            // history.push('/recommended_courses');
        }
    };
	
	return (
		<React.Fragment>
			<div className="header">
                <div className="container">
                    <div className="header-text">Recommender System</div>
                    <p>Now that we have a career match for you, let's start looking for a specific course using our state-of-the-art Recommender System</p>
                </div>
            </div>
            <div className="p-60">
                <div className="container">
                    <img src="/images/simulation.jpg" alt="Simulation" className="responsive-image mb-60" />
                    <h3 className="mb-20">Please complete following details:</h3>
                    <div className="simulation-form-area">
                        <div className="single-simulation-form">
                            <label>CAO Point
                                <input
                                    type="number"
                                    value={cao}
                                    onChange={handleNumberValidation}
                                    placeholder="Enter your CAO Point"
                                />
                            </label>
                            {caoError !== "" && <p className="error_text"><i>!</i> &nbsp;{caoError}</p>}
                        </div>
                        <div className="single-simulation-form">
                            <label>City
                                <Select
                                    defaultValue={city}
                                    onChange={setCity}
                                    options={cityOptions}
                                    className="mt-6"
                                />
                            </label>
                            {cityError !== "" && <p className="error_text"><i>!</i> &nbsp;{cityError}</p>}
                        </div>
                        <div className="single-simulation-form">
                            <label>Predicted Personality</label>
                            <input type="text" className="custom_text" placeholder={personality.personality || "Serious"} disabled />
                        </div>
                        <div className="single-simulation-form">
                            <label>Predicted Career</label>
                            <input type="text" className="custom_text" placeholder={career.career || "Teacher"} disabled />
                        </div>
                    </div>
                    <div className="mt-30">
                        <div className="width_slider">
                            <label>Spending Limit
                                <Slider
                                    aria-label="spendingLimit"
                                    value={spendingLimit}
                                    onChange={(e) => setSpendingLimit(e.target.value)}
                                    valueLabelDisplay="auto"
                                    step={1000}
                                    marks
                                    min={1000}
                                    max={20000}
                                />
                            </label>
                            {spendingLimitError !== "" && <p className="error_text"><i>!</i> &nbsp;{spendingLimitError}</p>}
                        </div>
                    </div>
                    <div className="mt-30">
                        <label>Preferred Job Domain</label>
                        <div className="job_domain_options_block">
                            {jobDomainOptions.map(item => {
                                return (
                                    <div className="job_domain_flex" key={item}>
                                        {/* <input
                                            type="radio"
                                            id={item}
                                            name="job_domain_input"
                                            className="single_option_radio"
                                            value={jobDomain}
                                            onChange={(e) => setJobDomain(e.target.value)}
                                            checked={jobDomain === item}
                                        /> */}
                                        <label htmlFor={item} className={`single_option_label ${jobDomain === item && "single_option_label_active"}`} onClick={() => setJobDomain(item)}>{item}</label>
                                        {/* <button type="button" className={`single_option_label ${jobDomain === item && "single_option_label_active"}`} onClick={() => setJobDomain(item)}>{item}</button> */}
                                    </div>
                                )
                            })}
                            
                            {/* <Select
                                defaultValue={jobDomain}
                                onChange={setJobDomain}
                                options={jobDomainOptions}
                                className="mt-6"
                            /> */}
                        </div>
                        {jobDomainError !== "" && <p className="error_text"><i>!</i> &nbsp;{jobDomainError}</p>}
                    </div>
                    <div className="mt-20">
                        <button type="button" className="take-test-button" onClick={submitHandler} >Run Prediction</button>
                    </div>
                    
                </div>
            </div>
		</React.Fragment>
	)
}

export default Simulation;