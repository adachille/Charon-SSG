const express = require('express');
const path = require('path');
var app = express();
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000;
const nodemailer = require('nodemailer');

// Set up public/static stuff
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

// Set up main page
app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/public/index.html')));

// Set up contact stuff
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'charonssg@gmail.com',
         pass: process.env.CSSG_EMAIL_PW
     }
});
// Set up the route handler
app.post('/contact', function(req, res) {
  // setup email data with unicode symbols
  let mailOptions = {
    from: `"${req.body.name}" <${req.body.email}>`, // sender address
    to: `charonssg@gmail.com`, // list of receivers
    subject: `${req.body.subject}`, // Subject line
    html: `<h4>From: ${req.body.name}</h4>
      <h4>Email: ${req.body.email}</h4>
      <h4>Message:</h4>
      <p>${req.body.msg}</p>`, // html of email
  };

  transporter.sendMail(mailOptions, (error, info) => {
    // Add error status if not sent
    if (error) {
        return console.log(error);
    }
    // Preview only available when sending through an Ethereal account
  });
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
 
module.exports = app;