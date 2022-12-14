import React, { useState, useEffect } from 'react';
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
				<div className="container">
					<div className="header-text">Welcome to UniLife</div>
					{(loggedIn) ?
						<p>UniLifeSimulation helps you make the best decision in choosing your course and prepare yourself to take on the next chapter of your life. Thats not even the best part. It is also completely free. We will never ask you for any bank details.</p>
					:
						<p>UniLifeSimulation helps you make the best decision in choosing your course and prepare yourself to take on the next chapter of your life. Thats not even the best part. It is also completely free. We will never ask you for any bank details.</p>
					}
				</div>
			</div>
			<div className="p-60">
				<div className="container">
					{/* {loggedIn && <p>Hello, {name}</p>} */}
					<div className="mb-60">
						<img src="/images/home.jpg" alt="Home Image" className="responsive-image" />
					</div>
					<div className="take-test-cta">
						<div className="title text-left">Personality Test</div>
						<p>Take our personality test which is based on big five personality traits Openness, Conscientiousness, Extroversion, Agreeableness, and Neuroticism.</p><br/>
						<Link className="take-test-button" to="/personality_test">Take Test Now</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);