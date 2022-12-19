import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer">
                <div className="container">
                    <div className="footer-columns">
                        <div className="single-footer-column">
                            <div className="footer-title"><img src="/images/logo.png" alt="logo" /></div>
                            <div className="title-attention"></div>
                            <p>UniLife is proud to be a part of transforming the lives of students looking to further their education. We know that choosing a course can be challenging and we aim to help all our users to make informed decisions on choosing their desired course. Shaping tomorrow starts today.</p>
                        </div>
                        <div className="single-footer-column">
                            <div className="footer-title">Contact Us</div>
                            <div className="title-attention"></div>
                            <p className="mb-20">We are dedicated to delivering the best experience to all our users. If you have any queries, please reach out to us and a member of our team will get back to you as soon as possible</p>
                            <p><i className="fa fa-envelope" aria-hidden="true"></i> <span>Email:</span> forkthedata@gmail.com</p>
                            <p><i className="fa fa-clock-o"></i> <span>Mon-Fri:</span> 9:00am - 6:00pm</p>
                        </div>
                        <div className="single-footer-column">
                            <div className="footer-title">Important Links</div>
                            <div className="title-attention"></div>
                            <p><a href="https://usi.ie/" target="_blank">Union of Students in Ireland</a></p>
                            <p><a href="https://www.internationalstudents.ie/" target="_blank">International Students</a></p>
                            <p><a href="https://www.cao.ie/index.php?page=studentresources" target="_blank">CAO Student Resources</a></p>
                            <p><Link to="/privacy">Privacy Policy</Link></p>
                        </div>
                    </div>
                    <div className="footer-border"></div>
                    <p className="copyright">© 2022 <strong>UniSimulation</strong>. All rights reserved.</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;