import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';

export default class Quiz extends Component {

   // Question for the quiz
    state = {
        questions: {
            1: 'What is Business?',
            2: 'In which firm the agreement is Oral or Written?',
            3: 'Individual Ownership is called as?',
            4: 'In case of death or insolvency of a partner the firm is?',
            5: 'What does the term “Incentive” mean?',
            6: 'The most fundamental economic problem is…..',
            7: 'The study of determining the prices in individual markets is called…',
            8: 'What contains the rules regarding the activities of a company?',
            9: 'Macroeconomics is the branch of economics that deals with:',
            10: 'The term “National income” refers to the?'
        },

      // options for the quiz     
        answers: {
            1: {
                1: 'Buying & Selling of Goods',
                2: 'Commerce & Industry',
                3: 'Trade',
				4: 'None of the above'
            },
            2: {
                1: 'Partnership',
                2: 'Sole Proprietorship',
                3: 'HUF',
				4: 'Co-operative Society'
            },
            3: {
                1: 'Joint Trade Business',
                2: 'Sole Proprietorship',
                3: 'Co-Operative Society',
				4: 'Partnership'
            },
            4: {
                1: 'Dissolved',
                2: 'Carried on',
                3: 'New owner',
				4: 'None of the above'
            },
            5: {
                1: 'It is the opposite of a tradeoff.',
                2: 'It could be a reward but could not be a penalty.',
                3: 'It could either be a reward or a penalty.',
				4: 'It could be a penalty but could not be a reward.'
            },
            6: {
                1: 'Security',
                2: 'European countries buy more goods from foreigners than supply to foreigners',
                3: 'Health',
				4: 'Scarcity'
            },
            7: {
                1: 'negative economics',
                2: 'microeconomics',
                3: 'positive economics',
				4: 'macroeconomics'
            },
            8: {
                1: 'Memorandum of Association',
                2: 'Article of Association',
                3: 'Partnership Deed',
				4: 'None of the above'
            },
            9: {
                1: 'the prices of individual goods',
                2: 'important rather than trivial issues',
                3: 'how individual markets work ',
				4: 'the economy as a whole'
            },
            10: {
                1: 'total employment',
                2: 'total unemployment',
                3: 'global employment',
				4: 'local employment'
            }                                       
        },

           // answers for the quiz
        correctAnswers: {
            1: '2',
            2: '1',
            3: '2',
			4: '1',
            5: '3',
            6: '4',
			7: '2',
            8: '1',
            9: '4',
			10: '1'      
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