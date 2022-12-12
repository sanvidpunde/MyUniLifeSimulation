import React, { useState, useEffect } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import Navbar from './Navbar';
import Modal from './Modal';
import Home from './Home';
import Simulation from './Simulation';
import RecommendedCourses from './RecommendedCourses';
import CourseDetails from './CourseDetails';
import ExploreYourCourse from './ExploreYourCourse';
import VideoLectures from './VideoLectures';
import Classrooms from './Classrooms';
import AcademicStaff from './AcademicStaff';
import Academics from './Academics';
import Personality from './Personality';
import PersonalityDetails from './PersonalityDetails';
import Profiler from './Profiler';
import Privacy from './Privacy';
import Profile from './Profile';
import ProfilerDetails from './ProfilerDetails';
import ReviewSentiment from './ReviewSentiment';
import Login from './Login';
import Signup from './Signup';
import PasswordReset from './PasswordReset';
import ChangePassword from './ChangePassword';
import Footer from './Footer';

const mapStateToProps = ({ session }) => ({
  	loggedIn: Boolean(session.email),
  	email: session.email
});

const App = ({ loggedIn, email }) => {
	let routes;
	const [showSplash, setShowSplash] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowSplash(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, [])
	if (loggedIn) {
		routes = (
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/profile" exact>
					<Profile />
				</Route>
				<Route path="/course_recommender" exact>
					<Simulation />
				</Route>
				<Route path="/recommended_courses" exact>
					<RecommendedCourses />
				</Route>
				<Route path="/course_details" exact>
					<CourseDetails />
				</Route>
				<Route path="/explore_your_course" exact>
					<ExploreYourCourse />
				</Route>
				<Route path="/video_lectures" exact>
					<VideoLectures />
				</Route>
				<Route path="/classrooms" exact>
					<Classrooms />
				</Route>
				<Route path="/academic_staff" exact>
					<AcademicStaff />
				</Route>
				<Route path="/academics" exact>
					<Academics />
				</Route>
				<Route path="/personality_test" exact>
					<Personality />
				</Route>
				<Route path="/personality_details" exact>
					<PersonalityDetails />
				</Route>
				<Route path="/interest_profiler" exact>
					<Profiler />
				</Route>
				<Route path="/interest_profiler_details" exact>
					<ProfilerDetails />
				</Route>
				<Route path="/review_sentiment" exact>
					<ReviewSentiment />
				</Route>
				<Route path="/privacy" exact>
					<Privacy />
				</Route>
				<Redirect to="/" />
			</Switch>
		)
	} else {
		routes = (
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/course_recommender" exact>
					<Simulation />
				</Route>
				<Route path="/recommended_courses" exact>
					<RecommendedCourses />
				</Route>
				<Route path="/course_details" exact>
					<CourseDetails />
				</Route>
				<Route path="/explore_your_course" exact>
					<ExploreYourCourse />
				</Route>
				<Route path="/video_lectures" exact>
					<VideoLectures />
				</Route>
				<Route path="/classrooms" exact>
					<Classrooms />
				</Route>
				<Route path="/academic_staff" exact>
					<AcademicStaff />
				</Route>
				<Route path="/academics" exact>
					<Academics />
				</Route>
				<Route path="/personality_test" exact>
					<Personality />
				</Route>
				<Route path="/personality_details" exact>
					<PersonalityDetails />
				</Route>
				<Route path="/interest_profiler" exact>
					<Profiler />
				</Route>
				<Route path="/interest_profiler_details" exact>
					<ProfilerDetails />
				</Route>
				<Route path="/review_sentiment" exact>
					<ReviewSentiment />
				</Route>
				<Route path="/privacy" exact>
					<Privacy />
				</Route>
				<Route path="/login" exact>
					<Login />
				</Route>
				<Route path="/signup" exact>
					<Signup />
				</Route>
				<Route path="/password_reset" exact>
					<PasswordReset />
				</Route>
				<Route path="/change_password" exact>
					<ChangePassword />
				</Route>
				<Redirect to="/login" />
			</Switch>
		)
	}

	return (
		<React.Fragment>
			{showSplash ?
				<div className="splash_screen">
					<img src="/images/splash_screen.jpg" alt="Splash Screen" />
				</div>
			:
				<React.Fragment>
					<Navbar />
					<Modal />
					{routes}
					<Footer />
				</React.Fragment>
			}
		</React.Fragment>
	)
};

export default connect(mapStateToProps)(App);