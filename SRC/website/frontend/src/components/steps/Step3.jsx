import React, { useState, useEffect } from "react";

const Step3 = props => {
    const { setPercent, nextStep, previousStep, setProgressText } = props;

    const [selectedInputStep3, setSelectedInputStep3] = useState("");
    const [error, setError] = useState(false);

    const userInput = ["Strongly Disagree", "Disagree", "Slightly Disagree", "Neither Disagree nor Agree", "Slightly Agree", "Agree", "Strongly Agree"]

    const inputHandler = (e) => {
        setSelectedInputStep3(e.target.value);
    };

    // If user selects any option go to next screen
    useEffect(() => {
        if (selectedInputStep3 !== "") {
            const timer = setTimeout(() => {
                handleContinueStep3();
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [selectedInputStep3]);

    const handleBackStep3 = () => {
        previousStep();
        setPercent((2 / 10) * 100);
    };

    const handleContinueStep3 = () => {
        if (selectedInputStep3 == "") {
            setError(true);
            return;
        } else {
            setError(false);
        }
        // move to next step
        nextStep();        
        setPercent((3 / 10) * 100);
    };

    return (
        <React.Fragment>
            <div className="title text-center m-20">Do you care about having challenges that help you to develop new skills?</div>
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
                                checked={selectedInputStep3 === input}
                                className="single-option"
                            />
                            <label htmlFor={input} className={`single-option-label ${selectedInputStep3 === input && "single-option-label-active"}`}>{input}</label>
                        </div>
                    )
                })}
            </div>
            {error && <p className="text-center error-text">Please select one option</p>}
            <div className="control-buttons">
                <button type="button" className="control-button-back" onClick={handleBackStep3}>
                    BACK
                </button>
                <button type="button" className="control-button-continue" onClick={handleContinueStep3}>
                    CONTINUE
                </button>
            </div>
        </React.Fragment>
    );
};

export default Step3;
