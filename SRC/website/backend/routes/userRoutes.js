import express from 'express';
import {check} from 'express-validator';

import userController from '../controllers/userController';

const router = express.Router();

// Get all values of logged in user
router.get('/getUser', userController.getUser);

// Post request Login page
router.post('/login', [
		check('email').isEmail(),
		check('password').isLength({min: 6})
	], userController.login);

// Post request Signup page
router.post('/signup', [
		check('name').not().isEmpty(),
		check('username').not().isEmpty().isLength({min: 4, max: 9}),
		check('email').isEmail(),
		check('password').isLength({min: 6})
	], userController.signup);

// Post request for Simulation request
router.post('/simulation', [
	check('cao').isFloat({ min: 0, max: 625 }),
	check('fieldOfInterest').not().isEmpty(),
	check('city').not().isEmpty(),
	check('jobDomain').not().isEmpty(),
	check('hobbies').not().isEmpty(),
	check('spendingLimit').not().isEmpty(),
], userController.simulation);

// Get user details
router.get('/getUserDetails', userController.getUserDetails);

// Logout handle
router.delete('/logout', userController.logout);

export default router;