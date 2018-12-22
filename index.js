const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const redirectSSL = require('redirect-ssl')


var app = express();

// Redirects http requests to https in production evironment
app.use(redirectSSL)

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => res.render('pages/index'));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
 
module.exports = app;