import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';

export default class Quiz extends Component {

   // Question for the quiz
    state = {
        questions: {
            1: 'Which one is NOT from Phase 1 of Data Science Life Cycle',
            2: 'Which of the following is the most important language for Data Science?',
            3: 'A collection of information about a related topic is referred to as a__________',
            4: 'To find the _________ you add up all the numbers and then divide by how many numbers you have.',
            5: 'Which of the following is performed by Data Scientist ?',
            6: 'Which is not a tool for Statistical Data Analysis?',
            7: 'What is the mean of test scores?{70, 70, 80, 85, 85, 90, 95, 95, 100, 100}',
            8: 'Choose the correct keyword for this definition: A graphical representation of a data set',
            9: 'To find the ________ you put all numbers in order from least to greatest and find the number that is in the middle.',
            10: 'R is an interpreted language so it can access through _____________?',
            11: 'Data has been collected on visitors’ viewing habits at a bank’s website. Which technique is used to identify pages commonly viewed during the same visit to the website?',
            12: 'A relationship between two or more variables is referred to as a ________',
            13: 'A graphical representation of a data set is referred to as a ______',
            14: 'Which of the following step is performed by data scientist AFTER acquiring the data?',
            15: 'Data that sits outside the trend is referred to as a ______',
            16: 'Which of the following approach should be used to ask Data Analysis question?',
            17: 'Which of the following is NOT a machine learning algorithm?',
            18: 'What is Big Data?',
            19: 'What is R an implementation of?',
            20: 'The 5 steps required to identify a problem and come up with a solution are referred to as the ________ Cycle',
            21: 'Which of the following Python libraries are used to import, merge, export data files?',
            22: 'Which of the following language is best suited to extract meaningful data from a database?',
            23: 'Which of the following types of visualisation is best suited to show the trend of prices over a period of time?',
            24: 'The best form of visualising outliers in a dataset is to use the _________ .',
            25: 'A p-value of _________ on statistical tests allows you to reject the null hypothesis'

        },

      // options for the quiz     
        answers: {
            1: {
                1: 'Learning the target domain',
                2: 'Developing initial hypothesis',
                3: 'Visualize initial hypothesis',
				4: 'Identifying key variables'
            },
            2: {
                1: 'Ruby',
                2: 'R',
                3: 'Java',
				4: 'None'
            },
            3: {
                1: 'Visualisation',
                2: 'Analysis',
                3: 'Conclusion',
				4: 'Data'
            },
            4: {
                1: 'Median',
                2: 'Mean',
                3: 'Mode',
				4: 'Range'
            },
            5: {
                1: 'Create reproducible code',
                2: 'Challenge results',
                3: 'Define the question',
				4: 'All of the above'
            },
            6: {
                1: 'Logistic Regression',
                2: 'Linear & Non-linear Regression',
                3: 'Histogram',
				4: 'ANOVA'
            },
            7: {
                1: '85, 95, 100, 100',
                2: '85, 95 and 100',
                3: '30',
				4: '87'
            },
            8: {
                1: 'Data Set',
                2: 'Investigative Cycle',
                3: 'Visualisation',
				4: 'None of the above'
            },
            9: {
                1: 'Median',
                2: 'Mode',
                3: 'Mean',
				4: 'Range'
            },
            10: {
                1: 'Command line interpreter',
                2: 'Disk operating system',
                3: 'Operating system',
				4: 'User interface operating system'
            },
            11: {
                1: 'Clustering',
                2: 'Classification',
                3: 'Association Rules',
				4: 'Regression'
            },
            12: {
                1: 'Trend',
                2: 'Spike',
                3: 'All of above',
				4: 'None of the above'
            },
            13: {
                1: 'Visualization',
                2: 'Data Set',
                3: 'Investigative Cycle',
				4: 'None'
            },
            14: {
                1: 'Data Integration',
                2: 'Data Replication',
                3: 'Data Cleansing',
				4: 'All of the above'
            },
            15: {
                1: 'Outlier',
                2: 'Trend',
                3: 'Spike',
				4: 'Both 1 & 2'
            },
            16: {
                1: 'Find out the question which is to be answered',
                2: 'Find only one solution for particular problem',
                3: 'Find out answer from dataset without asking question',
				4: 'None of the  above'
            },
            17: {
                1: 'SVG',
                2: 'Random Forest',
                3: 'SVM',
				4: 'None of the  above'
            },
            18: {
                1: 'Data with the word ‘big’ in it',
                2: 'Data about people who are big',
                3: 'Data with a large size',
				4: 'Data made with a big purpose'
            },
            19: {
                1: 'Logical Scoping',
                2: 'S Programming Language',
                3: 'Lexical Scoping',
				4: 'Q Programming Language'
            },
            20: {
                1: 'Visualization',
                2: 'Investigative',
                3: 'Conclusion',
				4: 'None of the  above'
            },
            21:{
                1: 'numpy',
                2: 'sklearn',
                3: 'pandas',
                4: 'matplotlib'
            },
            22:{
                1: 'python',
                2: 'java',
                3: 'javascript',
                4: 'sql'
            },
            23:{
                1: 'bar chart',
                2: 'line graph',
                3: 'pie chart',
                4: 'histogram'
            },    
            24:{
                1: 'boxplot',
                2: 'bar chart',
                3: 'histogram',
                4: 'pie chart'
            },
            25:{
                1: '0.5',
                2: '0.05',
                3: '0.1',
                4: '1.0'
            }                                            
        },

           // answers for the quiz
        correctAnswers: {
            1: '3',
            2: '2',
            3: '1',
			4: '2',
            5: '2',
            6: '3',
			7: '3',
            8: '3',
            9: '1',
			10: '1',
            11: '3',
            12: '1',
			13: '1',
            14: '3',
            15: '4',
            16: '1',
			17: '1',
            18: '3',
            19: '2',
            20: '2',
            21: '3', 
            22: '4', 
            23: '2',
            24: '1',
            25: '2'       
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