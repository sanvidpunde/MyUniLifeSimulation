import {validationResult} from 'express-validator';
import bcryptjs from 'bcryptjs';
import * as Promise from 'bluebird';
import request from 'request';
import { v4 as uuidv4 } from 'uuid';

import config from '../config';
import User from '../models/user';
import Token from '../models/token';
import HttpError from '../models/httpError';
import Profiler from '../models/profiler';
import Course from '../models/course';
import transporter from '../models/myNodemailer';
import { response } from 'express';

// Get all values of logged in user
const getUser = async (req, res, next) => {
	if (req.session.email) {
	const email = req.session.email;
		let identifiedUser;
		try {
			identifiedUser = await User.findOne({email}).select('-password');
		} catch(err) {
			const error = new HttpError('Error in finding email', 500);
			return next(error);
		}
		// const blogsByUser = identifiedUser.blogs.length;
		if (identifiedUser) {
			res.status(200).json({
				user: identifiedUser.toObject({getters: true}),
				message: 'Profile updated',
				loggedIn: true
			});
		}
	} else {
		res.status(200).json({
			loggedIn: false
		});
	}
}

// Get user todo details
const getUserDetails = async (req, res, next) => {
	if (req.session.email) {
	const email = req.session.email;
		let identifiedUser;
		try {
			identifiedUser = await User.findOne({email}).select('-password');
		} catch(err) {
			const error = new HttpError('Error in finding email', 500);
			return next(error);
		}
		// const blogsByUser = identifiedUser.blogs.length;
		if (identifiedUser) {
			res.status(200).json({
				user: identifiedUser.toObject({getters: true})
			});
		}
	}
}

const login = async (req, res, next) => {
	// get input values
	const {email, password} = req.body;
	// validation result
	const errors = validationResult(req);
	if(!errors.isEmpty()) {
		const error = new HttpError("Could not Log you in, check your data", 422);
		return next(error);
	}

	// Find user from DB to check login
	let user;
	try {
		user = await User.findOne({email: email});
	} catch(err) {
		const error = new HttpError('Signing in failed, please try again', 500);
		return next(error);
	}
	if (!user) {
		return res.json({
			message: 'Entered email is not registered with us',
			type: 'failure'
		});
	}
	// compare entered password and db password
	let isValidPassword = false;
	try {
		isValidPassword = await bcryptjs.compare(password, user.password);
	} catch (err) {
		const error = new HttpError("Some problem while comparing password at server", 422);
		return next(error);
	}
	// Password comparison failed
	if (!isValidPassword) {
		console.log('Wrong password');
		return res.json({
			message: 'Invalid credentials',
			type: 'failure'
		});
	}
	console.log("Correct credentials, Logged in");
	// req.session.email = email; // email from req.body
	// console.log(req.session);
	if (!req.session.email) {
		req.session.email = email;
	}
	res.status(200).json({
		user: user.toObject({getters: true}),
		redirect: true,
		type: 'success',
		message: 'Login successful'
	});
};

const signup = async (req, res, next) => {

	// get input values
	const {name, username, email, password} = req.body;
	// check if entered username exists in DB
	let existingUserName;
	try {
		existingUserName = await User.findOne({username: username});
	} catch(err) {
		const error = new HttpError('Signing up failed, please try again', 500);
		return next(error);
	}
	if (existingUserName) {
		return res.json({
			message: 'Entered username is taken',
			type: 'failure'
		});
	}
	// check if entered email already exists in DB
	let existingUser;
	try {
		existingUser = await User.findOne({email: email});
	} catch(err) {
		const error = new HttpError('Signing up failed, please try again', 500);
		return next(error);
	}
	if (existingUser) {
		return res.json({
			message: 'Entered email is already registered with us',
			type: 'failure'
		});
	}
	// Present time to readable String
	const date = new Date;
	const year = date.getFullYear();
	const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	const monthString = months[date.getMonth()];
	const day = date.getDate();
	const dateString = day + " " + monthString + ", " + year;
	// validation result
	const errors = validationResult(req);
	if(!errors.isEmpty()) {
		// const error = new HttpError("Could not create User, check your data", 422);
		// return next(error);
		return res.json({
			message: 'Could not create User, check your data',
			type: 'failure'
		});
	}
	// hash the password
	let hashedPassword;
	try {
		hashedPassword = await bcryptjs.hash(password, 12);
	} catch (err) {
		const error = new HttpError("Could not generate user, please try again", 500);
		return next(error);
	}
	const createdUser = new User({
		name, // name: name
		username,
		email,
		password: hashedPassword,
		created_date: dateString
	});
	// Create a new user
	try {
		await createdUser.save();
	} catch (err) {
		const error = new HttpError("Signing up failed, please try again");
		return next(error);
	}
	console.log("New user created");
	if (!req.session.email) {
		req.session.email = email;
	}
	
	res.status(201).json({
		user: createdUser.toObject({getters: true}),
		redirect: true,
		type: 'success',
		message: 'Signup successful'
	});
};

