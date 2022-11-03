import React, { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

import {receiveSuccessMessage} from '../redux/util/controller';

const mapStateToProps = ({ session }) => ({
	loggedIn: Boolean(session.email),
	email: session.email,
	name: session.name
});

const mapDispatchToProps = dispatch => {
  return {
  	receiveSuccessMessage: message => dispatch(receiveSuccessMessage(message))
  }
};

const Home = ({ loggedIn, email, name }) => {

	// console.log({email});
	// console.log({name});
	// console.log({loggedIn});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// const [users_name, setUsers_name] = useState('');
	// // Get stored details from db
	// useEffect(() => {
	// 	axios.get('/api/getUserDetails')
	// 		.then(resp => {
	// 			setBucketName(resp.data.user.todo_bucket_name);
	// 			setItemsArray(resp.data.user.todo_list);
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		})
	// }, []);

	
	return (
		<React.Fragment>
			<div className="header">
				<div className="header-text">Welcome to UniLifeSimulation</div>
				{(loggedIn) ?
					<p>We aim to provide a one-stop portal for you to explore your dream course using our State-of-the-art AI Recommender System.</p>
				:
					<p>We aim to provide a one-stop portal for you to explore your dream course using our State-of-the-art AI Recommender System.</p>
				}
			</div>
			<div className="p-60">
				<div className="container">
					{/* {loggedIn && <p>Hello, {name}</p>} */}
					<div className="mb-60">
						<img src="/images/home.jpg" alt="Home Image" className="responsive-image" />
					</div>
					<div className="take-test-cta">
						<div className="title text-left">Let's start with Interest Profiler Test</div>
						<p>Our Interest Profiler test is designed for students who are unsure of what career they want to pursue and guide them in making informed decision.</p><br/>
						<Link className="take-test-button" to="/interest_profiler">TAKE TEST</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);