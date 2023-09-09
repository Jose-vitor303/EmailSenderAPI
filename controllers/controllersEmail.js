const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();


let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, 
    auth: {
      user: process.env.SMTP_MAIL, 
      pass: process.env.SMTP_PASSWORD, 
    },
  });
  

const sendEmail = expressAsyncHandler(async (req, res) => {

  const { email, subject, message } = req.body;


  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: process.env.SMTP_MAIL,
    subject: subject,
    text: message, 
    replyTo : email,
  };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
     
        } else {
          res.send(info)
        }
      });
});



module.exports = { sendEmail };