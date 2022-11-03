import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

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

const Simulation = ({ loggedIn }) => {

    const [cao, setCao] = useState("");
    // const [caoError, setCaoError] = useState('');
    // const [interest, setInterest] = useState('');
    // const [interestError, setInterestError] = useState('');
    // const [location, setLocation] = useState('');
    // const [locationError, setLocationError] = useState('');
    // const [budget, setBudget] = useState('$10,000 and below per year');

    const cao_options = [{value: '60-100', label: '60-100'}, {value: '101-140', label: '101-140'}, {value: '141-180', label: '141-180'}];

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
    
    // const caoHandler = (event) => {
	// 	setCao(event.target.value);
    //     setCaoError('');
	// }
    // const interestHandler = (event) => {
    //     setInterest(event.target.value);
    //     setInterestError('');
    // }
    // const locationHandler = (event) => {
	// 	setLocation(event.target.value);
    //     setLocationError('');
	// }
    // const budgetHandler = (event) => {
    //     setBudget(event.target.value);
    // }

    // Validation
	const validate = () => {
        // if (!cao) {
        //     setCaoError('Enter your CAO point');
        // }
        // if (cao > 500) {
        //     setCaoError('CAO point cannot exceed 500')
        // }
        // if (interest === "") {
		// 	setInterestError('Enter your field of interest');
		// }
        // if (location === "") {
		// 	setLocationError('Enter your location');
		// }
		// if (!cao || cao > 500 || interest === "" || location === "") {
		// 	return false;
		// }
		return true;
	}

    // Run SImulation
    const handleRunSimulation = (e) => {
        e.preventDefault();
		const isValid = validate();
		if (isValid) {
            // call API
        }
    }
	
	return (
		<React.Fragment>
			<div className="header">
				<div className="header-text">University Simulation</div>
				<p>Now that we have a career match for you, let's start looking for a specific course using our state-of-the-art Recommender System</p>
			</div>
            <div className="p-60">
                <div className="container">
                    <img src="/images/simulation.jpg" alt="Simulation" className="responsive-image mb-60" />
                    <h3 className="mb-20">Complete following details:</h3>
                    <div className="simulation-form-area">
                        <div className="single-simulation-form">
                            <label>CAO Points
                                <select value={cao} onChange={e => setCao(e.target.value)}>
                                    <option value="10-100">60-100</option>
                                    <option value="101-140">101-140</option>
                                    <option value="141-200">141-200</option>
                                </select>
                            </label>
                        </div>
                        <div className="single-simulation-form">
                            <label>Field of Interest
                                <select value={cao} onChange={e => setCao(e.target.value)}>
                                    <option value="10-100">60-100</option>
                                    <option value="101-140">101-140</option>
                                    <option value="141-200">141-200</option>
                                </select>
                            </label>
                        </div>
                        <div className="single-simulation-form">
                            <label>City
                                <select value={cao} onChange={e => setCao(e.target.value)}>
                                    <option value="10-100">60-100</option>
                                    <option value="101-140">101-140</option>
                                    <option value="141-200">141-200</option>
                                </select>
                            </label>
                        </div>
                        <div className="single-simulation-form">
                            <label>Preferred Job Domain
                                <select value={cao} onChange={e => setCao(e.target.value)}>
                                    <option value="10-100">60-100</option>
                                    <option value="101-140">101-140</option>
                                    <option value="141-200">141-200</option>
                                </select>
                            </label>
                        </div>
                        <div className="single-simulation-form">
                            <label>Hobbies
                                <select value={cao} onChange={e => setCao(e.target.value)}>
                                    <option value="10-100">60-100</option>
                                    <option value="101-140">101-140</option>
                                    <option value="141-200">141-200</option>
                                </select>
                            </label>
                        </div>
                        <div className="single-simulation-form">
                            <label>Spending Limit
                                <select value={cao} onChange={e => setCao(e.target.value)}>
                                    <option value="10-100">60-100</option>
                                    <option value="101-140">101-140</option>
                                    <option value="141-200">141-200</option>
                                </select>
                            </label>
                        </div>
                        {/* <Select options={cao_options} value={cao} onChange={e => setCao(e)} /> */}
                    </div>
                    <div className="mt-20">
                        <button type="button" className="take-test-button" >Submit</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Simulation);