import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const PasswordReset = () => {

	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordReqSent, setPasswordReqSent] = useState(false);
	const [passwordReqAlreadySent, setPasswordReqAlreadySent] = useState(false);
	const [emailDoesNotExist, setEmailDoesNotExist] = useState(false);
	const [disableContinue, setDisableContinue] = useState(true);

	

	const emailHandler = (event) => {
		setEmail(event.target.value.toLowerCase().trim());
		setDisableContinue(false);
        setEmailError('');
	};

	// Scroll to top of page
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Validation
	const validate = () => {
		if (/^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[A-Za-z]+$/.test(email)) {
			setEmailError('');
		} else {
			setEmailError('Enter your valid registered email');
		}
		if (!(/^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[A-Za-z]+$/.test(email))) {
			return false;
		}
		return true;
	}

	// Form Submit
	const handlePasswordReset = (event) => {
		event.preventDefault();
		const isValid = validate();
		if (isValid) {
			// Password req
			const body = {
				email
			};
			axios.post('/api/password_reset', body)
				.then(resp => {
					setDisableContinue(true);
					// console.log("resp", resp);
					if (resp.data.emailExists === false) {
						setPasswordReqSent(false);
						setPasswordReqAlreadySent(false);
						return setEmailDoesNotExist(true);
					}
					if (resp.data.token === "exists") {
						setPasswordReqSent(false);
						setEmailDoesNotExist(false);
						return setPasswordReqAlreadySent(true);
					}
					if (resp.data.type === "success") {
						setEmailDoesNotExist(false);
						setPasswordReqAlreadySent(false);
						return setPasswordReqSent(true);
					}
				});
		}
	}

	return (
		<React.Fragment>
			<div className="header">
				<div className="container">
					<div className="header-text">Welcome to UniLifeSimulation</div>
                    <p>We aim to provide a one-stop portal for you to explore your dream course using our State-of-the-art AI Recommender System.</p>
				</div>
			</div>
			<div className="gray-bg">
				<div className="container login-form p-60">
					<div className="p-lr">
						{passwordReqSent &&
							<div className="card">
								<p><strong>Success</strong></p>
								<p className="success-text">We have sent you instructions on your registered Email address to reset your password</p>
							</div>
						}
						{passwordReqAlreadySent &&
							<div className="card">
								<p><strong>Success</strong></p>
								<p className="success-text">Please check your email, we have already sent you instructions to reset your password</p>
							</div>
						}
						{emailDoesNotExist &&
							<div className="card">
								<p><strong>Failure</strong></p>
								<p className="failure-text">Please check your email, entered email does not exist in our records</p>
							</div>
						}
						
						<div className="card">
							<div className="title">Password Reset</div>
							<form>						
								<label htmlFor="email">Email</label>
								<input 
									type="text"
									id="email"
                                    placeholder="Registered Email"
									value={email}
									onChange={emailHandler}
									className={`${(emailError !== "") && "red-input"}`}
								/>
								{emailError !== "" && <p className="error_text"><i>!</i> &nbsp;{emailError}</p>}

								<button type="submit" onClick={handlePasswordReset} disabled={disableContinue}>Continue</button>
							
							</form>
						</div>

                        <div className="signUpArea">
							<p className="new_to_bootweb"><span>New to UniSimulation?</span></p>
							<Link to="/signup" className="signUpBtnLink"><button className="signUpBtn">Create your UniSimulation account</button></Link>
						</div>

					</div>
				</div>
			</div>
			
		</React.Fragment>
	)
}

export default PasswordReset;