import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

const ProfilerDetails = () => {

    const dispatch = useDispatch();
    const personality = useSelector(state => state.personality);

    // scroll to top of page
    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
    
    // const personality = {
    //     "personality": "Lively",
    //     "description": "lively describes a dimension of cognitive style that distinguishes imaginative, creative people from down-to-earth, conventional people. Open people are Intellectually curious, appreciative of art, and sensitive to beauty. They tend to be, compared to closed people, more aware of their feelings. They tend to think and act in individualistic and nonconforming ways. Intellectuals typically score high on Openness to Experience; consequently, this factor has also been called Culture or Intellect. Nonetheless, Intellect is probably best regarded as one aspect of Openness to experience. Scores on Openness to Experience are only modestly related to years of education and scores on standard intelligent tests. People who tend to be high in the trait of openness are more willing to embrace new things, fresh ideas, and novel experiences. They are open-minded and approach new things with curiosity and tend to seek out novelty. They tend to pursue new adventures, experiences, and creative endeavors. They are also very good at thinking about and making connections between different concepts and ideas.",
    //     "characteristics_of_personality": [{
    //         "trait": "Lively people prefer variety and diversity.",
    //         "id": 1
    //       },
    //       {
    //         "trait": "Lively people Seeks new experiences and adventures.",
    //         "id": 2
    //       },
    //       {
    //         "trait": "Lively people Think and express themselves creatively.",
    //         "id": 3
    //       },
    //       {
    //         "trait": "They are always curious about and perceptive to their environment.",
    //         "id": 4
    //       },
    //       {
    //         "trait": "Lively people tends to be more Creative than others.",
    //         "id": 5
    //       },
    //       {
    //         "trait": "Lively people are more Intelligent and knowledgeable.",
    //         "id": 6
    //       },
    //       {
    //         "trait": "Give great attention to mental imagery.",
    //         "id": 7
    //       },
    //       {
    //         "trait": "Lively people are Interested in new things.",
    //         "id": 8
    //       },
    //       {
    //         "trait": "Lively people Enjoys hearing new ideas.",
    //         "id": 9
    //       }
    //     ],
    //     "common_traits": [{
    //         "trait": "Are good at coming up with new ideas.",
    //         "id": 1
    //       },
    //       {
    //         "trait": "They often think about the deeper meaning of things.",
    //         "id": 2
    //       },
    //       {
    //         "trait": "Are often curious about how things work.",
    //         "id": 3
    //       },
    //       {
    //         "trait": "They enjoy thinking about theoretical ideas.",
    //         "id": 4
    //       },
    //       {
    //         "trait": "They have many artistic hobbies.",
    //         "id": 5
    //       },
    //       {
    //         "trait": "They place a high value on aesthetics and artistry.",
    //         "id": 6
    //       },
    //       {
    //         "trait": "They have an active imagination.",
    //         "id": 7
    //       },
    //       {
    //         "trait": "Appreciate being around diverse groups of people.",
    //         "id": 8
    //       },
    //       {
    //         "trait": "Enjoy having philosophical discussions.",
    //         "id": 9
    //       },
    //       {
    //         "trait": "Tends to daydream or get distracted by flights of fancy.",
    //         "id": 10
    //       }
    //     ],
    //     "effects_of_personality": "Liveliness is often viewed as a positive trait. Lively people have a higher level of intrinsic motivation to pursue knowledge for its own sake. They are curious about the world and want to learn more about how it works. They are also eager to try new things, so they may be better able to adapt and thrive when faced with changes in their environment, situation, or relationships.This doesn’t mean that openness doesn’t have any downsides. Because people who are high on this trait seek novelty, they may also be more willing to engage in risky behaviors. Interestingly, however, some studies have linked decreased openness to increased risk for drug.",
    //     "what_can_be_improved": [{
    //         "trait": "Boost your confidence, Do things that make you feel more confident (exercise, do activities you love, etc.). Doing so will help you feel more comfortable trying new things.",
    //         "id": 1
    //       },
    //       {
    //         "trait": "Experience new cultures. Open people greatly appreciate arts, sciences, and other cultures.",
    //         "id": 2
    //       },
    //       {
    //         "trait": "Learning about others’ experiences is a great way to improve your open-mindedness.",
    //         "id": 3
    //       },
    //       {
    //         "trait": "Traveling to new places, visiting museums, and listening to new types of music are some ways to experience new cultures, Get out of your comfort zone.",
    //         "id": 4
    //       },
    //       {
    //         "trait": "One of the most critical measures of openness relates to the willingness to try new things. Find a new hobby, try new restaurants, or vacation to a new place to get out of your comfort zone.",
    //         "id": 5
    //       }
    //     ],
    //     "word_of_advice": "Liveliness can play a role in different areas of life including your creative pursuits, your political ideology, and your attitudes toward sex, among other things. It is important to remember, however, that personality traits such as Liveliness are just one of many factors that shape your life. Personality has been associated with a number of life outcomes including happiness, relationship quality, and job satisfaction, but other factors including circumstances, both situational and societal, also play a critical role."
    //   };

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
                        <p><strong>Personality test</strong> / Interest Profiler / Course Recommender</p>
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
                            <h3 className="">Effects of Personality</h3>
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
                            <h3 className="">Word of Advice</h3>
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