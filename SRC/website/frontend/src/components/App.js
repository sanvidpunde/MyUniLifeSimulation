import React, { useState, useEffect } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import Navbar from './Navbar';
import Modal from './Modal';
import Home from './Home';
import Simulation from './Simulation';
import Psychometric from './Psychometric';
import Login from './Login';
import Signup from './Signup';
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
				<Route path="/simulation" exact>
					<Simulation />
				</Route>
				<Route path="/interest_profiler" exact>
					<Psychometric />
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
				<Route path="/simulation" exact>
					<Simulation />
				</Route>
				<Route path="/interest_profiler" exact>
					<Psychometric />
				</Route>
				<Route path="/login" exact>
					<Login />
				</Route>
				<Route path="/signup" exact>
					<Signup />
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