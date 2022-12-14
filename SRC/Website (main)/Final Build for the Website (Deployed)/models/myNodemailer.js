import nodemailer from 'nodemailer';

// Nodemailer
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'mail.thebootweb.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    // secure: false, // need to change for production
    auth: {
      user: 'no-reply@thebootweb.com', // generated ethereal user
      pass: 'mehul@12', // generated ethereal password
    },
    tls: {
    	rejectUnauthorized: false
    }
});

export default transporter;