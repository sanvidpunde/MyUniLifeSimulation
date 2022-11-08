import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';

import {changeStep} from '../../redux/util/controller';
import {receiveCurrentStep, updateCurrentStep} from '../../redux/util/controller';

const Step1 = (props) => {
    const dispatch = useDispatch();
    const step = useSelector(state => state.step);
    console.log('step redux is', step);
    const { setPercent, nextStep, setProgressText } = props;

    const [selectedInputStep1, setSelectedInputStep1] = useState("");
    const [error, setError] = useState(false);

    const userInput = ["Strongly Disagree", "Disagree", "Slightly Disagree", "Neither Disagree nor Agree", "Slightly Agree", "Agree", "Strongly Agree"]

    const inputHandlerStep1 = (e) => {
        setSelectedInputStep1(e.target.value);
    };

    // If user selects any option go to next screen
    useEffect(() => {
        if (selectedInputStep1 !== "") {
            const timer = setTimeout(() => {
                console.log("insidee timeout func");
                dispatch(changeStep({step1: selectedInputStep1, step2: null, step3: null, step4: null, step5: null, step6: null, step7: null, step8: null, step9: null, step10: null}));
                console.log({step1: selectedInputStep1, step2: null, step3: null, step4: null, step5: null, step6: null, step7: null, step8: null, step9: null, step10: null});
                console.log("after dispatch");
                handleContinueStep1();
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [selectedInputStep1]);

    const handleContinueStep1 = () => {
        console.log("this has run ==================")
        if (selectedInputStep1 == "") {
            setError(true);
            return;
        } else {
            setError(false);
        }
        // move to next step
        nextStep();
        setPercent((1 / 10) * 100);     
    };

    return (
        <React.Fragment>
            <div className="title text-center m-20">Do you like computers?</div>
            <div className="options-block">
                {userInput.map(input => {
                    return (
                        <div className="single-option" key={input}>
                            <input
                                type="radio"
                                id={input}
                                name="input"
                                value={input}
                                onChange={inputHandlerStep1}
                                checked={selectedInputStep1 === input}
                                className="single-option"
                            />
                            <label htmlFor={input} className={`single-option-label ${selectedInputStep1 === input && "single-option-label-active"}`}>{input}</label>
                        </div>
                    )
                })}
            </div>
            {error && <p className="text-center error-text">Please select one option</p>}
            <div className="control-buttons">
                {/* <button type="button" className="control-button-back" onClick={handleBack}>
                    BACK
                </button> */}
                <button type="button" className="control-button-continue" onClick={handleContinueStep1}>
                    CONTINUE
                </button>
            </div>
        </React.Fragment>
    );
};

export default Step1;