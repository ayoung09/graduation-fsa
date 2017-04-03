const {resolve} = require('path');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(1337, () => {
  console.log('The app is listening intently on port 1337');
});

app
  .use(require('volleyball'))
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())

  .use(express.static(resolve(__dirname, '..', 'public')))
  .use(express.static('./public/css/'))

  .use('/api', require('./api'))

  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))

  .use((err, req, res, next) => {
    console.log('Problem at the start');
    res.status(500).send(err);
    next();
  });

  module.exports = app;
