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
                    <p>Lorem Ipsum Dolor Sit Amet</p>
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