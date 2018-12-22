const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

var app = express();

if (process.env != null && process.env.PROD_MODE) {
  app.use('/', require('redirect-https')({
    body: '<!-- Hello Mr Developer! Please use HTTPS instead -->'
  }));
}

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => res.render('pages/index'));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
   
module.exports = app;