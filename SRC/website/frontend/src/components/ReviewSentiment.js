import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {Slider} from "@mui/material";
import Select from 'react-select';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

import {receiveSuccessMessage, receiveFailureMessage, receiveCurrentCareer, updateCurrentPersonality} from '../redux/util/controller';

const ReviewSentiment = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    // Scroll Top
    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
    

    return (
		<React.Fragment>
			<div className="header">
                <div className="container">
                    <div className="header-text">Review Sentiment</div>
                    <p>We know that everyone has their opinions about universities and courses. That is why, before you make a decision about applying to a certain university, it is a good idea to hear what others who were once in your place have to say about the universities. Have a look at the User Review Dashboard below to know what your seniors and alumni have to say about their college experiences.</p>
                </div>
            </div>
            <div className="p-60">
                <div className="container">
                    <iframe src="https://public.tableau.com/views/forkthdata/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link" style={{width: "100%"}}></iframe>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ReviewSentiment;