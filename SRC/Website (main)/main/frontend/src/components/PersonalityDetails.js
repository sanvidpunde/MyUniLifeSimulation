import React, { useEffect } from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const ProfilerDetails = () => {

    const personality = useSelector(state => state.personality);

    // scroll to top of page
    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    return (
        <React.Fragment>
			<div className="header">
                <div className="container">
                    <div className="header-text">Predicted Personality</div>
                    <p>Thank you for taking the time to answer the questions. Based on your answers, your predicted personality is as follows.</p>
                </div>
            </div>
            <div className="p-60">
                <div className="container">
                    <div className="breadcrumb">
                        <p><i className="fa fa-arrows" aria-hidden="true"></i> <strong>Personality test</strong> / Interest Profiler / Course Recommender</p>
                    </div>
                    <div className="profiler_details">
                        <h3 className="">Predicted Personality:</h3>
                        <div className="career_title">{personality.personality}</div>

                        <div className="mb-60"></div>

                        <div className="mb-30">
                            <h3 className="">Description:</h3>
                            <p className="jobDescriptionText">{personality.description}</p>
                        </div>
                        
                        <div className="mb-30">
                            <h3 className="">Personality Characteristics:</h3>
                            <div className="ul-map">
                                <ul>
                                    {personality.characteristics_of_personality && personality.characteristics_of_personality.map(item => {
                                        return (
                                            <li key={item.id}>{item.trait}</li>
                                        )
                                    })}
                                    
                                </ul>
                            </div>
                        </div>
                        
                        <div className="mb-30">
                            <h3 className="">Common Traits:</h3>
                            <div className="ul-map">
                                <ul>
                                    {personality.common_traits && personality.common_traits.map(item => {
                                        return (
                                            <li key={item.id}>{item.trait}</li>
                                        )
                                    })}
                                    
                                </ul>
                            </div>
                        </div>

                        <div className="mb-30">
                            <h3 className="">Effects of Personality:</h3>
                            <p className="jobDescriptionText">{personality.effects_of_personality}</p>
                        </div>                        
                        
                        <div className="mb-30">
                            <h3 className="">Improvements:</h3>
                            <div className="career_skills">
                                <ul>
                                    {personality.what_can_be_improved && personality.what_can_be_improved.map(item => {
                                        return (
                                            <li key={item.id}>{item.trait}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>                        

                        <div className="mb-30">
                            <h3 className="">Word of Advice:</h3>
                            <p className="jobDescriptionText">{personality.word_of_advice}</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="cta">
                <div className="container">
                    <h2>Run our Interest Profiler and find out which career is ideal for you</h2>
                    <Link to="/interest_profiler" className="cta_link">Run Interest Profiler</Link>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ProfilerDetails;