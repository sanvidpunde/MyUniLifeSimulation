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

	console.log({email});
	console.log({name});
	console.log({loggedIn});

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
				<div className="header-text">University Simulation</div>
				{(loggedIn) ?
					<p>Logged In user will see this text</p>
				:
					<p>Non Logged In user will see this text</p>
				}
			</div>
			<div className="container">
				{loggedIn && <p>Hello, {name}</p>}
			</div>
		</React.Fragment>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);