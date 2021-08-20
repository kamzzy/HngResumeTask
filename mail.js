const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const { callbackPromise } = require('nodemailer/lib/shared');


const auth = {
    auth:{
        api_key:'key-d4dbee003ff944d1e616fedc847cb5f8',
        domain:'sandboxe949b72d511f44649981d42cf90bbb5f.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'wonderexporters@gmail.com',
        subject: subject,
        text: text
    };
    
    transporter.sendMail(mailOptions, function(err, data) {
        if(err) {
            cb(err, null);
    
        } else {
            cb(null, data);
        }
    });

}
module.exports = sendMail;

