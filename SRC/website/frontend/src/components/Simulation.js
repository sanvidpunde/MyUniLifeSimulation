import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

import {receiveSuccessMessage} from '../redux/util/controller';

const Simulation = () => {

    const history = useHistory();

    const dispatch = useDispatch();
    // const step = useSelector(state => state.step);

    const [cao, setCao] = useState(null);
    const [fieldOfInterest, setFieldOfInterest] = useState(null);
    const [city, setCity] = useState(null);
    const [jobDomain, setJobDomain] = useState(null);
    const [hobbies, setHobbies] = useState(null);
    const [spendingLimit, setSpendingLimit] = useState(null);
    const [caoError, setCaoError] = useState('');
    const [fieldOfInterestError, setFieldOfInterestError] = useState('');
    const [cityError, setCityError] = useState('');
    const [jobDomainError, setJobDomainError] = useState('');
    const [hobbiesError, setHobbiesError] = useState('');
    const [spendingLimitError, setSpendingLimitError] = useState('');

    // Remove errors on change
    useEffect(() => {
        setFieldOfInterestError('');
    }, [fieldOfInterest]);
    useEffect(() => {
        setCityError('');
    }, [city]);
    useEffect(() => {
        setJobDomainError('');
    }, [jobDomain]);
    useEffect(() => {
        setHobbiesError('');
    }, [hobbies]);
    useEffect(() => {
        setSpendingLimitError('');
    }, [spendingLimit]);

    const fieldOfInterestOptions = [{value: "Computer & IT", label: "Computer & IT"}, {value: "Management", label: "Management"}, {value: "Business", label: "Business"}, {value: "Art", label: "Art"}, {value: "Finance", label: "Finance"}, {value: "Law", label: "Law"}];
    const cityOptions = [{value: "Dublin", label: "Dublin"}, {value: "Cork", label: "Cork"}, {value: "Galway", label: "Galway"}, {value: "Limerick", label: "Limerick"}, {value: "Athlone", label: "Athlone"}, {value: "Carlow", label: "Carlow"}];
    const jobDomainOptions = [{value: "IT", label: "IT"}, {value: "HR", label: "HR"}, {value: "Management", label: "Management"}, {value: "Support", label: "Support"}, {value: "Finance", label: "Finance"}];
    const hobbiesOptions = [{value: "Cricket", label: "Cricket"}, {value: "Football", label: "Football"}, {value: "Chess", label: "Chess"}, {value: "Athletics", label: "Athletics"}, {value: "Automation", label: "Automation"}, {value: "Singing", label: "Singing"}];
    const spendingLimitOptions = [{value: "2000 - 4000", label: "€2000 - €4000"}, {value: "4000 - 6000", label: "€4000 - €6000"}, {value: "6000 - 8000", label: "€6000 - €8000"}, {value: "8000 - above", label: "€8000 - above"}];

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
        if (!fieldOfInterest) {
            setFieldOfInterestError("Please select your field of interest");
        }
        if (!city) {
            setCityError("Please select your preferred city");
        }
        if (!jobDomain) {
            setJobDomainError("Please select your preferred job domain");
        }
        if (!hobbies) {
            setHobbiesError("Please select your hobbies");
        }
        if (!spendingLimit) {
            setSpendingLimitError("Please select your preferred spending limit");
        }
		if (!cao || 0 < cao > 625 || !fieldOfInterest || !city || !jobDomain || !hobbies || !spendingLimit) {
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
                CAO_Score: cao,
                field_interest: fieldOfInterest.value,
                City: city.value,
                Job_domain: jobDomain.value,
                Interest: hobbies.value,
                Budget: spendingLimit.value
            }
            console.log("simulation inputs are", simulationData);
            // API call
            axios.post('/api/simulation', simulationData)
                .then(resp => {
                    dispatch(receiveSuccessMessage({success: "Simulation request sent successfully"}));
                    console.log("resp is:", resp);
                    if (resp.data.success) {
                        // redirect
                        history.push('/recommended_courses');
                        // update redux
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
                            <label>Field of Interest
                                <Select 
                                    defaultValue={fieldOfInterest}
                                    onChange={setFieldOfInterest}
                                    options={fieldOfInterestOptions}
                                    className="mt-6"
                                />
                            </label>
                            {fieldOfInterestError !== "" && <p className="error_text"><i>!</i> &nbsp;{fieldOfInterestError}</p>}
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
                            <label>Preferred Job Domain
                                <Select
                                    defaultValue={jobDomain}
                                    onChange={setJobDomain}
                                    options={jobDomainOptions}
                                    className="mt-6"
                                />
                            </label>
                            {jobDomainError !== "" && <p className="error_text"><i>!</i> &nbsp;{jobDomainError}</p>}
                        </div>
                        <div className="single-simulation-form">
                            <label>Hobbies
                                <Select
                                    defaultValue={hobbies}
                                    onChange={setHobbies}
                                    options={hobbiesOptions}
                                    className="mt-6"
                                />
                            </label>
                            {hobbiesError !== "" && <p className="error_text"><i>!</i> &nbsp;{hobbiesError}</p>}
                        </div>
                        <div className="single-simulation-form">
                            <label>Spending Limit
                                <Select
                                    defaultValue={spendingLimit}
                                    onChange={setSpendingLimit}
                                    options={spendingLimitOptions}
                                    className="mt-6"
                                />
                            </label>
                            {spendingLimitError !== "" && <p className="error_text"><i>!</i> &nbsp;{spendingLimitError}</p>}
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

export default Simulation;