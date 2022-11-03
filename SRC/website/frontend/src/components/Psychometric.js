import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import StepWizard from "react-step-wizard";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";
import Step8 from "./steps/Step8";
import Step9 from "./steps/Step9";
import Step10 from "./steps/Step10";

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

const Psychometric = () => {

    // const [takeTestClicked, setTakeTestClicked] = useState(false);
    const [percent, setPercent] = useState((0 / 10) * 100);
    const percentSetter = val => {
        setPercent(val);
    };
    const [progressText, setProgressText] = useState("60 seconds from finish");
    const progressTextSetter = val => {
        setProgressText(val);
    };

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    // useEffect(() => {
    //     console.log("percent is", percent);
    // }, [percent]);
	
	return (
		<React.Fragment>
			<div className="header">
				<div className="header-text">UniLifeHunt!</div>
				<p>The test to determine your future</p>
			</div>
            <div className="container p-60">

            {/* {!takeTestClicked &&
                <div className="take-test-cta">
                    <div className="title text-left">Choose the correct career</div>
                    <p>Help choose the right career for students! Use our psychometric test to help you find who is right for the which career! Try it!!</p>
                    <button className="take-test-button" onClick={() => setTakeTestClicked(true)}>TAKE TEST</button>
                </div>
            } */}

            {/* {takeTestClicked && */}
                <React.Fragment>
                    <div className="progressbar">
                        <p className="text-center progress-text">{progressText}</p>
                        <ProgressBar percent={percent} filledBackground="#34a8f5" />
                    </div>
                    <StepWizard>
                        <Step1 setPercent={percentSetter} setProgressText={progressTextSetter} />
                        <Step2 setPercent={percentSetter} setProgressText={progressTextSetter} />
                        <Step3 setPercent={percentSetter} setProgressText={progressTextSetter} />
                        <Step4 setPercent={percentSetter} setProgressText={progressTextSetter} />
                        <Step5 setPercent={percentSetter} setProgressText={progressTextSetter} />
                        <Step6 setPercent={percentSetter} setProgressText={progressTextSetter} />
                        <Step7 setPercent={percentSetter} setProgressText={progressTextSetter} />
                        <Step8 setPercent={percentSetter} setProgressText={progressTextSetter} />
                        <Step9 setPercent={percentSetter} setProgressText={progressTextSetter} />
                        <Step10 setPercent={percentSetter} setProgressText={progressTextSetter} />
                    </StepWizard>
                </React.Fragment>
            {/* } */}

            </div>
            
			
		</React.Fragment>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Psychometric);