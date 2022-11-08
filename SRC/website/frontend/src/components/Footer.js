import React from 'react';

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer">
                <div className="container">
                    <div className="footer-columns">
                        <div className="single-footer-column">
                            <div className="footer-title"><img src="/images/logo.png" alt="logo" /></div>
                            <div className="title-attention"></div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="single-footer-column">
                            <div className="footer-title">Contact Us</div>
                            <div className="title-attention"></div>
                            <p className="mb-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <p><i className="fa fa-phone" aria-hidden="true"></i> <span>Phone:</span> +353 0899999999</p>
                            <p><i className="fa fa-envelope" aria-hidden="true"></i> <span>Email:</span> info@website.com</p>
                            <p><i className="fa fa-clock-o"></i> <span>Mon-Sun:</span> 9:00am - 6:00pm</p>
                        </div>
                        <div className="single-footer-column">
                            <div className="footer-title">Important Links</div>
                            <div className="title-attention"></div>
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