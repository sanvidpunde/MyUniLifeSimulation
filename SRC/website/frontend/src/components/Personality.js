import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {Slider} from "@mui/material";
import Select from 'react-select';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

import {receiveSuccessMessage, receiveFailureMessage, receiveCurrentCareer, updateCurrentPersonality} from '../redux/util/controller';

const Personality = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    // Scroll Top
    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    const [lifeOfParty, setLifeOfParty] = useState(3);
    const [talkALot, setTalkALot] = useState(3);
    const [comfortableAroundPeople, setComfortableAroundPeople] = useState(3);
    const [stayInBackground, setStayInBackground] = useState(3);
    const [stressedEasily, setStressedEasily] = useState(3);
    const [relaxedMostTime, setRelaxedMostTime] = useState(3);
    const [worryAboutThings, setWorryAboutThings] = useState(3);
    const [feelBlue, setFeelBlue] = useState(3);
    const [concernForOthers, setConcernForOthers] = useState(3);
    const [interestedInPeople, setInterestedInPeople] = useState(3);
    const [insultPeople, setInsultPeople] = useState(3);
    const [sympathizeWithOthers, setSympathizeWithOthers] = useState(3);
    const [alwaysPrepared, setAlwaysPrepared] = useState(3);
    const [leaveBelongings, setLeaveBelongings] = useState(3);
    const [payAttention, setPayAttention] = useState(3);
    const [makeMess, setMakeMess] = useState(3);
    const [richVocabulary, setRichVocabulary] = useState(3);
    const [difficultyUnderstandingIdeas, setDifficultyUnderstandingIdeas] = useState(3);
    const [vividImagination, setVividImagination] = useState(3);
    const [notInterestedInAbstractIdeas, setNotInterestedInAbstractIdeas] = useState(3);

    const submitHandler = (e) => {
        e.preventDefault();
        // call API
        const personalityData = {
            EXT1: lifeOfParty,
            EXT2: talkALot,
            EXT3: comfortableAroundPeople,
            EXT4: stayInBackground,
            EST1: stressedEasily,
            EST2: relaxedMostTime,
            EST3: worryAboutThings,
            EST4: feelBlue,
            AGR1: concernForOthers,
            AGR2: interestedInPeople,
            AGR3: insultPeople,
            AGR4: sympathizeWithOthers,
            CSN1: alwaysPrepared,
            CSN2: leaveBelongings,
            CSN3: payAttention,
            CSN4: makeMess,
            OPN1: richVocabulary,
            OPN2: difficultyUnderstandingIdeas,
            OPN3: vividImagination,
            OPN4: notInterestedInAbstractIdeas
        };
        console.log("personality data for API", personalityData);
        dispatch(receiveSuccessMessage({success: "Personality Prediction request sent"}));
        // API call
        axios.post('/api/personality', personalityData)
        .then(resp => {
            console.log("resp is:", resp);
            if (resp.data.success === false) {
                return dispatch(receiveFailureMessage({failure: resp.data.message}));
            }
            // update redux with interest profiler details
            dispatch(updateCurrentPersonality(resp.data.personality));
            dispatch(receiveSuccessMessage({success: `Predicted personality is ${resp.data.personality.personality}`}));
            history.push('/personality_details');
        });
    }

    return (
		<React.Fragment>
			<div className="header">
                <div className="container">
                    <div className="header-text">Personality Test</div>
                    <p>Welcome to the OCEAN personality test. In this page, you will be prompted 20 questions that take into account different aspects of your personality. We encourage our users to answer these questions as honestly as possible to get the best possible personality prediction. The outcome of this test will be one of the factors in determing which university courses are predicted for you.</p>
                </div>
            </div>
            <div className="p-60">
                <div className="container">
                    <div className="breadcrumb">
                        <p><i className="fa fa-arrows" aria-hidden="true"></i> <strong>Personality test</strong> / Interest Profiler / Course Recommender</p>
                    </div>
                    <h3 className="mb-20">This test will determine your personality, Lets gooooooo!</h3>
                    <div className="range_selection">
                        <div className="single_range_selection">
                            <label htmlFor="life_of_party">I am the life of the party</label>
                            <Slider
                                aria-label="life_of_party"
                                value={lifeOfParty}
                                onChange={(e) => setLifeOfParty(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </div>
                        <div className="single_range_selection">
                            <label htmlFor="talk_a_lot">I don't talk a lot</label>
                            <Slider
                                aria-label="talk_a_lot"
                                value={talkALot}
                                onChange={(e) => setTalkALot(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </div>

                        <div className="single_range_selection">
                            <label htmlFor="comfortableAroundPeople">I feel comfortable around people</label>
                            <Slider
                                aria-label="comfortableAroundPeople"
                                value={comfortableAroundPeople}
                                onChange={(e) => setComfortableAroundPeople(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </div>
                        <div className="single_range_selection">
                            <label htmlFor="stayInBackground">I keep in the background</label>
                            <Slider
                                aria-label="stayInBackground"
                                value={stayInBackground}
                                onChange={(e) => setStayInBackground(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </div>

                        <div className="single_range_selection">
                            <label htmlFor="stressedEasily">I get stressed out easily</label>
                            <Slider
                                aria-label="stressedEasily"
                                value={stressedEasily}
                                onChange={(e) => setStressedEasily(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </div>
                        <div className="single_range_selection">
                            <label htmlFor="relaxedMostTime">I am relaxed most of the time</label>
                            <Slider
                                aria-label="relaxedMostTime"
                                value={relaxedMostTime}
                                onChange={(e) => setRelaxedMostTime(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </div>

                        <div className="single_range_selection">
                            <label htmlFor="worryAboutThings">I worry about things</label>
                            <Slider
                                aria-label="worryAboutThings"
                                value={worryAboutThings}
                                onChange={(e) => setWorryAboutThings(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </div>
                        <div className="single_range_selection">
                            <label htmlFor="feelBlue">I seldom feel blue</label>
                            <Slider
                                aria-label="feelBlue"
                                value={feelBlue}
                                onChange={(e) => setFeelBlue(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </div>

                        <div className="single_range_selection">
                            <label htmlFor="concernForOthers">I feel little concern for others</label>
                            <Slider
                                aria-label="concernForOthers"
                                value={concernForOthers}
                                onChange={(e) => setConcernForOthers(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </div>
                        <div className="single_range_selection">
                            <label htmlFor="interestedInPeople">I am interested in people</label>
                            <Slider
                                aria-label="interestedInPeople"
                                value={interestedInPeople}
                                onChange={(e) => setInterestedInPeople(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </div>

                        <div className="single_range_selection">
                            <label htmlFor="insultPeople">I insult people</label>
                            <Slider
                                aria-label="insultPeople"
                                value={insultPeople}
                                onChange={(e) => setInsultPeople(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </div>
                        <div className="single_range_selection">
                            <label htmlFor="sympathizeWithOthers">I sympathize with others feelings</label>
                            <Slider
                                aria-label="sympathizeWithOthers"
                                value={sympathizeWithOthers}
                                onChange={(e) => setSympathizeWithOthers(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </div>

                        <div className="single_range_selection">
                            <label htmlFor="alwaysPrepared">I am always prepared</label>
                            <Slider
                                aria-label="alwaysPrepared"
                                value={alwaysPrepared}
                                onChange={(e) => setAlwaysPrepared(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </div>
                        <div className="single_range_selection">
                            <label htmlFor="leaveBelongings">I leave my belongings around</label>
                            <Slider
                                aria-label="leaveBelongings"
                                value={leaveBelongings}
                                onChange={(e) => setLeaveBelongings(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </div>

                        <div className="single_range_selection">
                            <label htmlFor="payAttention">I pay attention to details</label>
                            <Slider
                                aria-label="payAttention"
                                value={payAttention}
                                onChange={(e) => setPayAttention(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </div>
                        <div className="single_range_selection">
                            <label htmlFor="makeMess">I make a mess of things</label>
                            <Slider
                                aria-label="makeMess"
                                value={makeMess}
                                onChange={(e) => setMakeMess(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </div>

                        <div className="single_range_selection">
                            <label htmlFor="richVocabulary">I have a rich vocabulary</label>
                            <Slider
                                aria-label="richVocabulary"
                                value={richVocabulary}
                                onChange={(e) => setRichVocabulary(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </div>
                        <div className="single_range_selection">
                            <label htmlFor="difficultyUnderstandingIdeas">I have difficulty understanding abstract ideas</label>
                            <Slider
                                aria-label="difficultyUnderstandingIdeas"
                                value={difficultyUnderstandingIdeas}
                                onChange={(e) => setDifficultyUnderstandingIdeas(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </div>

                        <div className="single_range_selection">
                            <label htmlFor="vividImagination">I have a vivid imagination</label>
                            <Slider
                                aria-label="vividImagination"
                                value={vividImagination}
                                onChange={(e) => setVividImagination(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </div>
                        <div className="single_range_selection">
                            <label htmlFor="notInterestedInAbstractIdeas">I am not interested in abstract ideas</label>
                            <Slider
                                aria-label="notInterestedInAbstractIdeas"
                                value={notInterestedInAbstractIdeas}
                                onChange={(e) => setNotInterestedInAbstractIdeas(e.target.value)}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                        </div>

                    </div>
                    <div className="mt-20">
                        <button type="button" className="take-test-button" onClick={submitHandler} >Run Prediction</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Personality;