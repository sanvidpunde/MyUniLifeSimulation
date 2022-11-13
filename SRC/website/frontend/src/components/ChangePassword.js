import React, {useState, useEffect, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Routes, Route, useLocation, useHistory } from 'react-router-dom';

import {receiveFailureMessage} from '../redux/util/controller';

const ChangePassword = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    
    // Get the email and token param from the URL.
    const useQuery = () => {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    };
    let query = useQuery();

    // const email = query.get("email");
    // const token = query.get("token");
    // console.log("email and token are:", email, token);

    // Validation
    useEffect(() => {
        if (query.get("email") && query.get("token")) {
            // allow page
        } else {
            // redirect to home page
            history.push('/');
        }
    }, []);
    

	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
	const [confirmPasswordError, setConfirmPasswordError] = useState('');

	const passwordHandler = (event) => {
		setPassword(event.target.value.trim());
        setPasswordError('');
	}
    const confirmPasswordHandler = (event) => {
		setConfirmPassword(event.target.value.trim());
        setConfirmPasswordError('');
	}

	// Scroll to top of page
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Validation
	const validate = () => {
		if (!password) {
			setPasswordError('Enter your new password');
		}
        if (password.length > 0 && password.length < 6) {
			setPasswordError('Password must be at least 6 characters');
		}
        if (!confirmPassword) {
			setConfirmPasswordError('Confirm your new password');
		}
        if (confirmPassword.length > 0 && confirmPassword.length < 6) {
			setPasswordError('Password must be at least 6 characters');
		}
        
		if (!password || !confirmPassword || password.length < 6) {
			return false;
		}
        if (password !== confirmPassword) {
            return dispatch(receiveFailureMessage({failure: "Password and confirm password do not match"}));
        }
		return true;
	}

	// Form Submit
	const handleResetPassword = (event) => {
		event.preventDefault();
		const isValid = validate();
		if (isValid) {
			// Login Mode Form Submit
			const user = {
				password
			}
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
						<div className="card">
							<div className="title">Change Password</div>
							<form>

                                <label htmlFor="password">New Password</label>
								<input
									type="password"
									id="password"
                                    placeholder="Enter your new password"
									value={password}
									onChange={passwordHandler}
									className={`${(passwordError !== "") && "red-input"}`}
								/>
								{passwordError !== "" && <p className="error_text"><i>!</i> &nbsp;{passwordError}</p>}

								<label htmlFor="confirm_password">Confirm Password</label>
								<input
									type="password"
									id="confirm_password"
                                    placeholder="Confirm your new password"
									value={confirmPassword}
									onChange={confirmPasswordHandler}
									className={`${(confirmPasswordError !== "") && "red-input"}`}
								/>
								{confirmPasswordError !== "" && <p className="error_text"><i>!</i> &nbsp;{confirmPasswordError}</p>}

								<button type="submit" onClick={handleResetPassword}>Continue</button>
							
							</form>
						</div>
						
					</div>
				</div>
			</div>
			
		</React.Fragment>
	)
}

export default ChangePassword;