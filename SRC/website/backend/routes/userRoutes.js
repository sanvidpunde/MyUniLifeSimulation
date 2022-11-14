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

// Post request for Simulation request
router.post('/profiler', [
	check('logical').isFloat({ min: 0, max: 10 }),
	check('coding').isFloat({ min: 0, max: 10 }),
	check('hackathons').isFloat({ min: 0, max: 10 }),
	check('publicSpeaking').isFloat({ min: 0, max: 10 }),
	check('selfLearningCapability').not().isEmpty(),
	check('extraCourses').not().isEmpty(),
	check('tookAdvice').not().isEmpty(),
	check('teamCo').not().isEmpty(),
	check('introvert').not().isEmpty(),
	check('readingWriting').not().isEmpty(),
	check('memoryCapability').not().isEmpty(),
	check('work').not().isEmpty(),
	check('managementTechnical').not().isEmpty(),
	check('interestedSubjects').not().isEmpty(),
	check('interestedBooks').not().isEmpty(),
	check('interestedTypeOfBooks').not().isEmpty(),
	check('workshopsAttended').not().isEmpty(),
	check('typeOfCompanyYouWantToSettleIn').not().isEmpty(),
	check('interestedCareerArea').not().isEmpty(),
], userController.profiler);

// Password Reset
router.post('/password_reset', [
	check('email').isEmail(),
], userController.passwordReset);

// Check Token
router.get('/check_token', userController.checkToken);

// Change Password
router.put('/change_password', [
	check('email').isEmail(),
	check('password').isLength({min: 6})
], userController.changePassword);

// Get user details
router.get('/getUserDetails', userController.getUserDetails);

// Logout handle
router.delete('/logout', userController.logout);

export default router;