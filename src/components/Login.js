import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {login} from '../redux/util/controller';

const mapDispatchToProps = dispatch => {
  return {
  	login: user => dispatch(login(user))
  }
};

const Login = ({ login }) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const emailHandler = (event) => {
		setEmail(event.target.value.toLowerCase().trim());
		setEmailError('');
	}
	const passwordHandler = (event) => {
		setPassword(event.target.value.trim());
		setPasswordError('');
	}

	// Validation
	const validate = () => {
		if (/^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[A-Za-z]+$/.test(email)) {
			setEmailError('');
		} else {
			setEmailError('Enter a valid email');
		}
		if (password === "") {
			setPasswordError('Enter your password');
		} if (password.length < 6) {
			setPasswordError('Password needs to be 6 or more characters')
		} else {
			setPasswordError('');
		}
		if (!(/^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[A-Za-z]+$/.test(email)) || password === "") {
			return false;
		}
		return true;
	}

	// Form Submit
	const handleLogin = (event) => {
		event.preventDefault();
		const isValid = validate();
		if (isValid) {
			// Login Mode Form Submit
			const user = {
				email,
				password
			}
			login(user);
		}
	}

	return (
		<React.Fragment>
			<div className="header">
				<div className="header-text">University Simulation</div>
				<p>Lorem Ipsum Dolor Sit Amet</p>
			</div>
			<div className="container login-form">
				<div className="p-lr">
					<div className="card">
						<div className="title">Login</div>
						<form>						
							<label htmlFor="email">Email</label>
							<input 
								type="text"
								id="email"
								value={email}
								onChange={emailHandler}
								className={`${(emailError !== "") && "red-input"}`}
							/>
							{emailError !== "" && <p className="error_text"><i>!</i> &nbsp;{emailError}</p>}

							<label htmlFor="password">Password</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={passwordHandler}
								className={`${(passwordError !== "") && "red-input"}`}
							/>
							{passwordError !== "" && <p className="error_text"><i>!</i> &nbsp;{passwordError}</p>}

							<button type="submit" onClick={handleLogin}>Continue</button>
						
						</form>
					</div>
					
					<div className="signUpArea">
						<p className="new_to_bootweb"><span>New to UniSimulation?</span></p>
						<Link to="/signup" className="signUpBtnLink"><button className="signUpBtn">Create your UniSimulation account</button></Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default connect(null, mapDispatchToProps)(Login);