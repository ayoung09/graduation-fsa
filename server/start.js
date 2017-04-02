const path = require('path');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(1337, () => {
  console.log('The app is listening intently on port 1337');
});

app
  .use(require('volleball'))
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())

  .use(express.static(path.join(__dirname, 'public')))
  .use(express.static(path.join(__dirname, 'node_modules')))
  .use(express.static(path.join(__dirname, 'browser')))

  .use('/api', require('./api'))

  .use((err, req, res, next) => {
    console.log('Problem at the start');
    res.status(500).send(err);
    next();
  });

  module.exports = app;
