import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './page4.css';
import person from '../Assets/carr/person.png'
import imgtab1 from '../Assets/carr/tab1.png';
import motiv from '../Assets/carr/motiv.png';
import abs from '../Assets/carr/abs.png';
import num from '../Assets/carr/num.png';
import verb from '../Assets/carr/verb.png';

import { Link } from 'react-router-dom';

const page4 = () => {
  return (
    <div>
      <Header />
      <div className='section p4-section1'>
        <h4>UniLifeHunt</h4>
        <p> The very best interest profiler test to determine your career path</p>
      </div>
      <div className='section p4-section2'>
        <div className='carr'>
            <div className='left'>
                <h4>Career Profile :</h4>
                <h5>Business Management</h5>
                <p>Business Analyst, HR Rep, Corporate Auditing</p>
            </div>
            <div className='right'>
                <h4>92%</h4>
                <h5>Match</h5>
                <p>This career is perfect for you based on your scores</p>
            </div>
        </div>
        <div className='carr-option'>
            <div className='carr-tab'>
                <div className='img'>
                    <img src={imgtab1} alt='' />
                </div>
                <div className='content'>
                    <h4>Career Interests</h4>
                    <p>Your score indicates a very high affinity towards Business Management</p>
                </div>
            </div>
            <div className='carr-tab'>
                <div className='img'>
                    <img src={person} alt='' />
                </div>
                <div className='content'>
                    <h4>Work Personality</h4>
                    <p>Your Work Personality indicates that you are highly analytical</p>
                </div>
            </div>
            <div className='carr-tab'>
                <div className='img'>
                    <img src={motiv} alt='' />
                </div>
                <div className='content'>
                    <h4>Career Motivators</h4>
                    <p>Your responses to certain questions about career motivations align with industry experts who got into the field with the same motivations.</p>
                </div>
            </div>
            <div className='carr-tab'>
                <div className='img'>
                    <img src={abs} alt='' />
                </div>
                <div className='content'>
                    <h4>Abstract Reasoning</h4>
                    <p>Your results to  7/10 of the abstract reasoning questions have matched the requirements of a career in Business Management</p>
                </div>
            </div>
            <div className='carr-tab'>
                <div className='img'>
                    <img src={num} alt='' />
                </div>
                <div className='content'>
                    <h4>Numerical Reasoning</h4>
                    <p>Your answers to 6/10 of the Numerucal Reasoning questions have matched the requirements of a career in Business Managementt</p>
                </div>
            </div>
            <div className='carr-tab'>
                <div className='img'>
                    <img src={verb} alt='' />
                </div>
                <div className='content'>
                    <h4>Verbal Reasoning</h4>
                    <p>Your answers to 8/10 of the Verbal Reasoning questions have matched the requirements of a career in Verbal Reasoning</p>
                </div>
            </div>
        </div>
        <div className='jobdec'>
            <h4>Job Description :</h4>
            <p>Business Management is a profession for leading and supervising employees to ensure productivity efficiency of operations and providing direction on how best to handle different tasks while maintaining customer satisfaction. Business Managers help implement strategies that will help generate revenue or profitability.</p>
        </div>
        <div className='jobdec'>
            <h4>Duties :</h4>
            <p>
                <ul>
                    <li>Developing business management goals and objectives that tend to growth and prosperity</li>
                    <li>Designing and implementing business plans and strategies to promote the attainment of goals</li>
                    <li>Ensuring that the company has the adequate and suitable resources to complete its activities</li>
                    <li>Supervise the work of employees and provide feedback and counsel to improve efficiency and effectiveness</li>
                    <li>Maintain relationships with partners/vendors/suppliers</li>
                    <li>Gather, analyze and interpret external and internal data and write reports</li>
                    <li>Assess overall company performance against objectives</li>
                    <li>Represent the company in events, conferences etc.</li>
                </ul>
            </p>
        </div>
        <div className='jobdec'>
            <h4>Typical Employers :</h4>
            <p>
                <ul>
                    <li>Financial Consulting Firms</li>
                    <li>Technology Intergration Firms</li>
                    <li>Corporate Risk Auditors</li>
                    <li>Tax Advisory firms</li>
                    <li>Investment Banking</li>
                    <li>Corporate Law</li>
                </ul>
            </p>
        </div>
        <div className='jobdec'>
            <h4>Skills Required :</h4>
            <div className='skillset'>
                <p>Excellent Interpersonal Skills</p>
                <p>Problem Solving</p>
                <p>Excellent Communication</p>
                <p>Task Delegation</p>
                <p>Organisational and Leardership skills</p>
                <p>Understanding of Business Processes</p>
            </div>
            <Link to='/page5'>
                <p className='testOutSubmit'>Proceed</p>
            </Link>
        </div>
      </div>    
      
      <Footer />
    </div>
  )
}

export default page4