// Logout
const logout = (req, res, next) => {
	req.session.destroy(err => {
		if (err) {
			return res.json({message: "Unable to logout"});
		}
		res.clearCookie(config.sess_name);
		res.json({
			redirect: true,
			message: 'User logged out'
		});
	})
};

// Simulation
const simulation = (req, res) => {
	// get input values
	console.log("req body:", req.body);
	// validation result
	const errors = validationResult(req);
	console.log("validation error", errors);
	if(!errors.isEmpty()) {
		const error = new HttpError("Could not process simulation request, check your data", 422);
		return next(error);
	}
	// const {} = req.body;

	// Make API call to python app and await response
	console.log("ready to call flask app");
	let predictedCourse;
	request.post({url: 'https://flask-service.s3nc4honh0a9c.ap-south-1.cs.amazonlightsail.com/predict_course', json: req.body}, async (err, res, body) => {
		if (err) {
			return console.error('API req failed:', err);
		}
		predictedCourse = body;
		console.log("body", body);
		
	});
	console.log("made out of flask app");
	const timer = setTimeout(async () => {
		let identifiedCourse;
		try {
			identifiedCourse = await Course.findOne({ code: predictedCourse });
		} catch(err) {
			console.log("err", err);
			const error = new HttpError('Error in finding email', 500);
			return next(error);
		}
		console.log("identifiedCourse ===============", identifiedCourse);	
		if (identifiedCourse) {
			res.status(200).json({
				course: identifiedCourse.toObject({getters: true}),
				message: 'Successfully Predicted',
				success: true
			});
		} else {
			return res.json({
				type: 'fail',
				success: false,
				message: 'Cannot predict career, something went wrong'
			});
		}
	}, 500);
	return () => clearTimeout(timer);
};

const profiler = async (req, res, next) => {
	
	// get input values
	console.log("req body:", req.body);
	
	// validation result
	const errors = validationResult(req);
	console.log("val error is", errors);
	if(!errors.isEmpty()) {
		const error = new HttpError("Could not process simulation request, check your data", 422);
		return next(error);
	}

	console.log("Profiler ready to make API call to EC2");
	// Make API call to python app and await response
	let predictedCareer;
	request.post({url: 'https://flask-service.s3nc4honh0a9c.ap-south-1.cs.amazonlightsail.com/predict_interest', json: req.body}, async (err, res, body) => {
		if (err) {
			console.error('API req failed:', err);
			return res.json({
				type: 'fail',
				success: false,
				message: 'Cannot predict career, something went wrong'
			});
		}
		predictedCareer = body;
		console.log("body", body);
		
	});
	const timer = setTimeout(async () => {
		let identifiedCareer;
		try {
			identifiedCareer = await Profiler.findOne({ career: predictedCareer });
		} catch(err) {
			console.log("err", err);
			const error = new HttpError('Error in finding email', 500);
			return next(error);
		}
		console.log("identifiedCareer ===============", identifiedCareer);	
		if (identifiedCareer) {
			res.status(200).json({
				career: identifiedCareer.toObject({getters: true}),
				message: 'Successfully Predicted',
				success: true
			});
		} else {
			return res.json({
				type: 'fail',
				success: false,
				message: 'Cannot predict career, something went wrong'
			});
		}
	}, 500);
	return () => clearTimeout(timer);
};

