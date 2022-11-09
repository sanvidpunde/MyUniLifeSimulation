import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

import {receiveSuccessMessage} from '../redux/util/controller';

const Simulation = () => {

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
    const spendingLimitOptions = [{value: "€2000 - €4000", label: "€2000 - €4000"}, {value: "€4000 - €6000", label: "€4000 - €6000"}, {value: "€6000 - €8000", label: "€6000 - €8000"}, {value: "€8000 - above", label: "€8000 - above"}];

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
                cao,
                fieldOfInterest,
                city,
                jobDomain,
                hobbies,
                spendingLimit
            }
            console.log("simulation inputs are", simulationData);
            // API call
            axios.post('/api/simulation', simulationData)
                .then(resp => {
                    console.log("resp is:", resp);
                    dispatch(receiveSuccessMessage({success: "Simulation request sent successfully"}));
                });
        }
    };
	
	return (
		<React.Fragment>
			<div className="header">
                <div className="container">
                    <div className="header-text">University Simulation</div>
                    <p>Now that we have a career match for you, let's start looking for a specific course using our state-of-the-art Recommender System</p>
                </div>
            </div>
            <div className="p-60">
                <div className="container">
                    <img src="/images/simulation.jpg" alt="Simulation" className="responsive-image mb-60" />
                    <h3 className="mb-20">Complete following details:</h3>
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
                                    isMulti
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
                                    isMulti
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
                        <button type="button" className="take-test-button" onClick={submitHandler} >Submit</button>
                        {/* <Link to="/recommended_courses"><button type="button" className="take-test-button" >Submit</button></Link> */}
                    </div>
                    
                </div>
            </div>
            {/* {(loggedIn) ?
                <div className="container login-form p-60">
                    <div className="p-lr">
                        <div className="card">
                            <div className="title">Run simulation now:</div>
                            <form>

                                <label htmlFor="cao">CAO Points</label>
                                <input 
                                    type="number"
                                    id="cao"
                                    value={cao}
                                    onChange={caoHandler}
                                    className={`${(caoError !== "") && "red-input"}`}
                                />
                                {caoError !== "" && <p className="error_text"><i>!</i> &nbsp;{caoError}</p>}

                                <label htmlFor="interest">Interest</label>
                                <input
                                    type="text"
                                    id="interest"
                                    value={interest}
                                    onChange={interestHandler}
                                    className={`${(interestError !== "") && "red-input"}`}
                                />
                                {interestError !== "" && <p className="error_text"><i>!</i> &nbsp;{interestError}</p>}

                                <label htmlFor="location">Location preference</label>
                                <input 
                                    type="text"
                                    id="location"
                                    value={location}
                                    onChange={locationHandler}
                                    className={`${(locationError !== "") && "red-input"}`}
                                />
                                {locationError !== "" && <p className="error_text"><i>!</i> &nbsp;{locationError}</p>}

                                <label>Budget</label>
                                <label className="label-radio">
                                    <input
                                        type="radio"
                                        value="$10,000 and below per year"
                                        checked={budget === "$10,000 and below per year"}
                                        onChange={budgetHandler}
                                    />$10,000 and below per year
                                </label>
                                <label className="label-radio">
                                    <input
                                        type="radio"
                                        value="Between $10,000 and $20,000 per year"
                                        checked={budget === "Between $10,000 and $20,000 per year"}
                                        onChange={budgetHandler}
                                    />Between $10,000 and $20,000 per year
                                </label>
                                <label className="label-radio">
                                    <input
                                        type="radio"
                                        value="Above $20,000 per year"
                                        checked={budget === "Above $20,000 per year"}
                                        onChange={budgetHandler}
                                    />Above $20,000 per year
                                </label>

                                <button type="submit" onClick={handleRunSimulation}>Run Simulation</button>
                            
                            </form>
                        </div>
                    </div>
                </div>
            :
                <div className="container p-60">
                    <p><Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> for an account to run a simulation.</p>
                </div>
            } */}
			
		</React.Fragment>
	)
}

export default Simulation;