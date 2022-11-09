import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';

import {changeStep} from '../../redux/util/controller';

const Step4 = props => {
    const { setPercent, nextStep, previousStep, setProgressText } = props;
    const dispatch = useDispatch();
    const step = useSelector(state => state.step);

    const [selectedInputStep4, setSelectedInputStep4] = useState("");
    const [error, setError] = useState(false);

    const userInput = ["Strongly Disagree", "Disagree", "Slightly Disagree", "Neither Disagree nor Agree", "Slightly Agree", "Agree", "Strongly Agree"]

    const inputHandler = (e) => {
        setSelectedInputStep4(e.target.value);
    };

    // If user selects any option go to next screen
    useEffect(() => {
        if (selectedInputStep4 !== "") {
            const timer = setTimeout(() => {
                dispatch(changeStep({...step, step4: selectedInputStep4}));
                handleContinueStep4();
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [selectedInputStep4]);

    const handleBackStep4 = () => {
        previousStep();
        setPercent((3 / 10) * 100);
    };

    const handleContinueStep4 = () => {
        if (selectedInputStep4 == "") {
            setError(true);
            return;
        } else {
            setError(false);
        }
        // move to next step
        setPercent((4 / 10) * 100);
        nextStep();
    };

    return (
        <React.Fragment>
            <div className="title text-center m-20">Do you like to complete tasks way in advance to feel comfortable?</div>
            <div className="options-block">
                {userInput.map(input => {
                    return (
                        <div className="single-option" key={input}>
                            <input
                                type="radio"
                                id={input}
                                value={input}
                                name="input"
                                onChange={inputHandler}
                                checked={selectedInputStep4 === input}
                                className="single-option"
                            />
                            <label htmlFor={input} className={`single-option-label ${selectedInputStep4 === input && "single-option-label-active"}`}>{input}</label>
                        </div>
                    )
                })}
            </div>
            {error && <p className="text-center error-text">Please select one option</p>}
            <div className="control-buttons">
                <button type="button" className="control-button-back" onClick={handleBackStep4}>
                    BACK
                </button>
                <button type="button" className="control-button-continue" onClick={handleContinueStep4}>
                    CONTINUE
                </button>
            </div>
        </React.Fragment>
    );
};

export default Step4;