const functionToSendInstructionsViaEmail = (url, email) => {
	// Mail user instructions to reset password
	const mailOptions = {
	    from: '"Bloggit" <no-reply@thebootweb.com>', // sender address
	    to: email, // list of receivers
	    subject: "Instructions for changing your UniSimulation password", // Subject line
	    html: '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="author" content="BootWeb"><meta name="apple-mobile-web-app-capable" content="yes"><link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"><style>html, body {font-family: "Open Sans", sans-serif;}</style></head><body style="background: white;"><div style="max-width: 600px;background: #f5f5f5;padding: 20px 10px;margin: auto;"><div style="background: #fff;border: 1px solid #dbdbdb;padding: 20px"><img src="https://bloggit.in/images/bloggit.png" alt="logo" /><div style=""><p style="font-size: 14px;color: #333">Welcome to Uni.</p><p style="font-size: 14px;color: #333">Thank you for creating an account on Bloggit. Now you have free access to create blogs on Bloggit. To access your account click <a href="https://bloggit.in" target="_blank" style="color: #3498db;font-weight: 600;font-size: 13px;">Access Account</a>.</p><p>url - `${url}`</p><p style="font-size: 14px;color: #333;margin-top: 20px;">Sincerely,</p><p style="font-size: 14px;color: #333;margin-bottom: 40px;">BootWeb Team</p><div style="background: #edeeef;width:100%;height: 1px;"></div><p style="font-size: 11px;color: #a9a9a9;margin: 20px 0 10px 0;text-align: center;">Bloggit is a subsidiary of BootWeb Solutions. This message was produced and distributed by BootWeb Solutions, Bhoomi Building, 16th Floor, 1614, B-Wing, St Yadav Marg, Cama Industrial Estate, Goregaon(E), Mumbai - 400063, India.</p></div></div></div></body></html>',
	};
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent ', info.response);
		}
	});
};

// Password Reset
const passwordReset = async (req, res) => {
	const { email } = req.body;

	// validation result
	const errors = validationResult(req);
	if(!errors.isEmpty()) {
		const error = new HttpError("Could not process simulation request, check your data", 422);
		return next(error);
	}

	// Check if email exists in our database
	let emailExists;
	try {
		emailExists = await User.findOne({email});
	} catch (err) {
		const error = new HttpError("Signing up failed, please try again");
		return next(error);
	}
	if (emailExists) {
		// we are good
	} else {
		return res.json({
			emailExists: false,
			message: "Email is not registered with us, please check your email"
		});
	}

	// Check if token exists
	let tokenExists;
	try {
		tokenExists = await Token.findOne({email});
	} catch (err) {
		const error = new HttpError("Signing up failed, please try again");
		return next(error);
	}
	if (tokenExists) {
		// send email again but with same token
		const url = `http://localhost:3000/change_password?email=${email}&token=${tokenExists.token}`;

		functionToSendInstructionsViaEmail(url, email);

		return res.json({
			token: "exists",
			message: "token already exists, please check your email"
		});
	}

	// send email
	const token = uuidv4();

	const url = `http://localhost:3000/change_password?email=${email}&token=${token}`;

	console.log("token", token);
	console.log("url", url);

	const time = new Date().getTime();

	// Save token and email in DB
	const createdToken = new Token({
		email,
		token,
		time
	});
	// Create a new token, email doc in DB
	try {
		await createdToken.save();
	} catch (err) {
		const error = new HttpError("Signing up failed, please try again");
		return next(error);
	}

	functionToSendInstructionsViaEmail(url, email);

	res.status(201).json({
		// user: createdUser.toObject({getters: true}),
		redirect: true,
		type: 'success',
		message: 'Password request received and token generated'
	});

};

// Check Token
const checkToken = async (req, res) => {
	const {email, token} = req.query;
	let getDocument;
	try {
		getDocument = await Token.findOne({email});
	} catch (err) {
		const error = new HttpError("Signing up failed, please try again");
		return next(error);
	}
	// console.log('getDocument', getDocument);
	if (getDocument && getDocument.token === token) {
		return res.status(201).json({
			type: 'success',
			token_exists: true,
			success: true,
			message: 'Valid Token exists'
		});
	}
	return res.status(201).json({
		type: 'success',
		token_exists: false,
		message: 'Token does not exist, redirect to home page'
	});
};

// Change Password
const changePassword = async (req, res) => {
	// console.log('change password put route hit');
	const { email, password } = req.body;

	// validation result
	const errors = validationResult(req);
	if(!errors.isEmpty()) {
		const error = new HttpError("Could not process simulation request, check your data", 422);
		return next(error);
	}

	// Update password with new hashed
	let hashedPassword;
	try {
		hashedPassword = await bcryptjs.hash(password, 12);
	} catch (err) {
		const error = new HttpError("Could not hash password", 500);
		return next(error);
	}
	let doc;
	try {
		doc = await User.findOneAndUpdate({ email: email }, { password: hashedPassword }, { new: true });
		// console.log('doc is', doc);
	} catch (err) {
		const error = new HttpError("Could not update password, please try again", 500);
		return next(error);
	}
	
	// Delete token
	try {
		let deletedToken = await Token.findOneAndDelete({ email: email });
		// console.log('token removed');
	} catch (err) {
		const error = new HttpError("Could not update password, please try again", 500);
		return next(error);
	}

	res.json({
		success: true,
		message: 'Password changed successfully'
	});
};

export default {getUser, getUserDetails, login, signup, logout, simulation, profiler, passwordReset, checkToken, changePassword};