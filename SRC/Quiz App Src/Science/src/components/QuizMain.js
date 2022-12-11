import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';

export default class Quiz extends Component {

   // Question for the quiz
    state = {
        questions: {
            1: 'Which of the following is the poorest conductor of heat in comparison to other options?',
            2: 'Which of the following is not a non-metallic mineral?',
            3: 'Which among the following happens in an oxidation reaction?',
            4: 'Which among the following methods can be used to remove the permanent hardness in water due to calcium or magnesium sulphates?',
            5: '“Oil of mirbane” is the most common name of which among the following?',
            6: 'Which of the following Vitamin is required for Normal Blood Circulation ?',
            7: 'Islets of langerhans are related to which of the following?',
            8: 'Plants growing on marshy areas are commonly called as _____',
            9: 'From the point of view of evolution of living organisms, which of the following set of animals is a correct sequence of evolution?',
            10: 'Blood Plasma with which among the following removed is called Serum?'
        },

      // options for the quiz     
        answers: {
            1: {
                1: 'Silver',
                2: 'Copper',
                3: 'Lead',
				4: 'Mercury'
            },
            2: {
                1: 'Mica',
                2: 'Bauxite',
                3: 'Granite',
				4: 'Silica'
            },
            3: {
                1: 'Electrons are gained',
                2: 'Electrons are lost',
                3: 'Protons are gained',
				4: 'Protons are lost'
            },
            4: {
                1: 'Sulphonate method',
                2: 'Nitrate method',
                3: 'Zeolite method',
				4: 'None of these'
            },
            5: {
                1: 'Phenol',
                2: 'Toluene',
                3: 'Phenolphthalein',
				4: 'Nitrobenzene'
            },
            6: {
                1: 'Vitamin A',
                2: 'Vitamin K',
                3: 'Vitamin D',
				4: 'Vitamin E'
            },
            7: {
                1: 'Calcitonin',
                2: 'Insulin',
                3: 'Thyroxine',
				4: 'None of the above'
            },
            8: {
                1: 'Oxylophytes',
                2: 'Lithophytes',
                3: 'Helophytes',
				4: 'Psilophytes'
            },
            9: {
                1: 'Whale, Kangaroo, Echidna',
                2: 'Echidna, Whale, Kangaroo',
                3: 'Kangaroo, Whale, Echidna',
				4: 'Echidna, Kangaroo, Whale'
            },
            10: {
                1: 'Fibrin',
                2: 'Thrombin',
                3: 'Fibrinogen',
				4: 'Collagen'
            }                                       
        },

           // answers for the quiz
        correctAnswers: {
            1: '3',
            2: '3',
            3: '2',
			4: '2',
            5: '4',
            6: '2',
			7: '2',
            8: '3',
            9: '4',
			10: '3'      
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // This method will check for correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // this click will move on to next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
        let { questions, answers, correctAnswer, clickedAnswer, step, score } = this.state;

        function refreshPage() {
            window.location.reload(false);
          }
       
        return(
            <div className="Content">
                {step <= Object.keys(questions).length ? 
                    (<>

                       <div className="nextbtn">
                        
                        <button className="QuestionNum">{step}/{Object.keys(questions).length}</button>
                        </div>
                      

                        <Question
                            question={questions[step]}
                        />
                        <div  className="container">
                      <div className="center">
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                           
                        />
                        </div>
                        </div>
                       
                        
                        <div className="skipbtn">
                        <button
                        className="skipQuestion"
                       
                        onClick={() => this.nextStep(step)}>Skip</button></div>
                        
                        <div className="container">
                        <div className="nextbtn">
                        <button 
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(questions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button> </div></div>
                    </>) : (
                        <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            <h4>Your score is: {score} of {Object.keys(questions).length}</h4>
                            <p>Thank you!</p>
                           
                            <button className="tryagainbtn"  onClick={refreshPage}>TRY AGAIN </button>
                        </div>
                    )
                }
            </div>
        );
    }
}