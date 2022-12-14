import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {signup} from '../redux/util/controller';

const mapDispatchToProps = dispatch => {
  return {
  	signup: user => dispatch(signup(user))
  }
};

const Signup = ({ signup }) => {

	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	const [nameError, setNameError] = useState('');
	const [usernameError, setUsernameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const nameHandler = (event) => {
		setName(event.target.value);
		setNameError('');
	}
	const usernameHandler = (event) => {
		setUsername(event.target.value.toLowerCase().trim());
		setUsernameError('');
	}
	const emailHandler = (event) => {
		setEmail(event.target.value.toLowerCase().trim());
		setEmailError('');
	}
	const passwordHandler = (event) => {
		setPassword(event.target.value.trim());
		setPasswordError('');
	}

	// Scroll to top of page
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Validation
	const validate = () => {
		if (!name) {
			setNameError('Enter your name');
		}
		if (!username) {
			setUsernameError('Choose your username');
		}
		if (username.length > 0 && username.length < 4) {
			setUsernameError('Username must be at least 4 characters');
		}
		if (username.length > 9) {
			setUsernameError('Username must have at most 9 characters');
		}
		if (!email) {
			setEmailError('Enter your email');
		}
		if (/^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[A-Za-z]+$/.test(email)) {
			setEmailError('');
		} else {
			setEmailError('Enter a valid email');
		}
		if (!password) {
			setPasswordError('Enter your password');
		}
		if (password.length > 0 && password.length < 6) {
			setPasswordError('Password must be at least 6 characters');
		}
		if (!name || !username || !(/^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[A-Za-z]+$/.test(email)) || !password || password.length < 6) {
			return false;
		}
		return true;
	}

	// Form Submit
	const handleSignup = (event) => {
		event.preventDefault();
		const isValid = validate();
		if (isValid) {
			const user = {
				name,
				username,
				email,
				password
			}
			signup(user);
		}
	}

	return (
		<React.Fragment>
			<div className="header">
				<div className="container">
					<div className="header-text">Welcome to UniLife</div>
                    <p>We aim to provide a one-stop portal for you to explore your dream course using our State-of-the-art AI Recommender System.</p>
				</div>
			</div>
			<div className="gray-bg">
				<div className="container login-form p-60">
					<div className="p-lr">
						<div className="card">
							<div className="title">Create Account</div>
							<form>
								
								<label htmlFor="name">Your full name</label>
								<input
									type="text"
									id="name"
									value={name}
									onChange={nameHandler}
									className={`${(nameError !== "") && "red-input"}`}
								/>
								{nameError !== "" && <p className="error_text"><i>!</i> &nbsp;{nameError}</p>}

								<label htmlFor="username">Choose username</label>
								<input
									type="text"
									id="username"
									placeholder="At least 4 characters"
									value={username}
									onChange={usernameHandler}
									className={`${(usernameError !== "") && "red-input"}`}
								/>
								{usernameError !== "" && <p className="error_text"><i>!</i> &nbsp;{usernameError}</p>}
								
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
									placeholder="At least 6 characters"
									value={password}
									onChange={passwordHandler}
									className={`${(passwordError !== "") && "red-input"}`}
								/>
								{passwordError !== "" && <p className="error_text"><i>!</i> &nbsp;{passwordError}</p>}

								<button type="submit" onClick={handleSignup}>Continue</button>
							
							</form>
							<div className="have_an_acc"><p>Already have an account? <button className="signInBtn"><Link to="/login">Sign In</Link></button></p></div>
						</div>
					</div>
				</div>
			</div>
			
		</React.Fragment>
	)
}

export default connect(null, mapDispatchToProps)(Signup);