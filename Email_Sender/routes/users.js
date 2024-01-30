var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer")
const pug = require("pug")
const {pugEngine} = require("nodemailer-pug-engine");
const path = require('path')

const userName = "David"

let transporter = nodemailer.createTransport({
  service:"Outlook365",
  secure: false,
  auth: {
    user:"ddeltoro1999@outlook.com",
    pass: "Xmac1999@"
  }
})

const viewsPath = path.join(__dirname,'/views')

transporter.use('compile', pugEngine({
  templateDir: '/home/david/Documents/Express_Projects/Email_Sender/Email_Sender/views',
  pretty: true
}))

transporter.sendMail({
  to: 'Deltoro1999@icloud.com',
  template: 'email',
  subject: "Password Recovery",
  ctx: {
    userName
  }
})

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
