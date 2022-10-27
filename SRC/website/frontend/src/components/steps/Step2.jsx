import React, { useState, useEffect } from "react";

const Step2 = props => {
    const { setPercent, nextStep, previousStep, setProgressText } = props;

    const [selectedInputStep2, setSelectedInputStep2] = useState("");
    const [error, setError] = useState(false);

    const userInput = ["Strongly Disagree", "Disagree", "Slightly Disagree", "Neither Disagree nor Agree", "Slightly Agree", "Agree", "Strongly Agree"]

    const inputHandlerStep2 = (e) => {
        setSelectedInputStep2(e.target.value);
    };

    // If user selects any option go to next screen
    useEffect(() => {
        console.log("selectedInputStep2 is", selectedInputStep2);
        if (selectedInputStep2 !== "") {
            const timer = setTimeout(() => {
                handleContinueStep2();
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [selectedInputStep2]);

    const handleBackStep2 = () => {
        previousStep();
        setPercent((1 / 10) * 100);
    };

    const handleContinueStep2 = () => {
        console.log("made here handleContinueStep2 func");
        if (selectedInputStep2 == "") {
            setError(true);
            return;
        } else {
            setError(false);
        }
        // move to next step
        console.log("made here");
        nextStep();
        console.log("made here 1");
        setPercent((2 / 10) * 100);
        console.log("made here 2");
    };

    return (
        <React.Fragment>
            <div className="title text-center m-20">Do you like Art?</div>
            <div className="options-block">
                {userInput.map(input => {
                    return (
                        <div className="single-option" key={input}>
                            <input
                                type="radio"
                                id={input}
                                value={input}
                                name="input"
                                onChange={inputHandlerStep2}
                                checked={selectedInputStep2 === input}
                                className="single-option"
                            />
                            <label htmlFor={input} className={`single-option-label ${selectedInputStep2 === input && "single-option-label-active"}`}>{input}</label>
                        </div>
                    )
                })}
            </div>
            {error && <p className="text-center error-text">Please select one option</p>}
            <div className="control-buttons">
                <button type="button" className="control-button-back" onClick={handleBackStep2}>
                    BACK
                </button>
                <button type="button" className="control-button-continue" onClick={handleContinueStep2}>
                    CONTINUE
                </button>
            </div>
        </React.Fragment>
    );
};

export default Step2;