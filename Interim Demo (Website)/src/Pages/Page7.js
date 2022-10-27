import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './page7.css';
import help1 from '../Assets/helptab1.png';
import tfi from '../Assets/tfi.png';
import way from '../Assets/way.png';
import tud from '../Assets/tud.png';
import gdpr from '../Assets/gdpr.png';
import su from '../Assets/su.png';
import apply from '../Assets/apply.png';
import library from '../Assets/library.png';
import spad from '../Assets/spad.png';
import helpft1 from '../Assets/helpft1.png';
import { Link } from 'react-router-dom';

const page7 = () => {
  return (
    <div>
      <Header />
      <div className='p7-header'>
        <h3>TU059 MSc in Computer Science <br />(Data Science) in TU Dublin</h3>
      </div>
      <div className='container'>
        <div className='row'>
            <div className='col-md-8'>
                <p>Below is everything that might help you with selecting the relevant course!</p>
                <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Course Description
                            </button>
                        </h2>
                        </div>

                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                        The MSc in Computer Science (Data Science) course aims to produce graduates with the knowledge and skills to work with large amounts of raw data and extract meaningful insights from it.  
                        <br />Graduates are equipped with deep technical skills (in data management, data mining, probability and statistics, and machine learning), but also with the softer skills (in communications, research and problem solving) required to work effectively within organisations.
                        <br /> The Postgraduate Certificate in Data Science is a one-year part time course which aims to provide science, engineering and computing graduates an opportunity to upskill in the developing area of data science and machine learning.

                            <br />The course covers the key skills needed for an entry level position in data science, including modules in data wrangling, data mining, data visualisation, probability and statistical inference and machine learning. It is very practically focussed with students developing skills in the main tools, methods and techniques used in the domain.
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                            Course Content
                            </button>
                        </h2>
                        </div>

                        <div id="collapse2" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                        <h4 style={{ color: 'red' }}>Specialist Core Modules</h4>
                        Probability & Statistical Inference
                        <br/>Machine Learning
                        <br/>Working with Data
                        <br/>Data Management 
                        <br/>Data Mining
                        <br/>Data Visualisation
                        <p />
                        <h4 style={{ color: 'Green' }}>Critical Skills Core Modules</h4>
                        Research Writing & Scientific Literature
                        <br/>Research Methods and Proposal Writing
                        <br/>Research Project & Dissertation or a Team Project
                        <p />
                        <h4 style={{ color: 'Blue' }}>Option Modules</h4>
                        Geographic Information Systems
                        <br/>Universal Design
                        <br/>Programming for Big Data
                        <br/>Problem Solving, Communication and Innovation
                        <br/>Social Network Analysis
                        <br/>User Experience Design
                        <br/>Deep Learning
                        <br/>Speech & Audio Processing
                        <p />
                        <p /> Students can also take specialist core modules from the Advanced Software Development stream as option modules, subject to availability and schedules.
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="heading3">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                            Minimum Requirements
                            </button>
                        </h2>
                        </div>

                        <div id="collapse3" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                        The minimum admission requirements for entry to the programme are a B.Sc. (Honours) in Computer Science, Software Development, Mathematics or other suitably numerate discipline with computing as a significant component. The degree should be at the level of Honours 2.1 or better or at Honours 2.2 or better with at least 2 years of Software Development work experience. Applicants with other qualifications at Honours 2.1 or better level and Software Development experience may also be considered.
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
                            Clubs and societies
                            </button>
                        </h2>
                        </div>

                        <div id="collapse4" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                         Joining and participating in a society will provide you with lasting memories of college life. Active participation in societies gives you a great social outlet. So make the effort and join a society - you'll be glad you did.
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                            Course Reviews and Alumni Testimonials
                            </button>
                        </h2>
                        </div>

                        <div id="collapse5" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                        TBD with sentiment analysis
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                            Application Process
                            </button>
                        </h2>
                        </div>

                        <div id="collapse6" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                        <a href="https://www.tudublin.ie/study/international-students/how-to-apply/" target="_blank" rel="noopener noreferrer">Click here to view the Application process for TU Dublin</a>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                            Information for International Students
                            </button>
                        </h2>
                        </div>

                        <div id="collapse7" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                            <br />Our dedicated international office staff ensure that our international students are supported throughout their studies, so they can fully embrace university life in Dublin. With small class sizes, our students enjoy a close working relationship with their fellow students and academic supervisors.
                            <a href="https://www.tudublin.ie/study/international-students/" target="_blank" rel="noopener noreferrer">Click here for more information</a>
                            
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse8" aria-expanded="true" aria-controls="collapse8">
                            EU/Non-EU Fees
                            </button>
                        </h2>
                        </div>

                        <div id="collapse8" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                        TBD                        </div>
                        </div>
                    </div>                
                    
                 </div>   
            </div>
            <div className='col-md-4'>
                <h6 className='help-link'>Resources that <br />
                are helpful! <br />
                Just Click & Explore <br />↓ </h6>
                <div className='help-tab'>
                    <img src={help1} alt='' />
                   <h6> <a href="https://app.gather.town/app/u9qp9GgxXPsev6NM/ForkTheData" target="_blank" rel="noopener noreferrer">Uni Game Experience</a></h6>
                    <p>Click here to start exploring the university in a game which enables you to interact with all the elements in the campus</p>
                </div>
                <div className='help-tab'>
                    <img src={tfi} alt='' />
                    <h6> <a href="https://about.leapcard.ie/about/tfi-leap-card-types/student" target="_blank" rel="noopener noreferrer">Transport (Cost & How to)</a></h6>
                    <p>Click here to Explore more information about transport for students in the city!</p>
                </div>
                <div className='help-tab'>
                    <img src={way} alt='' />
                    <h6> <a href="https://www.tudublin.ie/explore/our-campuses/tu-dublin-digital-wayfinding/" target="_blank" rel="noopener noreferrer">Campus Map (wayfinder)</a></h6>
                    <p>Click here to get a 2d map for the campus. This will guide you find places on a map!</p>
                </div>
                <div className='help-tab'>
                    <img src={spad} alt='' />
                    <h6> <a href="https://www.tudublinstudentpad.ie/Accommodation" target="_blank" rel="noopener noreferrer">Students Accomodation Helper (Students Pad)</a></h6>
                    <p>Click here to get help with accomodation, Finding a new place can be hard, So lets explore.</p>
                </div>
            </div>
        </div>
        <h6>Additional Functionalities you might find useful :</h6>
        <div className='row mb-4'>
            <div className='col-md-4'>
                <div className='helpCard'>
                    <img src={helpft1} alt='' />
                    <p> <b><a  className='title' href="https://www.youtube.com/watch?v=zIqfXzSgjkU" target="_blank" rel="noopener noreferrer">Brightspace</a></b></p>
                    <p>Learn Lot of Stuff On Brightspace.
                        Assignments and Stuff</p>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='helpCard'>
                    <img src={tud} alt='' />
                    <p> <b><a  className='title' href="https://www.tudublin.ie/explore/our-campuses/" target="_blank" rel="noopener noreferrer">Explore our Campuses</a></b></p>
                    <p>TU Dublin has five campuses across the Dublin region
                         with our flagship campus at Grangegorman</p>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='helpCard'>
                    <img src={apply} alt='' />
                    <p> <b><a  className='title' href="https://www.tudublin.ie/study/international-students/how-to-apply/" target="_blank" rel="noopener noreferrer">How to apply?</a></b></p>
                    <p>This will help you to learn how to 
                        apply in the particular course.</p>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='helpCard'>
                    <img src={su} alt='' />
                    <p> <b><a  className='title' href="https://www.tudublinsu.ie/" target="_blank" rel="noopener noreferrer">Student Union</a></b></p>
                    <p>Connect with our students union 
                        They are great and will help you with your journey.</p>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='helpCard'>
                    <img src={gdpr} alt='' />
                    <p> <b><a  className='title' href="https://www.tudublin.ie/explore/gdpr/data-protection-policy/" target="_blank" rel="noopener noreferrer">Our Privacy Policy</a></b></p>
                    <p>Learn about the GDPR policies for our university</p>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='helpCard'>
                    <img src={library} alt='' />
                    <p> <b><a  className='title' href="https://www.tudublin.ie/library/" target="_blank" rel="noopener noreferrer">Our Libraries</a></b></p>
                    <p>Its all about learning! Come lets explore</p>
                </div>
            </div>
        </div>
        <Link to='/page8'>
            <p className='clickTonext'>Click here to go to next page</p>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default page7
