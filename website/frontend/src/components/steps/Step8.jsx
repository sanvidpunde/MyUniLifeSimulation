import React, { useState, useEffect } from "react";

const Step8 = props => {
    const { setPercent, nextStep, previousStep, setProgressText } = props;

    const [selectedInput, setSelectedInput] = useState("");
    const [error, setError] = useState(false);

    const userInput = ["Strongly Disagree", "Disagree", "Slightly Disagree", "Neither Disagree nor Agree", "Slightly Agree", "Agree", "Strongly Agree"]

    const inputHandler = (e) => {
        setSelectedInput(e.target.value);
    };

    // If user selects any option go to next screen
    useEffect(() => {
        if (selectedInput !== "") {
            const timer = setTimeout(() => {
                handleContinue();
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [selectedInput]);

    const handleBack = () => {
        previousStep();
        setPercent((7 / 10) * 100);
    };

    const handleContinue = () => {
        if (selectedInput == "") {
            setError(true);
            return;
        } else {
            setError(false);
        }
        // move to next step
        setPercent((8 / 10) * 100);
        nextStep();
    };

    return (
        <React.Fragment>
            <div className="title text-center m-20">It is important that I am able to take on different kinds of tasks at work.</div>
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
                                checked={selectedInput === input}
                                className="single-option"
                            />
                            <label htmlFor={input} className={`single-option-label ${selectedInput === input && "single-option-label-active"}`}>{input}</label>
                        </div>
                    )
                })}
            </div>
            {error && <p className="text-center error-text">Please select one option</p>}
            <div className="control-buttons">
                <button type="button" className="control-button-back" onClick={handleBack}>
                    BACK
                </button>
                <button type="button" className="control-button-continue" onClick={handleContinue}>
                    CONTINUE
                </button>
            </div>
        </React.Fragment>
    );
};

export default Step8;
