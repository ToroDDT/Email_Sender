var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer")
let transporter = nodemailer.createTransport({
  service:"Outlook365",
  secure: false,
  auth: {
    user:"ddeltoro1999@outlook.com",
    pass: "Xmac1999@"
  }
})
let userEmailAddress = "love"
let Message = {
  from: "Davidddt1999@gmail.com", 
  to: `${userEmailAddress}`,
  subject: "Password Retrieval",
  html: `<!doctype html>
  <html>
    <head>
      <Meta charset="utf-8">
    </head>
    <body>
      <div> Test Project </div>
      <p> Hi ${userName} let's reset your password </p>
      <button> Reset Your Password </button>
      <p> If the above button des not workfor you copy and aste the follwing into your browswer's address bar. </p>
      <a href="${Link}"
    </body>
  </html>`
}

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
