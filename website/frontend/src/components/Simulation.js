import React, { useState } from 'react';
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

    const [cao, setCao] = useState(null);
    const [caoError, setCaoError] = useState('');
    const [interest, setInterest] = useState('');
    const [interestError, setInterestError] = useState('');
    const [location, setLocation] = useState('');
    const [locationError, setLocationError] = useState('');
    const [budget, setBudget] = useState('$10,000 and below per year');

    const caoHandler = (event) => {
		setCao(event.target.value);
        setCaoError('');
	}
    const interestHandler = (event) => {
        setInterest(event.target.value);
        setInterestError('');
    }
    const locationHandler = (event) => {
		setLocation(event.target.value);
        setLocationError('');
	}
    const budgetHandler = (event) => {
        setBudget(event.target.value);
    }

    // Validation
	const validate = () => {
        if (!cao) {
            setCaoError('Enter your CAO point');
        }
        if (cao > 500) {
            setCaoError('CAO point cannot exceed 500')
        }
        if (interest === "") {
			setInterestError('Enter your field of interest');
		}
        if (location === "") {
			setLocationError('Enter your location');
		}
		if (!cao || cao > 500 || interest === "" || location === "") {
			return false;
		}
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
				<p>Lorem Ipsum Dolor Sit Amet</p>
			</div>
            {(loggedIn) ?
                <div className="container login-form">
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
                <div className="container">
                    <p><Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> for an account to run a simulation.</p>
                </div>
            }
			
		</React.Fragment>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Simulation);