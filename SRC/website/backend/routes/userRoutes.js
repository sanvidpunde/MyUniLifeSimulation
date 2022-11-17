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
	check('Logical_quotient_rating').isFloat({ min: 0, max: 9 }),
	check('coding_skills_rating').isFloat({ min: 0, max: 9 }),
	check('hackathons').isFloat({ min: 0, max: 9 }),
	check('public_speaking_points').isFloat({ min: 0, max: 9 }),
	check('self_learning_capability').not().isEmpty(),
	check('Extra_courses_did').not().isEmpty(),
	check('Taken_inputs_from_seniors_or_elders').not().isEmpty(),
	check('worked_in_teams_ever').not().isEmpty(),
	check('Introvert').not().isEmpty(),
	check('reading_and_writing_skills').not().isEmpty(),
	check('memory_capability_score').not().isEmpty(),
	check('B_hard_worker').not().isEmpty(),
	check('B_smart_worker').not().isEmpty(),
	check('A_Management').not().isEmpty(),
	check('A_Technical').not().isEmpty(),
	check('Interested_subjects_code').not().isEmpty(),
	check('Interested_Type_of_Books_code').not().isEmpty(),
	check('certifications_code').not().isEmpty(),
	check('workshops_code').not().isEmpty(),
	check('Type_of_company_want_to_settle_in_code').not().isEmpty(),
	check('interested_career_area_code').not().isEmpty(),
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